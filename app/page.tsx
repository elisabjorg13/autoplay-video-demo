'use client';

import { useRef, useEffect, useState } from 'react';
import { config } from './config';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Video URL from config
  const videoUrl = config.videoUrl;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay failed:', error);
      });
    }
  }, []);

  const unmuteVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Full-screen Video Player */}
      <video
        ref={videoRef}
        className="w-full h-screen object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Unmute Button - stays visible */}
      <div className="absolute top-8 right-8">
        <button
          onClick={unmuteVideo}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-300 border border-white border-opacity-30 text-sm"
        >
          🔊 Click to unmute
        </button>
      </div>
    </div>
  );
}
