/** @type {import('next').NextConfig} */
const nextConfig = {


    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/a/**',
          },
          {
            protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        
          },
          {
            protocol: 'https',
        hostname: 'cdn.builder.io',
        port: '',
        
          },
          {
            protocol: 'https',
        hostname: 'images04.nicepage.com',
        port: '',
        
          },
          {
            protocol: 'https',
        hostname: 'cdn.builder.io',
        port: '',
        
          },
          
        ],
      },
};

export default nextConfig;