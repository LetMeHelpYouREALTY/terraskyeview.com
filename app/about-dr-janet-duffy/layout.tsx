import type { Metadata } from 'next'
import { BreadcrumbStructuredData } from '@/app/components/structured-data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'About Dr. Jan Duffy | Terra at Skyeview Las Vegas NV 89166',
  description:
    'Homebuying with Dr. Jan Duffy at Terra at Skyeview in Skye Canyon. Licensed Nevada REALTOR® S.0197614, BHHS Nevada Properties. Call (702) 919-7292 before you tour. 8592 Vanhoy Creek Street, Las Vegas, NV 89166.',
  path: '/about-dr-janet-duffy',
  image: '/images/dr-jan-duffy.png',
  imageAlt: 'Dr. Jan Duffy, homebuying specialist at Terra at Skyeview in Las Vegas NV 89166',
  keywords:
    'homebuying with Dr. Jan Duffy, about Dr. Jan Duffy, Terra at Skyeview, Skye Canyon realtor, BHHS Nevada Properties, S.0197614, Las Vegas NV 89166',
  type: 'profile',
})

export default function AboutDrJanetDuffyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', href: '/' },
          { name: 'About Dr. Jan Duffy', href: '/about-dr-janet-duffy' },
        ]}
      />
      {children}
    </>
  )
}
