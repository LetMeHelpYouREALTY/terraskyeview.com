import type { Metadata } from 'next'
import {
  ArticleStructuredData,
  BreadcrumbStructuredData,
} from '@/app/components/structured-data'
import { pageMetadata } from '@/lib/seo'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'What Are Closing Costs? Homebuyer Guide',
  description:
    'Homebuying with Dr. Jan Duffy: closing-cost guide for Terra at Skyeview in Skye Canyon, including up to $5,000 in lender assistance. Call (702) 919-7292.',
  path: '/blog/what-are-closing-costs',
  image: '/images/blog-closing-costs.jpg',
  imageAlt: 'Homebuying with Dr. Jan Duffy closing-cost guide for Terra at Skyeview, Las Vegas',
  keywords:
    'homebuying with Dr. Jan Duffy, closing costs Las Vegas, Terra at Skyeview, Skye Canyon, $5000 closing assistance',
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
        headline="What Are Closing Costs? Complete Homebuyer Guide"
        description="Homebuying with Dr. Jan Duffy: closing-cost guide for Terra at Skyeview in Skye Canyon, including up to $5,000 in lender assistance."
        url={`${SITE_URL}/blog/what-are-closing-costs`}
        image={`${SITE_URL}/images/blog-closing-costs.jpg`}
        datePublished="2025-01-20"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: 'What Are Closing Costs?', href: '/blog/what-are-closing-costs' },
        ]}
      />
      {children}
    </>
  )
}
