"use client"
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Loader2Icon, SparkleIcon } from 'lucide-react'
import axios from 'axios'
const suggestions = [
  "Science Experiments",
  "Kids Story",
  "AI Innovations",
  "Motivational Stories",
  "Space Mysteries",
  "Movie Stories",
  "Fantasy Adventures",
  "Historic Story",
  "True Crime Stories",
  "Mythological Tales",
  "Tech Breakthroughs",
  "Horror Stories"
];

function Topic({ onHandleInputChange }: { onHandleInputChange: (field: string, value: any) => void }) {
    const [selectedTopic,setSelectedTopic]=useState<string| null>(null);
    const [selectedScriptIndex,setSelectedScriptIndex]=useState<number |null>();
  const [script,setScript]=useState<any[]>();
  const [loading,setLoading]=useState(false);
    const GenerateScript=async()=>{
        setLoading(true)
        try{
   const result=await axios.post('/api/generated-script',{
       topic:selectedTopic
   });
   console.log(result.data);
   setScript(result.data?.scripts);}
   catch(e){console.log(e)}
   finally{
   setLoading(false);}
  }
    return (
    <div>
        <h2 className='mb-1'>Project Title
            </h2>
            <Input placeholder="Enter Project Title" onChange={(event)=>onHandleInputChange("title",event?.target.value)}/>
       <div className='mt-5'>
        <h2>Video Topic</h2>
        <p>Select topic for your video</p>
        <Tabs defaultValue="suggestion" className="w-full mt-2">
  <TabsList className='cursor-pointer'>
    <TabsTrigger value="suggestion" >Suggestions</TabsTrigger>
    <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
  </TabsList>
  <TabsContent value="suggestion">
  <div className="flex flex-wrap gap-2 mt-4">
    {suggestions.map((suggestion) => (
      <Button 
        variant="outline"
        key={suggestion}
        onClick={() => {setSelectedTopic(suggestion)
            onHandleInputChange('topic',suggestion)
        }}
        className={`m-1  cursor-pointer ${
          suggestion === selectedTopic ? "bg-purple-100" : ""
        }`}
      >
        {suggestion}
      </Button>
    ))}
  </div>
</TabsContent>
  <TabsContent value="your_topic">
    <div>
        <h2>Enter your own topic</h2>
        <Textarea placeholder='Enter your topic' onChange={(event)=>onHandleInputChange('topic',event.target.value)}/>
    </div>
  </TabsContent>
</Tabs>
    <div>
    
    {script?.length! > 0 && 
    <div className='mt-3'>
        <h2>Select the Script</h2>
  <div className='grid grid-cols-2 gap-5 mt-1'>
    {script?.map((item,index) => (
      <div key={index} className={`p-3 border rounded-lg cursor-pointer ${selectedScriptIndex===index && 'bg-purple-100 border-black'}`} 
     onClick={() => {
      setSelectedScriptIndex(index);
      onHandleInputChange('script', item.content);
    }}>
        <h2 className='line-clamp-6 text-sm text-black overflow-scroll overflow-x-hidden'>{item.content}</h2>
      </div>
    ))}
  </div>
  </div>
}

   </div>
        </div>
      { !script ? <Button className='mt-3 bg-purple-500 hover:bg-purple-700 cursor-pointer' size="sm" disabled={loading} onClick={GenerateScript}>{loading ?<Loader2Icon className='animate-spin'/>:<SparkleIcon/>}Generate Script</Button>: 
      <Button className='mt-3' size="sm" disabled={loading} onClick={GenerateScript}>{loading ?<Loader2Icon className='animate-spin'/>:<SparkleIcon/>}Generate Another Script</Button>}
        </div>
  )
}

export default Topic