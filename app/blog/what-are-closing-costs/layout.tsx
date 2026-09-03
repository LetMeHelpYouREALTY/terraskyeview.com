import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Are Closing Costs? Complete Guide for Homebuyers | Dr. Jan Duffy',
  description:
    'Learn about closing costs when buying a home at Skyeview at Skye Canyon. Get up to $5,000 in assistance with preferred lenders. Expert guidance from Dr. Jan Duffy at 702-919-7292.',
  keywords:
    'closing costs, homebuying costs, Las Vegas closing costs, mortgage fees, down payment, title insurance, Dr. Jan Duffy, Skye Canyon',
  alternates: {
    canonical: 'https://www.terraskyeview.com/blog/what-are-closing-costs',
  },
  openGraph: {
    title: 'What Are Closing Costs? Complete Homebuyer Guide',
    description:
      'Understand closing costs and how to reduce them. Up to $5,000 assistance available with preferred lenders at Skyeview.',
    images: ['/blog/closing-costs.jpg'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Are Closing Costs? Complete Guide',
    description:
      'Learn about closing costs and get up to $5,000 in assistance at Skyeview at Skye Canyon.',
    images: ['/blog/closing-costs.jpg'],
  },
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

