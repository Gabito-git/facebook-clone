import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyACBKYahEk74jYAng0qsSDFOw-0jmX3KRU",
    authDomain: "facebook-clone-e2c0d.firebaseapp.com",
    projectId: "facebook-clone-e2c0d",
    storageBucket: "facebook-clone-e2c0d.appspot.com",
    messagingSenderId: "685601428829",
    appId: "1:685601428829:web:976c2e165a53cfb74bc4b4"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    provider,
    firebase
}
  