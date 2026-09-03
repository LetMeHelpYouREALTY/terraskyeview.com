import Link from 'next/link'
import { Home, Search, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import OfficeListingsBand from '@/app/components/office-listings-band'
import CalendlySection from '@/app/components/calendly-section'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl text-center">
          <div className="mb-8">
            <h1 className="mb-4 text-9xl font-bold text-blue-600">404</h1>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Page Not Found
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              That page does not exist. Terra at Skyeview homes in Skye Canyon
              still do. Call Dr. Jan Duffy at (702) 919-7292 before you tour.
            </p>
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
      <CalendlySection event="strategy" />
    </div>
  )
}
