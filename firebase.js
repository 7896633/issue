// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACqvvDLYSPfhd9mhiGMX7ET1S-KiAzGpc",
    authDomain: "netflix-yt-61748.firebaseapp.com",
    projectId: "netflix-yt-61748",
    storageBucket: "netflix-yt-61748.appspot.com",
    messagingSenderId: "203506229996",
    appId: "1:203506229996:web:3bab6c1e7ee43ba3fa7bc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
const db=getFirestore(app)

export {auth,provider,db}