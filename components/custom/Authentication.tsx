"use client"
import React, { ReactNode } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '@/config/firebase.config';


const Authentication = ({ children }: { children: ReactNode }) => {
  const provider = new GoogleAuthProvider();

  const onClickForSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
        
        }
        const user = result.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error("Sign in error:", errorCode, errorMessage, email, credential);
      });
  };

  return (
    <div onClick={onClickForSignIn}>
      {children}
    </div>
  );
};

export default Authentication;
