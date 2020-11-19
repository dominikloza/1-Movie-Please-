import React, {useEffect, useState} from 'react';
import Header from "../Login_and_Register/Header";
import Footer from "./Footer";
import Button from "../Button";
import {Link} from "react-router-dom";
import fire, {db} from "../../firebase";

const MainView = ({logged, userData}) => {



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
        fire.auth().signOut().then(function() {
        }).catch(function(error) {
            console.log(error)
        });
    }

    return (
        <div className="main_page">
            <Header style={avatarStyle} logged={logged} userData={userData}/>
            <h1 className="page_title">Hello , {userData.name}</h1>
            <h2 className="page_text">What are You Going to Watch Today ?</h2>
            <Link to="/searchFilm"><Button btnType="btn btn-primary-small" text="Find it out"/></Link>
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
};

export default MainView;