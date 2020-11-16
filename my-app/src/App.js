import logo from './logo.svg';
import React, {useEffect, useState} from "react";
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
import fire, {db} from "./firebase";
import SearchFilm from "./components/Main_Page/SearchFilm";



function App() {

    const [logged, setLogged] =useState(false);
    const [user,setUser] = useState({});
    const[name,setName] = useState("");



    const authListener = () => {

        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setLogged(true);
                let docRef = db.collection("users").doc("3niiL3y8vPf98tJGMZGFIz5JCQ53");
                docRef.get().then(function(doc) {
                    if (doc.exists) {
                        console.log(user);
                        setName(docRef.name);
                        console.log(name);
                    } else {
                        console.log("No such document!");
                    }
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
            } else {
                setUser(null);
            }
        });
    }



    useEffect(() => {
        authListener();
    },[])

    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' render={() => <LoginPage user={user} name={name} logged={logged}/>}/>
                <Route path='/register' render={() => <RegisterPage/>}/>
                <Route path='/preferences' render={() => <Preferences/>}/>
                <Route path='/searchFilm' render={() => <SearchFilm logged={logged}/>}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
