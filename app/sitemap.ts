import type { MetadataRoute } from 'next'
import { canonicalUrl } from '@/lib/seo'

const SITE_LASTMOD = '2026-09-03'

type SitemapEntry = {
  path: string
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  priority: number
  lastModified?: string
}

const pages: SitemapEntry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/communities/skyeview', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/special-offers', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/about-dr-janet-duffy', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/homebuying-process', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/for-buyers', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/map', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/realtor-services', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/skye-canyon', changeFrequency: 'monthly', priority: 0.8 },
  {
    path: '/blog/should-i-use-realtor-planned-community',
    changeFrequency: 'monthly',
    priority: 0.6,
    lastModified: '2025-02-25',
  },
  {
    path: '/blog/what-are-closing-costs',
    changeFrequency: 'monthly',
    priority: 0.6,
    lastModified: '2025-01-20',
  },
  {
    path: '/blog/redefining-homebuying-experience',
    changeFrequency: 'monthly',
    priority: 0.6,
    lastModified: '2025-01-15',
  },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: canonicalUrl(page.path),
    lastModified: page.lastModified ?? SITE_LASTMOD,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
