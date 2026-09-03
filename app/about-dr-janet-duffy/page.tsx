'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Award, Heart, Home, TrendingUp, Shield, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import RealScoutSearch from '@/app/components/realscout-search'
import AgentPortrait from '@/app/components/agent-portrait'
import OfficeListingsBand from '@/app/components/office-listings-band'
import CalendlySection from '@/app/components/calendly-section'

const testimonials = [
  {
    quote: "Dr. Jan Duffy saved us thousands on our new home at Skyeview. She negotiated upgrades we didn't even know were possible!",
    author: 'Sarah & Michael T.',
    location: 'Skyeview at Skye Canyon',
  },
  {
    quote: "We almost went to the builder alone, but Dr. Jan showed us why having a buyer's agent is essential. She got us $5,000 in closing cost assistance!",
    author: 'Robert K.',
    location: 'Skye Canyon',
  },
  {
    quote: "Professional, knowledgeable, and truly works for YOU. Dr. Jan made our home buying experience stress-free and saved us money.",
    author: 'The Martinez Family',
    location: 'Northwest Las Vegas',
  },
]

export default function AboutDrJanetDuffyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">Terra at Skyeview</span>
              <span className="text-xs text-gray-500 ml-2">by Century Communities</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                Home
              </Link>
              <Link href="/communities/skyeview" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                Available Homes
              </Link>
              <Link href="/about-dr-janet-duffy" className="text-base font-semibold text-blue-600">
                About Dr. Jan
              </Link>
              <Link href="/blog" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                Blog
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                <a href="tel:702-919-7292">Contact</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-500 border-4 border-red-700 rounded-2xl p-6 mb-12 text-center">
            <p className="text-2xl font-bold mb-2">⚠️ CRITICAL: Call Me BEFORE You Visit Terra!</p>
            <p className="text-lg mb-4">
              I must register you with Century Communities BEFORE your first visit to ensure I can 
              represent you and negotiate the best price. Don't go to the model homes alone!
            </p>
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold text-xl px-10 py-6 h-auto">
              <a href="tel:702-919-7292">📞 Call Now: (702) 919-7292</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                Preferred Buyer's Agent at Terra at Skyeview
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Meet Dr. Jan Duffy
              </h1>
              <p className="text-2xl text-blue-100 mb-8">
                Your advocate for getting the best price and deal on new construction homes at Terra at Skyeview by Century Communities
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <a href="tel:702-919-7292">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (702) 919-7292
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  <a href="mailto:DrJanSells@TerraSkyeview.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Dr. Jan
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="mx-auto mb-6">
                  <AgentPortrait size={128} className="mx-auto" />
                </div>
                <div className="text-center text-white space-y-2">
                  <p className="text-lg"><strong>Specialization:</strong> Buyer Representation</p>
                  <p className="text-lg"><strong>Focus Area:</strong> Skye Canyon & Northwest Las Vegas</p>
                  <p className="text-lg"><strong>Commission:</strong> Paid by Seller (FREE to You!)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OfficeListingsBand />

      {/* Interview Q&A Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get to Know Dr. Jan Duffy
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner in navigating the new home buying process
            </p>
          </div>

          <div className="space-y-12">
            {/* Question 1 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                What is your best advice for new home buyers?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Never go to a new construction community alone! Always bring a buyer's agent. There has never been a better time to invest in your future with a new home, especially with interest rates starting at 3.875% and up to $5,000 in closing cost assistance available. But to get the absolute best price and deal, you need someone on YOUR side of the table. That's where I come in. I work exclusively for you, not the builder, and my services are completely FREE because the seller pays my commission.
              </p>
            </div>

            {/* Question 2 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Where are you from originally?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm originally from California, but I've made Las Vegas my home for over a decade. I fell in love with the energy, growth, and opportunities this city offers. Northwest Las Vegas, particularly the Skye Canyon area, has become my specialty because I've watched it develop into one of the premier master-planned communities in the valley.
              </p>
            </div>

            {/* Question 3 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                How did you get into real estate?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                After years in education and consulting, I discovered my passion for helping people achieve their dream of homeownership. I earned my real estate license and quickly specialized in buyer representation for new construction. I saw too many buyers getting taken advantage of by going directly to builders without their own representation. I made it my mission to level the playing field and ensure buyers get the same expert advocacy that sellers have always had.
              </p>
            </div>

            {/* Question 4 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                What do you love about being a buyer's agent?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                I love being the person who helps families navigate what can be an overwhelming process and turn it into an exciting journey. Watching my clients get keys to their dream home, knowing I negotiated the best possible price and terms for them, is incredibly rewarding. I enjoy the entire process—from the first tour to seeing them move in with their families. And I particularly love educating buyers about why they absolutely need their own representation!
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                There's something special about seeing a family walk through their new Terra home for the first time, knowing that I helped them save thousands of dollars through expert negotiation, secured them $5,000 in closing cost assistance, and guided them through every decision. Unlike working with the builder's agent alone, my clients have someone in their corner who truly understands the market, knows the community intimately, and fights for their best interests from contract to closing.
              </p>
            </div>

            {/* Question 5 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                What is the best advice you have ever been given?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                "Always put your clients' interests first, and the rest will follow." This has been the guiding principle of my career. When you work exclusively for the buyer and negotiate fiercely on their behalf, you build trust and lasting relationships. That's why I'm known as the preferred buyer's agent at Skyeview—my clients know I'm fighting for them, not the builder.
              </p>
            </div>

            {/* Question 6 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                What is your favorite thing about Skye Canyon?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                The master-planned design! With 1,700 acres of parks, trails, recreation centers, and top-rated schools all within the community, Skye Canyon offers a lifestyle that's hard to beat in Las Vegas. The attention to creating a true sense of community with splash pads, sports courts, and gathering spaces makes it perfect for families. Plus, the location in Northwest Las Vegas provides easy access to the 215 Beltway while feeling like a peaceful retreat.
              </p>
            </div>

            {/* Question 7 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                What is your favorite floor plan at Skyeview?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>The Residence 2119!</strong> This spacious home offers plenty of room with up to 5 bedrooms, 3 bathrooms, and a beautiful open living/dining/kitchen area. It's perfect for entertaining and growing families. The layout maximizes space efficiency while maintaining that open, airy feel that modern buyers love. And with the right upgrades that I can help you select, it becomes truly spectacular!
              </p>
            </div>

            {/* Question 8 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                What is one thing you want people to know about buying at Skyeview?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong className="text-blue-600">Don't go alone!</strong> The builder's agent works for the builder, not for you. When you bring me as your buyer's agent, you get someone who will negotiate the best price, advise on which upgrades add value, review all contracts with a fine-tooth comb, and ensure you're getting the best possible deal. And it doesn't cost you a penny—the seller pays my commission. There's literally no downside, only benefits!
              </p>
            </div>

            {/* Question 9 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                What lights you up in life?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Helping families achieve their dreams of homeownership is what drives me every day. There's nothing more satisfying than handing over the keys and knowing I've helped my clients get the best possible deal on their new home. Outside of work, I love exploring everything Las Vegas has to offer, from hiking at Red Rock Canyon to enjoying the incredible dining scene.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm passionate about educating buyers on the real estate process. Too many people don't realize that having a buyer's agent costs them nothing but can save them thousands. That's why I created this website—to inform potential buyers about the Terra at Skyeview community and to explain why working with a dedicated buyer's agent is essential, especially in new construction where the builder's agent is not on your side of the negotiating table.
              </p>
            </div>

            {/* Additional Question */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                What sets you apart from other agents?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                My specialization in Terra at Skyeview and the Skye Canyon community gives me insights that general real estate agents simply don't have. I know the floor plans inside and out, I understand which lots offer the best value, I'm familiar with every upgrade option and can tell you which ones truly add value versus which are overpriced. I've built relationships with preferred lenders who can offer my clients the best rates and up to $5,000 in closing cost assistance.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Most importantly, I'm not afraid to negotiate hard on behalf of my clients. The builder's agent will always protect Century Communities' interests—that's their job. My job is to protect YOUR interests and ensure you're getting the absolute best deal possible. I've helped dozens of families save significant money by negotiating better pricing, securing additional upgrades at no cost, and ensuring every contract term favors the buyer. That's what a true buyer's agent does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Jan Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dr. Jan Duffy as Your Buyer's Agent?
            </h2>
            <p className="text-xl text-gray-600">
              The difference between a good deal and a great deal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Price Guaranteed</h3>
              <p className="text-gray-600">Expert negotiation ensures you don't overpay</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your Advocate</h3>
              <p className="text-gray-600">Working exclusively for YOUR interests</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expert</h3>
              <p className="text-gray-600">Intimate knowledge of Skye Canyon</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">FREE to You</h3>
              <p className="text-gray-600">Seller pays commission—zero cost!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from real buyers who worked with Dr. Jan Duffy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-blue-50 rounded-xl p-8 relative">
                <div className="text-6xl text-blue-200 absolute top-4 left-4 font-serif">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 pt-8">
                  {testimonial.quote}
                </p>
                <div className="border-t border-blue-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Here's What Dr. Jan Duffy Does For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Home className="w-6 h-6" />
                Before Purchase
              </h3>
              <ul className="space-y-2 text-blue-100">
                <li>✓ Find the perfect home and lot location</li>
                <li>✓ Connect you with preferred lenders</li>
                <li>✓ Negotiate the best purchase price</li>
                <li>✓ Secure builder incentives and upgrades</li>
                <li>✓ Access up to $5,000 closing cost assistance</li>
                <li>✓ Review all contracts thoroughly</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                During & After
              </h3>
              <ul className="space-y-2 text-blue-100">
                <li>✓ Coordinate inspections</li>
                <li>✓ Guide upgrade selections for value</li>
                <li>✓ Manage timeline and milestones</li>
                <li>✓ Handle all builder communications</li>
                <li>✓ Ensure quality construction walkthroughs</li>
                <li>✓ Support you through closing and beyond</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-8 bg-yellow-400 text-gray-900 rounded-2xl">
            <p className="text-3xl font-bold mb-2">
              All of this costs you NOTHING!
            </p>
            <p className="text-xl">
              The seller pays my commission. You get expert representation for FREE.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact Dr. Jan Duffy today and let's get started on finding your perfect home at Skyeview at Skye Canyon. Remember: better pricing, expert guidance, and NO COST to you!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-8 h-8 text-blue-600" />
                <p className="font-semibold text-gray-900">Call</p>
                <a href="tel:702-919-7292" className="text-blue-600 hover:text-blue-700">
                  (702) 919-7292
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-8 h-8 text-blue-600" />
                <p className="font-semibold text-gray-900">Email</p>
                <a href="mailto:DrJanSells@TerraSkyeview.com" className="text-blue-600 hover:text-blue-700">
                  DrJanSells@TerraSkyeview.com
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-8 h-8 text-blue-600" />
                <p className="font-semibold text-gray-900">Visit</p>
                <p className="text-gray-600 text-sm text-center">
                  8592 Vanhoy Creek St<br />Las Vegas, NV 89166
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer">
                Search Available Homes
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CalendlySection event="strategy" />

      {/* Advanced Property Search Widget */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Let's Find Your Perfect Home Together
            </h2>
            <p className="text-xl text-gray-700 mb-2">
              Search available properties with Dr. Jan's expert guidance
            </p>
            <p className="text-lg text-gray-600">
              Get started now and benefit from exclusive buyer representation
            </p>
          </div>
          <RealScoutSearch />
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
                  <Link href="/about-dr-janet-duffy" className="text-gray-400 hover:text-white transition">
                    About Dr. Jan
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

