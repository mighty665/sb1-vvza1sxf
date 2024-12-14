import React from 'react';
import { MoreVertical } from 'lucide-react';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
}

export default function VideoCard({ thumbnail, title, channel, views, timestamp }: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-3 flex gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-semibold line-clamp-2 text-sm">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{channel}</p>
          <div className="text-sm text-gray-600">
            {views} views • {timestamp}
          </div>
        </div>
        <button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-gray-100 rounded-full">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}