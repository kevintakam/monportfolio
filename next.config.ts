/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 Ignore les erreurs ESLint pendant la build
  },
};