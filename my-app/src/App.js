import logo from './logo.svg';
import React, {useState} from "react";
import './scss/main.scss';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import LoginPage from "./components/Login_and_Register/LoginPage";
import RegisterPage from "./components/Login_and_Register/RegisterPage";
import Preferences from "./components/Login_and_Register/Preferences";
import MainView from "./components/Main_Page/MainView";



function App() {

    const[name,setName] = useState("");



    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={LoginPage}/>
                <Route path='/register' render={() => <RegisterPage setName={setName}/>}/>
                <Route path='/preferences' render={() => <Preferences name={name}/>}/>
                <Route path='/:user' component={MainView}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
