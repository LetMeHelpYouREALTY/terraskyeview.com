import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We\'re Redefining the Homebuying Experience | Terra Skyeview Blog',
  description:
    'Discover the modern approach to buying new construction at Skyeview at Skye Canyon. Browse online, streamlined process, and expert guidance from Dr. Jan Duffy. Say goodbye to bidding wars.',
  keywords:
    'homebuying experience, online home shopping, new construction Las Vegas, streamlined homebuying, Dr. Jan Duffy, Skye Canyon homes',
  alternates: {
    canonical: 'https://www.terraskyeview.com/blog/redefining-homebuying-experience',
  },
  openGraph: {
    title: 'How We\'re Redefining the Homebuying Experience at Skyeview',
    description:
      'Say goodbye to stress and bidding wars. Discover a modern, streamlined approach to buying new construction in Las Vegas.',
    images: ['/blog/redefining-experience.jpg'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We\'re Redefining the Homebuying Experience',
    description:
      'Modern approach to buying new construction at Skyeview at Skye Canyon.',
    images: ['/blog/redefining-experience.jpg'],
  },
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

