import React, {useEffect, useState} from 'react';
import Header from "../Login_and_Register/Header";
import Footer from "./Footer";
import Button from "../Button";
import {Link} from "react-router-dom";
import fire, {db} from "../../firebase";

const MainView = ({logged, name}) => {


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

    return (
        <div className="main_page">
            <Header style={avatarStyle} logged={logged} name={name}/>
            <h2 className="page_text search_film">Let's choose
                Preferences of a Movie and Click on Button below</h2>
            <Button btnType="btn btn-primary-small" text="Find it out"/>
            <div className="film_box">
                <img src="" alt=""/>
                <div className="text_box">
                    <h2>Title</h2>
                    <p className="film_descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid
                        corporis, dignissimos dolor doloribus earum eos esse fugit in natus obcaecati officia omnis
                        quaerat quas quibusdam, repellat repudiandae sit voluptate!</p>
                    <div className="rate_scale">
                        <span className="rate_prec">72%</span> people recommendation
                    </div>
                    <button>Read More</button>
                </div>
            </div>
            <i className="fas fa-arrow-circle-left" style={styleArrow}
               onMouseEnter={aside === "clicked" ? undefined : () => setAside(true)}
               onClick={aside === "clicked" ? () => setAside(undefined) : () => setAside("clicked")}></i>
            <nav style={styleNav}>
                <Link className="nav_link">Account</Link>
                <Link className="nav_link">History</Link>
                <Link className="nav_link">Friends</Link>
                <button className="nav_link" onClick={logout}>Sign Out</button>
            </nav>
            <div className="aside_nav" style={styleCircle}
                 onMouseLeave={aside === "clicked" ? undefined : () => setAside(false)}></div>
            <Footer/>
        </div>
    );
};

export default MainView;