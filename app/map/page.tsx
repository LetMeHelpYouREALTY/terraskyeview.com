import Link from 'next/link'
import SiteHeader from '@/app/components/site-header'
import SiteFooter from '@/app/components/site-footer'
import HomebuyingKicker from '@/app/components/homebuying-kicker'
import SiteFaq from '@/app/components/site-faq'
import OfficeListingsBand from '@/app/components/office-listings-band'
import CalendlySection from '@/app/components/calendly-section'
import ModelHomeMap from '@/app/components/model-home-map'
import { LANDMARKS, ACCESS_NOTES, MAPS_DIRECTIONS, MAPS_PLACE } from '@/lib/places'

const MAP_FAQS = [
  {
    q: 'Where is the Terra at Skyeview model home?',
    a: 'The model home is at 8592 Vanhoy Creek Street, Las Vegas, NV 89166, inside Skye Canyon in northwest Las Vegas. Homebuying with Dr. Jan Duffy starts with a call at (702) 919-7292 before you tour.',
  },
  {
    q: 'How do I drive to Terra at Skyeview from US-95?',
    a: 'Exit US-95 at Skye Canyon Park Drive, then follow community streets to Vanhoy Creek Street. Homebuying with Dr. Jan Duffy includes a registered tour so Century Communities knows she represents you.',
  },
  {
    q: 'What ZIP code is Skye Canyon and Terra at Skyeview?',
    a: 'Terra at Skyeview and Skye Canyon use Las Vegas NV 89166. Dr. Jan Duffy | BHHS Nevada Properties | S.0197614. Hours: Monday–Saturday 10:00 AM–6:00 PM, Sunday 11:00 AM–6:00 PM.',
  },
  {
    q: 'Should I use the map and go to the models without calling?',
    a: 'No. Homebuying with Dr. Jan Duffy requires builder registration first. Call (702) 919-7292, then use this map for directions to 8592 Vanhoy Creek Street.',
  },
]

export default function MapPage() {
  return (
    <div className="min-h-dvh bg-[#f7f3eb] text-[#0b1c2c]">
      <SiteHeader />

      <section className="bg-[#0b1c2c] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker className="mb-3" />
          <p className="text-xs font-semibold tracking-[0.28em] text-[#c4a35a] uppercase">
            Skye Canyon · Las Vegas NV 89166
          </p>
          <h1 className="mt-2 max-w-3xl font-serif text-4xl md:text-6xl">
            Map of Terra at Skyeview
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Homebuying with Dr. Jan Duffy at 8592 Vanhoy Creek Street, Las Vegas,
            NV 89166. Pin the Century Communities models, then call (702) 919-7292
            before you drive over so she can register you.
          </p>
          <address className="mt-6 not-italic text-white/80">
            Dr. Jan Duffy | BHHS Nevada Properties | S.0197614
            <br />
            8592 Vanhoy Creek Street, Las Vegas, NV 89166
          </address>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:702-919-7292"
              className="rounded-full bg-[#c4a35a] px-6 py-3 text-sm font-semibold text-[#0b1c2c]"
            >
              Call (702) 919-7292
            </a>
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
            >
              Directions
            </a>
            <a
              href={MAPS_PLACE}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
            >
              View Google Reviews
            </a>
          </div>
        </div>
      </section>

      <OfficeListingsBand />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker />
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Google Map pin: Vanhoy Creek Street in ZIP 89166
          </h2>
          <p className="mt-3 max-w-2xl text-[#0b1c2c]/70">
            Homebuying with Dr. Jan Duffy uses this pin for model-home tours at
            Terra at Skyeview, not a cold walk-in. Monday–Saturday 10:00 AM–6:00
            PM · Sunday 11:00 AM–6:00 PM.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#0b1c2c]/10 bg-white shadow-sm">
            <ModelHomeMap height={520} />
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b1c2c]/10 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker />
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Hyperlocal landmarks near Terra at Skyeview
          </h2>
          <p className="mt-3 max-w-2xl text-[#0b1c2c]/70">
            Homebuying with Dr. Jan Duffy covers lot choice relative to Skye
            Canyon Park Drive, Eagle Canyon Avenue, and the Marketplace at 9700
            W Skye Canyon Park Drive.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {LANDMARKS.map((place) => (
              <article
                key={place.name}
                className="rounded-2xl border border-[#0b1c2c]/10 p-6"
              >
                <h3 className="font-serif text-2xl">{place.name}</h3>
                <p className="mt-2 text-sm font-semibold text-[#0b1c2c]">
                  {place.address}
                </p>
                <p className="mt-2 text-sm text-[#0b1c2c]/70">{place.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker />
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Driving into northwest Las Vegas 89166
          </h2>
          <p className="mt-3 max-w-2xl text-[#0b1c2c]/70">
            Homebuying with Dr. Jan Duffy includes a route briefing so you reach
            the models after she is on the registration list with Century
            Communities.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ACCESS_NOTES.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-[#0b1c2c]/70">{item.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#0b1c2c]/70">
            Nearby schools by name: Kenneth Divich Elementary, Escobedo Middle,
            and Arbor View High. Commute context: about 16 miles to downtown Las
            Vegas and about 18 miles to the Strip via US-95, depending on traffic.
          </p>
        </div>
      </section>

      <section className="bg-[#0b1c2c] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker />
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Realtor services at this pin
          </h2>
          <p className="mt-3 max-w-2xl text-white/75">
            Homebuying with Dr. Jan Duffy is buyer representation at this
            address: registration, price and upgrade negotiation, and contract
            review. The on-site agent represents Century Communities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/realtor-services"
              className="rounded-full bg-[#c4a35a] px-6 py-3 text-sm font-semibold text-[#0b1c2c]"
            >
              Dr. Jan Duffy realtor services
            </Link>
            <Link
              href="/skye-canyon"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
            >
              Skye Canyon guide
            </Link>
          </div>
        </div>
      </section>

      <SiteFaq faqs={MAP_FAQS} />
      <CalendlySection event="consult" />
      <SiteFooter />
    </div>
  )
}
