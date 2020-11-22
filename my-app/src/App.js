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
import FullFilmDescription from "./components/Main_Page/FilmFullDescription";



function App() {

    const [logged, setLogged] =useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [user,setUser] = useState({});
    const [userData, setUserData] = useState({});
    const [movie, setMovie] = useState(null);
    const [registerData, setRegisterData] = useState({
        fullName: "",
        password: "",
        email: ""
    });
    let name;



    const authListener = () => {

        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setLogged(true);
                let docRef = db.collection("users").doc(user.email);
                docRef.get().then(function(doc) {
                    db.collection("users").doc(user.email)
                        .onSnapshot(function(doc) {
                            if (doc.exists) {
                                setUserData(doc.data());
                            } else {
                                console.log("No such document!");
                            }
                        })
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
                <Route exact path='/' render={() => <LoginPage user={user} userData={userData} logged={logged} /> }/>
                <Route path='/register' render={() => <RegisterPage setRegisterData={setRegisterData}/>}/>
                <Route path='/preferences' render={() => <Preferences registerData={registerData} user={user} userData={userData}/>}/>
                <Route path='/searchFilm' render={() => <SearchFilm logged={logged} userData={userData} movie={movie} setMovie={setMovie}/>}/>
                <Route path='/fullFilmDescription' render={() => <FullFilmDescription logged={logged} userData={userData} movie={movie}/>}/>

            </Switch>
        </HashRouter>
    );
}

export default App;
