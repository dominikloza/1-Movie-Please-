import React, {useEffect, useState} from 'react';
import Header from "../Login_and_Register/Header";
import Footer from "./Footer";
import Button from "../Button";
import {Link, useHistory} from "react-router-dom";
import fire, {db} from "../../firebase";
import {API_KEY, API_URL} from "../../APIconfing";
import poster from '../../resources/poster.png'
import userEvent from "@testing-library/user-event";

const SearchFilm = ({logged, userData, movie, setMovie}) => {


        let styleCircle = {}
        let styleArrow = {}
        let styleNav = {}
        let avatarStyle = {}

        const [aside, setAside] = useState(false);

        if (aside === "clicked") {
            styleCircle = {
                transition: "0.5s",
                right: "-800px"
            }
            styleArrow = {
                transition: "0.5s",
                right: "240px",
                top: "70%",
                transform: "rotate(180deg)",
                fontSize: "55px"
            }
            styleNav = {
                transition: "0.5s",
                right: "180px"
            }

            avatarStyle = {
                transition: "0.5s",
                color: "#fff",
                position: "relative",
                zIndex: "3"
            }

        } else if (aside === true) {
            styleCircle = {
                transition: "0.5s",
                right: "-1330px"
            }
            styleArrow = {
                transition: "0.5s",
                right: "40px"
            }
        } else if (aside === false) {
            styleCircle = undefined;
            styleArrow = undefined;
        }

        let history = useHistory();

        const logout = () => {
            fire.auth().signOut().then(function () {
                history.push("/")
            }).catch(function (error) {
                console.log(error)
            });
        }

        let movieCat;
        let catNum;
        let listMovies;
        let numPages;
        let numPageMovies;
        let movieID;
        let lengthPage;
        let isSearched;
        let category;
        let page;
        let filmNum;

        const handleSearch = () => {
            fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=bbef4d3837dce662da7cd81c33cc86ea&language=en-US`, {
                method: 'GET'
            })
                .then(response => {
                    if (response.ok === false) {
                        throw new Error("Błąd sieci!");
                    } else {
                        return response.json();
                    }
                })
                .then(data => {
                    movieCat = data;
                    let tempArr = movieCat.genres.filter(el => userData.preferences.includes(el.name))
                    console.log(tempArr)
                    category = Math.floor(Math.random() * tempArr.length);
                    console.log(category)
                    catNum = tempArr[category].id;

                    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bbef4d3837dce662da7cd81c33cc86ea&language=pl-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${catNum}`, {
                        method: 'GET'
                    })
                })
                .then(response => {
                    if (response.ok === false) {
                        throw new Error("Błąd sieci!");
                    } else {
                        return response.json();
                    }
                })
                .then(data => {
                    listMovies = data;
                    numPages = listMovies.total_pages;
                    page = Math.floor(Math.random() * (numPages)) + 1;

                    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bbef4d3837dce662da7cd81c33cc86ea&language=pl-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${catNum}`, {
                        method: 'GET'
                    })
                })
                .then(response => {
                    if (response.ok === false) {
                        throw new Error("Błąd sieci!");
                    } else {
                        return response.json();
                    }
                })
                .then(data => {
                    numPageMovies = data;
                    lengthPage = numPageMovies.results.length;
                    filmNum = Math.floor(Math.random() * (lengthPage));
                    movieID = numPageMovies.results[filmNum].id;

                    return fetch(` https://api.themoviedb.org/3/movie/${movieID}?api_key=bbef4d3837dce662da7cd81c33cc86ea&language=en-US`, {
                        method: 'GET'
                    })
                })
                .then(response => {
                    if (response.ok === false) {
                        throw new Error("Błąd sieci!");
                    } else {
                        return response.json();
                    }
                })
                .then(data => {
                    setMovie(data);
                    isSearched = true;
                })
                .catch(err => console.log(err));
        };



        return (
            <div className="main_page">
                <Header style={avatarStyle} logged={logged} userData={userData}/>
                <h2 className="page_text search_film">Let's choose
                    Preferences of a Movie and Click on Button below</h2>
                <div className="btn_box">
                    <button onClick={handleSearch} type="submit" className="btn btn-primary-small">Find a Movie</button>
                </div>
                {movie &&
                <div className="film_box">
                    <img src={movie.poster_path === null ? poster :`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                    <div className="text_box">
                        <h2>{movie.title}</h2>
                        <h3><span className="original_title">({movie.original_title})</span>({movie.release_date.slice(0,4)})</h3>
                        <div className="categories">
                            {
                                movie.genres.map((el) => {
                                    return (
                                        <span className="category">{el.name}</span>
                                    )
                                })
                            }
                        </div>
                        <p className="film_descr">
                            {movie.title.length > 35 ? movie.overview.slice(0, 150) + "..." : movie.overview.slice(0, 200) + "..."}
                        </p>
                        <div className="rate_scale">
                        </div>
                        <Link to="/fullFilmDescription"><button>Read More</button></Link>
                    </div>
                </div>
                }
                <i className="fas fa-arrow-circle-left" style={styleArrow}
                   onMouseEnter={aside === "clicked" ? undefined : () => setAside(true)}
                   onClick={aside === "clicked" ? () => setAside(undefined) : () => setAside("clicked")}></i>
                <nav style={styleNav}>
                    <Link className="nav_link">Account</Link>
                    <Link to="/preferences" className="nav_link">Preferences</Link>
                    <Link className="nav_link">Friends</Link>
                    <button className="nav_link" onClick={logout}>Sign Out</button>
                </nav>
                <div className="aside_nav" style={styleCircle}
                     onMouseLeave={aside === "clicked" ? undefined : () => setAside(false)}></div>
                <Footer/>
            </div>
        );
    }
;

export default SearchFilm;