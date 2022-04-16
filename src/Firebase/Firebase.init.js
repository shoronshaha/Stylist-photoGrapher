// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3DrVeAYq1TKfjNQMhrlLouDEmmYVmwBc",
    authDomain: "stylist-photographer-services.firebaseapp.com",
    projectId: "stylist-photographer-services",
    storageBucket: "stylist-photographer-services.appspot.com",
    messagingSenderId: "505854897766",
    appId: "1:505854897766:web:4c6636f20dd05340b3c7a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;