'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/communities/skyeview', label: 'Available Homes' },
  { href: '/about-dr-janet-duffy', label: 'About Dr. Jan Duffy' },
  { href: '/special-offers', label: 'Special Offers' },
  { href: '/homebuying-process', label: 'Homebuying Process' },
  { href: '/for-buyers', label: 'For Buyers' },
  { href: '/blog', label: 'Blog' },
] as const

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex h-9 items-center justify-center rounded-md border border-white/30 px-3 text-white md:hidden"
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div
            className="absolute inset-0 bg-[#0b1c2c]/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-80 overflow-y-auto bg-white shadow-2xl">
            <div className="p-6">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="font-serif text-xl text-[#0b1c2c]">
                    Terra at Skyeview
                  </p>
                  <p className="text-xs tracking-widest text-[#c4a35a] uppercase">
                    by Century Communities
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-2 hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <span className="text-2xl leading-none text-[#0b1c2c]">
                    ×
                  </span>
                </button>
              </div>

              <nav className="mb-8 space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-3 font-medium text-[#0b1c2c] hover:bg-[#f7f3eb]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="space-y-3 border-t border-gray-200 pt-6">
                <p className="text-sm font-semibold text-[#0b1c2c]">
                  Contact Dr. Jan Duffy
                </p>
                <a
                  href="tel:702-919-7292"
                  className="block text-[#0b1c2c]/80"
                >
                  (702) 919-7292
                </a>
                <a
                  href="mailto:DrJanSells@TerraSkyeview.com"
                  className="block text-[#0b1c2c]/80"
                >
                  DrJanSells@TerraSkyeview.com
                </a>
                <p className="text-sm text-[#0b1c2c]/80">
                  8592 Vanhoy Creek Street
                  <br />
                  Las Vegas, NV 89166
                </p>
                <a
                  href="https://calendly.com/drjanduffy/15min"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#0b1c2c] px-4 py-2.5 text-sm font-semibold text-[#0b1c2c]"
                >
                  Book a 15-minute call
                </a>
                <a
                  href="tel:702-919-7292"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#c4a35a] px-4 py-2.5 text-sm font-semibold text-[#0b1c2c]"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
