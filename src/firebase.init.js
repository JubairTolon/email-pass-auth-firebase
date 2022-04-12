// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqtMd4fIfmU8vYL03KFiKkUIQ5gKrP7xg",
    authDomain: "email-pass-auth-c1fe6.firebaseapp.com",
    projectId: "email-pass-auth-c1fe6",
    storageBucket: "email-pass-auth-c1fe6.appspot.com",
    messagingSenderId: "733110250811",
    appId: "1:733110250811:web:2a0c98e8e52ae2574d1b1e",
    measurementId: "G-YM131VBQXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;