'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, Tag, ArrowLeft, CheckCircle, Users, MapPin, Award, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import OfficeListingsBand from '@/app/components/office-listings-band'
import CalendlySection from '@/app/components/calendly-section'
import HomebuyingKicker from '@/app/components/homebuying-kicker'
import SiteFaq from '@/app/components/site-faq'

export default function ShouldIUseRealtorArticle() {
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
            <span className="text-gray-900">Should I Use a Realtor to Buy a Home in a Planned Community?</span>
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
                February 25, 2021
              </span>
              <span className="inline-flex items-center gap-1">
                <User className="w-4 h-4" />
                Dr. Jan Duffy
              </span>
            </div>

            <HomebuyingKicker className="mb-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Should I Use a Realtor to Buy a Home in a Planned Community?
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Homebuying with Dr. Jan Duffy at Terra at Skyeview by Century Communities: why buyers register a buyer&apos;s agent before touring Skye Canyon, Las Vegas NV 89166.
            </p>
          </div>

          {/* Critical Registration Alert */}
          <div className="bg-red-600 text-white rounded-2xl p-8 mb-12 border-4 border-red-700">
            <div className="text-center">
              <p className="text-3xl font-bold mb-4">⚠️ CRITICAL: Call BEFORE You Visit!</p>
              <p className="text-xl mb-6">
                Dr. Jan Duffy MUST register you with Century Communities BEFORE your first visit 
                to Terra at Skyeview. This is the ONLY way to ensure you get the best price and her representation.
              </p>
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold text-2xl px-12 py-8 h-auto">
                <a href="tel:702-919-7292">📞 Call Dr. Jan Now: (702) 919-7292</a>
              </Button>
              <p className="text-sm mt-4 opacity-90">
                If you visit without calling first, it may be too late for Dr. Jan to represent you!
              </p>
            </div>
          </div>

          {/* Featured Image Placeholder */}
          <div className="relative mb-12 h-96 overflow-hidden rounded-2xl">
            <Image
              src="/images/blog-use-realtor.jpg"
              alt="Dr. Jan Duffy meeting buyers at Terra at Skyeview in Skye Canyon, Las Vegas"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <OfficeListingsBand />

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you are a first-time homebuyer or have been through the buying process many times before, buying a home is a significant event. There are many moving parts and decisions to be made. The process can be quite challenging without some expert guidance. There are several benefits to using a realtor to help navigate this journey. Working with a real estate agent is like having a trusted business partner that has your best interests in mind and can see the big picture, offering insight when needed to ensure you don't miss anything that could create a stressful situation down the road.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              When you decide to buy a home at <strong>Terra at Skyeview by Century Communities</strong>, the perks of working with <strong>Dr. Jan Duffy as your buyer's agent</strong> are numerous and may even surprise you. Dr. Jan Duffy is an expert not only in real estate, but also specializes in <Link href="/communities/skyeview" className="text-blue-600 hover:underline font-medium">Terra at Skyeview</Link> and the Skye Canyon master-planned community. As a local expert and preferred buyer's agent, she is the perfect choice when you're seeking a trusted professional to get you the best price and deal. <Link href="/about-dr-janet-duffy" className="text-blue-600 hover:underline font-medium">Learn more about Dr. Jan Duffy's expertise</Link>.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Important: Buyer's Agent vs. Builder's Agent</h3>
              <p className="text-gray-800 mb-3">
                It's important to understand that when you look at new construction communities, it can be tempting to just let the builder's agent handle the transaction. However, <strong>having your own real estate agent is a better idea.</strong>
              </p>
              <p className="text-gray-800">
                The realtor who works for you is known as a <strong>"buyer's agent"</strong> and it is their responsibility to look out for your best interests during the entire process. The seller pays both the selling and buying agents' commissions, which means <strong>Dr. Jan Duffy's services cost you nothing!</strong> Discover all the <Link href="/for-buyers" className="text-blue-600 hover:underline font-semibold">benefits of working with a buyer's agent</Link>.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              Still wondering, "Do I need a realtor to buy a house in a planned community?" Consider these five benefits of working with Dr. Jan Duffy before you make your final decision:
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              1. Dr. Jan Duffy Knows Skye Canyon Inside and Out
            </h2>

            <div className="flex gap-4 mb-6">
              <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Skye Canyon is a premier master-planned community in Northwest Las Vegas with 1,700 acres of recreational space. Within Skye Canyon, there are multiple neighborhoods and builders, each offering a unique living experience. Style, size, lot location, and amenities are just a few characteristics that vary throughout the community.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Dr. Jan Duffy</strong> can help you determine what size lot is best for your needs, show you available properties across different neighborhoods (not just Skyeview), and help you find the home of your dreams at the best possible price. Her intimate knowledge of the area means you'll get insider insights that the builder's agent simply won't provide.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              2. Expert Knowledge of Amenities and Community Features
            </h2>

            <div className="flex gap-4 mb-6">
              <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Planned communities are known for their amenities, and Skye Canyon has something for everyone. Good quality of life is a concept honored at Skye Canyon by featuring a variety of principles that focus on giving you a future full of connection, well-being, enrichment, and convenience.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By getting to know you as a client, <strong>Dr. Jan Duffy</strong> will know which specific location within Skye Canyon is right for you and can assist you in finding the right home in a shorter amount of time. She knows which areas are closest to schools, parks, trails, and other amenities that matter to your family.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skye Canyon Amenities Include:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Parks and walking trails</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Recreation and fitness centers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Splash pads and tot lots</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Basketball and sports courts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Top-rated schools</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Nearby shopping and dining</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              3. Dr. Jan Duffy Will Be Your Advocate
            </h2>

            <div className="flex gap-4 mb-6">
              <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In today's world of internet home listings and DIY culture, many new homebuyers think that they can handle a new construction purchase on their own. After all, it's easy to tour the model homes, and the builder's agent is right there to complete the purchase. While this is possible, having your own real estate agent means that you have an advocate.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-red-600">Most builder's agents are thinking of their employer first and your needs second.</strong> The realtor you bring with you will ensure your interests are always at the forefront.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Dr. Jan Duffy</strong> works exclusively for YOU, not the builder. She will review contracts carefully, point out any issues, advise on upgrades that add value versus those that don't, and make sure you're protected throughout the entire process.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              4. Expert Negotiation Gets You the Best Price and Deal
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              If you're wondering, <em>"Do I need a realtor to help me get the best price?"</em> The answer is, <strong className="text-blue-600 text-xl">"Absolutely!"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              As the housing market continues to evolve, good negotiation tactics may be the difference between you getting the home of your dreams at the best price or overpaying. <strong>Dr. Jan Duffy</strong> is a professional and experienced negotiator who is expert at drawing up effective purchase agreements, especially when dealing with new construction where builders may offer numerous options for upgrades and add-ons.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How Dr. Jan Duffy Saves You Money:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Negotiates the Best Purchase Price:</strong>
                    <span className="text-gray-700"> She knows the market and ensures you're not overpaying</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Secures Builder Incentives:</strong>
                    <span className="text-gray-700"> She knows which upgrades and incentives to push for</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Accesses Financing Benefits:</strong>
                    <span className="text-gray-700"> Up to $5,000 toward closing costs through preferred lenders</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Advises on Value-Adding Upgrades:</strong>
                    <span className="text-gray-700"> Helps you choose upgrades that increase resale value</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Protects Your Deposit:</strong>
                    <span className="text-gray-700"> Ensures proper contingencies are in place</span>
                  </div>
                </li>
              </ul>
              <p className="text-gray-700 mt-4 font-semibold text-lg">
                And remember: <span className="text-green-700">The seller pays her commission, so these services cost you NOTHING!</span>
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              5. A Smoother, Less Stressful Process
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              You are not alone if you pondered the question, "Do you need a realtor to buy a home?" Buying a new construction home in a planned community may seem very straightforward, but there are many steps including inspections and contract contingencies.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              An experienced real estate agent like <strong>Dr. Jan Duffy</strong> will know just what inspections are needed for a new construction home and will know what other issues to watch for. She has seen it all and has the experience necessary to work through almost anything. Realtors, particularly those with experience in planned communities like Skye Canyon, are extremely valuable during this process.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Dr. Jan Duffy Handles For You:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="text-gray-700">✓ Contract review and explanation</li>
                  <li className="text-gray-700">✓ Inspection coordination</li>
                  <li className="text-gray-700">✓ Lender communication</li>
                  <li className="text-gray-700">✓ Timeline management</li>
                </ul>
                <ul className="space-y-2">
                  <li className="text-gray-700">✓ Upgrade selections guidance</li>
                  <li className="text-gray-700">✓ Closing coordination</li>
                  <li className="text-gray-700">✓ Problem resolution</li>
                  <li className="text-gray-700">✓ Post-closing support</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Bottom Line: Yes, You Should Use Dr. Jan Duffy!
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              With life's modern conveniences much more accessible than in other neighborhoods, a master-planned community like Skye Canyon can take a lot of pressure off homebuyers. Enjoy parks, trail miles, and shorter commutes to the northwest employment corridor when you buy at Terra at Skyeview.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              It's crucial to have the right real estate agent by your side when purchasing a home in a planned community. <strong>Dr. Jan Duffy is the preferred buyer's agent at Skyeview at Skye Canyon</strong> because she:
            </p>

            <ul className="space-y-3 mb-8 pl-6">
              <li className="text-gray-700 text-lg">✓ Knows the market and gets you the best price</li>
              <li className="text-gray-700 text-lg">✓ Has intimate knowledge of Skye Canyon</li>
              <li className="text-gray-700 text-lg">✓ Provides access to $5,000 closing cost assistance</li>
              <li className="text-gray-700 text-lg">✓ Works exclusively for YOUR interests, not the builder's</li>
              <li className="text-gray-700 text-lg">✓ Costs you NOTHING (seller pays commission)</li>
              <li className="text-gray-700 text-lg">✓ Makes the entire process smoother and less stressful</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white my-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started with Dr. Jan Duffy?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't go to Skyeview alone! Contact Dr. Jan Duffy today to ensure you get the best price, 
              expert guidance, and exclusive benefits throughout your homebuying journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer">
                  Search Available Homes
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <a href="tel:702-919-7292">
                  Call Dr. Jan: (702) 919-7292
                </a>
              </Button>
            </div>
          </div>

          <CalendlySection event="strategy" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-200">
            <span className="text-sm text-gray-600">Tags:</span>
            <Link href="/blog" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition">
              buyer's agent
            </Link>
            <Link href="/blog" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition">
              planned community
            </Link>
            <Link href="/blog" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition">
              Skye Canyon
            </Link>
            <Link href="/blog" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition">
              real estate agent
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

      <SiteFaq />

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
                Your Preferred Buyer's Agent
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
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/for-buyers" className="hover:text-white transition">
                    For Buyers
                  </Link>
                </li>
                <li>
                  <Link href="/homebuying-process" className="hover:text-white transition">
                    Homebuying Process
                  </Link>
                </li>
                <li>
                  <Link href="/special-offers" className="hover:text-white transition">
                    Special Offers
                  </Link>
                </li>
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

