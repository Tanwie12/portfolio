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
          {
            protocol: 'https',
            hostname: 'user-images.githubusercontent.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'www.getlifegard.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'github-production-user-asset-6210df.s3.amazonaws.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'i.postimg.cc',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'buttons-animations-kv.vercel.app',
            pathname: '/**',
          },
          
        ],
      },
};

export default nextConfig;