import React from 'react';
import Header from "./Header";
import FormLogin from "./FormLogin";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,

} from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="page">
            <Header/>
            <FormLogin title="Member Login"/>
            <div className="icons_box">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-google"></i>
            </div>
            <h2 className="register_link">Not a member? <span><Link to="/register">SignUp Now</Link></span></h2>
        </div>
    );
};

export default LoginPage;