/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'scontent-sjc3-1.cdninstagram.com', 'cdn.sanity.io'],
    dangerouslyAllowSVG: true,
  }
}



export default nextConfig