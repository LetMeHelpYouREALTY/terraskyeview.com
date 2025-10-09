import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homebuying Process Guide | Step-by-Step Guide | Dr. Jan Duffy',
  description:
    'Learn the complete homebuying process from prequalification to closing. Expert guidance from Dr. Jan Duffy for buying your new home at Skyeview at Skye Canyon in Las Vegas.',
  keywords:
    'homebuying process, how to buy a home, Las Vegas home buying, prequalification, house hunting, home contract, closing process, Dr. Jan Duffy',
  openGraph: {
    title: 'Homebuying Process Guide | Dr. Jan Duffy',
    description:
      'Step-by-step guide to buying your dream home in Las Vegas. Expert guidance from prequalification to closing.',
    images: ['/og-process.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homebuying Process Guide | Dr. Jan Duffy',
    description:
      'Step-by-step guide to buying your dream home in Las Vegas.',
    images: ['/og-process.jpg'],
  },
}

export default function HomebuyingProcessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

