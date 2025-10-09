'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MobileMenu from '@/app/components/mobile-menu'

export default function HomePage() {

  return (
    <div className="relative min-h-dvh bg-background">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">Terra at Skyeview</span>
              <span className="text-xs text-gray-500 ml-2">by Century Communities</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-base font-semibold text-blue-600 transition">
                Home
              </Link>
              <Link href="/communities/skyeview" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                Available Homes
              </Link>
              <Link href="/about-dr-janet-duffy" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                About Dr. Jan
              </Link>
              <Link href="/blog" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                Blog
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                <a href="tel:702-919-7292">Contact</a>
              </Button>
            </nav>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Special Offers Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 py-6 px-4 text-center relative z-40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">🎉 Limited Time Special Offers</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-semibold">
            <span>Low Rates from 3.875% + Up to $5,000 Toward Closing!</span>
            <a href="/special-offers" className="underline hover:no-underline">
              View Offers →
            </a>
          </div>
        </div>
      </div>

      {/* Homepage Welcome Message */}
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] pt-20 pb-32">
        <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-pretty">
            Terra at Skyeview
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            by Century Communities
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 text-pretty">
            New Two-Story Homes from $479,990 in Skye Canyon, Las Vegas
          </p>
          <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg mb-6">
            <p className="text-sm font-semibold">
              ⭐ Dr. Jan Duffy - Preferred Buyer's Agent
            </p>
            <p className="text-xs">Get the Best Price & Exclusive Deals • FREE Consults to Buyers</p>
          </div>
          
          <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-lg font-bold text-red-900 mb-2">⚠️ MUST READ BEFORE VISITING:</p>
            <p className="text-base text-gray-900 font-semibold">
              Contact Dr. Jan Duffy FIRST to be registered with Century Communities. 
              This ensures you get the best price and her expert representation. 
              <span className="text-red-600">Don't visit alone!</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:702-919-7292"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg animate-pulse"
            >
              📞 Call Dr. Jan FIRST: (702) 919-7292
            </a>
            <a
              href="http://drjanduffy.realscout.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors"
            >
              Search Available Homes
            </a>
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg text-base font-semibold transition-colors"
            >
              Start Your Home Search
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="mb-1"><strong className="text-foreground">Century Communities</strong> - Top 10 National Homebuilder</p>
            <p className="mb-1">📍 Model Home: <span className="font-semibold text-foreground">8592 Vanhoy Creek Street, Las Vegas, NV 89166</span></p>
            <p>Your Preferred Buyer's Agent: <span className="font-semibold text-foreground">Dr. Jan Duffy</span></p>
            <p className="mt-1">Call: <a href="tel:702-919-7292" className="text-blue-600 hover:underline">(702) 919-7292</a></p>
          </div>
        </div>
      </div>

      {/* Critical Notice */}
      <div className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-bold mb-1">⚠️ IMPORTANT: Contact Dr. Jan Duffy BEFORE Visiting!</p>
          <p className="text-sm">You must be registered with the builder to get the best price and ensure Dr. Jan can represent you.</p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">How It Works</h2>
            <p className="text-xl text-gray-700 mb-4">Three simple steps to your dream home</p>
            <div className="max-w-3xl mx-auto bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-8">
              <p className="text-sm font-bold text-gray-900 mb-2">
                🔒 CRITICAL: Contact Dr. Jan Duffy BEFORE Your First Visit
              </p>
              <p className="text-sm text-gray-700">
                To get the best price and ensure Dr. Jan can represent you, she must register you with 
                Century Communities before you tour the model homes. Call <a href="tel:702-919-7292" className="text-blue-600 font-bold hover:underline">(702) 919-7292</a> now!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3 text-center bg-blue-50 rounded-xl p-6 border-2 border-blue-600">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                1
              </div>
              <p className="text-xl font-bold text-gray-900">Call Dr. Jan FIRST</p>
              <p className="text-base text-gray-700 font-semibold">Register with builder before visiting</p>
              <p className="text-sm text-gray-600">Required to get best price & ensure representation</p>
              <Button asChild className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold">
                <a href="tel:702-919-7292">Call (702) 919-7292</a>
              </Button>
            </div>
            <div className="flex flex-col items-center gap-3 text-center bg-gray-50 rounded-xl p-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                2
              </div>
              <p className="text-xl font-bold text-gray-900">Visit Model Homes</p>
              <p className="text-base text-gray-700">Tour at 8592 Vanhoy Creek Street</p>
              <p className="text-sm text-gray-600">With Dr. Jan registered, you're protected</p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center bg-gray-50 rounded-xl p-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                3
              </div>
              <p className="text-xl font-bold text-gray-900">Get Best Price</p>
              <p className="text-base text-gray-700">Dr. Jan negotiates for you</p>
              <p className="text-sm text-gray-600">Save thousands with expert representation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Property Search Widget */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Search All Available Homes in Las Vegas
            </h2>
            <p className="text-xl text-gray-700 mb-2">
              Explore Terra at Skyeview and surrounding communities
            </p>
            <p className="text-lg text-gray-600">
              Dr. Jan Duffy can help you find your perfect home with exclusive buyer benefits
            </p>
          </div>
          <div className="flex justify-center">
            <div dangerouslySetInnerHTML={{
              __html: `
                <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module"></script>
                <style>
                  realscout-advanced-search {
                    --rs-as-button-text-color: #ffffff;
                    --rs-as-background-color: #ffffff;
                    --rs-as-button-color: #F26419;
                    --rs-as-widget-width: 500px !important;
                  }
                </style>
                <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
              `
            }} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Terra Skyeview | Homes By Dr. Jan Duffy S.0197614. All rights reserved. | Equal Housing Opportunity</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
