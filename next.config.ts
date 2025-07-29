import { devIndicatorServerState } from "next/dist/server/dev/dev-indicator-server-state"

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Wichtig für Docker!
  output: 'standalone',
  
  // Deine anderen Configs hier...
  reactStrictMode: true,
  // swcMinify ist deprecated, rausnehme

  devIndicators: false,
}

module.exports = nextConfig