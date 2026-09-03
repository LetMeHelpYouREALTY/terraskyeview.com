import type { Metadata } from 'next'
import { BreadcrumbStructuredData } from '@/app/components/structured-data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Skye Canyon Las Vegas NV 89166 | Buyer Agent Dr. Jan Duffy',
  description:
    'Homebuying with Dr. Jan Duffy in Skye Canyon, Las Vegas NV 89166. Terra at Skyeview at 8592 Vanhoy Creek Street. Parks, Marketplace, US-95 access. Call (702) 919-7292.',
  path: '/skye-canyon',
  image: '/images/amenities.jpg',
  imageAlt: 'Skye Canyon parks and trails near Terra at Skyeview for homebuying with Dr. Jan Duffy',
  keywords:
    'Skye Canyon Las Vegas, Skye Canyon 89166, Skye Canyon Park Drive, Terra at Skyeview, northwest Las Vegas realtor, Dr. Jan Duffy, Century Communities Skyeview, homebuying with Dr. Jan Duffy',
})

export default function SkyeCanyonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', href: '/' },
          { name: 'Skye Canyon', href: '/skye-canyon' },
        ]}
      />
      {children}
    </>
  )
}
