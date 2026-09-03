import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Search, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import OfficeListingsBand from '@/app/components/office-listings-band'
import CalendlySection from '@/app/components/calendly-section'
import HomebuyingKicker from '@/app/components/homebuying-kicker'
import SiteFaq from '@/app/components/site-faq'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl text-center">
          <div className="mb-8">
            <HomebuyingKicker className="mb-4" />
            <h1 className="mb-4 text-9xl font-bold text-blue-600">404</h1>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Page Not Found
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Homebuying with Dr. Jan Duffy still starts at Terra at Skyeview,
              8592 Vanhoy Creek Street, Las Vegas, NV 89166. Call (702) 919-7292
              before you tour.
            </p>
            <div className="mb-6 flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/map" className="underline">
                89166 map
              </Link>
              <Link href="/realtor-services" className="underline">
                Realtor services
              </Link>
              <Link href="/skye-canyon" className="underline">
                Skye Canyon
              </Link>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
              <Link
                href="/"
                className="flex items-center justify-center gap-2"
              >
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a
                href="http://drjanduffy.realscout.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Search className="h-4 w-4" />
                Search Homes
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="tel:702-919-7292"
                className="flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Dr. Jan
              </a>
            </Button>
          </div>
        </div>
      </div>

      <OfficeListingsBand />
      <SiteFaq />
      <CalendlySection event="strategy" />
    </div>
  )
}
