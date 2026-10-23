import Link from 'next/link'
import SiteHeader from '@/app/components/site-header'
import SiteFooter from '@/app/components/site-footer'
import HomebuyingKicker from '@/app/components/homebuying-kicker'
import { FaqStructuredData } from '@/app/components/structured-data'
import { listingConsultationUrl } from '@/lib/calendly'
import { SITE_ADDRESS } from '@/lib/site'

const SELLER_FAQS = [
  {
    q: 'Can Dr. Jan Duffy list my current home and help me buy at Terra at Skyeview?',
    a: 'Yes. Dr. Jan Duffy can market your existing Las Vegas property while you pursue a new two-story home at Terra at Skyeview, 8592 Vanhoy Creek Street, Las Vegas, NV 89166. Call (702) 919-7292 to line up listing prep with your builder contract timeline.',
  },
  {
    q: 'Which Terra floor plans fit a sell-to-buy move?',
    a: 'The Terra collection offers three two-story designs: Residence 1792 from $479,990, Residence 1943 from $494,990, and Residence 2119 from $509,990, with 1,792 to 2,119 square feet and 3–5 bedrooms. Dr. Jan Duffy can compare monthly carrying costs against your sale proceeds.',
  },
  {
    q: 'How do listing and new-build dates stay aligned?',
    a: 'Dr. Jan Duffy maps your list date, buyer contingencies, and Century Communities construction milestones so you are not double-paying two mortgages longer than necessary. She coordinates showings on your resale while you tour models in Skye Canyon.',
  },
  {
    q: 'How do I start a listing consultation for Terra at Skyeview?',
    a: 'Book a listing consultation with Dr. Jan Duffy online or call (702) 919-7292. Bring your current address, payoff details, and which Terra plan you are considering so she can draft a sell-to-buy calendar.',
  },
]

export default function ForSellersPage() {
  const heroCta = listingConsultationUrl('for-sellers-hero')
  const midCta = listingConsultationUrl('for-sellers-mid')
  const footerCta = listingConsultationUrl('for-sellers-footer')

  return (
    <div className="min-h-dvh bg-[#f7f3eb] text-[#0b1c2c]">
      <SiteHeader current="about" />

      <section className="bg-[#0b1c2c] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker className="mb-3" />
          <h1 className="font-serif text-4xl md:text-5xl">
            Sell your home to buy at Terra at Skyeview
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/85">
            Terra at Skyeview by Century Communities is a collection of new
            two-story single-family homes inside Skye Canyon at{' '}
            {SITE_ADDRESS.streetAddress}, {SITE_ADDRESS.addressLocality},{' '}
            {SITE_ADDRESS.addressRegion} {SITE_ADDRESS.postalCode}. If you own
            elsewhere in the valley, Dr. Jan Duffy can price your resale, list it,
            and keep your purchase contract at Terra
            on track.
          </p>
          <p className="mt-4 max-w-3xl text-base text-white/75">
            Residence 1792, 1943, and 2119 span 1,792 to 2,119 square feet with
            2-car garages and list from $479,990 on this site. Dr. Jan Duffy
            handles both the listing side and buyer registration at the model
            home so your move-up stays on one calendar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={heroCta}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#c4a35a] px-6 py-3 text-sm font-semibold text-[#0b1c2c] hover:bg-[#d4b56c]"
            >
              Book listing consultation with Dr. Jan Duffy
            </a>
            <a
              href="tel:702-919-7292"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:border-[#c4a35a]"
            >
              Call (702) 919-7292
            </a>
            <Link
              href="/communities/skyeview"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:border-[#c4a35a]"
            >
              View Terra floor plans
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Dr. Jan Duffy, REALTOR®, in real estate since 1983
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl">Why coordinate listing and Terra</h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          <li className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl">One agent, both transactions</h3>
            <p className="mt-2 text-sm text-[#0b1c2c]/70">
              Dr. Jan Duffy lists your current property and represents you on the
              Terra at Skyeview purchase, so pricing, contingencies, and
              walkthroughs stay synchronized.
            </p>
          </li>
          <li className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl">Builder timing in Skye Canyon</h3>
            <p className="mt-2 text-sm text-[#0b1c2c]/70">
              Century Communities construction schedules differ by lot and plan.
              Dr. Jan Duffy aligns your list date with estimated completion on
              Residence 1792, 1943, or 2119.
            </p>
          </li>
          <li className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl">Equity toward a two-story plan</h3>
            <p className="mt-2 text-sm text-[#0b1c2c]/70">
              Use proceeds from your Las Vegas sale toward down payment and
              design-center selections on a new two-story home at 8592 Vanhoy
              Creek Street.
            </p>
          </li>
        </ul>
        <div className="mt-10 text-center">
          <a
            href={midCta}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#0b1c2c] px-8 py-3 text-sm font-semibold text-white hover:bg-[#152a3d]"
          >
            Schedule listing consultation
          </a>
        </div>
      </section>

      <section
        aria-labelledby="seller-faq-heading"
        className="border-y border-[#0b1c2c]/10 bg-white py-16"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <HomebuyingKicker />
          <h2
            id="seller-faq-heading"
            className="mt-2 font-serif text-3xl text-[#0b1c2c] md:text-4xl"
          >
            Sell-to-buy questions for Terra at Skyeview
          </h2>
          <div className="mt-8 space-y-6">
            {SELLER_FAQS.map((item) => (
              <div key={item.q} className="border-b border-[#0b1c2c]/10 pb-6">
                <h3 className="font-serif text-xl text-[#0b1c2c]">{item.q}</h3>
                <p className="mt-2 text-sm leading-6 text-[#0b1c2c]/70">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#0b1c2c]/70">
            Dr. Jan Duffy · (702) 919-7292 ·
            8592 Vanhoy Creek Street, Las Vegas, NV 89166
          </p>
        </div>
        <FaqStructuredData faqs={SELLER_FAQS.map((f) => ({ q: f.q, a: f.a }))} />
      </section>

      <section className="border-t border-[#0b1c2c]/10 bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold tracking-wide text-[#c4a35a]">
            Dr. Jan Duffy · listing &amp; buyer representation
          </p>
          <p className="mt-3 text-[#0b1c2c]/70">
            Ready to list and lock a Terra plan? Book with Dr. Jan Duffy or call
            (702) 919-7292.
          </p>
          <a
            href={footerCta}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#c4a35a] px-8 py-3 text-sm font-semibold text-[#0b1c2c]"
          >
            Listing consultation with Dr. Jan Duffy
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
