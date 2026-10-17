import type { MetadataRoute } from 'next'
import { PAGE_LAST_MODIFIED, SITE_URL } from '@/lib/site'

type SitemapPath = keyof typeof PAGE_LAST_MODIFIED

type SitemapEntry = {
  path: SitemapPath
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const ROUTES: SitemapEntry[] = [
  { path: '/', changeFrequency: 'daily', priority: 1 },
  { path: '/communities/skyeview', changeFrequency: 'daily', priority: 0.9 },
  { path: '/special-offers', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/about-dr-janet-duffy', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/homebuying-process', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/for-buyers', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/for-sellers', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/map', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/realtor-services', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/skye-canyon', changeFrequency: 'monthly', priority: 0.8 },
  {
    path: '/blog/should-i-use-realtor-planned-community',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: '/blog/what-are-closing-costs',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: '/blog/redefining-homebuying-experience',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: new Date(PAGE_LAST_MODIFIED[path]),
    changeFrequency,
    priority,
  }))
}
