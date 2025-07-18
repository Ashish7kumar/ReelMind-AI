import { inngest } from "./client";
import axios from "axios";
import {createClient} from '@deepgram/sdk'
import { GenerateImageScript } from "@/config/AiModel";
import { ConvexHttpClient } from "convex/browser";
import { mutation } from "@/convex/_generated/server";
import { api } from "@/convex/_generated/api";
const ImagePromptScript = `Generate Image prompt of {style} style with all deatils for each scene for 30 seconds video:script:{script}
- Just Give specifying image prompt depends on the story line
- do not give camera angle image prompt
- Follow the Following schema and return JSON data (Max 4-5 Images)
[
  {
    imagePrompt: '',
    sceneContent: '<Script Content>'
  }
]`

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);
const BASE_URL='https://aigurulab.tech';
export const GenerateVideoData=inngest.createFunction(
    {id:'generate-video-data'},
    {event:'generate-video-data'},
    async({event,step})=>{
        const {script,topic,title,caption,VideoStyle,voice,recordId}=event?.data;
    const convex=new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
        const GenerateAudioFile=await  step.run(
        "GenerateAudioFile",
        async()=>{
   const result = await axios.post(BASE_URL+'/api/text-to-speech',
        {
            input: script,
            voice: voice
        },
        {
            headers: {
                'x-api-key': process.env.NEXT_PUBLIC_AILAB_API_KEY, 
                'Content-Type': 'application/json', 
            },
        })
     console.log(result.data.audio) 

            return result.data.audio;
        }
      )
    const GenerateCaptions=await step.run(
        "generateCaptions",
        async()=>{
            const deepgram=createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY)
            const {result,error}=await deepgram.listen.prerecorded.transcribeUrl({
                url:GenerateAudioFile,
            },{
                model:"nova-3",
                
            
            }
        
        )
        if(result==null)
        {
           return result;
        }
        console.log(result.results.channels[0].alternatives[0].words);
        return result.results.channels[0].alternatives[0].words;
            
            }
          
    )  
      const GenerateImagePrompts=await step.run(
                "generateImagePrompt",
                async()=>{
                  const FINAL_PROMPT=ImagePromptScript.replace('{style}',VideoStyle).replace('{script}',script);
                   const result=await GenerateImageScript.sendMessage(FINAL_PROMPT);
                   const resp=JSON.parse(result.response.text());
                   return resp;
                }
            )
            
        
            const GenerateImages=await step.run(
              "generateImages",
              async()=> {
                let images:any=[];
                images=await Promise.all(
                  GenerateImagePrompts.map(async(element:any)=>{
                    const result = await axios.post(BASE_URL+'/api/generate-image',
        {
            width: 1024,
            height: 1024,
            input:element?.imagePrompt,
            model: 'sdxl',//'flux'
            aspectRatio:"1:1"//Applicable to Flux model only
        },
        {
            headers: {
                'x-api-key': process.env.NEXT_PUBLIC_AILAB_API_KEY, // Your API Key
                'Content-Type': 'application/json', // Content Type
            },
        })
console.log(result.data.image) //Output Result: Base 64 Image
return result.data.image;        
})
                )
                 return images;
              }
            )
            const UpdateDB=await step.run(
              'UpdateDB',
              async()=>{
               const result=await convex.mutation(api.videoData.UpdateVideoRecord,{
                recordId:recordId,
                audioUrl:GenerateAudioFile,
                captionJson:GenerateCaptions,
                images:GenerateImages
               });
               return result;
              }
            )
    return "Executed Succesfuly"
    }
    
)