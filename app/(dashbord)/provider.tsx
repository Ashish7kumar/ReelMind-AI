"use client"
import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/(dashbord)/components/AppSidebar"
import AppHeader from './components/AppHeader'
const DasboardProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <SidebarProvider>

      <AppSidebar/>
      <div className='w-full'><AppHeader/>
        {children}</div>
    
    
    </SidebarProvider>
  )
}

export default DasboardProvider