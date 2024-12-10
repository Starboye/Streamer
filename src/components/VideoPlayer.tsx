import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
  return (
    <div className="relative w-full pt-[56.25%]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        controls
        preload="metadata"
        title={title}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};