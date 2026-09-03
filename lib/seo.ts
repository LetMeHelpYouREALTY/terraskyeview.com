import type { Metadata } from 'next'
import { SITE_SERVICE, SITE_URL } from '@/lib/site'

export const DEFAULT_OG_IMAGE = '/og-image.jpg'

type PageSeoInput = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  keywords?: string
  type?: 'website' | 'article' | 'profile'
}

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = SITE_SERVICE,
  keywords,
  type = 'website',
}: PageSeoInput): Metadata {
  const url = `${SITE_URL}${path}`
  const fullTitle = title.includes(SITE_SERVICE) ? title : `${title}`

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_SERVICE,
      images: [
        {
          url: image,
          width: 1200,
          height: 800,
          alt: imageAlt,
        },
      ],
      type,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  }
}
