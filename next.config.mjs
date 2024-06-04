// next.config.mjs

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    typescript:{
      ignoreBuildErrors:true
    }

   
}
  
  
  export default nextConfig;