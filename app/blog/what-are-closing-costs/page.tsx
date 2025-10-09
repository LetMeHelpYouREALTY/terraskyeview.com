'use client'

import Link from 'next/link'
import { Calendar, User, Tag, ArrowLeft, DollarSign, Shield, Calculator, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function WhatAreClosingCostsArticle() {
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
            <span className="text-gray-900">What Are Closing Costs?</span>
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
                Buying & Financing
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                December 10, 2024
              </span>
              <span className="inline-flex items-center gap-1">
                <User className="w-4 h-4" />
                Dr. Jan Duffy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Are Closing Costs?
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Understanding closing costs and how to prepare for them is essential for every homebuyer. 
              Learn what fees to expect and how working with Dr. Jan Duffy can help you navigate these expenses.
            </p>
          </div>

          {/* Featured Image Placeholder */}
          <div className="relative h-96 bg-gradient-to-br from-green-900 to-blue-700 rounded-2xl mb-12 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <DollarSign className="w-24 h-24 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Closing Costs Guide</p>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Buying your first home can be an exhilarating experience, but it's also one that should be well-planned 
              to avoid unpleasant surprises. It's wise to examine your finances to ensure that you not only have enough 
              funds to make monthly mortgage payments but also cover closing costs. You'll need to pay for most closing 
              costs when you close on the home, although some expenses may have to be covered before this time.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <p className="text-gray-800 font-medium">
                💡 <strong>Pro Tip from Dr. Jan Duffy:</strong> At Skyeview at Skye Canyon, buyers working with me 
                may qualify for up to $5,000 toward closing costs through our preferred lenders. This can significantly 
                reduce your out-of-pocket expenses!
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What Specific Fees are Included in Closing Costs?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Closing costs fees include lender fees and third-party fees. Mortgage loan lenders typically charge an 
              origination fee, application fee, underwriting fee, and credit report fee to cover the cost of processing 
              your loan. Furthermore, your lender will require a down payment on the property in accordance with the 
              terms you agreed to when you took out the loan.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lender Fees</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Loan Origination Fee:</strong> Up to 1% of the total loan amount</span>
              </li>
              <li className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Application Fee:</strong> Covers processing costs</span>
              </li>
              <li className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Underwriting Fee:</strong> Average $500</span>
              </li>
              <li className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Credit Report Fee:</strong> To verify your credit history</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Insurance and Taxes</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              There are also insurance premiums. You'll need to pay for at least part of your home insurance policy 
              upfront. You may be required to pay part of the property tax bill upfront as well. If you close on a 
              home before the end of the month, you'll need to pay that month's portion of the mortgage payment.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Professional Services</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Home className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Real Estate Agent Commissions:</strong> Covered by seller when working with Dr. Jan Duffy</span>
              </li>
              <li className="flex items-start gap-3">
                <Calculator className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Appraisal:</strong> $500-$1,000 to determine home value</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Title Insurance:</strong> Average $500 to protect your ownership</span>
              </li>
              <li className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Survey:</strong> At least $400 if property doesn't have a valid survey</span>
              </li>
              <li className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Legal Fees:</strong> At least $400 if you hire a real estate lawyer</span>
              </li>
              <li className="flex items-start gap-3">
                <Home className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>HOA Fees:</strong> Average $170 per month at Skye Canyon</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              How Much Can Closing Costs Typically Amount To?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Closing costs vary depending on the lender you work with, your chosen mortgage loan type, the cost of 
              the property, and many other factors. These costs, which do not include the down payment fee, can range 
              between <strong>1% and 5% of the total home purchase price.</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Most of the closing costs are paid to your lender. Your escrow deposit, which includes upfront property 
              taxes and mortgage insurance payments for two months, will likely cost thousands of dollars.
            </p>

            <div className="bg-green-50 rounded-xl p-8 my-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Example: Closing Costs on a $500,000 Home</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between border-b border-green-200 pb-2">
                  <span>Loan Origination Fee (1%)</span>
                  <span className="font-semibold">$5,000</span>
                </div>
                <div className="flex justify-between border-b border-green-200 pb-2">
                  <span>Processing & Underwriting</span>
                  <span className="font-semibold">$950</span>
                </div>
                <div className="flex justify-between border-b border-green-200 pb-2">
                  <span>Appraisal & Survey</span>
                  <span className="font-semibold">$1,200</span>
                </div>
                <div className="flex justify-between border-b border-green-200 pb-2">
                  <span>Title Insurance</span>
                  <span className="font-semibold">$500</span>
                </div>
                <div className="flex justify-between border-b border-green-200 pb-2">
                  <span>Escrow Deposit</span>
                  <span className="font-semibold">$3,000</span>
                </div>
                <div className="flex justify-between border-b border-green-200 pb-2">
                  <span>Other Fees</span>
                  <span className="font-semibold">$1,350</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-3">
                  <span>Total Estimated Costs</span>
                  <span className="text-blue-600">$12,000</span>
                </div>
                <div className="flex justify-between text-green-700 font-semibold pt-2 border-t-2 border-green-300">
                  <span>With $5,000 Closing Cost Assistance</span>
                  <span>$7,000</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Who is Responsible for Paying Closing Costs?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The closing costs listed above are the buyer's responsibility. The seller has other closing costs they 
              have to cover, and these costs are significantly higher than the buyer's closing costs. Sellers must pay 
              about 6% of the total sale price to cover the listing and buyer's agent's commission fees, in addition 
              to other fees and taxes.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              However, some sellers may be willing to cover some of the buyer's closing costs as part of the home sale 
              deal. <strong>As your buyer's agent, Dr. Jan Duffy can negotiate these terms on your behalf to help 
              reduce your out-of-pocket expenses.</strong>
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Are There Ways to Reduce or Negotiate Closing Costs?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Yes! Here are several strategies to reduce your closing costs:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-white border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Shop Around for Lenders</h3>
                <p className="text-gray-700">
                  Do comparison shopping when taking out a mortgage loan. Ask various lenders for their rates, closing 
                  costs, and fees. Dr. Jan Duffy can connect you with preferred lenders offering competitive rates 
                  and up to $5,000 in closing cost assistance.
                </p>
              </div>

              <div className="bg-white border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Negotiate with the Seller</h3>
                <p className="text-gray-700">
                  If the seller is motivated, they may be willing to cover some of your closing costs. As your buyer's 
                  agent, Dr. Jan Duffy has extensive experience negotiating these terms to get you the best deal possible.
                </p>
              </div>

              <div className="bg-white border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Compare Insurance Providers</h3>
                <p className="text-gray-700">
                  Shop around for home insurance, but bear in mind that your lender will have policy requirements that 
                  you need to meet no matter which insurer you pick.
                </p>
              </div>

              <div className="bg-white border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Consider Rolling Costs into Your Loan</h3>
                <p className="text-gray-700">
                  You can ask your lender to roll your closing costs into your loan. If the lender agrees, then you 
                  won't have to pay closing fees upfront. Bear in mind, however, that this increases your overall costs 
                  as you'll pay interest on these fees.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              How do Closing Costs Differ by Loan Type?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The mortgage loan you take out will determine how much you'll pay in closing costs:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="text-gray-700">
                <strong className="text-blue-600">USDA Loan:</strong> No down payment required
              </li>
              <li className="text-gray-700">
                <strong className="text-blue-600">FHA Loan:</strong> 3.5% down payment required
              </li>
              <li className="text-gray-700">
                <strong className="text-blue-600">Conventional Loan:</strong> 3-5% down payment required
              </li>
              <li className="text-gray-700">
                <strong className="text-blue-600">VA Loan:</strong> Veterans can get financial assistance for certain closing costs
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What Should Homebuyers Prepare for?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              When you evaluate your budget before you buy a home, it's a good idea to estimate that you'll need to 
              pay 2-5% of the home's total price in closing costs. If you're able to get some fees reduced or waived, 
              you'll have extra cash on hand for your move.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              You should also expect to pay at least some closing costs before you actually close on the home. Your 
              lender will need a home appraisal in order to process the loan application. If you hire a home inspector 
              to check out the house before you buy it, you'll need to pay their fees before the inspection.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white my-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Buy at Skyeview?</h3>
            <p className="text-xl text-blue-100 mb-4">
              Dr. Jan Duffy is your preferred buyer's agent at Skyeview at Skye Canyon
            </p>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get expert negotiation, access to up to $5,000 in closing cost assistance through preferred lenders, 
              and personalized guidance through every step of your home purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer">
                  Search Available Homes
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <a href="tel:702-919-7292">
                  Call Dr. Janet: (702) 919-7292
                </a>
              </Button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-200">
            <span className="text-sm text-gray-600">Tags:</span>
            <Link href="/blog" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition">
              home financing
            </Link>
            <Link href="/blog" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition">
              homebuying
            </Link>
            <Link href="/blog" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition">
              closing costs
            </Link>
            <Link href="/blog" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition">
              mortgage
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
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Home Buying Tips</li>
                <li>Las Vegas Market</li>
                <li>Financing</li>
                <li>Closing Costs</li>
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

