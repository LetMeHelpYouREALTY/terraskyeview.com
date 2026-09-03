'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MobileMenu from '@/app/components/mobile-menu'
import OfficeListingsBand from '@/app/components/office-listings-band'
import CalendlySection from '@/app/components/calendly-section'

export default function PrivacyPolicyPage() {
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
              <Link href="/blog" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                Blog
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                <a href="tel:702-919-7292">Contact</a>
              </Button>
            </nav>
            <MobileMenu />
          </div>
        </div>
      </header>

      <OfficeListingsBand />

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Effective Date: January 10, 2025 | Last Updated: January 10, 2025</p>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Terra at Skyeview ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              terraskyeview.com (the "Site"), operated by Dr. Jan Duffy, a licensed real estate professional in Nevada (License #S.0197614).
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using this Site, you consent to the data practices described in this policy. If you do not agree with the terms of this 
              Privacy Policy, please do not access the Site.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Personal Information You Provide</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Book a consultation through Calendly</li>
              <li>Request information about Terra at Skyeview homes</li>
              <li>Schedule a tour or consultation</li>
              <li>Subscribe to our newsletter or blog updates</li>
              <li>Call or email us directly</li>
              <li>Use our property search tools (powered by RealScout)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Name (first and last)</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Property preferences and search criteria</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our Site, we automatically collect certain information about your device and browsing behavior, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>IP address and general location</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website or source</li>
              <li>Pages you visit on our Site</li>
              <li>Time and date of your visit</li>
              <li>Time spent on pages</li>
              <li>Links you click</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Respond to your inquiries and provide requested information</li>
              <li>Schedule tours and consultations</li>
              <li>Send you property listings that match your criteria</li>
              <li>Communicate special offers and promotions</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and visitor behavior (via Google Analytics)</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized activity</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Google Analytics</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use Google Analytics to understand how visitors use our Site. Google Analytics collects information such as how often 
              users visit the Site, what pages they visit, and what other sites they used prior to coming to our Site. We use this 
              information to improve our Site and services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google Analytics collects only the IP address assigned to you on the date you visit the Site, not your name or other 
              identifying information. For more information about Google Analytics, visit: 
              <a href="https://www.google.com/analytics/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> www.google.com/analytics/</a>
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">RealScout</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our property search functionality is powered by RealScout. When you use the property search tools on our Site, you may 
              be directed to drjanduffy.realscout.com. RealScout has its own privacy policy, which you can review at 
              <a href="https://www.realscout.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> www.realscout.com/privacy</a>
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Unsplash</h3>
            <p className="text-gray-700 leading-relaxed">
              Images on our Site are provided by Unsplash, a third-party service. No personal information is collected by Unsplash through our Site.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are 
              files with a small amount of data that may include an anonymous unique identifier.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not 
              accept cookies, you may not be able to use some portions of our Site.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Types of cookies we use:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the Site to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Site (Google Analytics)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Share Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> Third parties who perform services on our behalf (e.g., Google Analytics, RealScout, Calendly, email service providers)</li>
              <li><strong>Century Communities:</strong> When you request information about properties they're building</li>
              <li><strong>Legal Compliance:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of assets, or acquisition</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">California Residents (CCPA)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a California resident, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Know what personal information we collect, use, and disclose</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of the sale of your personal information (we do not sell your information)</li>
              <li>Non-discrimination for exercising your privacy rights</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise these rights, contact us at: <a href="mailto:DrJanSells@TerraSkyeview.com" className="text-blue-600 hover:underline">DrJanSells@TerraSkyeview.com</a>
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Nevada Residents</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nevada residents have the right to opt-out of the sale of certain covered information. We do not sell your information. 
              For more information, contact us at: <a href="mailto:DrJanSells@TerraSkyeview.com" className="text-blue-600 hover:underline">DrJanSells@TerraSkyeview.com</a>
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">All Users</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable cookies through your browser settings</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>HTTPS encryption for all data transmission</li>
              <li>Secure hosting on Vercel's infrastructure</li>
              <li>Regular security updates and monitoring</li>
              <li>Limited access to personal information</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to 
              use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required or permitted by law. When your personal information is no longer needed, we will 
              securely delete or anonymize it.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Site is not intended for children under the age of 18. We do not knowingly collect personal information from children 
              under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact 
              us so we can delete it.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
              on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. 
              Changes are effective when posted on this page.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-900 font-semibold mb-2">Dr. Jan Duffy</p>
              <p className="text-gray-700 mb-1">
                <strong>License:</strong> Nevada Real Estate License #S.0197614
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Phone:</strong> <a href="tel:702-919-7292" className="text-blue-600 hover:underline">(702) 919-7292</a>
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Email:</strong> <a href="mailto:DrJanSells@TerraSkyeview.com" className="text-blue-600 hover:underline">DrJanSells@TerraSkyeview.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 8592 Vanhoy Creek Street, Las Vegas, NV 89166
              </p>
            </div>
          </section>

          {/* Disclaimers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Estate Disclosures</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. Jan Duffy is an independent real estate professional licensed in the State of Nevada (License #S.0197614). 
              All information on this Site is provided for informational purposes only and does not constitute an offer to sell or 
              solicitation to buy any real estate property.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Property availability, pricing, features, and specifications are subject to change without notice. All measurements and 
              square footage are approximate. Buyers should verify all information independently.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Equal Housing Opportunity:</strong> We are committed to fair housing practices and comply with all federal, state, 
              and local fair housing laws.
            </p>
          </section>
        </div>

        <CalendlySection event="strategy" />

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/">
              Return to Homepage
            </Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p className="mb-2">&copy; 2025 Terra Skyeview | Homes By Dr. Jan Duffy S.0197614. All rights reserved. | Equal Housing Opportunity</p>
            <div className="flex justify-center gap-4">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

