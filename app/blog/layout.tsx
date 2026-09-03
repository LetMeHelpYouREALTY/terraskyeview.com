import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Blog | Terra at Skyeview Las Vegas NV 89166',
  description:
    'Homebuying with Dr. Jan Duffy: Las Vegas new-construction guides for Terra at Skyeview and Skye Canyon. Call (702) 919-7292. 8592 Vanhoy Creek Street, Las Vegas, NV 89166.',
  path: '/blog',
  image: '/images/front-porch.jpg',
  imageAlt: 'Homebuying with Dr. Jan Duffy blog for Terra at Skyeview in Las Vegas',
  keywords:
    'homebuying with Dr. Jan Duffy, Las Vegas real estate blog, Terra at Skyeview, Skye Canyon, Century Communities',
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
