import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth"
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
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
    firebase.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user)
    }).catch((error) => {
        console.log(error.message)
    })
}
export {db};
export default fire;