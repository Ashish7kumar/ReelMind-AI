"use client"
import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider  } from 'next-themes'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '@/config/firebase.config'
import { AuthContext } from '@/context/auth.context'
import { api } from '@/convex/_generated/api'
import { useMutation } from 'convex/react'
import AuthContextType from '@/types/authContext.type'




const Provider = ({children}:{ children: React.ReactNode }) => {
  const [user,setUser]=useState<any>();
  const CreateUser=useMutation(api.user.CreateNewUser);
  useEffect(()=>{
   const unsubscribe=onAuthStateChanged(auth,async (user)=>{
   if(user)
   {
    setUser(user);
  const result=await CreateUser({
  name: user.displayName ?? "Anonymous",
  email: user.email ?? "no-email@example.com",
  pictureURL: user.photoURL ?? ""
})



   }
   })
   return ()=>unsubscribe()
  },[])
  return (
    
    <div className="min-h-screen bg-white text-	#6C5CE7">
      <AuthContext.Provider  value={{user}}>
     <NextThemesProvider
     attribute="class"
    defaultTheme="light"
    enableSystem
    disableTransitionOnChange 
    
     >
     {children}
     </NextThemesProvider> 
     </AuthContext.Provider>
    </div>

  )
}

export const useAuthContext = (): AuthContextType | null => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    console.log(context);
    throw new Error("no context given");
  }
  return context;
};
export default Provider
