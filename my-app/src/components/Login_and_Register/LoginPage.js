import React from 'react';
import Header from "./Header";
import FormLogin from "./FormLogin";
import {Link} from 'react-router-dom';
import {signInWithGoogle, signInWithFacebook} from "../../firebase";
import MainView from "../Main_Page/MainView";

const LoginPage = ({user, logged}) => {




    return (
        <>
        { user ? (<MainView logged={logged} user={user}/>) : (
        <div className="page">
            <Header/>
            <FormLogin title="Member Login"/>
            <div className="icons_box">
                <i className="fab fa-facebook-f"></i>
                {/*temporary unable to login via Facebook onClick={signInWithFacebook} */}
                {/*temporary unable to login via Google onClick={signInWithGoogle}  */}
                <i className="fab fa-google"></i>
            </div>
            <h2 className="register_link">Not a member? <span><Link to="/register">SignUp Now</Link></span></h2>
        </div>
            )}
            </>
    );
};

export default LoginPage;
