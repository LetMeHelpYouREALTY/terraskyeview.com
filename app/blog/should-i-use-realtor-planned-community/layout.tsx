import type { Metadata } from 'next'
import {
  ArticleStructuredData,
  BreadcrumbStructuredData,
} from '@/app/components/structured-data'
import { pageMetadata } from '@/lib/seo'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Should I Use a Realtor in a Planned Community?',
  description:
    'Homebuying with Dr. Jan Duffy at Terra at Skyeview: why buyers register a buyer’s agent before touring Century Communities in Skye Canyon. Call (702) 919-7292.',
  path: '/blog/should-i-use-realtor-planned-community',
  image: '/images/blog-use-realtor.jpg',
  imageAlt: 'Homebuying with Dr. Jan Duffy at Terra at Skyeview in Skye Canyon, Las Vegas',
  keywords:
    'homebuying with Dr. Jan Duffy, buyer agent planned community, Terra at Skyeview, Century Communities, Skye Canyon Las Vegas NV 89166',
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
        headline="Should I Use a Realtor to Buy a Home in a Planned Community?"
        description="Homebuying with Dr. Jan Duffy at Terra at Skyeview: why buyers register a buyer’s agent before touring Century Communities in Skye Canyon."
        url={`${SITE_URL}/blog/should-i-use-realtor-planned-community`}
        image={`${SITE_URL}/images/blog-use-realtor.jpg`}
        datePublished="2025-02-25"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          {
            name: 'Should I Use a Realtor in a Planned Community?',
            href: '/blog/should-i-use-realtor-planned-community',
          },
        ]}
      />
      {children}
    </>
  )
}
