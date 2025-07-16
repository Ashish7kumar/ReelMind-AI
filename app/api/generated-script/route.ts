import { GenerateScript } from "@/config/AiModel";
import { NextRequest, NextResponse } from 'next/server';
const SCRIPT_PROMPT=`Write a two different script for 30 Seconds video on Topic: {topic}

Give me response in JSON format and follow the schema:

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