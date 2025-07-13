import React from 'react'
import { Button } from '../ui/button'
const Hero = () => {
  return (
  <div className="p-10 flex flex-col items-center justify-center text-center md:px-20 lg:px-36 xl:px-48">
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
    Transform <span className="whitespace-nowrap">Ideas into</span><br />
    <span className="mt-2 inline-block">Viral Reels with AI</span>
  </h2>
  <p className="mt-6 max-w-xl text-gray-600 text-base sm:text-lg">
    Use the power of AI to generate engaging, viral short-form videos effortlessly — from concept to creation in seconds.
  </p>
  <div className='mt-7 gap-8 flex'>
    <Button size="lg" variant="secondary">Explore</Button>
      <Button  size="lg" className="bg-[#7C3AED] hover:bg-[#6b2edc] text-white">Start Creating</Button>
  </div>
</div>

  )
}

export default Hero
