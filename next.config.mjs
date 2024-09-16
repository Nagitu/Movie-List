/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            port: '',
            pathname: '/images/**',
          },
          {
            protocol: 'https',
            hostname: 'cdn.myanimelist.net',
            port: '',
            pathname: '/**',
          },
        ],
        domains : [
          'image.tmdb.org'
        ]
      },
};

export default nextConfig;
