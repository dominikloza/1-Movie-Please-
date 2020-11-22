import React, {useEffect, useState} from 'react';
import Header from "./Header";
import fire, {db} from "../../firebase";
import {useHistory} from "react-router-dom";

const Preferences = ({registerData, user, userData}) => {


    const [pref, setPref] = useState([
        {
            name: "Action",
            isClicked: false
        },
        {
            name: "Comedy",
            isClicked: false
        },
        {
            name: "Adventure",
            isClicked: false
        },
        {
            name: "Animation",
            isClicked: false
        },
        {
            name: "Horror",
            isClicked: false
        },
        {
            name: "Crime",
            isClicked: false
        },
        {
            name: "Documentary",
            isClicked: false
        },
        {
            name: "Family",
            isClicked: false
        },
        {
            name: "Fantasy",
            isClicked: false
        },
        {
            name: "History",
            isClicked: false
        },
        {
            name: "Music",
            isClicked: false
        },
        {
            name: "Romance",
            isClicked: false
        },
        {
            name: "Mystery",
            isClicked: false
        },
        {
            name: "Science Fiction",
            isClicked: false
        },
        {
            name: "TV Movie",
            isClicked: false
        },
        {
            name: "Thriller",
            isClicked: false
        },
        {
            name: "War",
            isClicked: false
        },
        {
            name: "Western",
            isClicked: false
        }
    ])


    const handleClick = (index) => {
        let items = [...pref];
        let item = {...items[index]};
        item.isClicked = !item.isClicked;
        items[index] = item;
        setPref([...items]);
    }

    const [userName, setUserName] = useState("");
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        let tempArr = [...pref];
        let newArr = tempArr.filter((el) => el.isClicked === true)
        let arr = [];
        newArr.forEach((el) => {
            arr.push(el.name);
        })
        console.log(newArr);
        console.log(arr);

        if (newArr.length !== 0) {
            if (user === null) {
                fire.auth().createUserWithEmailAndPassword(registerData.email, registerData.password).then((u) => {
                }).then(() => {
                    console.log("Zarejestrowano")
                })
            }
            if (user) {
                db.collection("users").doc(user.email).set({
                    name: userData.name,
                    preferences: [...arr]
                })
                    .then(function () {
                        history.push("/")
                        console.log("Document successfully written!");
                    })
                    .catch(function (error) {
                        console.error("Error writing document: ", error);
                    })
            } else {
                db.collection("users").doc(registerData.email).set({
                    name: registerData.fullName,
                    preferences: [...arr]
                })
                    .then(function () {
                        history.push("/")
                        console.log("Document successfully written!");
                    })
                    .catch(function (error) {
                        console.error("Error writing document: ", error);
                    })
            }
        }
    }

    const styleTrue = {
        backgroundColor: "#16BFFD",
        color: "#fff",
        transition: "0.5s"
    }

    return (
        <div className="page">
            <Header/>
            <div className="container">
                <div className="preferences_box">
                    <h1>Hello</h1>
                    <h3>Tell Us more About You</h3>
                    <h2>Which movie's categories do you prefer?</h2>
                    <div className="category_box">
                        {
                            pref.map((el, index) => {
                                return (
                                    <div className="category" onClick={() => handleClick(index)}
                                         style={pref[index].isClicked ? styleTrue : undefined}>{el.name}</div>
                                )
                            })
                        }
                    </div>
                    <form>
                        <div className="btn_box">
                            <button type="submit" onClick={handleSubmit} className="btn-primary-small btn">Done</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Preferences;