"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setIsLoading(false);
    const handleWaiting = () => setIsLoading(true);
    const handleLoadedData = () => setIsLoading(false);

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("loadeddata", handleLoadedData);
    };
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
        src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/hot+and+bothrd+(depression+talking)_MIRROR.mp4"
        poster="HotNBothered.png"
        className="w-full h-full object-cover"
        playsInline
        muted
        preload="metadata"
        onClick={handleVideoClick}
      />
      
      {/* Loading spinner - show when video is buffering */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
          <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Play button overlay - only show when not playing and not loading */}
      {!isPlaying && !isLoading && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20"
        >
          <Image
            src="/PLAYYY.png"
            alt="Play"
            width={40}
            height={40}
            className="hover:scale-110 transition-transform"
          />
        </button>
      )}
    </div>
  );
}