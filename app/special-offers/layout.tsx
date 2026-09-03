import type { Metadata } from 'next'
import { BreadcrumbStructuredData } from '@/app/components/structured-data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Special Offers & Financing | Terra at Skyeview Las Vegas',
  description:
    'Homebuying with Dr. Jan Duffy includes rates from 3.875% and up to $5,000 toward closing on select Terra at Skyeview homes. Call (702) 919-7292. 8592 Vanhoy Creek Street, Las Vegas, NV 89166.',
  path: '/special-offers',
  image: '/images/special-offers.jpg',
  imageAlt: 'Homebuying with Dr. Jan Duffy special offers at Terra at Skyeview, Las Vegas NV 89166',
  keywords:
    'homebuying with Dr. Jan Duffy, Terra at Skyeview financing, 3.875% rate, $5000 closing costs, Skye Canyon Las Vegas NV 89166',
})

export default function SpecialOffersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', href: '/' },
          { name: 'Special Offers', href: '/special-offers' },
        ]}
      />
      {children}
    </>
  )
}
