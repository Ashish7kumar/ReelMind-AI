"use client"
import React, { useState } from 'react'
import Topic from '@/app/(dashbord)/create-new-video/components/Topic'
import VideoStyle from './components/VideoStyle'
const CreateNewVideo = () => {
    const [formData,setFormData]=useState<any>();
   const onHandleInputChange = (fieldName: string, fieldValue: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
    console.log(formData);
  };

  return (
    <div>
        <h2 className='text-3xl'>Create New Video</h2>
<div className='grid grid-cols-1 md:grid-cols-3 mt-8'>
  <div className='col-span-2 p-7 border rounded-xl'>
     <Topic onHandleInputChange={onHandleInputChange}/>
     <VideoStyle onHandleInputChange={onHandleInputChange}/>
  </div>
<div>

</div>
</div>
       
    </div>
  )
}

export default CreateNewVideo