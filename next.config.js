/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  }, 
   images: {
    domains: ['images.freeimages.com','picsum.photos','news.cornell.edu','drive.google.com','freeimage.host','www.sanjivani-infotech.com','images.newindianexpress.com','content3.jdmagicbox.com','kims.kiit.ac.in','content3.jdmagicbox.com','healthvillagehospital.com','www.aayushhospital.in','images1-fabric.practo.com','cdn.credihealth.com','m.economictimes.com'],
    // domains: ['picsum.photos'],
  },
}

module.exports = nextConfig
