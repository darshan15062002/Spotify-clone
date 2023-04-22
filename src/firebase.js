
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAPNXIb0WqbsusfE_AwE68z1HkJOzR7QHM",
    authDomain: "hackethon-podecast.firebaseapp.com",
    projectId: "hackethon-podecast",
    storageBucket: "hackethon-podecast.appspot.com",
    messagingSenderId: "1041153476189",
    appId: "1:1041153476189:web:e4e0df144e35b922346fb4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
