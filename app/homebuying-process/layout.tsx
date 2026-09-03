import type { Metadata } from 'next'
import { BreadcrumbStructuredData } from '@/app/components/structured-data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Homebuying Process | Terra at Skyeview Las Vegas NV 89166',
  description:
    'Homebuying with Dr. Jan Duffy from registration through closing at Terra at Skyeview in Skye Canyon. Call (702) 919-7292 before you tour. 8592 Vanhoy Creek Street, Las Vegas, NV 89166.',
  path: '/homebuying-process',
  image: '/images/homebuying.jpg',
  imageAlt: 'Homebuying with Dr. Jan Duffy process at Terra at Skyeview in Skye Canyon',
  keywords:
    'homebuying with Dr. Jan Duffy, homebuying process Las Vegas, Terra at Skyeview, Skye Canyon, Century Communities, NV 89166',
})

export default function HomebuyingProcessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', href: '/' },
          { name: 'Homebuying Process', href: '/homebuying-process' },
        ]}
      />
      {children}
    </>
  )
}
