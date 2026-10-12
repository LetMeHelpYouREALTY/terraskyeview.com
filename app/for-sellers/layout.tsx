import type { Metadata } from 'next'
import { BreadcrumbStructuredData } from '@/app/components/structured-data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Sell to Buy at Terra at Skyeview | Las Vegas NV 89166',
  description:
    'Sell your Las Vegas home and buy a new two-story Century Communities home at Terra at Skyeview in Skye Canyon. Dr. Jan Duffy coordinates both sides. Call (702) 919-7292.',
  path: '/for-sellers',
  image: '/images/residence-1943.jpg',
  imageAlt:
    'Two-story Terra at Skyeview home by Century Communities in Skye Canyon, Las Vegas NV 89166',
  keywords:
    'sell to buy Terra at Skyeview, listing agent Las Vegas NV 89166, Dr. Jan Duffy seller, Skye Canyon new construction, Century Communities move-up',
})

export default function ForSellersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', href: '/' },
          { name: 'For Sellers', href: '/for-sellers' },
        ]}
      />
      {children}
    </>
  )
}
