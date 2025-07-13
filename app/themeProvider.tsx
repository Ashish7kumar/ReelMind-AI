"use client"
import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider  } from 'next-themes'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '@/config/firebase.config'
import { AuthContext } from '@/context/auth.context'
const Provider = ({children}:{ children: React.ReactNode }) => {
  const [user,setUser]=useState<any>();
  useEffect(()=>{
   const unsubscribe=onAuthStateChanged(auth,(user)=>{
   if(user)
   {
    setUser(user);
   }
   })
   return ()=>unsubscribe()
  },[])
  return (
    <div className="min-h-screen bg-white text-	#6C5CE7">
      <AuthContext.Provider  value={{user}}>
     <NextThemesProvider
     attribute="class"
    defaultTheme="lig"
    enableSystem
    disableTransitionOnChange 
    
     >
     {children}
     </NextThemesProvider> 
     </AuthContext.Provider>
    </div>
  )
}

export const useAuthContext=():any=>{
  const context=useContext(AuthContext);
  return context;
}
export default Provider
