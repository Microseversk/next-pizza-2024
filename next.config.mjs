/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shift-backend.onrender.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
