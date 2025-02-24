/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:["*"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all HTTPS domains
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
};

export default nextConfig;
