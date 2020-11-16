import React from 'react';
import LoginPage from "../Login_and_Register/LoginPage";
import RegisterPage from "../Login_and_Register/RegisterPage";
import Preferences from "../Login_and_Register/Preferences";
import HashRouter from "react-router-dom/modules/HashRouter";
import Switch from "react-router-dom";
import Route from "react-router-dom";
import Header from "../Login_and_Register/Header";
import Footer from "./Footer";
import MainView from "./MainView";

const MainPage = ({user}) => {

    return (
        <>
            <Header page={user}/>
            <div className="container">
                <HashRouter>
                    <Switch>
                        <Route path='/main' component={MainView}/>
                    </Switch>
                </HashRouter>
                <Footer/>
            </div>
        </>
    );
};

export default MainPage;