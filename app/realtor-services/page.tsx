import Link from 'next/link'
import SiteHeader from '@/app/components/site-header'
import SiteFooter from '@/app/components/site-footer'
import HomebuyingKicker from '@/app/components/homebuying-kicker'
import SiteFaq from '@/app/components/site-faq'
import OfficeListingsBand from '@/app/components/office-listings-band'
import CalendlySection from '@/app/components/calendly-section'
import AgentPortrait from '@/app/components/agent-portrait'
import RealScoutSearch from '@/app/components/realscout-search'

const SERVICES = [
  {
    title: 'Century Communities registration',
    body: 'Homebuying with Dr. Jan Duffy starts with a call so she can register you before the first Terra at Skyeview visit. That keeps representation on the purchase contract.',
  },
  {
    title: 'Price and incentive negotiation',
    body: 'She negotiates list price, lot premiums, design-center credits, and closing assistance on Terra Residence 1792, 1943, and 2119 in ZIP 89166.',
  },
  {
    title: 'Upgrade and lot counseling',
    body: 'She compares which Century Communities options add resale value versus which only dress the model. Lot orientation on Vanhoy Creek Street is part of that review.',
  },
  {
    title: 'Contract and addendum review',
    body: 'Homebuying with Dr. Jan Duffy includes reading builder contracts, timelines, and option sheets so you know what you are signing.',
  },
  {
    title: 'Lender introductions',
    body: 'She connects buyers with lenders who have quoted rates from 3.875% and up to $5,000 toward closing on select Terra at Skyeview homes, subject to lender terms.',
  },
  {
    title: 'Walkthroughs through closing',
    body: 'She coordinates inspections, construction walkthroughs, and closing at BHHS Nevada Properties standards. License S.0197614.',
  },
]

const SERVICE_FAQS = [
  {
    q: 'What realtor services does Dr. Jan Duffy provide in 89166?',
    a: 'Homebuying with Dr. Jan Duffy is residential buyer representation at Terra at Skyeview in Skye Canyon: builder registration, negotiation, contract review, and closing support. Call (702) 919-7292.',
  },
  {
    q: 'Is Dr. Jan Duffy a Century Communities employee?',
    a: 'No. She is an independent REALTOR® with BHHS Nevada Properties, license S.0197614. The on-site agent represents the builder. She represents you.',
  },
  {
    q: 'What does a buyer\'s agent cost at Terra at Skyeview?',
    a: 'Homebuying with Dr. Jan Duffy is $0 to the buyer. The seller pays the commission on new construction at this community.',
  },
  {
    q: 'Which areas does she serve besides Terra at Skyeview?',
    a: 'Primary focus is Skye Canyon and northwest Las Vegas NV 89166, including nearby Century Communities villages Mesa, Sierra, and Arroyo at Skyeview. Call (702) 919-7292 to confirm a specific street.',
  },
]

export default function RealtorServicesPage() {
  return (
    <div className="min-h-dvh bg-[#f7f3eb] text-[#0b1c2c]">
      <SiteHeader current="about" />

      <section className="bg-[#0b1c2c] py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="flex-1">
            <HomebuyingKicker className="mb-3" />
            <h1 className="font-serif text-4xl md:text-6xl">
              Realtor services in Skye Canyon
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Homebuying with Dr. Jan Duffy is buyer-side representation for
              Century Communities homes at Terra at Skyeview, 8592 Vanhoy Creek
              Street, Las Vegas, NV 89166. Call (702) 919-7292 before you tour.
            </p>
            <p className="mt-4 text-sm text-white/70">
              Dr. Jan Duffy | BHHS Nevada Properties | S.0197614
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:702-919-7292"
                className="rounded-full bg-[#c4a35a] px-6 py-3 text-sm font-semibold text-[#0b1c2c]"
              >
                Call (702) 919-7292
              </a>
              <Link
                href="/map"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
              >
                Open the 89166 map
              </Link>
            </div>
          </div>
          <AgentPortrait size={180} className="shrink-0 shadow-lg" />
        </div>
      </section>

      <OfficeListingsBand />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker />
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            What Dr. Jan Duffy does for buyers
          </h2>
          <p className="mt-3 max-w-2xl text-[#0b1c2c]/70">
            Homebuying with Dr. Jan Duffy is a defined scope of realtor work at
            Terra at Skyeview, not a courtesy greeting at the model desk.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SERVICES.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#0b1c2c]/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b1c2c]/10 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker />
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Why call before the Skye Canyon models
          </h2>
          <p className="mt-3 max-w-2xl text-[#0b1c2c]/70">
            Homebuying with Dr. Jan Duffy fails if you sign in with the builder
            first. Century Communities registration has to list her as your
            agent. That call is (702) 919-7292.
          </p>
          <ul className="mt-8 max-w-2xl space-y-3 text-sm text-[#0b1c2c]/80">
            <li>Register before 8592 Vanhoy Creek Street.</li>
            <li>Tour Residence 1792, 1943, and 2119 with representation already on file.</li>
            <li>Negotiate after the tour, not after you already committed to the desk agent.</li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker />
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Service area: northwest Las Vegas 89166
          </h2>
          <p className="mt-3 max-w-2xl text-[#0b1c2c]/70">
            Homebuying with Dr. Jan Duffy is centered on Skye Canyon Park Drive,
            Vanhoy Creek Street, Eagle Canyon Avenue, and the Century Communities
            villages at Skyeview. She also compares live MLS inventory across
            Las Vegas when Terra is not the right plan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href="/skye-canyon" className="rounded-full border border-[#0b1c2c]/20 px-4 py-2">
              Skye Canyon
            </Link>
            <Link href="/communities/skyeview" className="rounded-full border border-[#0b1c2c]/20 px-4 py-2">
              Terra at Skyeview homes
            </Link>
            <Link href="/map" className="rounded-full border border-[#0b1c2c]/20 px-4 py-2">
              89166 map
            </Link>
            <Link href="/for-buyers" className="rounded-full border border-[#0b1c2c]/20 px-4 py-2">
              Buyer guide
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b1c2c]/10 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker className="mb-2" />
          <h2 className="font-serif text-3xl md:text-4xl">Search with buyer representation</h2>
          <p className="mt-3 text-[#0b1c2c]/70">
            Homebuying with Dr. Jan Duffy: compare Terra inventory against other
            Las Vegas listings, then call (702) 919-7292.
          </p>
          <div className="mt-8">
            <RealScoutSearch />
          </div>
        </div>
      </section>

      <SiteFaq faqs={SERVICE_FAQS} />
      <CalendlySection event="consult" />
      <SiteFooter />
    </div>
  )
}
