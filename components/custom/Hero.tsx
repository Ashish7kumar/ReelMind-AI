import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Authentication from './Authentication'
const Hero = () => {
  return (
  <div className="p-10 flex flex-col items-center justify-center text-center md:px-20 lg:px-36 xl:px-48">
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-purple-700 to-violet-400 bg-clip-text text-transparent drop-shadow-sm">
    Transform <span className="whitespace-nowrap">Ideas into</span><br />
    <span className="mt-2 inline-block">Viral Reels with AI</span>
  </h2>
  <p className="mt-6 max-w-xl text-gray-600 text-base sm:text-lg">
    Use the power of AI to generate engaging, viral short-form videos effortlessly — from concept to creation in seconds.
  </p>
  <div className='mt-7 gap-8 flex'>
<Button
  size="lg"
  variant="secondary"
  className="hover:shadow-lg transition-shadow duration-300"
>
  Explore
</Button>

       <Authentication>
      <Button  size="lg" className="bg-[#7C3AED] hover:bg-[#6b2edc] text-white">Start Creating</Button>
      </Authentication>
  </div>
<div className="relative pt-10 max-h-[800px] overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
  <Image 
    src="/landing.png" 
    alt="AI Generated Art Showcase"  
    width={1500}
    height={2500}
    className="w-full h-auto object-contain"
  />
</div>



</div>

  )
}

export default Hero
