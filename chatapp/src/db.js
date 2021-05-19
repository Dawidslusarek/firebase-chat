import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBnmnITtJSAzJ-Ol8wvex_Z54oxH_izcMI",
    authDomain: "firechatapp-e3573.firebaseapp.com",
    projectId: "firechatapp-e3573",
    storageBucket: "firechatapp-e3573.appspot.com",
    messagingSenderId: "263151173510",
    appId: "1:263151173510:web:cd7951ff05bf09ed1a7607"
}

const db = firebase.initializeApp(config);
export default db;