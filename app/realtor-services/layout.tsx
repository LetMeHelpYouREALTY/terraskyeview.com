import type { Metadata } from 'next'
import {
  BreadcrumbStructuredData,
  RealtorServiceStructuredData,
} from '@/app/components/structured-data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Realtor Services | Buyer Agent Skye Canyon Las Vegas NV 89166',
  description:
    'Homebuying with Dr. Jan Duffy: Las Vegas buyer-agent services at Terra at Skyeview in Skye Canyon. Builder registration, negotiation, contracts. Call (702) 919-7292. 8592 Vanhoy Creek Street, Las Vegas, NV 89166.',
  path: '/realtor-services',
  image: '/images/dr-jan-duffy.png',
  imageAlt: 'Dr. Jan Duffy realtor services for homebuying at Terra at Skyeview, Las Vegas NV 89166',
  keywords:
    'Dr. Jan Duffy realtor, buyer agent Skye Canyon, Las Vegas NV 89166 realtor, new construction buyer agent, Terra at Skyeview realtor, BHHS Nevada Properties, S.0197614, homebuying with Dr. Jan Duffy',
})

export default function RealtorServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <RealtorServiceStructuredData />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', href: '/' },
          { name: 'Realtor Services', href: '/realtor-services' },
        ]}
      />
      {children}
    </>
  )
}
