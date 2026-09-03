import type { Metadata } from 'next'
import {
  ArticleStructuredData,
  BreadcrumbStructuredData,
} from '@/app/components/structured-data'
import { pageMetadata } from '@/lib/seo'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Redefining Homebuying at Terra at Skyeview',
  description:
    'Homebuying with Dr. Jan Duffy at Terra at Skyeview: how buyer representation works for Century Communities new construction in Skye Canyon. Call (702) 919-7292.',
  path: '/blog/redefining-homebuying-experience',
  image: '/images/blog-redefining.jpg',
  imageAlt: 'Homebuying with Dr. Jan Duffy at Terra at Skyeview in Skye Canyon, Las Vegas',
  keywords:
    'homebuying with Dr. Jan Duffy, redefining homebuying, Terra at Skyeview, Skye Canyon, Century Communities Las Vegas NV 89166',
  type: 'article',
})

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ArticleStructuredData
        headline="How We're Redefining the Homebuying Experience at Skyeview"
        description="Homebuying with Dr. Jan Duffy at Terra at Skyeview: how buyer representation works for Century Communities new construction in Skye Canyon."
        url={`${SITE_URL}/blog/redefining-homebuying-experience`}
        image={`${SITE_URL}/images/blog-redefining.jpg`}
        datePublished="2025-01-15"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          {
            name: 'Redefining the Homebuying Experience',
            href: '/blog/redefining-homebuying-experience',
          },
        ]}
      />
      {children}
    </>
  )
}
