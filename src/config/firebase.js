// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyDKIZ1z5X231nw1twZJfAbqEpQ2sPQv-Fk",
    authDomain: "boat-5d834.firebaseapp.com",
    projectId: "boat-5d834",
    storageBucket: "boat-5d834.appspot.com",
    messagingSenderId: "773287764436",
    appId: "1:773287764436:web:90ff1c5a73b16a7a4a7641"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)