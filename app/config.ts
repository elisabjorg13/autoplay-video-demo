export const config = {
  // YouTube video embed
  videoUrl: "https://www.youtube.com/watch?v=88bMVbx1dzM",
  videoType: "youtube", // youtube, direct, or s3
  
  // Video settings
  autoplay: true,
  loop: true,
  muted: true, // Must be true for autoplay to work
  
  // UI settings
  title: "Video Autoplay",
  showControls: true,
  showInstructions: true,
  
  // YouTube settings
  youtube: {
    videoId: "88bMVbx1dzM",
    autoplay: 1,
    loop: 1,
    mute: 1,
    controls: 0,
    showinfo: 0,
    rel: 0
  }
};
