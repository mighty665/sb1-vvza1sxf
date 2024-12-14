import React from 'react';
import VideoCard from './VideoCard';
import { featuredVideos } from '../../data/videos';

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {featuredVideos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
}