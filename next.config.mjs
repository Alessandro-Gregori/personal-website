/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local images in /public are used throughout the site, so no remote
    // patterns are needed. If you ever host images elsewhere (e.g. Cloudinary),
    // add the hostname here.
    remotePatterns: [],
  },
};

export default nextConfig;
