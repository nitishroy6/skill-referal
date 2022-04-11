import firebase  from "firebase/app";
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyB8HFfWxq7yJRGm6gprJmsavOdEZrLWrnw",
    authDomain: "hustler-aac14.firebaseapp.com",
    databaseURL: "https://hustler-aac14.firebaseio.com",
    projectId: "hustler-aac14",
    storageBucket: "hustler-aac14.appspot.com",
    messagingSenderId: "1008635250060",
    appId: "1:1008635250060:web:177c784b0bc6667e67c2a9",
    measurementId: "G-P2Q5CXD70W"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
