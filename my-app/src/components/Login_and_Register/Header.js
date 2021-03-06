import React from 'react';
import "../../scss/main.scss"
import logo from "../../resources/Logo-01.png"
import {Link} from "react-router-dom";
import avatar from "../../resources/anonim.jpg";

const Header = ({avatarStyle, logged, user}) => {

    return (
        <div className="header">
            <div className="container">
                <div className="header_box">
                    <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
                    { logged && <div className="avatar_box" style={avatarStyle}>
                            <h2 className="avatar_name">{user.email}</h2>
                            <div className="img_circle"><img src={avatar} alt=""/></div>
                        </div>
                    }
                </div>
            </div>
            <div className="header_line"></div>
        </div>
    );
};

export default Header;
