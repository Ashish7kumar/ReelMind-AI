"use client"
import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/(dashbord)/components/AppSidebar"
import AppHeader from './components/AppHeader'
import { useAuthContext } from '../themeProvider'
import { Toaster } from 'react-hot-toast'
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
       <Toaster position="top-center" reverseOrder={false} />
      <div className='w-full'><AppHeader/>
      <div className='p-10' >
        {children}</div></div>
    
    
    </SidebarProvider>
  )
}

export default DasboardProvider