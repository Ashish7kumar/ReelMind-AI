"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, DownloadIcon } from 'lucide-react';
import Link from 'next/link';

type VideoDataProps = {
  videoData: {
    title: string;
    script: string;
    videoStyle: string;
  };
};

const VideoInfo: React.FC<VideoDataProps> = ({ videoData }) => {
    console.log('ssdsds'+videoData)
  return (
    <div className="p-5 border rounded-xl">
      <Link href="/dashboard">
        <h2 className="flex gap-2 items-center cursor-pointer text-blue-600 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </h2>
      </Link>

      <div className="flex flex-col gap-3 mt-5">
        <h2 className="text-lg font-semibold">
          Project Name: <span className="font-normal">{videoData?.title}</span>
        </h2>
        <p className="text-shadow-gray-500">
          <strong>Script:</strong> {videoData?.script}
        </p>
        <h2>
          Video Style: <span className="text-gray-700">{videoData?.videoStyle}</span>
        </h2>

        <Button className="mt-4 flex items-center gap-2 cursor-pointer bg-purple-500 hover:bg-purple-700">
          <DownloadIcon className="w-4 h-4" />
          Export & Download
        </Button>
      </div>
    </div>
  );
};

export default VideoInfo;
