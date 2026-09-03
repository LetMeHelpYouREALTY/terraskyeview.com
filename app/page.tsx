import Link from 'next/link'
import { Button } from '@/components/ui/button'
import SiteHeader from '@/app/components/site-header'
import RealScoutSearch from '@/app/components/realscout-search'

export default function HomePage() {
  return (
    <div className="relative min-h-dvh bg-background">
      <SiteHeader current="home" />

      <div className="relative z-40 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-6 text-center text-gray-900">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-2xl font-bold md:text-3xl">
            Limited Time Special Offers
          </p>
          <div className="flex flex-col items-center justify-center gap-2 text-sm font-semibold sm:flex-row">
            <span>Rates from 3.875% + Up to $5,000 Toward Closing</span>
            <Link href="/special-offers" className="underline hover:no-underline">
              View Offers
            </Link>
          </div>
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center pb-32 pt-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="mb-4 text-pretty text-4xl font-bold text-foreground md:text-6xl">
            Terra at Skyeview
          </h1>
          <p className="mb-2 text-xl text-muted-foreground">
            by Century Communities
          </p>
          <p className="mb-4 text-pretty text-lg text-muted-foreground md:text-xl">
            New Two-Story Homes from $479,990 in Skye Canyon, Las Vegas
          </p>
          <div className="mb-6 inline-block rounded-lg bg-yellow-400 px-6 py-3 text-gray-900">
            <p className="text-sm font-semibold">
              Dr. Jan Duffy — Preferred Buyer&apos;s Agent
            </p>
            <p className="text-xs">
              Best available pricing and exclusive deals. Consults are free to
              buyers.
            </p>
          </div>

          <div className="mx-auto mb-8 max-w-2xl rounded-xl border-2 border-red-500 bg-red-50 p-6">
            <p className="mb-2 text-lg font-bold text-red-900">
              Read this before visiting
            </p>
            <p className="text-base font-semibold text-gray-900">
              Contact Dr. Jan Duffy first so she can register you with Century
              Communities. That keeps the best price on the table and lets her
              represent you. Do not visit the models unregistered.
            </p>
          </div>

          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:702-919-7292"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-red-700"
            >
              Call Dr. Jan first: (702) 919-7292
            </a>
            <a
              href="https://drjanduffy.realscout.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Search Available Homes
            </a>
            <a
              href="https://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-base font-semibold text-gray-900 transition-colors hover:bg-yellow-300"
            >
              Start Your Home Search
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="mb-1">
              <strong className="text-foreground">Century Communities</strong> —
              Top 10 National Homebuilder
            </p>
            <p className="mb-1">
              Model Home:{' '}
              <span className="font-semibold text-foreground">
                8592 Vanhoy Creek Street, Las Vegas, NV 89166
              </span>
            </p>
            <p>
              Preferred Buyer&apos;s Agent:{' '}
              <Link
                href="/about-dr-janet-duffy"
                className="font-semibold text-blue-600 hover:underline"
              >
                Dr. Jan Duffy
              </Link>
            </p>
            <p className="mt-1">
              Call:{' '}
              <a href="tel:702-919-7292" className="text-blue-600 hover:underline">
                (702) 919-7292
              </a>
            </p>
            <p className="mt-2 text-xs">
              <Link href="/for-buyers" className="text-blue-600 hover:underline">
                Why work with a buyer&apos;s agent?
              </Link>
              {' | '}
              <Link
                href="/homebuying-process"
                className="ml-2 text-blue-600 hover:underline"
              >
                Learn the process
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-600 py-4 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-1 text-lg font-bold">
            Contact Dr. Jan Duffy before visiting
          </p>
          <p className="text-sm">
            Registration with the builder is required for the best price and for
            Dr. Jan to represent you.
          </p>
        </div>
      </div>

      <section className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              How Representation Works
            </h2>
            <p className="mb-4 text-xl text-gray-700">
              Three steps to a new Terra home
            </p>
            <div className="mx-auto mb-8 max-w-3xl rounded-lg border-2 border-yellow-400 bg-yellow-50 p-4">
              <p className="mb-2 text-sm font-bold text-gray-900">
                Call before the first model-home visit
              </p>
              <p className="text-sm text-gray-700">
                Dr. Jan must register you with Century Communities before you
                tour. Call{' '}
                <a
                  href="tel:702-919-7292"
                  className="font-bold text-blue-600 hover:underline"
                >
                  (702) 919-7292
                </a>
                .
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center gap-3 rounded-xl border-2 border-blue-600 bg-blue-50 p-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900">Call Dr. Jan first</h3>
              <p className="text-base font-semibold text-gray-700">
                Register with the builder before visiting
              </p>
              <p className="text-sm text-gray-600">
                Required for best price and representation.{' '}
                <Link
                  href="/blog/should-i-use-realtor-planned-community"
                  className="text-blue-600 hover:underline"
                >
                  Learn why
                </Link>
              </p>
              <Button asChild className="mt-2 bg-blue-600 font-bold text-white hover:bg-blue-700">
                <a href="tel:702-919-7292">Call (702) 919-7292</a>
              </Button>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl bg-gray-50 p-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900">Visit model homes</h3>
              <p className="text-base text-gray-700">
                Tour at 8592 Vanhoy Creek Street
              </p>
              <p className="text-sm text-gray-600">
                With Dr. Jan registered, you keep representation
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl bg-gray-50 p-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900">Get the best price</h3>
              <p className="text-base text-gray-700">Dr. Jan negotiates for you</p>
              <p className="text-sm text-gray-600">
                Expert representation on upgrades, credits, and contract terms
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Search Available Homes in Las Vegas
            </h2>
            <p className="mb-2 text-xl text-gray-700">
              Explore Terra at Skyeview and surrounding communities
            </p>
            <p className="text-lg text-gray-600">
              Dr. Jan Duffy helps buyers compare inventory with exclusive
              representation
            </p>
          </div>
          <RealScoutSearch />
        </div>
      </section>

      <footer className="mt-12 bg-gray-900 py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p className="mb-2">
              Dr. Jan Duffy | BHHS Nevada Properties | S.0197614
            </p>
            <p className="mb-2">
              8592 Vanhoy Creek Street, Las Vegas, NV 89166 |{' '}
              <a href="tel:702-919-7292" className="hover:text-white">
                (702) 919-7292
              </a>
            </p>
            <p className="mb-2">
              &copy; 2026 Terra Skyeview | Homes By Dr. Jan Duffy. All rights
              reserved. | Equal Housing Opportunity
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
