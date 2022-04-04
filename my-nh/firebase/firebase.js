import firebase from "firebase/app";

import "firebase/storage";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYXCRx7sE7GmQ-9rHTRKRLQtmVQgcU2AI",
  authDomain: "my-neighbourhood-bc2a3.firebaseapp.com",
  projectId: "my-neighbourhood-bc2a3",
  storageBucket: "my-neighbourhood-bc2a3.appspot.com",
  messagingSenderId: "1064577611520",
  appId: "1:1064577611520:web:e36a8c74b99a2015d125e5",
  measurementId: "G-T3SQ96VCE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const storage = getStorage(firebase)



export default storage