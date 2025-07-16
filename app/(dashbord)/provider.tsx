"use client"
import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/(dashbord)/components/AppSidebar"
import AppHeader from './components/AppHeader'
import { useAuthContext } from '../themeProvider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'
const DasboardProvider = ({children}:{children:React.ReactNode}) => {
  const router=useRouter();
  const context=useAuthContext(); 
  if(context === null)
  {
    throw Error('No user context')
  }
  const {user}=context;
 
  
  useEffect(() => {
    if (!user) {
      redirect('/')   
    }
  }, [user, router])


  if (!user) return null
  return (
    <SidebarProvider>

      <AppSidebar/>
      <div className='w-full'><AppHeader/>
        {children}</div>
    
    
    </SidebarProvider>
  )
}

export default DasboardProvider