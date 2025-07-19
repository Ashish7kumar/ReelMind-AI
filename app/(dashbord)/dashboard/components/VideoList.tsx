"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

import { Button } from '@/components/ui/button'
import { useConvex } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useAuthContext } from '@/app/themeProvider'
import { RefreshCcw } from 'lucide-react'
import { query } from '@/convex/_generated/server'

const VideoList = () => {
  const [videoList, setVideoList] = useState<any[]>([])
   const convex=useConvex();
   const context=useAuthContext();
    if(context === null)
  {
    throw Error('No user context')
  }
  const {user}=context;
  useEffect(()=>{
  
    user && GetUserVideoList();
  },[user])
  const GetUserVideoList=async ()=>{
    const result=await convex.query(api.videoData.getUserVideoes,{
      uid:user?._id
    })
   
    setVideoList(result)
    const isPendingVideo=result?.find((item:any)=>item.status=='pending')
    isPendingVideo&&GetPendingVideoStatus(isPendingVideo)
  }
 const GetPendingVideoStatus = (pendingVideo: any) => {
  const intervalId = setInterval(async () => {
    const result = await convex.query(api.videoData.GetVideoById, {
      videoId: pendingVideo._id,
    });

    if (result?.status === 'completed') {
      clearInterval(intervalId); 
      console.log("Video Process Completed");
      GetUserVideoList();        
    }
  }, 5000);
};

  return (
   <div>
  {videoList?.length === 0  ? (
    <div className="flex flex-col items-center justify-center mt-28 gap-5 p-5 border-2 border-dashed border-purple-200 rounded-xl py-16">
      <Image src="/logo3.png" alt="logo" width={80} height={80} />
      <h2 className="text-gray-400 text-lg">You don't have any videos</h2>
      <Link href="/create-new-video" passHref>
        <Button className="bg-purple-500 hover:bg-purple-700 cursor-pointer">
          + Create New Video
        </Button>
      </Link>
    </div>
  ):
  <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-10'>
   {videoList?.map((video, index) => (
    <Link key={index} href={'/play-video/'+video?._id}>
  <div  className='relative text-white cursor-pointer'>
    <div >
      {video?.status=='completed'?<Image src={video?.images[0]} alt={video?.title} width={500} height={500} className='w-full object-cover rounded-xl aspect-[2/3]'/>:<div className='aspect-[2/3] p-5 w-full  rounded-xl bg-purple-400 flex items-center justify-center gap-2 '><RefreshCcw className='animate-spin'/> <h2>Generating...</h2></div>}
   <div>
   <h2 className='absolute bottom-3 px-5 w-full'>
  {video?.title}
  <div className='text-sm'>{moment(video?._creationTime).fromNow()}</div>
</h2>

   </div>
    </div>
  </div>
  </Link>
))}

  </div>
  }
</div>
  )
}


export default VideoList
