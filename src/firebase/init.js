import firebase from 'firebase';
require('firebase/firestore')

var config = {
    apiKey: "AIzaSyAPcsZm8H9yp-R0lLq52uVY02QV75tNwaI",
    authDomain: "vue-chat-55581.firebaseapp.com",
    databaseURL: "https://vue-chat-55581.firebaseio.com",
    projectId: "vue-chat-55581",
    storageBucket: "vue-chat-55581.appspot.com",
    messagingSenderId: "479965993462",
    appId: "1:479965993462:web:b7119062538fb6dcb2cfd7",
    measurementId: "G-YXWTLF71LJ"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore()
 


export default db