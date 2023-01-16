import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase' 
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4u-CjetrCENv9MuqR31Cdj68cI7I2WxE",
    authDomain: "fir-5129d.firebaseapp.com",
    projectId: "fir-5129d",
    storageBucket: "fir-5129d.appspot.com",
    messagingSenderId: "202223993576",
    appId: "1:202223993576:web:a7d909812ecac643debf5d",
    measurementId: "G-R4SD6LHJYK"
  };

  export default firebase.initializeApp(firebaseConfig)