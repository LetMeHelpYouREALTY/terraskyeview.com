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
  title: 'Terra at Skyeview by Century Communities | New Homes Las Vegas | Dr. Janet Duffy',
  description: 'Discover new two-story homes at Terra at Skyeview in Skye Canyon, Las Vegas. 3-5 bedroom homes from $479,990 by Century Communities. Expert buyer representation from Dr. Janet Duffy. Call 702-568-0333.',
  keywords: 'Terra at Skyeview, Century Communities, Las Vegas new homes, Skye Canyon, Dr. Janet Duffy, Northwest Las Vegas, new construction homes',
  openGraph: {
    title: 'Terra at Skyeview by Century Communities | Las Vegas New Homes',
    description: 'Two-story new construction homes in Skye Canyon from $479,990. Expert buyer representation.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terra at Skyeview by Century Communities',
    description: 'New construction homes in Skye Canyon, Las Vegas from $479,990.',
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
