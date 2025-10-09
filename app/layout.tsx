import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
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
  title: 'Terra Skyeview | New Homes in Las Vegas | Dr. Janet Duffy',
  description: 'Discover new construction homes at Skyeview in Skye Canyon, Las Vegas. 3-5 bedroom homes from $479,990. Expert guidance from Dr. Janet Duffy. Call 702-568-0333.',
  keywords: 'Las Vegas new homes, Skye Canyon, Skyeview, Dr. Janet Duffy, real estate Las Vegas, new construction',
  openGraph: {
    title: 'Terra Skyeview | New Homes in Las Vegas',
    description: 'Discover new construction homes at Skyeview in Skye Canyon, Las Vegas. From $479,990.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terra Skyeview | New Homes in Las Vegas',
    description: 'Discover new construction homes at Skyeview in Skye Canyon, Las Vegas. From $479,990.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <DeployBanner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
