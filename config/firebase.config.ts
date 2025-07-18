// Import the functions you need from the SDKs you need
"use client"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  projectId: "reelmind-ai",
  storageBucket: "reelmind-ai.firebasestorage.app",
  messagingSenderId: "188497296874",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-9091PDB1C3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);