import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Front Porch Blog | Las Vegas Real Estate Insights | Dr. Janet Duffy',
  description:
    'Expert advice on Las Vegas real estate, home buying tips, neighborhood guides, and market trends from Dr. Janet Duffy. Your trusted resource for Skye Canyon and Las Vegas homes.',
  keywords:
    'Las Vegas real estate blog, home buying tips, Skye Canyon guide, Las Vegas market trends, Dr. Janet Duffy blog, real estate advice',
  openGraph: {
    title: 'The Front Porch Blog | Las Vegas Real Estate Insights',
    description:
      'Expert advice on Las Vegas real estate, home buying tips, and neighborhood guides from Dr. Janet Duffy.',
    images: ['/og-blog.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Front Porch Blog | Las Vegas Real Estate Insights',
    description:
      'Expert advice on Las Vegas real estate and home buying from Dr. Janet Duffy.',
    images: ['/og-blog.jpg'],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

