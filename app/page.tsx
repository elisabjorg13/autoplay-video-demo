'use client';

import { YouTubeEmbed } from '@next/third-parties/google';

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Top Left Soap Foam Border */}
      <div className="absolute top-0 left-0 z-30 pointer-events-none">
        <img
          src="/—Pngtree—soap bubble realistic border color_7505576.png"
          alt="Soap foam and bubble border"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Simple YouTube Video Embed */}
      <div className="absolute inset-0 flex items-start justify-center pt-40 z-10">
        <iframe
          src="https://www.youtube.com/embed/_jgNhfuZPhM?start=12&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=1&controls=1&autohide=1&wmode=transparent&playsinline=1"
          width={700}
          height={450}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        />

        {/* Soap Bubble Overlay */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-20 pointer-events-none z-20" style={{width: 'calc(100% )', height: 'calc(100% - 96px)'}}>
          <img
            src="/SoapBubble.png"
            alt="Soap bubble overlay"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Small Bubble 1 */}
        <div className="absolute left-2/5 transform -translate-x-1/2 top-[520px] pointer-events-none z-20" style={{width: '130px', height: '130px'}}>
          <img
            src="/SoapBubble.png"
            alt="Small soap bubble 1"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Small Bubble 2 */}
        <div className="absolute right-1/4 transform translate-x-1/2 top-[480px] pointer-events-none z-20" style={{width: '100px', height: '100px'}}>
          <img
            src="/SoapBubble.png"
            alt="Small soap bubble 2"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[570px] pointer-events-none z-20" style={{width: '170px', height: '170px'}}>
          <img
            src="/SoapBubble.png"
            alt="Small soap bubble 1"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Kaomoji at Bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
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
