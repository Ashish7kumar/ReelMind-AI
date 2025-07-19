"use client";
import React, { useEffect, useMemo } from "react";
import { Audio } from "remotion";
import {
  AbsoluteFill,
  Sequence,
  useVideoConfig,
  Img,
  interpolate,
  useCurrentFrame,
} from "remotion";

type Props = {
  videoData: any;
  setDurationInFrame: (val: number) => void;
};

const VideoComposition: React.FC<Props> = ({ videoData, setDurationInFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const captions = videoData?.captionJson ?? [];
  const imageList = videoData?.images ?? [];

  const totalDuration = useMemo(() => {
    if (!captions.length) return 100;
    const lastEnd = captions[captions.length - 1]?.end || 4;
    return Math.ceil(lastEnd * fps);
  }, [captions, fps]);

  useEffect(() => {
    setDurationInFrame(totalDuration);
  }, [totalDuration, setDurationInFrame]);

  const getCurrentCaption = () => {
    const currentTime = frame / fps;
    const currentCaption = captions.find(
      (item:any) => currentTime >= item?.start && currentTime <= item?.end
    );
    return currentCaption ? currentCaption.word : "";
  };

  return (
    <AbsoluteFill>
      {imageList.map((item: string, index: number) => {
        const startTime = Math.floor((index * totalDuration) / imageList.length);
        const endTime = Math.floor(((index + 1) * totalDuration) / imageList.length);
        const duration = endTime - startTime;

        const scale = interpolate(
          frame,
          [startTime, startTime + duration / 2, endTime],
          index % 2 === 0 ? [1, 1.8, 1] : [1.8, 1, 1.8],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }
        );

        return (
          <Sequence key={index} from={startTime} durationInFrames={duration}>
            <AbsoluteFill>
              <Img
                src={item}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: `scale(${scale})`,
                }}
              />
            </AbsoluteFill>
          </Sequence>
        );
      })}

      <AbsoluteFill
        style={{
          color: "white",
          justifyContent: "center",
          bottom: 50,
          height: 150,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <h2>{getCurrentCaption()}</h2>
      </AbsoluteFill>

      {videoData?.audioUrl && <Audio src={videoData.audioUrl} />}
    </AbsoluteFill>
  );
};

export default VideoComposition;
