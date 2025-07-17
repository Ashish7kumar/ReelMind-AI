"use client"
import React, { useState } from 'react'
import Topic from '@/app/(dashbord)/create-new-video/components/Topic'
import VideoStyle from './components/VideoStyle'
import Voices from './components/Voices'
import Caption from './components/Caption'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { WandSparkles } from 'lucide-react'
import Preview from './components/Preview'
const CreateNewVideo = () => {
    const [formData,setFormData]=useState<any>({});
   const onHandleInputChange = (fieldName: string, fieldValue: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
    console.log(formData);
  };
   const GenerateVideo=async ()=>{
    console.log(formData)
if (!formData?.topic || !formData?.script || !formData?.videoStyle || !formData?.caption || !formData?.voice) {
  console.error("Error: fields are missing");
  return;
}

    const result=await axios.post('/api/generate-video',{
      ...formData
    });
    console.log(result);
   }
  return (
    <div>
        <h2 className='text-3xl'>Create New Video</h2>
<div className='grid grid-cols-1 md:grid-cols-3 mt-5 gap-7'>
  <div className='col-span-2 p-7 border rounded-xl h-[70vh] overflow-auto'>
     <Topic onHandleInputChange={onHandleInputChange}/>
     <VideoStyle onHandleInputChange={onHandleInputChange}/>
     <Voices onHandleInputChange={onHandleInputChange}/>
     <Caption onHandleInputChange={onHandleInputChange}/>
     <Button className='w-full mt-5 cursor-pointer text-white bg-purple-500 hover:bg-purple-700' onClick={GenerateVideo}><WandSparkles/>Generate Video</Button>
  </div>
<div>
<Preview formData={formData}/>
</div>
</div>
       
    </div>
  )
}

export default CreateNewVideo