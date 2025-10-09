'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Menu, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="md:hidden"
      >
        <Menu className="w-5 h-5" />
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Terra at Skyeview</h2>
                  <p className="text-xs text-gray-600">by Century Communities</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                  aria-label="Close menu"
                  title="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1 mb-8">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-900 font-medium transition"
                >
                  Home
                </Link>
                <Link
                  href="/communities/skyeview"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-900 font-medium transition"
                >
                  Available Homes
                </Link>
                <Link
                  href="/about-dr-janet-duffy"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-900 font-medium transition"
                >
                  About Dr. Janet Duffy
                </Link>
                <Link
                  href="/special-offers"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-900 font-medium transition"
                >
                  Special Offers
                </Link>
                <Link
                  href="/homebuying-process"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-900 font-medium transition"
                >
                  Homebuying Process
                </Link>
                <Link
                  href="/for-buyers"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-900 font-medium transition"
                >
                  For Buyers
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-900 font-medium transition"
                >
                  Blog
                </Link>
              </nav>

              {/* Contact Info */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-3">Contact Dr. Janet Duffy</p>
                  <div className="space-y-3">
                    <a
                      href="tel:702-568-0333"
                      className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
                    >
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>702.568.0333</span>
                    </a>
                    <a
                      href="mailto:info@terraskyeview.com"
                      className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
                    >
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>info@terraskyeview.com</span>
                    </a>
                    <div className="flex items-start gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        8592 Vanhoy Creek Street<br />
                        Las Vegas, NV 89166
                      </span>
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="tel:702-568-0333">
                    Call Now
                  </a>
                </Button>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-900 mb-1">
                    ⭐ Preferred Buyer's Agent
                  </p>
                  <p className="text-xs text-gray-600">
                    Get the best price • FREE to buyers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

