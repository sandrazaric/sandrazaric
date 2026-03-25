/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Uncomment and set basePath if deploying to a subdirectory (e.g., username.github.io/repo-name)
  // basePath: '/your-repo-name',
}

export default nextConfig
