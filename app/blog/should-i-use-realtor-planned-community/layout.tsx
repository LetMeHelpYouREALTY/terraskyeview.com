import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Should I Use a Realtor to Buy in a Planned Community? | Dr. Janet Duffy',
  description:
    'Discover why using Dr. Janet Duffy as your buyer\'s agent at Terra at Skyeview by Century Communities ensures the best price, expert negotiation, and $5,000 closing cost assistance. FREE to buyers!',
  keywords:
    'buyer\'s agent, Terra at Skyeview, Century Communities, realtor for new construction, Skye Canyon, Dr. Janet Duffy, planned community expert, Las Vegas realtor, best price negotiation',
  openGraph: {
    title: 'Should I Use a Realtor in a Planned Community? 5 Reasons Why',
    description:
      'Learn why Dr. Janet Duffy is the preferred buyer\'s agent at Skyeview. Get the best price and expert guidance at NO COST to you.',
    images: ['/blog/buyers-agent.jpg'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Should I Use a Realtor in a Planned Community?',
    description:
      'Dr. Janet Duffy: Your preferred buyer\'s agent at Skyeview at Skye Canyon.',
    images: ['/blog/buyers-agent.jpg'],
  },
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

