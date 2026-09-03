import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { OrganizationStructuredData, RealEstateAgentStructuredData } from './components/structured-data'
import { FAQSchema } from './components/faq-schema'
import { GoogleAnalytics } from './google-analytics'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.terraskyeview.com'),
  title: 'Terra at Skyeview by Century Communities | New Homes Las Vegas | Dr. Jan Duffy',
  description: 'Discover new two-story homes at Terra at Skyeview in Skye Canyon, Las Vegas. 3-5 bedroom homes from $479,990 by Century Communities. Expert buyer representation from Dr. Jan Duffy. Call 702-919-7292.',
  keywords: 'Terra at Skyeview, Century Communities, Las Vegas new homes, Skye Canyon, Dr. Jan Duffy, Northwest Las Vegas, new construction homes, buyer agent Las Vegas, new homes Las Vegas 89166',
  authors: [{ name: 'Dr. Jan Duffy', url: 'https://www.terraskyeview.com/about-dr-janet-duffy' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Terra at Skyeview',
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
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE_HERE',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.terraskyeview.com',
    siteName: 'Terra at Skyeview',
    title: 'Terra at Skyeview by Century Communities | Las Vegas New Homes',
    description: 'Two-story new construction homes in Skye Canyon from $479,990. Expert buyer representation by Dr. Jan Duffy.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Terra at Skyeview by Century Communities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DrJanDuffy',
    creator: '@DrJanDuffy',
    title: 'Terra at Skyeview by Century Communities',
    description: 'New construction homes in Skye Canyon, Las Vegas from $479,990.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.terraskyeview.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationStructuredData />
        <RealEstateAgentStructuredData />
        <FAQSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="lazyOnload"
          type="module"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
