export const config = {
  // AWS S3 hosted video
  videoUrl: "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/Rubbr+Thron+(YOUTUBE+48k).mp4",
  
  // Video settings
  autoplay: true,
  loop: true,
  muted: true, // Must be true for autoplay to work
  
  // UI settings
  title: "Video Autoplay",
  showControls: true,
  showInstructions: true,
  
  // AWS S3 info
  aws: {
    region: "eu-west-1",
    bucketName: "portfolio-elisa-2023",
    videoFileName: "Rubbr+Thron+(YOUTUBE+48k).mp4"
  }
};
