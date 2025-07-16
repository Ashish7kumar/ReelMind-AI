"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Authentication from './Authentication'
import { useAuthContext } from '@/app/themeProvider'
import Link from 'next/link'
const Header = () => {
  
  const context=useAuthContext();
  if(context === null)
  {
    throw Error('No user context')
  }
  const {user}=context;
  return (
    <div className='p-4 flex items-center justify-between

    '>
    <div className='flex items-center gap-3'>
      <Image src={'/logo3.png'} alt="logo" width={60} height={60}/>
   <h2 className="text-3xl font-extrabold tracking-tight text-[#333333] font-sans">
  ReelMind <span className="text-purple-500">AI</span>
</h2>

    </div>
    <div>
      { !user ?
      <Authentication>
      <Button
  className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-xl text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 cursor-pointer"
>
  Get Started
</Button>

       </Authentication>:
      <div className='flex items-center gap-3'>
        <Link href={'/dashboard'}>
          <Button className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-xl text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 cursor-pointer"
>Dashboard</Button></Link>
          
          <Image src={user?.pictureURL || '/default_user.png'} alt='Profile picture' width={40} height={40} className='rounded-full'/>
        </div>}
    </div>
    </div>
  )
}

export default Header
