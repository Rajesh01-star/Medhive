/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  }, 
   images: {
    domains: ['images.freeimages.com','picsum.photos','news.cornell.edu'],
    // domains: ['picsum.photos'],
  },
}

module.exports = nextConfig
