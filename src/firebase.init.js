// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbB7MDZacwp-7mcR5U5ShIwCjFQJK0bdg",
    authDomain: "broker-house-d5d6c.firebaseapp.com",
    projectId: "broker-house-d5d6c",
    storageBucket: "broker-house-d5d6c.appspot.com",
    messagingSenderId: "1088834804070",
    appId: "1:1088834804070:web:be6772e9d9f64b3f6110a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;