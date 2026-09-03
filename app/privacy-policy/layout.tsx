import type { Metadata } from 'next'
import { BreadcrumbStructuredData } from '@/app/components/structured-data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy | Terra at Skyeview',
  description:
    'Privacy policy for homebuying with Dr. Jan Duffy at Terra at Skyeview. Dr. Jan Duffy | BHHS Nevada Properties | S.0197614. 8592 Vanhoy Creek Street, Las Vegas, NV 89166.',
  path: '/privacy-policy',
  keywords:
    'homebuying with Dr. Jan Duffy, Terra at Skyeview privacy policy, Dr. Jan Duffy S.0197614',
})

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', href: '/' },
          { name: 'Privacy Policy', href: '/privacy-policy' },
        ]}
      />
      {children}
    </>
  )
}
