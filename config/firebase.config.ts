// Import the functions you need from the SDKs you need
"use clinet"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "reelmind-ai.firebaseapp.com",
  projectId: "reelmind-ai",
  storageBucket: "reelmind-ai.firebasestorage.app",
  messagingSenderId: "188497296874",
  appId: "1:188497296874:web:22d345981363e0b55c4693",
  measurementId: "G-9091PDB1C3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);