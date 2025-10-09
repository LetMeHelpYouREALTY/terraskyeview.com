import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Special Offers & Financing | Limited Time Deals | Dr. Janet Duffy',
  description:
    'Take advantage of special financing offers at Skyeview at Skye Canyon. Low rates starting at 3.875% plus up to $5,000 toward closing costs. Contact Dr. Janet Duffy at 702-568-0333.',
  keywords:
    'Las Vegas home financing, special offers, low interest rates, closing cost assistance, new home deals, FHA loans, VA loans, conventional loans, Dr. Janet Duffy',
  openGraph: {
    title: 'Special Offers & Financing | Terra Skyeview',
    description:
      'Low rates starting at 3.875% plus up to $5,000 toward closing costs on select homes.',
    images: ['/og-offers.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Special Offers & Financing | Terra Skyeview',
    description:
      'Low rates starting at 3.875% plus up to $5,000 toward closing costs.',
    images: ['/og-offers.jpg'],
  },
}

export default function SpecialOffersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

