import Link from 'next/link'
import { Home, Search, Phone, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. But your dream home at Terra at Skyeview by Century Communities does!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/" className="flex items-center justify-center gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/communities/skyeview" className="flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              View Homes
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href="tel:702-919-7292" className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call Dr. Janet
            </a>
          </Button>
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Looking for something specific?</span>
          </p>
          <ul className="text-left space-y-2 text-sm text-gray-700 max-w-md mx-auto">
            <li>
              <Link href="/communities/skyeview" className="text-blue-600 hover:underline">
                → Available Homes at Terra at Skyeview
              </Link>
            </li>
            <li>
              <Link href="/special-offers" className="text-blue-600 hover:underline">
                → Special Financing Offers
              </Link>
            </li>
            <li>
              <Link href="/about-dr-janet-duffy" className="text-blue-600 hover:underline">
                → Meet Dr. Jan Duffy - Your Buyer's Agent
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-blue-600 hover:underline">
                → The Front Porch Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm font-semibold text-gray-900 mb-1">
            ⭐ Dr. Jan Duffy - Your Preferred Buyer's Agent
          </p>
          <p className="text-xs text-gray-600">
            Get the best price & expert negotiation • FREE to buyers (seller pays)
          </p>
        </div>
      </div>
    </div>
  )
}

