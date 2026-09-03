import type { Metadata } from 'next'
import {
  BreadcrumbStructuredData,
  PlaceStructuredData,
} from '@/app/components/structured-data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Map of Terra at Skyeview | Skye Canyon Las Vegas NV 89166',
  description:
    'Map of Terra at Skyeview at 8592 Vanhoy Creek Street, Las Vegas, NV 89166. Homebuying with Dr. Jan Duffy in Skye Canyon near US-95 and Skye Canyon Park Drive. Call (702) 919-7292.',
  path: '/map',
  image: '/og-image.jpg',
  imageAlt: 'Map of Terra at Skyeview in Skye Canyon, Las Vegas NV 89166 for homebuying with Dr. Jan Duffy',
  keywords:
    'Terra at Skyeview map, 8592 Vanhoy Creek Street, Skye Canyon map, Las Vegas NV 89166, Skye Canyon Park Drive, US-95, Dr. Jan Duffy realtor, homebuying with Dr. Jan Duffy',
})

export default function MapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PlaceStructuredData />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', href: '/' },
          { name: 'Map of Terra at Skyeview', href: '/map' },
        ]}
      />
      {children}
    </>
  )
}
