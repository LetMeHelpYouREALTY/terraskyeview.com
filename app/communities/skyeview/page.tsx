'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MobileMenu from '@/app/components/mobile-menu'
import HeroCarousel from './components/hero-carousel'
import AvailableHomes from './components/available-homes'
import FloorPlans from './components/floor-plans'
import CommunityOverview from './components/community-overview'
import AreaInformation from './components/area-information'
import SimilarCommunities from './components/similar-communities'
import ContactForm from './components/contact-form'
import LocationMap from './components/location-map'

export default function SkyeviewPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">Terra at Skyeview</span>
              <span className="text-sm text-gray-500 ml-2">by Century Communities</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                Home
              </a>
              <a href="#homes" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                Available Homes
              </a>
              <a href="/about-dr-janet-duffy" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                About Dr. Janet
              </a>
              <a href="/special-offers" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                Special Offers
              </a>
              <a href="/blog" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                Blog
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                <a href="tel:702-919-7292">Call Dr. Janet</a>
              </Button>
            </nav>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Critical Registration Notice */}
      <div className="bg-red-600 text-white py-4 border-b-4 border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex-1">
              <p className="text-xl font-bold mb-1">⚠️ STOP! Read This Before Touring:</p>
              <p className="text-base">
                You MUST contact Dr. Jan Duffy BEFORE your first visit to be registered with Century Communities. 
                This is required to get the best price and ensure proper representation.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-8 py-6 h-auto">
              <a href="tel:702-919-7292">Call Dr. Janet: (702) 919-7292</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Community Info Bar */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Terra at Skyeview</h1>
              <p className="text-sm text-gray-600 mb-1">by Century Communities</p>
              <p className="text-lg text-gray-600 mt-1">
                8592 Vanhoy Creek Street, Las Vegas, NV 89166
              </p>
              <p className="text-sm text-gray-500">Skye Canyon Master-Planned Community</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Now Selling
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Models Open
                </span>
              </div>
              <p className="text-sm text-gray-700 mt-2">
                Your Local Expert: <span className="font-semibold">Dr. Jan Duffy</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a href="tel:702-919-7292" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <Phone className="w-4 h-4" />
                (702) 919-7292
              </a>
              <p className="text-lg font-bold text-gray-900">
                Homes from <span className="text-blue-600">$479,990</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Property Search Widget */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Home at Terra at Skyeview
            </h2>
            <p className="text-xl text-gray-700 mb-2">
              Search all available homes and floor plans
            </p>
            <p className="text-lg text-gray-600">
              Dr. Jan Duffy will help you get the best price with exclusive buyer representation
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

      {/* Available Homes Section */}
      <section id="homes" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AvailableHomes />
        </div>
      </section>

      {/* Floor Plans Section */}
      <section id="floor-plans" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FloorPlans />
        </div>
      </section>

      {/* Community Overview */}
      <section id="amenities" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CommunityOverview />
        </div>
      </section>

      {/* Area Information */}
      <section id="area" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AreaInformation />
        </div>
      </section>

      {/* Similar Communities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimilarCommunities />
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LocationMap />
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Skyeview at Skye Canyon?
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p>
                    <span className="font-semibold">Prime Location:</span> Nestled in the master-planned Skye Canyon community with 1,700 acres of recreational space
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p>
                    <span className="font-semibold">Modern Designs:</span> Contemporary floor plans ranging from 1,792 to 2,119 sq ft with up to 5 bedrooms
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p>
                    <span className="font-semibold">Top-Rated Schools:</span> Excellent education options including Divich Elementary, Escobedo Middle, and Arbor View High
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p>
                    <span className="font-semibold">Resort-Style Amenities:</span> Parks, trails, splash pads, recreation center, and fitness facilities
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p>
                    <span className="font-semibold">Nearby Shopping & Dining:</span> Minutes from Montecito Marketplace, Sprouts, and popular restaurants
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold text-blue-900">Working with Dr. Jan Duffy</span>
                </p>
                <p className="text-sm text-gray-600">
                  Get expert guidance through every step of your home buying journey with a trusted local real estate professional who knows Skye Canyon inside and out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Terra at Skyeview</h3>
              <p className="text-sm text-gray-500 mb-2">by Century Communities</p>
              <p className="text-gray-400 text-sm mb-4">
                Two-story new homes in Skye Canyon, Las Vegas.
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-medium">Dr. Jan Duffy</span><br />
                Your Preferred Buyer's Agent
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#homes" className="text-gray-400 hover:text-white transition">Available Homes</a></li>
                <li><a href="#floor-plans" className="text-gray-400 hover:text-white transition">Floor Plans</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (702) 919-7292
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  DrJanSells@TerraSkyeview.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  8592 Vanhoy Creek Street, Las Vegas, NV 89166
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Terra Skyeview | Homes By Dr. Jan Duffy S.0197614. All rights reserved. | Equal Housing Opportunity</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

