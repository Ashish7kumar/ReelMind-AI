import React, { useState } from 'react'
const options = [
  {
    name: 'Solaris',
    style: 'text-yellow-400 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg'
  },
  {
    name: 'Moonlight',
    style: 'text-white text-3xl font-bold italic drop-shadow-lg px-3 py-1 rounded-lg'
  },
  {
    name: 'Evergreen',
    style: 'text-green-500 text-3xl font-extrabold uppercase tracking-wide drop-shadow-lg px-3 py-1 rounded-lg'
  },
  {
    name: 'Popshade',
    style: 'text-pink-500 text-3xl font-extrabold uppercase tracking-wide drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)] px-2 py-1 rounded-lg'
  },
  {
    name: 'Neonix',
    style: 'text-blue-400 text-3xl font-extrabold uppercase tracking-wide drop-shadow-lg px-3 py-1 rounded-lg'
  },
  {
    name: 'Sunflare',
    style: 'bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white text-3xl font-extrabold uppercase tracking-wide drop-shadow-lg px-3 py-1 rounded-lg'
  },
  {
    name: 'Ghostline',
    style: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg'
  }
];

const Caption = ({ onHandleInputChange }: { onHandleInputChange: (field: string, value: any) => void }) => {
    const [selectedCaptionStyle,setSelectedCaptionStyle]=useState<string | null>()
  return (
    <div className='mt-2'><h2>
        Caption Style</h2>
        <p className='text-sm text-gray-400'>Select Caption Style</p>
        <div className='flex flex-wrap gap-4'>
            {options.map((option)=>( 
                <div key={option.name} onClick={()=>{setSelectedCaptionStyle(option.name)
                    onHandleInputChange('caption',option)}
                } className={`p-2 hover:border  border-purple-200 cursor-pointer rounded-lg ${selectedCaptionStyle==option.name && 'border'}`}>
                      <h2 className={option.style}>{option.name}</h2>
                </div>
            ))}
        </div>
        </div>
  )
}

export default Caption