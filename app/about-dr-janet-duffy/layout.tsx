import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Dr. Janet Duffy | Preferred Buyer\'s Agent at Skyeview',
  description:
    'Meet Dr. Janet Duffy, the preferred buyer\'s agent at Skyeview at Skye Canyon. Get the best price, expert negotiation, and $5,000 closing assistance. FREE to buyers! Call 702-919-7292.',
  keywords:
    'Dr. Janet Duffy, buyer\'s agent Las Vegas, Skye Canyon realtor, new construction agent, preferred agent, best price negotiation, FREE buyer representation',
  openGraph: {
    title: 'About Dr. Janet Duffy | Your Preferred Buyer\'s Agent',
    description:
      'Expert buyer representation at Skyeview. Get the best price and deals. FREE to buyers—seller pays commission.',
    images: ['/og-dr-janet.jpg'],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dr. Janet Duffy | Preferred Buyer\'s Agent',
    description:
      'Expert buyer representation at Skyeview at Skye Canyon.',
    images: ['/og-dr-janet.jpg'],
  },
}

export default function AboutDrJanetDuffyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

