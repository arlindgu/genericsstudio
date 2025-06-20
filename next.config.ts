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
  reactStrictMode: false,
  // swcMinify ist deprecated, rausnehmen
}

module.exports = nextConfig