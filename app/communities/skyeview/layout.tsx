import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skyeview Terra at Skye Canyon | New Homes Las Vegas | Dr. Janet Duffy',
  description:
    'Discover new construction homes at Skyeview Terra in Skye Canyon, Las Vegas. 3-5 bedroom homes from $479,990. Models open daily. Contact Dr. Janet Duffy at 702-568-0333.',
  keywords:
    'Las Vegas new homes, Skye Canyon, Skyeview Terra, new construction Las Vegas, homes for sale Las Vegas, Dr. Janet Duffy, real estate Las Vegas',
  openGraph: {
    title: 'Skyeview Terra at Skye Canyon | New Homes in Las Vegas',
    description:
      'Discover new construction homes at Skyeview Terra. 3-5 bedroom homes from $479,990 in the master-planned Skye Canyon community.',
    images: ['/og-skyeview.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skyeview Terra at Skye Canyon | New Homes in Las Vegas',
    description:
      'Discover new construction homes at Skyeview Terra. 3-5 bedroom homes from $479,990.',
    images: ['/og-skyeview.jpg'],
  },
}

export default function SkyeviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

