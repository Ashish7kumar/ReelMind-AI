"use client"
import React, { useEffect } from 'react'
import { ThemeProvider as NextThemesProvider  } from 'next-themes'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '@/config/firebase.config'
const Provider = ({children}:{ children: React.ReactNode }) => {
  useEffect(()=>{
   const unsubscribe=onAuthStateChanged(auth,(user)=>{
   if(!user)
   {
    
   }
   })
   return ()=>unsubscribe()
  },[])
  return (
    <div className="min-h-screen bg-white text-	#6C5CE7">
     <NextThemesProvider
     attribute="class"
    defaultTheme="lig"
    enableSystem
    disableTransitionOnChange 
    
     >
     {children}
     </NextThemesProvider> 
    </div>
  )
}

export default Provider
