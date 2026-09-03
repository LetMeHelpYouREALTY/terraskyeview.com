'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, Tag, ArrowLeft, CheckCircle, Home, Shield, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import OfficeListingsBand from '@/app/components/office-listings-band'
import CalendlySection from '@/app/components/calendly-section'

export default function RedefinigHomebuyingArticle() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold">Terra</span>
              <span className="text-2xl font-light">Skyeview</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-blue-600 transition">
                Home
              </Link>
              <Link href="/communities/skyeview" className="text-sm font-medium hover:text-blue-600 transition">
                Available Homes
              </Link>
              <Link href="/special-offers" className="text-sm font-medium hover:text-blue-600 transition">
                Special Offers
              </Link>
              <Link href="/blog" className="text-sm font-medium text-blue-600">
                Blog
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="tel:702-919-7292">Contact Us</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/blog" className="hover:text-blue-600 transition">
              The Front Porch
            </Link>
            <span>/</span>
            <span className="text-gray-900">How We're Redefining the Homebuying Experience</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="inline-flex items-center gap-1">
                <Tag className="w-4 h-4" />
                Home Buying Tips
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 15, 2025
              </span>
              <span className="inline-flex items-center gap-1">
                <User className="w-4 h-4" />
                Dr. Jan Duffy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We're Redefining the Homebuying Experience at Skyeview
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Say goodbye to stress and bidding wars and find your perfect home with a modern, streamlined approach to buying new construction.
            </p>
          </div>

          {/* Featured Image Placeholder */}
          <div className="relative mb-12 h-96 overflow-hidden rounded-2xl">
            <Image
              src="/images/blog-redefining.jpg"
              alt="Homebuyer touring a Terra at Skyeview new construction home in Skye Canyon, Las Vegas"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <OfficeListingsBand />

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Many homebuyers spend days or even weeks looking for a real estate agent, exploring available homes online, 
              arranging for viewings, and submitting offers, only to discover their chosen home is in the center of a bidding 
              war or already under contract. Those who successfully navigate this initial stage of buying a pre-owned home 
              will then have to work through scheduling and managing inspections, appraisals, and further negotiations before 
              closing, which is often months later.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              By working with Dr. Jan Duffy and choosing new construction at Skyeview at Skye Canyon, you can bypass a 
              great deal of the typical resale homebuying process. We've reinvented the entire experience by focusing on 
              digital innovation—shop where and when it best suits you—exceptional efficiency, stellar customer satisfaction, 
              and true quality construction.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Browse and Buy a Home Online
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              In a day and age when you can buy just about anything from the comfort of your own home, why shouldn't this 
              be true when shopping for a house? We offer a completely modern homebuying process. Simply browse our collection 
              of stylish and modern homes online, and once you find the perfect fit, start your purchase from a computer or 
              phone any time of day or night.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <p className="text-gray-800 font-medium">
                "The ability to browse homes online and schedule tours instantly made our home search so much easier. 
                Dr. Jan Duffy was available to answer all our questions, even in the evenings!"
              </p>
              <p className="text-gray-600 text-sm mt-2">— Recent Skyeview Homebuyer</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Streamlined Process Reduces the Stress of Homebuying
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              When you choose to buy a newly constructed home at Skyeview at Skye Canyon with Dr. Jan Duffy, you'll 
              experience one of the most efficient and streamlined real estate processes in the market today.
            </p>

            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Get Pre-Qualified</h3>
                  <p className="text-gray-700">
                    Obtain a no-strings-attached preliminary assessment of your purchasing power (called prequalification) 
                    through our preferred lenders. This will help you determine your homebuying budget. The prequalification 
                    process is simple: you provide a snapshot of your finances, the lender runs a credit check, and then you'll 
                    know whether you're potentially a good match to qualify for a mortgage with rates starting at 3.875%.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Begin Your Home Search</h3>
                  <p className="text-gray-700">
                    Many buyers cite the quality of the neighborhood as the most important factor in home selection, which is 
                    why Skyeview at Skye Canyon is located in one of Las Vegas's premier master-planned communities. Browse 
                    available homes online, explore floor plans, and schedule an in-person tour with Dr. Jan Duffy to see 
                    the community amenities and model homes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Your Home</h3>
                  <p className="text-gray-700">
                    The beauty of buying a newly built home is that you can enter a preliminary contract once you're qualified, 
                    locking in your home choice and protecting it from other potential buyers. It's as easy as completing our 
                    online buying form and paying an initial deposit. Plus, once you close, you get a home warranty that 
                    protects your purchase from unusual wear and tear and other unexpected problems in the first year.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative my-12 h-64 overflow-hidden rounded-xl">
              <Image
                src="/images/front-porch.jpg"
                alt="Model home at Terra at Skyeview, 8592 Vanhoy Creek Street, Las Vegas NV 89166"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Customer Satisfaction is Our Top Priority
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Although a vast majority of businesses today say that customer satisfaction is a priority, those who prove it 
              through their actions are rare. Dr. Jan Duffy and every member of our team is focused on your experience, 
              from the initial consultation to loan officers to the closing table.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Purchasing a home is a big investment. As a homebuyer, you have every right to expect to have your concerns 
              addressed and problems resolved. We're committed to truly making customer satisfaction our number one priority.
            </p>

            <div className="bg-gray-50 rounded-xl p-8 my-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Skyeview at Skye Canyon?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Expert local representation with Dr. Jan Duffy</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Master-planned community with resort-style amenities</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Competitive financing with low rates and closing cost assistance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">New home warranties for peace of mind</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Top-rated schools in Northwest Las Vegas</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Quick move-in options available</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Energy-Efficient, High-Quality Homes
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you're looking for your forever home, you'll want a quality-built home to last through the ages. The homes 
              at Skyeview at Skye Canyon are built using high-quality materials and modern construction techniques, designed 
              for both durability and energy efficiency.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Modern features, sustainable building practices, and attention to detail ensure your new home will serve your 
              family well for years to come. From efficient HVAC systems to quality insulation, these homes are designed to 
              keep your utility costs manageable while providing year-round comfort in the Las Vegas climate.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white my-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              If you're in the market for a new home, get in touch with Dr. Jan Duffy for personal guidance on 
              available homes at Skyeview at Skye Canyon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer">
                  Search Available Homes
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <a href="tel:702-919-7292">
                  Call: (702) 919-7292
                </a>
              </Button>
            </div>
          </div>

          <CalendlySection event="consult" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-200">
            <span className="text-sm text-gray-600">Tags:</span>
            <Link href="/blog" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition">
              homebuying
            </Link>
            <Link href="/blog" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition">
              homebuying process
            </Link>
            <Link href="/blog" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition">
              Skye Canyon
            </Link>
            <Link href="/blog" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition">
              new construction
            </Link>
          </div>

          {/* Back to Blog */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to The Front Porch
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">More From The Front Porch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Understanding Down Payment Gift Funds',
                excerpt: 'Learn how down payment gift funds can fast-track your home purchase.',
                category: 'Home Buying Tips',
              },
              {
                title: 'Why Skye Canyon is Las Vegas\' Hottest Community',
                excerpt: 'Discover what makes Skye Canyon stand out from other Las Vegas communities.',
                category: 'Neighborhood Guides',
              },
              {
                title: 'Top 10 Interior Design Trends for 2025',
                excerpt: 'Stay ahead with the latest interior design trends for new homes.',
                category: 'Design & Style',
              },
            ].map((article, idx) => (
              <Link
                key={idx}
                href="/blog"
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition group"
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center">
                  <Tag className="w-12 h-12 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-blue-600 font-semibold">{article.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Terra Skyeview</h3>
              <p className="text-gray-400 text-sm mb-4">
                Your dream home in Las Vegas awaits.
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-medium">Dr. Jan Duffy</span>
                <br />
                Your Local Real Estate Expert
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/communities/skyeview" className="text-gray-400 hover:text-white transition">
                    Available Homes
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Home Buying Tips</li>
                <li>Las Vegas Market</li>
                <li>Neighborhood Guides</li>
                <li>Design & Style</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(702) 919-7292</li>
                <li>DrJanSells@TerraSkyeview.com</li>
                <li>
                  8592 Vanhoy Creek Street
                  <br />
                  Las Vegas, NV 89166
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2025 Terra Skyeview | Homes By Dr. Jan Duffy S.0197614. All rights reserved. | Equal Housing Opportunity
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

