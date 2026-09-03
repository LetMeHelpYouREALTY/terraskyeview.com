import type { Metadata } from 'next'
import {
  BreadcrumbStructuredData,
  RealEstateListingStructuredData,
} from '@/app/components/structured-data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Terra at Skyeview Homes | Skye Canyon Las Vegas NV 89166',
  description:
    'Homebuying with Dr. Jan Duffy at Terra at Skyeview by Century Communities. Two-story homes from $479,990 in Skye Canyon. Call (702) 919-7292. 8592 Vanhoy Creek Street, Las Vegas, NV 89166.',
  path: '/communities/skyeview',
  image: '/og-image.jpg',
  imageAlt: 'Homebuying with Dr. Jan Duffy at Terra at Skyeview, Skye Canyon, Las Vegas NV 89166',
  keywords:
    'homebuying with Dr. Jan Duffy, Terra at Skyeview, Century Communities, Skye Canyon, Las Vegas NV 89166, new two-story homes',
})

export default function SkyeviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <RealEstateListingStructuredData />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', href: '/' },
          { name: 'Terra at Skyeview', href: '/communities/skyeview' },
        ]}
      />
      {children}
    </>
  )
}
