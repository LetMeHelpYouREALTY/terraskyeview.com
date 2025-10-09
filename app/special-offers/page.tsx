'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, Home, DollarSign, TrendingDown, Calendar, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const loanOptions = [
  {
    type: 'FHA',
    rate: '3.875%',
    apr: '4.827% APR',
    description: '30-Year Fixed-Rate Loan',
    badge: 'Popular Choice',
  },
  {
    type: 'VA',
    rate: '3.875%',
    apr: '4.294% APR',
    description: '30-Year Fixed-Rate Loan',
    badge: 'Military Members',
  },
  {
    type: 'Conventional',
    rate: '4.875%',
    apr: '5.407% APR',
    description: '30-Year Fixed-Rate Loan',
    badge: 'Best Value',
  },
]

const benefits = [
  {
    icon: DollarSign,
    title: 'Up to $5,000 Toward Closing Costs',
    description: 'Available on select homes through our affiliated lender',
  },
  {
    icon: TrendingDown,
    title: 'Low Interest Rates',
    description: 'Lock in competitive rates starting at 3.875%',
  },
  {
    icon: Calendar,
    title: 'Fast Move-In Homes',
    description: 'Many homes ready for quick occupancy',
  },
  {
    icon: Shield,
    title: 'New Home Warranties',
    description: 'Peace of mind with comprehensive coverage',
  },
]

const steps = [
  {
    number: '1',
    title: 'Get Pre-Qualified',
    description: 'Determine your budget by getting pre-approved for a loan',
  },
  {
    number: '2',
    title: 'Start Your Home Search',
    description: 'Browse new homes online or in person at Skyeview at Skye Canyon',
  },
  {
    number: '3',
    title: 'Secure Your Home',
    description: 'Complete the online buying form, pay deposit, and sign contract',
  },
]

export default function SpecialOffersPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    comments: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you shortly about our special offers.')
  }

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
              <Link href="/special-offers" className="text-sm font-medium text-blue-600">
                Special Offers
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-blue-600 transition">
                Blog
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="tel:702-568-0333">Call Dr. Janet</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[length:40px_40px]">
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <TrendingDown className="w-4 h-4" />
              LIMITED TIME OFFER
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Some moments stay in your heart long after the keys are handed over.
            </h1>
            
            <p className="text-2xl text-blue-100 mb-4">
              At Terra Skyeview, we believe a home should be more than just walls and windows.
            </p>
            
            <p className="text-xl text-blue-200 mb-12">
              It should be the backdrop for a lifetime of memories.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Whether you're looking for your first home, next home, or forever home,
              </h2>
              <p className="text-xl text-blue-100">
                we have styles and locations that fit your needs.
              </p>
            </div>

            <Button asChild size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 text-lg px-8 py-6 h-auto">
              <Link href="/communities/skyeview">
                Explore Our Homes
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Offer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's get you started with a
            </h2>
            <div className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl mb-6">
              <p className="text-5xl md:text-6xl font-bold">30-YEAR FIXED-RATE LOAN</p>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-2">
              PLUS up to <span className="text-blue-600">$5,000</span> toward closing costs!*
            </p>
            <p className="text-gray-600 italic">
              available on select homes through affiliated lender
            </p>
          </div>

          {/* Loan Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {loanOptions.map((option, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border-2 border-transparent hover:border-blue-600"
              >
                {option.badge && (
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {option.badge}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.type}</h3>
                <div className="mb-4">
                  <p className="text-5xl font-bold text-blue-600 mb-2">{option.rate}</p>
                  <p className="text-xl text-gray-600">{option.apr}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-700 font-medium">{option.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Alternative Option - ARM */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
            <p className="text-xl mb-4">OR</p>
            <h3 className="text-4xl font-bold mb-4">30-YEAR 7/6 ARM LOAN</h3>
            <p className="text-blue-100 text-lg mb-6">
              Conventional: Years 1-7 at 3.875% (6.433% APR)
            </p>
            <p className="text-sm text-blue-200">
              Adjustable-Rate Mortgage for years 8-30, see details below
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Save big and achieve your dream home goals!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon
              return (
                <div
                  key={idx}
                  className="text-center p-6 rounded-xl hover:bg-blue-50 transition"
                >
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BenefitIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sign up to speak with Dr. Janet Duffy & learn about offers in your area
              </h2>
              <p className="text-gray-600">
                Get personalized information about current promotions and financing options
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                  Any comments you'd like to share with us?
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="text-xs text-gray-500">
                By providing your information, you agree to be contacted about this offer. 
                Standard text message rates apply. You can opt out at any time by texting STOP.
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Start your new home journey today
            </h2>
            <p className="text-xl text-gray-600">in just three easy steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center relative">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-2/3 w-full h-0.5 bg-gray-300">
                    <ArrowRight className="absolute -top-3 right-0 w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/communities/skyeview">
                View Available Homes
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Home className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Explore available homes at Skyeview at Skye Canyon — they won't last long!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/communities/skyeview">
                  Browse Homes
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <a href="tel:702-568-0333">
                  Call: 702.568.0333
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Disclaimer</h3>
            <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
              <p>
                *Rates are available only on the purchase of select homes at Skyeview at Skye Canyon. 
                Availability of rate specials are limited and subject to change at any time without notice. 
                This offer may change upon exhaustion of funds.
              </p>
              <p>
                Receipt of up to $5,000 towards closing costs is contingent upon buyer closing a loan 
                with our affiliated lender and is subject to limits. The offer to pay closing costs does 
                not include payment of prepaid taxes, property or mortgage insurance, or mortgage installments.
              </p>
              <p>
                Financing examples are for illustration purposes only. Interest rates, payments, terms and 
                availability of this loan program, and the sales price, are examples only and are subject to 
                change without notice. Interest rates may not be available at time of loan commitment or closing. 
                Loans are subject to credit approval. Restrictions and conditions may apply.
              </p>
              <p>
                This information is provided by Dr. Janet Duffy, a licensed real estate professional in Nevada. 
                Equal Housing Opportunity. All rights reserved.
              </p>
            </div>
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
                  <Link href="/special-offers" className="text-gray-400 hover:text-white transition">
                    Special Offers
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
                <li>Homebuying Process</li>
                <li>Financing Options</li>
                <li>Community Info</li>
                <li>Contact Us</li>
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

