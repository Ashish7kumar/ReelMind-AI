"use client"
import React from 'react'
import { ThemeProvider as NextThemesProvider  } from 'next-themes'
const Provider = ({children}:{ children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
     <NextThemesProvider
     attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange 
    
     >
     {children}
     </NextThemesProvider> 
    </div>
  )
}

export default Provider
