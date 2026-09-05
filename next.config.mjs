/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        // Live-site thumbnails. Replace these with committed screenshots under
        // /public/projects/ when you have them — see project-data.ts `image`.
        protocol: 'https',
        hostname: 's.wordpress.com',
        pathname: '/mshots/**',
      },
    ],
  },
};

export default nextConfig;
