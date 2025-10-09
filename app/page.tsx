'use client'

export default function HomePage() {

  return (
    <div className="relative min-h-dvh bg-background">
      {/* Special Offers Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 py-3 px-4 text-center relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-semibold">
          <span>🎉 LIMITED TIME: Low Rates from 3.875% + Up to $5,000 Toward Closing!</span>
          <a href="/special-offers" className="underline hover:no-underline">
            View Offers →
          </a>
        </div>
      </div>

      {/* Homepage Welcome Message */}
      <div className="absolute inset-0 flex items-center justify-center pt-12">
        <div
          className="text-center px-4 sm:px-6 max-w-4xl mx-auto -translate-y-1/4"
        >
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
              ⭐ Dr. Janet Duffy - Preferred Buyer's Agent
            </p>
            <p className="text-xs">Get the Best Price & Exclusive Deals • FREE to Buyers</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="/communities/skyeview"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors"
            >
              View Available Homes
            </a>
            <a
              href="/special-offers"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg text-base font-semibold transition-colors"
            >
              Special Offers
            </a>
            <a
              href="/communities/skyeview#contact"
              className="inline-flex items-center gap-2 border-2 border-foreground hover:bg-muted text-foreground px-6 py-3 rounded-lg text-base font-semibold transition-colors"
            >
              Schedule a Tour
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="mb-1"><strong className="text-foreground">Century Communities</strong> - Top 10 National Homebuilder</p>
            <p>Your Preferred Buyer's Agent: <span className="font-semibold text-foreground">Dr. Janet Duffy</span></p>
            <p className="mt-1">Call: <a href="tel:702-568-0333" className="text-blue-600 hover:underline">702.568.0333</a></p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <p className="text-base font-bold text-gray-900">Get Pre-Qualified</p>
              <p className="text-sm text-gray-600">Determine your budget with loan pre-approval</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <p className="text-base font-bold text-gray-900">Start Your Home Search</p>
              <p className="text-sm text-gray-600">Browse homes online or visit in person</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <p className="text-base font-bold text-gray-900">Secure Your Home</p>
              <p className="text-sm text-gray-600">Complete form, pay deposit & sign contract</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
