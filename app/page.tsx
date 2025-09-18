// 'use client';

// import { YouTubeEmbed } from '@next/third-parties/google';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
//       {/* Top Left Soap Foam Border */}
//       <div className="absolute top-0 left-0 z-30 pointer-events-none w-full h-auto">
//         <img
//           src="/—Pngtree—soap bubble realistic border color_7505576.png"
//           alt="Soap foam and bubble border"
//           className="w-full h-auto object-contain"
//         />
//       </div>

//       {/* Simple YouTube Video Embed */}
//       <div className="absolute inset-0 flex items-start justify-center z-10" style={{top: '12vh'}}>
//         <div className="w-[98vw] max-w-7xl aspect-video">
//           <iframe
//             src="https://www.youtube.com/embed/_jgNhfuZPhM?modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=1&controls=1&autohide=1&wmode=transparent&playsinline=1"
//             className="w-full h-full"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             title="YouTube video player"
//           />
//         </div>
        
//         {/* Main Soap Bubble Overlay */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
//          style={{top: '-30vh', width: 'calc(90%)', height: 'calc(100%)'}}>
//           <img
//             src="/SoapBubble.png"
//             alt="Soap bubble overlay"
//             className="w-full h-full object-contain"
//           />
//         </div>
//       </div>

//       {/* Small Bubbles */}
//       <div className="absolute left-2/5 transform -translate-x-1/2 top-4/8 pointer-events-none z-20" style={{width: '120px', height: '110px'}}>
//         <img
//           src="/SoapBubble.png"
//           alt="Small soap bubble 1"
//           className="w-full h-full object-contain"
//         />
//       </div>
      
//       <div className="absolute right-3/8 transform translate-x-1/2 top-4/9 pointer-events-none z-20" style={{width: '80px', height: '100px'}}>
//         <img
//           src="/SoapBubble.png"
//           alt="Small soap bubble 2"
//           className="w-full h-full object-contain"
//         />
//       </div>
      
//       <div className="absolute left-3/5 transform -translate-x-1/2 top-3/9 pointer-events-none z-20" style={{width: '40px', height: '170px'}}>
//         <img
//           src="/SoapBubble.png"
//           alt="Small soap bubble 3"
//           className="w-full h-full object-contain"
//         />
//       </div>

//       {/* Kaomoji at Bottom */}
//       <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
//         <pre className="text-white text-xs font-mono text-center leading-none">
// {`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠶⢦⣤⠶⠶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⣿⠀⠀⠁⠀ ⠀⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢧⣄⠀  ⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠉⠛⠃⣠⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠉⠙⢳⣄⢀⡾⠁⠈⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠀⠀⠙⢿⡇⠀⢰⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣦⡀⠀⠀⠹⣦⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⣄⠀⠀⠈⠻⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠋⠛⢧⡀⠀⠀⠘⢷⡀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡴⠾⣧⡀⠀⠀⠹⣦⠀⠀⠈⢿⡄⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⠀⠀⠈⠻⣄⠀⠀⠀⠀⠀⠀⠈⣷⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⢠⡟⠉⠛⢷⣄⠀⠀⠈⠀⠀⠀⠀⠀⠀⣰⠏⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⢷⡀⠀⠀⠉⠃⠀⠀⠀⠀⠀⠀⠀⣴⠏⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣦⡀⠀⠀⠀⠀⠀⠀⢀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠶⣤⣤⣤⡤⠶⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`}
//         </pre>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Replace this URL with your Amazon S3 video URL
  const videoUrl = "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/Music/luv+uUu_animation+loop.mp4";
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videoUrl;
    }
  }, [videoUrl]);

  const onPlayClick = async () => {
    const v = videoRef.current;
    if (!v) return;
    
    setLoading(true);
    v.muted = false; // allow sound after user gesture
    
    try {
      // If video isn't ready to play, wait for it
      if (!canPlay) {
        await new Promise((resolve) => {
          const onCanPlay = () => {
            setCanPlay(true);
            v.removeEventListener('canplay', onCanPlay);
            resolve(void 0);
          };
          v.addEventListener('canplay', onCanPlay);
        });
      }
      
      await v.play();
      setStarted(true);
      setLoading(false);
      
      // Optional: go fullscreen on tap
      const rfs =
        v.requestFullscreen ||
        // @ts-expect-error - webkit/ms fullscreen methods may not be typed
        v.webkitRequestFullscreen ||
        // @ts-expect-error - webkit/ms fullscreen methods may not be typed
        v.msRequestFullscreen;
      if (rfs) { try { await rfs.call(v); } catch {} }
    } catch (e) {
      console.warn("Play failed:", e);
      setLoading(false);
    }
  };

  const onVideoClick = () => {
    const v = videoRef.current;
    if (!v) return;
    
    if (v.paused) {
      v.play();
      setStarted(true);
    } else {
      v.pause();
      setStarted(false);
    }
  };

  return (
    <main className="bg-black min-h-[100dvh]">
      <div className="fixed inset-0 bg-black">
        <video
          ref={videoRef}
          playsInline
          preload="auto"
          // poster optional (add public/poster.jpg):
          // poster="/poster.jpg"
          className="absolute inset-0 w-full h-full object-cover bg-black cursor-pointer"
          controls={false} // no native controls
          controlsList="nodownload noplaybackrate noremoteplaybook"
          disablePictureInPicture
          onClick={onVideoClick}
          onCanPlay={() => {
            setCanPlay(true);
            setLoading(false);
            console.log("Video can play");
          }}
          onLoadStart={() => {
            setLoading(true);
            console.log("Video loading started");
          }}
          onLoadedData={() => {
            setLoading(false);
            console.log("Video data loaded");
          }}
          onError={(e) => {
            setError("Failed to load video");
            setLoading(false);
            console.error("Video error:", e);
          }}
          onLoadedMetadata={() => {
            console.log("Video metadata loaded");
          }}
        />
        {!started && (
          <button
            onClick={onPlayClick}
            disabled={loading}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 transition-transform duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Play video with sound"
          >
            {loading ? (
              <div className="w-[60px] h-[60px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{borderColor: '#E893E4'}}></div>
              </div>
            ) : (
              <Image
                src="/PLAYYY.png"
                alt="Play button"
                width={60}
                height={60}
                className="w-auto h-auto max-w-[60px] max-h-[60px] object-contain"
              />
            )}
          </button>
        )}
      </div>
    </main>
  );
}
