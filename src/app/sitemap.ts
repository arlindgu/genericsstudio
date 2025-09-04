import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date().toISOString()

  return [
    {
      url: 'https://generics.studio',
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    {
      url: 'https://generics.studio/about',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://generics.studio/contact',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://generics.studio/services',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://generics.studio/services/website-entwicklung',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://generics.studio/services/analyse',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://generics.studio/service/branding',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://generics.studio/case-studies',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://generics.studio/privacy-policy',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://generics.studio/imprint',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]
}