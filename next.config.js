/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  }, 
   images: {
    domains: ['images.freeimages.com'],
    // domains: ['picsum.photos'],
  },
}

module.exports = nextConfig
