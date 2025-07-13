"use client"
import React from 'react'
import { ThemeProvider as NextThemesProvider  } from 'next-themes'
const Provider = ({children}:{ children: React.ReactNode }) => {
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
