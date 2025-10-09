'use client'

import Link from 'next/link'
import { Home, Users, DollarSign, Shield, CheckCircle, FileText, Calendar, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  {
    icon: Home,
    title: 'Online Homebuying',
    description: 'Browse available homes at Terra at Skyeview, view floor plans, and explore details completely online. Schedule virtual or in-person tours at your convenience.',
  },
  {
    icon: Users,
    title: 'Real Estate Agent Representation',
    description: 'Work with Dr. Janet Duffy, your preferred buyer\'s agent and trusted local expert who specializes in Terra at Skyeview by Century Communities and the Skye Canyon master-planned community.',
  },
  {
    icon: DollarSign,
    title: 'Flexible Financing Options',
    description: 'Access competitive rates starting at 3.875% with up to $5,000 toward closing costs through our affiliated lender programs.',
  },
  {
    icon: Shield,
    title: 'New Home Warranty',
    description: 'Receive comprehensive warranty coverage on your new home, protecting major systems and giving you peace of mind.',
  },
  {
    icon: FileText,
    title: 'Streamlined Contract Process',
    description: 'Secure your home quickly with our efficient online buying process. Complete forms, submit deposits, and sign contracts digitally.',
  },
  {
    icon: Calendar,
    title: 'Quick Move-In Options',
    description: 'Many homes are ready for immediate occupancy, allowing you to move into your dream home sooner.',
  },
]

const process = [
  {
    step: '1',
    title: 'Get Pre-Qualified',
    description: 'Determine your budget by getting pre-approved for a loan',
    details: [
      'Connect with Century Communities preferred lenders through Dr. Janet Duffy',
      'Review your finances and credit',
      'Understand your exact budget',
      'Access competitive rates starting at 3.875%',
      'Qualify for up to $5,000 closing cost assistance',
      'Get pre-approval letter for stronger offers',
    ],
  },
  {
    step: '2',
    title: 'Start Your Home Search',
    description: 'Browse new homes online or in person at Terra at Skyeview',
    details: [
      'View available two-story homes at Terra at Skyeview online',
      'Explore three floor plans: 1,792-2,119 sq ft',
      'Schedule tours with Dr. Janet Duffy',
      'Visit model homes at 8592 Vanhoy Creek Street',
      'Compare 3-5 bedroom options from $479,990',
      'Learn about Skye Canyon master-planned community amenities',
    ],
  },
  {
    step: '3',
    title: 'Secure Your Home',
    description: 'Complete the purchase and lock in your choice at Terra',
    details: [
      'Dr. Janet negotiates best price with Century Communities',
      'Complete online buying form',
      'Pay initial earnest money deposit',
      'Sign purchase contract with expert guidance from Dr. Janet',
      'Finalize loan and closing details',
      'Receive keys and Century Communities home warranty',
    ],
  },
]

export default function ForBuyersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Terra at Skyeview</span>
              <span className="text-xs text-gray-600 ml-2">by Century Communities</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-blue-600 transition">
                Home
              </Link>
              <Link href="/communities/skyeview" className="text-sm font-medium hover:text-blue-600 transition">
                Available Homes
              </Link>
              <Link href="/about-dr-janet-duffy" className="text-sm font-medium hover:text-blue-600 transition">
                About Dr. Janet
              </Link>
              <Link href="/for-buyers" className="text-sm font-medium text-blue-600">
                For Buyers
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-blue-600 transition">
                Blog
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="tel:702-919-7292">Call Dr. Janet</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Everything You Need to Buy Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6">
              From online browsing to expert representation, we make homebuying simple, 
              transparent, and exciting at Terra at Skyeview by Century Communities.
            </p>
            <p className="text-lg text-blue-200 mb-8">
              This comprehensive guide explains everything you need to know about buying a new construction 
              home at Terra at Skyeview. Learn about the benefits of working with Dr. Janet Duffy as your 
              buyer's agent, understand available financing options, and discover why having your own representation 
              ensures you get the best price and terms. Century Communities is a top 10 national homebuilder, 
              and with Dr. Janet in your corner, you'll have the expertise needed to navigate the process with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/communities/skyeview">
                  View Available Homes
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <a href="tel:702-919-7292">
                  Call Dr. Janet Duffy
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Buy at Terra at Skyeview?
            </h2>
            <p className="text-xl text-gray-600">
              Century Communities + Dr. Janet Duffy = The best homebuying experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Journey to Homeownership
            </h2>
            <p className="text-xl text-gray-600">
              Three key steps to owning your dream home
            </p>
          </div>

          <div className="space-y-12">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      {item.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-xl text-blue-600 font-medium mb-6">{item.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector Line */}
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-20 w-0.5 h-12 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Homebuying Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Dr. Janet Duffy today to explore your options at Terra at Skyeview by Century Communities. 
            Your dream home is waiting!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/communities/skyeview">
                Browse Available Homes
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
              <Link href="/special-offers">
                View Special Offers
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <a href="tel:702-919-7292">
                Call: (702) 919-7292
              </a>
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
                  <Link href="/for-buyers" className="text-gray-400 hover:text-white transition">
                    For Buyers
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
                  <Link href="/homebuying-process" className="hover:text-white transition">
                    Homebuying Process
                  </Link>
                </li>
                <li>
                  <Link href="/special-offers" className="hover:text-white transition">
                    Special Offers
                  </Link>
                </li>
                <li>Financing Options</li>
                <li>Home Warranty Info</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(702) 919-7292</li>
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

