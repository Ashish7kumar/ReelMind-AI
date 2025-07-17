import { GenerateScript } from "@/config/AiModel";
import { NextRequest, NextResponse } from 'next/server';
const SCRIPT_PROMPT=`Write a two different script for 30 Seconds video on Topic: {topic}
tell any thing you tink is good for a short video but must be rerlated to topic and in this script itself 
Give me response in JSON format and follow the schema no bracket this will all be spoken by a single person :

json
Copy code
{
  scripts: [
    {
      content: ""
    },
    {
      content: ""
    }
  ]
}`
export async function POST(req:NextRequest) {
    const {topic}=await req.json();
    const PROMPT=SCRIPT_PROMPT.replace('{topic}',topic)
    const result=await GenerateScript.sendMessage(PROMPT);
    const resp=result?.response?.text();
    return NextResponse.json(JSON.parse(resp))
    
}
