import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
const Header = () => {
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
      <Button   className="bg-[#7C3AED] hover:bg-[#6b2edc] text-white"  >Get Started</Button>
    </div>
    </div>
  )
}

export default Header
