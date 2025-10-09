import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Buyers | Complete Guide to Buying at Terra at Skyeview | Dr. Janet Duffy',
  description:
    'Everything homebuyers need to know about purchasing at Terra at Skyeview by Century Communities. Online browsing, expert buyer representation, financing options, and home warranties. Contact Dr. Janet Duffy at 702-568-0333.',
  keywords:
    'Terra at Skyeview, Century Communities, homebuyer guide, buying process, buyer\'s agent, home financing, home warranty, Las Vegas new homes, Dr. Janet Duffy, Skye Canyon',
  openGraph: {
    title: 'For Buyers | Complete Homebuying Guide',
    description:
      'Everything you need to buy your dream home at Terra at Skyeview by Century Communities with expert buyer representation from Dr. Janet Duffy.',
    images: ['/og-buyers.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Buyers | Complete Homebuying Guide',
    description:
      'Expert buyer representation at Terra at Skyeview by Century Communities.',
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

