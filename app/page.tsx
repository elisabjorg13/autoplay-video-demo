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
    const handleLoadedData = () => setIsLoading(false);

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
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
        poster="/HotNbothered.png"
        className="w-full h-full object-cover"
        playsInline
        muted
        preload="metadata"
        onClick={handleVideoClick}
      />
      
      {/* Pink loading spinner - show when video is loading */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
          <div className="w-10 h-10 border-4 border-pink-300 border-t-pink-500 rounded-full animate-spin" />
        </div>
      )}

      {/* Pink play button overlay - show when video is ready and not playing */}
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