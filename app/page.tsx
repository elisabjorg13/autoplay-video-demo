'use client';

import { YouTubeEmbed } from '@next/third-parties/google';

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Top Left Soap Foam Border */}
      <div className="absolute top-0 left-0 z-30 pointer-events-none w-full h-auto">
        <img
          src="/—Pngtree—soap bubble realistic border color_7505576.png"
          alt="Soap foam and bubble border"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Simple YouTube Video Embed */}
      <div className="absolute inset-0 flex items-start justify-center z-10" style={{top: '12vh'}}>
        <div className="w-[98vw] max-w-7xl aspect-video">
          <iframe
            src="https://www.youtube.com/embed/_jgNhfuZPhM?start=12&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=1&controls=1&autohide=1&wmode=transparent&playsinline=1"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          />
        </div>
        
        {/* Main Soap Bubble Overlay */}
        <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
         style={{top: '-30vh', width: 'calc(90%)', height: 'calc(100%)'}}>
          <img
            src="/SoapBubble.png"
            alt="Soap bubble overlay"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Small Bubbles */}
      <div className="absolute left-2/5 transform -translate-x-1/2 top-4/8 pointer-events-none z-20" style={{width: '120px', height: '110px'}}>
        <img
          src="/SoapBubble.png"
          alt="Small soap bubble 1"
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="absolute right-3/8 transform translate-x-1/2 top-4/9 pointer-events-none z-20" style={{width: '80px', height: '100px'}}>
        <img
          src="/SoapBubble.png"
          alt="Small soap bubble 2"
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="absolute left-3/5 transform -translate-x-1/2 top-3/9 pointer-events-none z-20" style={{width: '40px', height: '170px'}}>
        <img
          src="/SoapBubble.png"
          alt="Small soap bubble 3"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Kaomoji at Bottom */}
      <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
        <pre className="text-white text-xs font-mono text-center leading-none">
{`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠶⢦⣤⠶⠶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⣿⠀⠀⠁⠀ ⠀⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢧⣄⠀  ⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠉⠛⠃⣠⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠉⠙⢳⣄⢀⡾⠁⠈⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠀⠀⠙⢿⡇⠀⢰⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣦⡀⠀⠀⠹⣦⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⣄⠀⠀⠈⠻⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠋⠛⢧⡀⠀⠀⠘⢷⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡴⠾⣧⡀⠀⠀⠹⣦⠀⠀⠈⢿⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⠀⠀⠈⠻⣄⠀⠀⠀⠀⠀⠀⠈⣷⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⡟⠉⠛⢷⣄⠀⠀⠈⠀⠀⠀⠀⠀⠀⣰⠏⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢷⡀⠀⠀⠉⠃⠀⠀⠀⠀⠀⠀⠀⣴⠏⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣦⡀⠀⠀⠀⠀⠀⠀⢀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠶⣤⣤⣤⡤⠶⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`}
        </pre>
      </div>
    </div>
  );
}
