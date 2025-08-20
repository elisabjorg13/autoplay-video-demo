'use client';

import { YouTubeEmbed } from '@next/third-parties/google';
import { config } from './config';

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Simple YouTube Video Embed */}

      <div>
        <YouTubeEmbed videoid="88bMVbx1dzM" height={400} width={720} />
      </div>

      {/* Frame Overlay - Split into top and bottom halves */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Top Half Frame */}
        <div className="absolute top-0 left-0 right-0">
          <img
            src="/top_half.png"
            alt="Top frame overlay"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Bottom Half Frame */}

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <img
            src="/bottom_half.png"
            alt="Bottom frame overlay"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
