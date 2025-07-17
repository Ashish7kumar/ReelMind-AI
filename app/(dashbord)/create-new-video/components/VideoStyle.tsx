import React, { useState } from 'react'
import Image from 'next/image'
export const options=[
    {
        name:'Realistic',
        image:'/realistic.jpg'
    },
    {
        name:'Cinematic',
        image:'/cinematic.jpg'
    },
    {
        name:'Cartoon',
        image:'/cartoon.jpg'
    },
    {
       name:'Color',
       image:'/color.jpg'
    },
    {
        name:'Cyberpunk',
        image:'/cyberpunk.jpg'
    },
    {
        name:'Anime',
        image:'/anime.jpg'
    }
]
const VideoStyle = ({ onHandleInputChange }: { onHandleInputChange: (field: string, value: any) => void }) => {
    const [selectedStyle,setSelectedStyle]=useState<string | null>()
  return (
    <div><h2>
        Video Styles</h2>
        <p className='text-sm text-gray-400'>Select video style</p>
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2' >
          {
  options?.map((option) => (
    <div key={option.name} className='relative' onClick={()=>{setSelectedStyle(option.name);
    onHandleInputChange('videoStyle',option.name)
    }}>
      <Image src={option.image} alt={option.name} width={500} height={120} className={`object-cover h-[70px] lg:h-[90px] xl:h-[180px] rounded-lg p-1 hover:border border-purple-300 cursor-pointer ${option.name===selectedStyle && 'border'}`} />
    <h2 className='absolute bottom-3 left-1.5 text-center text-white'>{option.name}</h2>
    </div>

  ))
}

            </div></div>
  )
}

export default VideoStyle