import React from 'react';

interface VideoThumbnailProps {
  src: string;
  alt: string;
}

export default function VideoThumbnail({ src, alt }: VideoThumbnailProps) {
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />
    </div>
  );
}