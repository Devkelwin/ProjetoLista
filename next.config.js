/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
  },
}

module.exports = {
  images: {
    loader: 'custom',
    loaderFile: './my/image/loader.js',
  },
}

module.exports = nextConfig
