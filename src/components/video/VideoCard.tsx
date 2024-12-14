import React from 'react';
import { VideoCardProps } from '../../types/video';
import VideoThumbnail from './VideoThumbnail';
import VideoMetadata from './VideoMetadata';

export default function VideoCard({ thumbnail, title, channel, views, timestamp }: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      <VideoThumbnail src={thumbnail} alt={title} />
      <VideoMetadata
        title={title}
        channel={channel}
        views={views}
        timestamp={timestamp}
      />
    </div>
  );
}