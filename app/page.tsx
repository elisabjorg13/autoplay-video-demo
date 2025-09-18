"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Auto-play muted to show first frame, then pause immediately
      video.play().then(() => {
        video.pause();
      }).catch(() => {
        // If autoplay fails, that's fine
      });
    }
  }, []);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = false; // Enable sound
      await video.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Play failed:", error);
    }
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black">
      {/* Full screen video */}
      <video
        ref={videoRef}
        src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/Music/luv+uUu_animation+loop.mp4"
        className="w-full h-full object-cover"
        playsInline
        muted
        preload="auto"
        onClick={handleVideoClick}
      />
      
      {/* Play button overlay - only show when not playing */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20"
        >
          <Image
            src="/PLAYYY.png"
            alt="Play"
            width={50}
            height={50}
            className="hover:scale-110 transition-transform"
          />
        </button>
      )}
    </div>
  );
}