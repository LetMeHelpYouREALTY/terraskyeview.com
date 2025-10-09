'use client'

import Link from 'next/link'
import { CheckCircle, Home, FileText, Key, Search, Calculator, Heart, Shield, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const processSteps = [
  {
    id: 1,
    icon: Calculator,
    title: 'Get Pre-Qualified',
    subtitle: 'Determine your budget',
    description:
      "The first step in your homebuying journey is getting pre-approved for a loan. This process gives you a clear understanding of your budget and shows sellers you're a serious buyer. Work with Dr. Janet Duffy to connect with preferred lenders who can offer competitive rates starting at 3.875% plus up to $5,000 toward closing costs. Pre-qualification typically involves a review of your finances and a credit check, giving you the confidence to move forward with your home search.",
    ctaText: 'Get Pre-Qualified',
    ctaLink: 'tel:702-568-0333',
    sidebarTitle: 'PRE-QUALIFICATION BENEFITS',
    sidebarItems: [
      {
        myth: 'Know your exact budget',
        reality: "Understand how much home you can afford before you start shopping.",
      },
      {
        myth: 'Competitive advantage',
        reality:
          'Sellers take pre-qualified buyers more seriously, giving you an edge in negotiations.',
      },
      {
        myth: 'Special financing offers',
        reality:
          "Access low rates and closing cost assistance through our preferred lenders.",
      },
    ],
  },
  {
    id: 2,
    icon: Search,
    title: 'Start Your Home Search',
    subtitle: 'Browse new homes online or in person',
    description:
      "Once you know your budget, it's time to find your dream home! Browse available homes at Skyeview at Skye Canyon online, where you can view detailed floor plans, pricing, and availability. Schedule a tour with Dr. Janet Duffy to visit model homes in person and explore the community amenities. Our master-planned community offers 3-5 bedroom homes starting from $479,990, with options for quick move-in.",
    ctaText: 'Start Your Search',
    ctaLink: '/communities/skyeview',
    sidebarTitle: 'WHAT TO LOOK FOR',
    sidebarItems: [
      { item: 'Floor plan that fits your lifestyle' },
      { item: 'Number of bedrooms and bathrooms' },
      { item: 'Community amenities (parks, pools, recreation)' },
      { item: 'Proximity to schools and shopping' },
      { item: 'Move-in timeline that works for you' },
    ],
  },
  {
    id: 3,
    icon: FileText,
    title: 'Secure Your Home',
    subtitle: 'Complete purchase and lock in your choice',
    description:
      "Found the perfect home? Act quickly! New homes at Skyeview are first-come, first-served. To secure your chosen home, complete the online buying form, pay an initial earnest money deposit, and sign the purchase contract with Dr. Janet Duffy's expert guidance. Your deposit locks in your home and protects you from other buyers. Once under contract, you'll work through the closing process, which includes finalizing your loan, conducting inspections, and preparing for move-in.",
    ctaText: 'Contact Dr. Janet Duffy',
    ctaLink: 'tel:702-568-0333',
    sidebarTitle: 'SECURING YOUR HOME',
    sidebarItems: [
      { item: 'Complete online buying form' },
      { item: 'Pay initial earnest money deposit' },
      { item: 'Sign purchase contract' },
      { item: 'Finalize loan approval' },
      { item: 'Schedule final walkthrough' },
      { item: 'Close and receive keys + warranty' },
    ],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Expert Guidance',
    description: 'Work with Dr. Janet Duffy, a trusted local expert who knows the Las Vegas market inside and out.',
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
              <Link href="/homebuying-process" className="text-sm font-medium text-blue-600">
                Resources
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-blue-600 transition">
                Blog
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="tel:702-568-0333">Contact Us</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            {item.myth ? (
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with Dr. Janet Duffy means you get personalized service and expert guidance 
              throughout your entire homebuying journey at Skyeview at Skye Canyon.
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
              Contact Dr. Janet Duffy today for personalized guidance through every step 
              of your homebuying journey at Skyeview at Skye Canyon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="tel:702-568-0333">
                  Call: 702.568.0333
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <Link href="/communities/skyeview">
                  View Available Homes
                </Link>
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
                <span className="text-white font-medium">Dr. Janet Duffy</span>
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
                <li>702.568.0333</li>
                <li>info@terraskyeview.com</li>
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
              &copy; 2025 Terra Skyeview. All rights reserved. | Equal Housing Opportunity
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

