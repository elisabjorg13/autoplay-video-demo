export const config = {
  // Put your video file in the public folder and update this path
  // Example: if your video is at public/video.mp4, use "/video.mp4"
  videoUrl: "/video.mp4",
  
  // Video settings
  autoplay: true,
  loop: true,
  muted: true, // Must be true for autoplay to work
  
  // UI settings
  title: "Video Autoplay",
  showControls: true,
  showInstructions: true,
  
  // Local file setup (simpler than AWS S3)
  local: {
    videoPath: "public/video.mp4", // Path relative to project root
    supportedFormats: ["mp4", "webm", "ogg"]
  }
};
