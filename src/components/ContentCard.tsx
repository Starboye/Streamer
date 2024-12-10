import React, { useState } from 'react';
import { Content } from '../types/content';
import { AuthorInfo } from './AuthorInfo';
import { ViewCount } from './ViewCount';
import { formatTimeAgo } from '../utils/formatters';
import { VideoPlayer } from './VideoPlayer';

interface ContentCardProps {
  content: Content;
}

export const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative cursor-pointer" onClick={handleClick}>
        {isPlaying ? (
          <VideoPlayer videoUrl={content.videoUrl} title={content.title} />
        ) : (
          <>
            <img
              src={content.thumbnail}
              alt={content.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-2 right-2">
              <ViewCount views={content.views} />
            </div>
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
              {content.duration}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black bg-opacity-75 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {content.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {content.description}
        </p>
        
        <div className="flex items-center justify-between">
          <AuthorInfo author={content.author} />
          <span className="text-sm text-gray-500">
            {formatTimeAgo(content.createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
};