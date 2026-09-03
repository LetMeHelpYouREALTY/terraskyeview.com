import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Playfair_Display } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { googleVerificationMetadata } from '@/lib/seo'
import { SiteGraphStructuredData } from './components/structured-data'
import { GoogleAnalytics } from './google-analytics'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL('https://www.terraskyeview.com'),
    title: {
      default:
        'Homebuying with Dr. Jan Duffy | Terra at Skyeview Las Vegas NV 89166',
      template: '%s | Homebuying with Dr. Jan Duffy',
    },
    description:
      'Homebuying with Dr. Jan Duffy at Terra at Skyeview in Skye Canyon. New two-story homes from $479,990. Call (702) 919-7292 before you tour. 8592 Vanhoy Creek Street, Las Vegas, NV 89166.',
    keywords:
      'homebuying with Dr. Jan Duffy, Terra at Skyeview, Skye Canyon, Las Vegas NV 89166, Century Communities, buyer agent Las Vegas, new construction homes',
    authors: [{ name: 'Dr. Jan Duffy', url: 'https://www.terraskyeview.com/about-dr-janet-duffy' }],
    creator: 'Dr. Jan Duffy',
    publisher: 'Homes By Dr. Jan Duffy',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://www.terraskyeview.com',
      siteName: 'Homebuying with Dr. Jan Duffy',
      title: 'Homebuying with Dr. Jan Duffy | Terra at Skyeview Las Vegas',
      description:
        'Homebuying with Dr. Jan Duffy for Century Communities homes at Terra at Skyeview, 8592 Vanhoy Creek Street, Las Vegas, NV 89166. Call (702) 919-7292.',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 800,
          alt: 'Homebuying with Dr. Jan Duffy at Terra at Skyeview in Skye Canyon, Las Vegas',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@DrJanDuffy',
      creator: '@DrJanDuffy',
      title: 'Homebuying with Dr. Jan Duffy | Terra at Skyeview',
      description:
        'New construction homebuying with Dr. Jan Duffy in Skye Canyon, Las Vegas NV 89166.',
      images: ['/og-image.jpg'],
    },
    ...googleVerificationMetadata(),
    other: {
      'geo.region': 'US-NV',
      'geo.placename': 'Las Vegas',
      'geo.position': '36.316134;-115.32963',
      ICBM: '36.316134, -115.32963',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <SiteGraphStructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="lazyOnload"
          type="module"
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
