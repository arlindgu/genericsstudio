import { devIndicatorServerState } from "next/dist/server/dev/dev-indicator-server-state"

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.imgur.com',
      'images.unsplash.com',
    ], // Für externe Bilder]
  },
  // Wichtig für Docker!
  output: 'standalone',
  
  // ESLint für Build deaktivieren (temporär)
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // TypeScript Fehler ignorieren (temporär)
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Deine anderen Configs hier...
  reactStrictMode: true,
  // swcMinify ist deprecated, rausnehme

  devIndicators: false,
}

module.exports = nextConfig