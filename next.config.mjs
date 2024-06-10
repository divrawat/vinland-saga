/*

const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'https://vinland-saga-eight.vercel.app'],
  },
};

export default nextConfig;
