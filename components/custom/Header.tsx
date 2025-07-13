"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Authentication from './Authentication'
import { useAuthContext } from '@/app/themeProvider'
import Link from 'next/link'
const Header = () => {
  const {user}=useAuthContext();
  return (
    <div className='p-4 flex item-center justify-between

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
      <Button   className="bg-[#7C3AED] hover:bg-[#6b2edc] text-white"  >Get Started</Button>
       </Authentication>:
      <div className='flex items-center gap-3'>
        <Link href={'/dashboard'}>
          <Button>Dashboard</Button></Link>
          <Image src={user?.photoUrl} alt='Profile picture' width={40} height={40} className='rounded-full'/>
        </div>}
    </div>
    </div>
  )
}

export default Header
