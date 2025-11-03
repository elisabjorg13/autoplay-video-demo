"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
    // Auto-play video when entering
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log("Autoplay failed:", error);
      });
    }
    // Auto-play audio when entering
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(error => {
        console.log("Audio play failed:", error);
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black">
      {/* Video - always playing underneath */}
      <video
        ref={videoRef}
        src="/lastrelease.mp4"
        className="w-full h-full object-cover"
        playsInline
        muted
        loop
        autoPlay
      />

      {/* Audio - plays when enter is clicked */}
      <audio
        ref={audioRef}
        src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/3v3n+F-master+(s11)+V03+24bit+44k.wav"
        loop
      />

      {/* Enter button - only show before entering */}
      {!hasEntered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <button
            onClick={handleEnter}
            className="relative cursor-pointer"
            style={{
              animation: 'heartPulse 2s ease-in-out infinite'
            }}
          >
            <Image
              src="/heartpng.png"
              alt="Enter"
              width={400}
              height={400}
              className="w-64 h-64 md:w-80 md:h-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl md:text-5xl font-bold tracking-widest">
                ENTER
              </span>
      </div>
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes heartPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}