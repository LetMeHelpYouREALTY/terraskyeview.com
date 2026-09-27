import type { Metadata } from 'next'
import {
  AmenitiesItemListStructuredData,
  AmenitiesPlaceStructuredData,
  BreadcrumbStructuredData,
  FaqStructuredData,
} from '@/app/components/structured-data'
import { pageMetadata } from '@/lib/seo'
import { AMENITIES_FAQS, COMMUNITY_CITY, COMMUNITY_NAME } from '@/lib/amenities'

export const metadata: Metadata = pageMetadata({
  title: `Nearby Amenities in ${COMMUNITY_NAME}, ${COMMUNITY_CITY}`,
  description:
    'Nearby amenities map for Terra at Skyeview in Skye Canyon, Las Vegas NV 89166 — grocery, parks, dining, schools, healthcare, and commute context. Homebuying with Dr. Jan Duffy. Call (702) 919-7292.',
  path: '/amenities',
  image: '/og-image.jpg',
  imageAlt: `Nearby amenities map around Terra at Skyeview in Skye Canyon, Las Vegas`,
  keywords:
    'Terra at Skyeview amenities, Skye Canyon grocery, Skye Canyon parks, Las Vegas NV 89166 nearby, Smiths Skye Canyon Marketplace, Dr. Jan Duffy realtor',
})

export default function AmenitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AmenitiesPlaceStructuredData />
      <AmenitiesItemListStructuredData />
      <FaqStructuredData faqs={AMENITIES_FAQS} />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', href: '/' },
          { name: 'Nearby Amenities', href: '/amenities' },
        ]}
      />
      {children}
    </>
  )
}
