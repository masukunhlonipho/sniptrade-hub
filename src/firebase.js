// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvULJrHYlDRgnF3Oqgeku7jam1WDAqIQE",
  authDomain: "sniptrade-hub-5cea3.firebaseapp.com",
  projectId: "sniptrade-hub-5cea3",
  storageBucket: "sniptrade-hub-5cea3.appspot.com",
  messagingSenderId: "1003885430779",
  appId: "1:1003885430779:web:42d53590cde908b860ed5e",
  measurementId: "G-DMGZ5P2MVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Firebase Authentication
export const firestore = getFirestore(app); // Firestore Database
