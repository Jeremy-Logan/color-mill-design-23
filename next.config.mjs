/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com','scontent-cdg4-1.cdninstagram.com','scontent-lhr8-1.cdninstagram.com', 'scontent-cdg2-1.cdninstagram.com', 'scontent-gru2-2.cdninstagram.com','scontent-ams4-1.cdninstagram.com', 'scontent-ams2-1.cdninstagram.com', 'scontent-ord5-2.cdninstagram.com', 'scontent-gru1-1.cdninstagram.com', 'scontent-ord5-1.cdninstagram.com', 'scontent-gru2-1.cdninstagram.com', 'scontent-gru1-2.cdninstagram.com', 'cdn.sanity.io'],
    dangerouslyAllowSVG: true,
  }
}



export default nextConfig
