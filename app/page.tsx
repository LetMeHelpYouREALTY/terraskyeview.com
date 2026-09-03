import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/app/components/site-header'
import SiteFooter from '@/app/components/site-footer'
import RealScoutSearch from '@/app/components/realscout-search'
import AgentPortrait from '@/app/components/agent-portrait'
import OfficeListingsBand from '@/app/components/office-listings-band'
import CalendlySection from '@/app/components/calendly-section'
import { mediaUrl } from '@/lib/media'

const residences = [
  {
    name: 'Residence 1792',
    sqft: '1,792 sq ft',
    beds: '3 bedrooms',
    baths: '2.5 baths',
    price: 'From $479,990',
    image: mediaUrl('residence-1792.jpg'),
    alt: 'Residence 1792 two-story home exterior at Terra at Skyeview in Skye Canyon, Las Vegas',
  },
  {
    name: 'Residence 1943',
    sqft: '1,943 sq ft',
    beds: '3 bedrooms',
    baths: '2.5 baths',
    price: 'From $494,990',
    image: mediaUrl('residence-1943.jpg'),
    alt: 'Residence 1943 modeled two-story home at Terra at Skyeview, Las Vegas NV 89166',
  },
  {
    name: 'Residence 2119',
    sqft: '2,119 sq ft',
    beds: 'Up to 5 bedrooms',
    baths: '2.5 baths',
    price: 'From $509,990',
    image: mediaUrl('residence-2119.jpg'),
    alt: 'Residence 2119 two-story home with 2,119 square feet at Terra at Skyeview',
  },
]

const interiors = [
  {
    src: mediaUrl('living-room.jpg'),
    alt: 'Open living room with vaulted ceiling at a Terra at Skyeview new home in Skye Canyon',
    label: 'Great room',
  },
  {
    src: mediaUrl('kitchen.jpg'),
    alt: 'Gourmet kitchen with island and quartz counters in a Terra at Skyeview home, Las Vegas',
    label: 'Kitchen',
  },
  {
    src: mediaUrl('bedroom.jpg'),
    alt: 'Primary bedroom with mountain-view windows at Terra at Skyeview by Century Communities',
    label: 'Primary suite',
  },
  {
    src: mediaUrl('bathroom.jpg'),
    alt: 'Primary bathroom with soaking tub at Terra at Skyeview in Northwest Las Vegas',
    label: 'Bath',
  },
  {
    src: mediaUrl('patio.jpg'),
    alt: 'Covered patio overlooking desert mountains at Terra at Skyeview, 89166',
    label: 'Outdoor living',
  },
  {
    src: mediaUrl('amenities.jpg'),
    alt: 'Skye Canyon pool and clubhouse near Terra at Skyeview in Las Vegas',
    label: 'Skye Canyon',
  },
]

const faqs = [
  {
    q: 'Do I need a buyer’s agent at Terra at Skyeview?',
    a: 'Dr. Jan Duffy registers you with Century Communities, negotiates price and upgrades, and represents you at no cost to the buyer. The on-site agent represents the builder.',
  },
  {
    q: 'What do Terra homes cost?',
    a: 'Two-story Terra collection homes start at $479,990. Floor plans run 1,792–2,119 square feet with 3–5 bedrooms.',
  },
  {
    q: 'Should I call before touring the models?',
    a: 'Yes. Call (702) 919-7292 before the first visit so Dr. Jan can register you. Unregistered tours can lock you to the builder’s agent.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-[#f7f3eb] text-[#0b1c2c]">
      <SiteHeader current="home" />

      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <Image
          src={mediaUrl('hero.jpg')}
          alt="Two-story Terra at Skyeview home exterior at dusk in Skye Canyon, Las Vegas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c2c]/85 via-[#0b1c2c]/55 to-[#0b1c2c]/25" />
        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-[#c4a35a] uppercase">
            Skye Canyon · Las Vegas NV 89166
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight text-white md:text-7xl">
            Terra at Skyeview
          </h1>
          <p className="mt-3 max-w-xl text-lg text-white/85 md:text-xl">
            New two-story homes by Century Communities from $479,990. Preferred
            buyer&apos;s agent: Dr. Jan Duffy.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="tel:702-919-7292"
              className="inline-flex items-center justify-center rounded-full bg-[#c4a35a] px-8 py-3.5 text-base font-semibold text-[#0b1c2c] hover:bg-[#d4b56c]"
            >
              Call Dr. Jan first: (702) 919-7292
            </a>
            <Link
              href="/communities/skyeview"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white hover:border-[#c4a35a] hover:text-[#c4a35a]"
            >
              View available homes
            </Link>
          </div>
        </div>
      </section>

      <OfficeListingsBand />

      <div className="bg-[#c4a35a] px-4 py-3 text-center text-sm font-semibold text-[#0b1c2c]">
        Limited-time financing: rates from 3.875% · up to $5,000 toward closing.{' '}
        <Link href="/special-offers" className="underline underline-offset-4">
          View offers
        </Link>
      </div>

      <section className="border-b border-[#0b1c2c]/10 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-10 text-center sm:flex-row sm:text-left sm:px-6">
          <AgentPortrait size={112} className="shrink-0 shadow-md" />
          <div>
            <p className="font-serif text-2xl">Register before you tour</p>
            <p className="mt-2 text-base text-[#0b1c2c]/75">
              Contact Dr. Jan Duffy first so she can register you with Century
              Communities. That keeps the best price on the table and lets her
              represent you. Model home: 8592 Vanhoy Creek Street, Las Vegas, NV
              89166.
            </p>
            <p className="mt-3 text-sm">
              <Link href="/about-dr-janet-duffy" className="font-semibold text-[#0b1c2c] underline">
                Meet Dr. Jan
              </Link>
              {' · '}
              <Link href="/for-buyers" className="underline">
                Why work with a buyer&apos;s agent?
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.28em] text-[#c4a35a] uppercase">
          The Terra collection
        </p>
        <h2 className="mt-2 font-serif text-4xl">Three two-story floor plans</h2>
        <p className="mt-3 max-w-2xl text-[#0b1c2c]/70">
          Open living levels, 2-car garages, and 1,792 to 2,119 square feet in
          Northwest Las Vegas.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {residences.map((home) => (
            <article key={home.name} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="relative h-64">
                <Image
                  src={home.image}
                  alt={home.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl">{home.name}</h3>
                <p className="mt-1 text-sm text-[#0b1c2c]/60">
                  {home.sqft} · {home.beds} · {home.baths}
                </p>
                <p className="mt-3 text-lg font-semibold">{home.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0b1c2c] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl">Interiors and outdoor living</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Quartz kitchens, primary suites, and covered patios oriented toward
            the desert horizon at Skye Canyon.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {interiors.map((shot) => (
              <figure key={shot.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-sm">
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-4xl">How representation works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#0b1c2c]/70">
          Three steps to a new Terra home. Call before the first model-home visit.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#c4a35a]/40 bg-white p-8">
            <p className="font-serif text-5xl text-[#c4a35a]">01</p>
            <h3 className="mt-4 font-serif text-2xl">Call Dr. Jan first</h3>
            <p className="mt-2 text-sm text-[#0b1c2c]/70">
              Register with the builder before visiting. Required for pricing and
              representation.{' '}
              <Link
                href="/blog/should-i-use-realtor-planned-community"
                className="underline"
              >
                Learn why
              </Link>
            </p>
            <a
              href="tel:702-919-7292"
              className="mt-5 inline-flex rounded-full bg-[#0b1c2c] px-5 py-2 text-sm font-semibold text-white"
            >
              Call (702) 919-7292
            </a>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="font-serif text-5xl text-[#c4a35a]">02</p>
            <h3 className="mt-4 font-serif text-2xl">Tour the models</h3>
            <p className="mt-2 text-sm text-[#0b1c2c]/70">
              8592 Vanhoy Creek Street, Las Vegas, NV 89166. With Dr. Jan
              registered, you keep representation.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="font-serif text-5xl text-[#c4a35a]">03</p>
            <h3 className="mt-4 font-serif text-2xl">Lock the best price</h3>
            <p className="mt-2 text-sm text-[#0b1c2c]/70">
              Dr. Jan negotiates upgrades, credits, and contract terms with
              Century Communities.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b1c2c]/10 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-4xl">Search available homes in Las Vegas</h2>
            <p className="mt-3 text-[#0b1c2c]/70">
              Compare Terra at Skyeview inventory with exclusive representation
              from Dr. Jan Duffy.
            </p>
          </div>
          <RealScoutSearch />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-4xl">Questions buyers ask</h2>
        <div className="mt-8 space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-[#0b1c2c]/10 pb-6">
              <h3 className="font-serif text-xl">{item.q}</h3>
              <p className="mt-2 text-sm leading-6 text-[#0b1c2c]/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CalendlySection event="consult" />

      <SiteFooter />
    </div>
  )
}
