import type { Metadata } from 'next'
import { BreadcrumbStructuredData } from '@/app/components/structured-data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'For Buyers | Terra at Skyeview Las Vegas NV 89166',
  description:
    'Homebuying with Dr. Jan Duffy: buyer representation, financing from 3.875%, and Century Communities registration at Terra at Skyeview. Call (702) 919-7292. 8592 Vanhoy Creek Street, Las Vegas, NV 89166.',
  path: '/for-buyers',
  image: '/images/for-buyers.jpg',
  imageAlt: 'Homebuying with Dr. Jan Duffy for buyers at Terra at Skyeview, Las Vegas',
  keywords:
    'homebuying with Dr. Jan Duffy, for buyers Terra at Skyeview, Century Communities buyer agent, Las Vegas NV 89166, Skye Canyon',
})

export default function ForBuyersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', href: '/' },
          { name: 'For Buyers', href: '/for-buyers' },
        ]}
      />
      {children}
    </>
  )
}
