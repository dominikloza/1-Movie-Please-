import React from 'react';
import "../../scss/main.scss"
import logo from "../../resources/Logo_v2-01.png"
import avatar from "../../resources/anonim.jpg";
const Header = ({avatarStyle, logged, name}) => {


    return (
        <div className="header">
            <div className="container">
                <div className="header_box">
                    <img className="logo" src={logo} alt="logo"/>
                    { logged && <div className="avatar_box" style={avatarStyle}>
                            <h2 className="avatar_name">{name}</h2>
                            <div className="img_circle"><img src={avatar} alt=""/></div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;