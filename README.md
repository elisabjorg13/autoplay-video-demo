# Video Autoplay Site

A Next.js application that automatically plays a video from AWS S3 with a modern, full-screen interface.

## Features

- 🎥 Full-screen video autoplay (muted by default due to browser policies)
- 🔊 Unmute controls for user interaction
- ⏯️ Play/pause controls
- 🎨 Modern, responsive design with backdrop blur effects
- 🔧 Easy configuration through `app/config.ts`
- 📱 Mobile-friendly interface

## Setup Instructions

### 1. Local Video Setup (Recommended)

1. **Place Video in Public Folder:**
   - Put your 350MB video file in the `public` folder
   - Example: `public/my-video.mp4`

2. **Update Configuration:**
   - Edit `app/config.ts`
   - Set `videoUrl: "/my-video.mp4"` (use your actual filename)

3. **Video Formats Supported:**
   - MP4 (recommended)
   - WebM
   - OGG

### 2. Alternative: AWS S3 Setup

If you prefer to host the video on AWS S3:

1. **Create an S3 Bucket:**
   - Go to AWS S3 Console
   - Create a new bucket (e.g., `my-video-bucket`)
   - Choose your preferred region

2. **Upload Your Video:**
   - Upload your 350MB video file to the bucket
   - Note the exact filename

3. **Make the Video Public:**
   - Select your video file in the bucket
   - Click "Actions" → "Make public using ACL"
   - Confirm the action

4. **Set Bucket Policy (Alternative method):**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
       }
     ]
   }
   ```

5. **Get the Video URL:**
   - Your video URL will be: `https://YOUR-BUCKET-NAME.s3.YOUR-REGION.amazonaws.com/YOUR-VIDEO-FILENAME`

### 3. Update Configuration

Edit `app/config.ts` and replace the placeholder values:

**For Local Video (Recommended):**
```typescript
export const config = {
  videoUrl: "/my-video.mp4", // Your video filename from public folder
  
  local: {
    videoPath: "public/my-video.mp4", // Path relative to project root
    supportedFormats: ["mp4", "webm", "ogg"]
  }
};
```

**For AWS S3:**
```typescript
export const config = {
  videoUrl: "https://my-video-bucket.s3.us-east-1.amazonaws.com/my-video.mp4",
  
  aws: {
    region: "us-east-1", // Your AWS region
    bucketName: "my-video-bucket", // Your bucket name
    videoFileName: "my-video.mp4" // Your video filename
  }
};
```

### 4. Run the Application

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Browser Compatibility

- **Autoplay with sound:** Not supported in modern browsers (user experience policy)
- **Autoplay muted:** Supported in all modern browsers
- **Manual unmute:** Users can unmute using the provided button

## Technical Details

- Built with Next.js 15 and React 19
- Styled with Tailwind CSS
- Video element uses `autoPlay`, `muted`, `loop`, and `playsInline` attributes
- Responsive design that works on all screen sizes
- Backdrop blur effects for modern aesthetics

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Any static hosting service

## Troubleshooting

### Video Won't Autoplay
- Ensure the video is muted (`muted={true}`)
- Check that the video URL is accessible
- Verify CORS settings if using a custom domain

### Video Not Loading
- Check the S3 bucket permissions
- Verify the video URL is correct
- Ensure the video file exists and is accessible

### Performance Issues
- Consider using CloudFront CDN for better performance
- Optimize video format (H.264 MP4 recommended)
- Compress video if possible while maintaining quality

## License

MIT License - feel free to use this project for your own purposes.
