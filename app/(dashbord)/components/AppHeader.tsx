"use client"
import { useAuthContext } from '@/app/themeProvider'
import Image from 'next/image'
import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const AppHeader = () => {
     const context=useAuthContext();
      if(context === null)
      {
        throw Error('No user context')
      }
      const {user}=context;
  return (
    <div className='p-3 flex justify-between items-center'>
        <SidebarTrigger/>
        <Image src={user?.photoURL || '/default_user.png'} alt='user logo' width={40} height={40} className='rounded-full'/>
    </div>
  )
}

export default AppHeader