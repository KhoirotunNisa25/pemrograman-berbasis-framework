/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.adidas.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'contents.mediadecathlon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'down-id.img.susercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dauky.co.id',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bimg.akulaku.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rabbani.id',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.puma.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'file.1itmedia.co.id',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
