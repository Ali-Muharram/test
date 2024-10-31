/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demo.spoonthemes.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'demoxml.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'preview.itgeeksin.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.almowafir.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd1fxr6qy94trui.cloudfront.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'friday-theme.firebaseapp.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: `localhost`,
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'dash.fresaver.online',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.1.3',
        port: '4000',
        pathname: '/**',
      },

      {
        protocol: 'https',
        hostname: 'back.fresaver.online',
        pathname: '/**',
      },

    ],
  },
  // يمكنك إضافة إعدادات أخرى هنا
};

module.exports = nextConfig;
