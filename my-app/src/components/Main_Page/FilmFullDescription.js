import React, {useEffect, useState} from 'react';
import Header from "../Login_and_Register/Header";
import Footer from "./Footer";
import Button from "../Button";
import {Link} from "react-router-dom";
import fire, {db} from "../../firebase";
import {API_KEY, API_URL} from "../../APIconfing";
import poster from '../../resources/poster.png'
import userEvent from "@testing-library/user-event";

const FullFilmDescription = ({logged, userData, movie}) => {


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


        const logout = () => {
            fire.auth().signOut().then(function () {
            }).catch(function (error) {
                console.log(error)
            });
        }



        const [IMDB, setIMDB] = useState(null);

        useEffect(() => {
            fetch(`https://imdb8.p.rapidapi.com/title/get-ratings?tconst=${movie.imdb_id}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "b9164552a0msh228595629054f9fp13f642jsnc2f1e533de4e",
                    "x-rapidapi-host": "imdb8.p.rapidapi.com"
                }
            })
                .then(response => {
                    if (response.ok === false) {
                        throw new Error("Błąd sieci!");
                    } else {
                        return response.json();
                    }
                })
                .then(data => {
                    setIMDB(data.rating);
                })
        }, [])


        return (
            <div className="main_page">
                <Header style={avatarStyle} logged={logged} userData={userData}/>
                {IMDB &&
                <div className="container">
                    <div className="film_box full"
                         style={{backGroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`}}>
                        <img
                            src={movie.poster_path === null ? poster : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt=""/>
                        <div className="text_box">
                            <h2>{movie.title}</h2>
                            <h3 className="original_title">
                                {movie.release_date} ({movie.production_countries[0].name}) <span>&#8226;</span> {movie.original_title}
                            </h3>
                            <h3 className="movie_duration">{(movie.runtime / 60).toFixed(0) !== 0 ? (movie.runtime / 60).toFixed(0) + "h" : null} {movie.runtime % 60}min</h3>
                            <div className="categories">
                                {
                                    movie.genres.map((el) => {
                                        return (
                                            <span className="category">{el.name}</span>
                                        )
                                    })
                                }

                            </div>
                            <div className="imdb_rate">
                                <i className="fab fa-imdb"></i> rate: {IMDB}/10
                            </div>
                            <h3 className="descr_title">Film description</h3>
                            <p className="film_descr">
                                {movie.overview}
                            </p>


                            <h3 className="director"></h3>
                            <h3 className="writer"></h3>
                            <div className="rate_scale">
                            </div>
                            <Link to="/searchFilm"><button>Go Back</button></Link>
                        </div>
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
                    <Link to='/'><button className="nav_link" onClick={logout}>Sign Out</button></Link>
                </nav>
                <div className="aside_nav" style={styleCircle}
                     onMouseLeave={aside === "clicked" ? undefined : () => setAside(false)}></div>
                <Footer/>
            </div>
        );
    }
;

export default FullFilmDescription;