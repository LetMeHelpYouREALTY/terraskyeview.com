import type { Metadata } from 'next'
import { RealEstateListingStructuredData } from '@/app/components/structured-data'

export const metadata: Metadata = {
  title: 'Terra at Skyeview by Century Communities | New Homes Skye Canyon Las Vegas | Dr. Janet Duffy',
  description:
    'Discover new two-story homes at Terra at Skyeview by Century Communities in Skye Canyon, Las Vegas. 3-5 bedroom homes from $479,990. Models open daily. Expert buyer representation from Dr. Janet Duffy at 702-919-7292.',
  keywords:
    'Terra at Skyeview, Century Communities, Las Vegas new homes, Skye Canyon, two-story homes, Northwest Las Vegas, Dr. Janet Duffy, buyer\'s agent, new construction',
  openGraph: {
    title: 'Terra at Skyeview by Century Communities | Skye Canyon Las Vegas',
    description:
      'New two-story homes from $479,990 in Skye Canyon master-planned community. Expert buyer representation from Dr. Janet Duffy.',
    images: ['/og-skyeview.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terra at Skyeview by Century Communities',
    description:
      'Two-story homes from $479,990 in Skye Canyon, Las Vegas.',
    images: ['/og-skyeview.jpg'],
  },
}

export default function SkyeviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <RealEstateListingStructuredData />
      {children}
    </>
  )
}

