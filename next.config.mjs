/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['assets.aceternity.com'], // Add your domain here
    },
    eslint: {
      // Warning: This allows production builds to complete successfully 
      // even if there are ESLint errors in your project.
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  