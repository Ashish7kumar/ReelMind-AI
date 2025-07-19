"use client"
import React, { useState } from 'react'
import VideoComposition from '@/app/VideoComposition'
import { Player } from '@remotion/player'

const VideoPlayer = ({ videoData }: any) => {
  const [durationInFrame, setDurationInFrame] = useState<number>(100);
  
  return (

    <div>
      <Player
        component={VideoComposition}
        durationInFrames={Math.round(durationInFrame) + 100}

        compositionWidth={720}
        compositionHeight={1280}
        fps={30}
        controls
        style={{
          width: '25vw',
          height: '70vh',
        }}
        inputProps={{
          videoData,
          setDurationInFrame: (frameValue: number) => setDurationInFrame(frameValue), 
        }}
      />
    </div>
  )
}

export default VideoPlayer

