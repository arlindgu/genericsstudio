import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date().toISOString()

  return [
    {
      url: 'https://portfolio.arlind.io',
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    {
      url: 'https://portfolio.arlind.io/contact',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://portfolio.arlind.io/pricing',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://portfolio.arlind.io/case-studies',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]
}