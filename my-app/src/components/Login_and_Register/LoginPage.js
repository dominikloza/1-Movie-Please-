import React, {useEffect, useState} from 'react';
import Header from "./Header";
import FormLogin from "./FormLogin";
import {Link} from 'react-router-dom';
import fire, {signInWithGoogle} from "../../firebase";
import MainView from "../Main_Page/MainView";

const LoginPage = ({user, name, logged}) => {


    return (
        <>
        { user ? (<MainView logged={logged} name={name}/>) : (
        <div className="page">
            <Header/>
            <FormLogin title="Member Login"/>
            <div className="icons_box">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-google" onClick={signInWithGoogle}></i>
            </div>
            <h2 className="register_link">Not a member? <span><Link to="/register">SignUp Now</Link></span></h2>
        </div>
            )}
            </>
    );
};

export default LoginPage;