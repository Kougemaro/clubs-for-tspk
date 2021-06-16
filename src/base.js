import firebase from 'firebase';
import 'firebase/database';
import 'firebase/app';


export const base = firebase.initializeApp({
    apiKey: "AIzaSyDd7dcWQFxwEG91D7cWPzc2iMc49mmkdlM",
    authDomain: "clubs-tspk.firebaseapp.com",
    databaseURL: "https://clubs-tspk-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "clubs-tspk",
    storageBucket: "clubs-tspk.appspot.com",
    messagingSenderId: "501534920487",
    appId: "1:501534920487:web:7c71b862e14d6d6c6de302"
});
export default firebase;