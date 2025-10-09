import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Buyers | Complete Guide to Buying at Skyeview | Dr. Janet Duffy',
  description:
    'Everything homebuyers need to know about purchasing at Skyeview at Skye Canyon. Online browsing, expert representation, financing options, and home warranties. Contact Dr. Janet Duffy.',
  keywords:
    'homebuyer guide, buying process, real estate agent, home financing, home warranty, Las Vegas new homes, Dr. Janet Duffy, Skye Canyon',
  openGraph: {
    title: 'For Buyers | Complete Homebuying Guide',
    description:
      'Everything you need to buy your dream home at Skyeview at Skye Canyon with expert guidance from Dr. Janet Duffy.',
    images: ['/og-buyers.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Buyers | Complete Homebuying Guide',
    description:
      'Everything you need to buy your dream home at Skyeview at Skye Canyon.',
    images: ['/og-buyers.jpg'],
  },
}

export default function ForBuyersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

