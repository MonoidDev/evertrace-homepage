/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Set base path for GitHub Pages (replace 'evertrace' with your repo name)
  basePath: process.env.NODE_ENV === 'production' ? '/evertrace' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/evertrace/' : ''
}

module.exports = nextConfig
