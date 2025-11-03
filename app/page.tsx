"use client";

import { useRef, useEffect } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play when component mounts
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black">
      <video
        ref={videoRef}
        src="/lastrelease.mp4"
        className="w-full h-full object-cover"
        playsInline
        muted
        loop
        autoPlay
      />
    </div>
  );
}