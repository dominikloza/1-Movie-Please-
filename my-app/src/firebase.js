import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDThjQPB6xjAwcsc4YyMasDyIi0rlM-wC0",
    authDomain: "one-movie-please.firebaseapp.com",
    databaseURL: "https://one-movie-please.firebaseio.com",
    projectId: "one-movie-please",
    storageBucket: "one-movie-please.appspot.com",
    messagingSenderId: "722128231197",
    appId: "1:722128231197:web:0a2afe4be1c35a43cedff4",
    measurementId: "G-6WQHHJVZ73"
};
const fire = firebase.initializeApp(firebaseConfig);
firebase.auth();
firebase.analytics();
export default fire;