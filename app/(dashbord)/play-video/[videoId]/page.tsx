"use client"
import React,{useEffect, useState} from 'react'
import Player from './components/VideoPlayer'
import VideoInfo from './components/VideoInfo'
import { useConvex } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { query } from '@/convex/_generated/server'
import { useParams } from 'next/navigation'
import { Id } from '@/convex/_generated/dataModel'
const PlayVideo = () => {
    const convex=useConvex()
      const params = useParams()

    const videoId = params?.videoId as Id<"videoData"> 
    const [videoData,setVideoData]=useState<any>();
    
    useEffect(()=>{
        videoId && GetVideoDataBYId();

    },[videoId])
    const GetVideoDataBYId=async ()=>{
        const result=await convex.query(api.videoData.GetVideoById,{
              videoId:videoId
        });
        setVideoData(result);

    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
            <Player videoData={videoData}/>
        </div>
        <div>
            <VideoInfo videoData={videoData}/>
        </div>
    </div>
  )
}

export default PlayVideo