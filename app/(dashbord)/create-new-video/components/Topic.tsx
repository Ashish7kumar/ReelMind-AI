"use client"
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { SparkleIcon } from 'lucide-react'
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
    const [selectedTopic,setSelectedTopic]=useState<string| null>(null)
  const GenerateScript=()=>{

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
  <TabsList>
    <TabsTrigger value="suggestion">Suggestions</TabsTrigger>
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
        className={`m-1 ${
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
        </div>
        <Button className='mt-3' size="sm" onClick={GenerateScript}><SparkleIcon/>Generate Script</Button>
        </div>
  )
}

export default Topic