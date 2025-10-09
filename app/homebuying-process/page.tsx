'use client'

import Link from 'next/link'
import { CheckCircle, Home, FileText, Key, Search, Calculator, Heart, Shield, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const processSteps = [
  {
    id: 1,
    icon: Calculator,
    title: 'Prequalify',
    subtitle: 'Get a no-strings-attached financial assessment',
    description:
      "This no-commitment, knowledge-building exercise gives you insight into how much home you could probably afford, as well as which home loan type might be your best fit. All it requires is for a lender to take a snapshot of your finances and run a credit check. Prequalification is a powerful tool that will let you know exactly what steps you'll need to take before you're ready to purchase a home—if you're not there already! It also establishes a relationship with a lender, which will come in handy later on when you need preapproval to purchase a particular home.",
    ctaText: 'Get Prequalified',
    ctaLink: 'tel:702-919-7292',
    sidebarTitle: 'COMMON HOMEBUYING MYTHS',
    sidebarItems: [
      {
        myth: 'You need a 20% down payment.',
        reality: "Actually, most buyers don't. Some even qualify for zero-down loans.",
      },
      {
        myth: 'You have to pay for everything.',
        reality:
          'Maybe not. Several home loan types allow you to use a financial gift from family or friends toward your home purchase.',
      },
      {
        myth: 'You need perfect credit.',
        reality:
          "There wouldn't be many homebuyers if this were the case. While exceptional credit is ideal, many buyers have no trouble qualifying for a home loan with good credit.",
      },
    ],
  },
  {
    id: 2,
    icon: Search,
    title: 'House Hunt',
    subtitle: 'Search on-site or online',
    description:
      "Once you've prequalified and know your price range, you're ready to go shopping. Depending on what's most convenient for you, you could browse online, tour communities in person, or a combination of both! This is the time to put together your wish list of everything you'd want in your dream home at Skyeview at Skye Canyon.",
    ctaText: 'Start Your Search',
    ctaLink: '/communities/skyeview',
    sidebarTitle: 'POTENTIAL WISH-LIST ITEMS',
    sidebarItems: [
      { item: 'Number of bedrooms and bathrooms' },
      { item: 'Number of stories' },
      { item: 'Proximity to work, school and amenities' },
      { item: 'Space for a home office' },
      { item: 'How quickly you hope to move' },
    ],
  },
  {
    id: 3,
    icon: FileText,
    title: 'Contract',
    subtitle: 'Make a preliminary commitment to buy',
    description:
      "One of the great advantages of new home construction is that it's first-come, first-served. As long as you're a qualified buyer, the house is yours if you're the one who got there first. When you've found a home that checks the right boxes, you'll want to act fast to get it under contract—ensuring that no other buyer can swoop in and buy it out from under you.",
    ctaText: 'Contact Dr. Jan Duffy',
    ctaLink: 'tel:702-919-7292',
    sidebarTitle: 'CONTRACTING CONSIDERATIONS',
    sidebarItems: [
      { item: 'Home loan preapproval' },
      { item: 'Earnest money deposit' },
      { item: 'Building timeline' },
      { item: 'Avoiding major transactions before closing, like purchasing a car or large furniture' },
    ],
  },
  {
    id: 4,
    icon: Key,
    title: 'Close',
    subtitle: "Put a bow on it and grab the keys… you're a new homeowner!",
    description:
      "This is your big day to sign final paperwork and breathe a sigh of satisfaction, because you've officially bought a home. And whether it's your first house, or one of several, the feeling never gets old. You'll also love the peace of mind that comes with a new home warranty, providing coverage on major items and repairs.",
    ctaText: 'Learn About Closing',
    ctaLink: 'tel:702-919-7292',
    sidebarTitle: 'CLOSING CONSIDERATIONS',
    sidebarItems: [
      { item: 'Down Payment' },
      { item: 'Closing costs' },
      { item: 'Homeowners insurance' },
      { item: 'Moving arrangements' },
      { item: 'Change of address' },
    ],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Expert Guidance',
    description: 'Work with Dr. Jan Duffy, a trusted local expert who knows the Las Vegas market inside and out.',
  },
  {
    icon: Heart,
    title: 'Personalized Service',
    description: 'Get one-on-one attention throughout your entire homebuying journey, from search to close.',
  },
  {
    icon: Shield,
    title: 'New Home Warranties',
    description: 'Enjoy peace of mind with comprehensive warranties covering major systems and components.',
  },
]

const resources = [
  {
    title: 'Understanding Down Payment Gift Funds',
    description: 'Learn how down payment gift funds can fast-track your home purchase.',
    link: '/blog',
  },
  {
    title: 'New Home Financing Options',
    description: 'Discover different financing options and find the best fit for your situation.',
    link: '/blog',
  },
  {
    title: 'Why Choose New Construction',
    description: 'See the advantages of buying a new home versus an existing property.',
    link: '/blog',
  },
  {
    title: 'Moving Checklist',
    description: 'Stay organized with our comprehensive moving checklist and timeline.',
    link: '/blog',
  },
]

export default function HomebuyingProcessPage() {
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
              <Link href="/about-dr-janet-duffy" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                About Dr. Jan
              </Link>
              <Link href="/homebuying-process" className="text-base font-semibold text-blue-600">
                Resources
              </Link>
              <Link href="/blog" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                Blog
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                <a href="tel:702-919-7292">Call Dr. Jan</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Critical Registration Notice */}
          <div className="bg-red-500 border-4 border-red-700 rounded-2xl p-6 mb-12 text-center max-w-4xl mx-auto">
            <p className="text-2xl font-bold mb-2">⚠️ STEP ZERO (Most Important!):</p>
            <p className="text-xl mb-4">
              Before starting ANY of these steps: Call Dr. Jan Duffy to be registered with the builder!
            </p>
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold text-xl px-10 py-6 h-auto">
              <a href="tel:702-919-7292">📞 Register First: (702) 919-7292</a>
            </Button>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-12 h-12" />
              <div>
                <p className="text-sm uppercase tracking-wider text-blue-200 mb-1">Step by Step</p>
                <h1 className="text-5xl md:text-6xl font-bold">
                  Explore the Homebuying Process
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 mt-6">
              Whether it's your first time buying a new home or you're in need of a refresher for the next home purchase, 
              we're here to walk you through the process—ensuring that you'll be prepared and informed every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {processSteps.map((step, index) => {
            const StepIcon = step.icon
            return (
              <div
                key={step.id}
                className={`mb-20 last:mb-0 ${index % 2 === 0 ? '' : ''}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                          <StepIcon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-5xl font-bold text-gray-200">{step.id}</span>
                          <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-2">
                              {step.title}
                            </h2>
                            <p className="text-xl text-blue-600 font-medium">
                              {step.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="ml-0 lg:ml-26 pl-0 lg:pl-6">
                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {step.description}
                      </p>
                      <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                        <a href={step.ctaLink}>
                          {step.ctaText}
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 sticky top-24">
                      <h3 className="text-sm uppercase tracking-wider font-bold text-blue-900 mb-6">
                        {step.sidebarTitle}
                      </h3>
                      <ul className="space-y-4">
                        {step.sidebarItems.map((item, idx) => (
                          <li key={idx} className="text-sm">
                            {'myth' in item ? (
                              <>
                                <p className="font-bold text-gray-900 mb-1">{item.myth}</p>
                                <p className="text-gray-700">{item.reality}</p>
                              </>
                            ) : (
                              <div className="flex gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item.item}</span>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < processSteps.length - 1 && (
                  <div className="mt-20 border-t border-gray-200"></div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Make It Easy
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Work with Dr. Jan Duffy for expert guidance and personalized service throughout your 
              entire homebuying journey at Terra at Skyeview by Century Communities.
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Unlike working directly with the builder's agent, having Dr. Jan Duffy as your dedicated 
              buyer's agent means you have someone who is contractually obligated to represent YOUR interests, 
              not the builder's. She brings market expertise, negotiation skills, and access to preferred 
              financing options that can save you thousands of dollars on your home purchase—all at no cost 
              to you since the seller pays her commission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                    <BenefitIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-bold text-blue-600">JD</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact Dr. Jan Duffy today for personalized guidance through every step 
              of your homebuying journey at Skyeview at Skye Canyon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="tel:702-919-7292">
                  Call: (702) 919-7292
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer">
                  Search Available Homes
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Homebuyer Resources
            </h2>
            <p className="text-xl text-gray-600">
              Explore our helpful guides and articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, idx) => (
              <Link
                key={idx}
                href={resource.link}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                  <FileText className="w-6 h-6 text-blue-600 group-hover:text-white transition" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">
                Explore All Resources
              </Link>
            </Button>
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
                  <Link href="/homebuying-process" className="text-gray-400 hover:text-white transition">
                    Homebuying Process
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
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>New Home Sales</li>
                <li>Buyer Representation</li>
                <li>Market Analysis</li>
                <li>Home Tours</li>
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

