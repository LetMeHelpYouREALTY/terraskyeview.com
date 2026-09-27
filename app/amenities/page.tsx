import Link from 'next/link'
import SiteHeader from '@/app/components/site-header'
import SiteFooter from '@/app/components/site-footer'
import HomebuyingKicker from '@/app/components/homebuying-kicker'
import SiteFaq from '@/app/components/site-faq'
import OfficeListingsBand from '@/app/components/office-listings-band'
import CalendlySection from '@/app/components/calendly-section'
import NearbyAmenityMap from '@/app/components/nearby-amenity-map'
import AgentPortrait from '@/app/components/agent-portrait'
import {
  AMENITIES_FAQS,
  COMMUNITY_CITY,
  COMMUNITY_MASTER_PLAN,
  COMMUNITY_NAME,
  CURATED_PLACES,
} from '@/lib/amenities'
import {
  SITE_BROKERAGE,
  SITE_EMAIL,
  SITE_LICENSE,
  SITE_PHONE_DISPLAY,
} from '@/lib/site'

const WRITTEN_SECTIONS = [
  {
    id: 'dining',
    title: 'Dining near Terra at Skyeview',
    body: `Northwest Las Vegas ZIP 89166 clusters casual dining along Skye Canyon Park Drive and the Skye Canyon Marketplace corridor. Use the Restaurants and Cafes map filters for current options near 8592 Vanhoy Creek Street, then compare drive routes to your preferred floor plan with Dr. Jan Duffy.`,
  },
  {
    id: 'parks',
    title: 'Parks and recreation in Skye Canyon',
    body: `Skye Canyon Park at 10111 W Skye Canyon Park Drive is the master-plan hub with trails, courts, and the Skye Fitness building. Neighborhood parks named on this site include Eagle Canyon Park, Skye View Park, and Starlight Park on Eagle Canyon Avenue and Skye Village Drive. Red Rock Canyon National Conservation Area sits about 12 miles southwest via the 215 Beltway and Charleston Boulevard — a common weekend drive from Skye Canyon.`,
  },
  {
    id: 'grocery',
    title: 'Grocery and errands',
    body: `Smith's Food & Drug at Skye Canyon Marketplace (9710 W Skye Canyon Park Drive, verified on Smith's store locator) is the anchor grocery with pharmacy access on the same corridor. Montecito Marketplace and other retail names appear in the Terra at Skyeview area information on this site within northwest Las Vegas 89166.`,
  },
  {
    id: 'golf',
    title: 'Golf and outdoor clubs',
    body: `Skye Canyon is not a golf-course village, but northwest Las Vegas and Summerlin host multiple public and private courses within a wider valley drive. Use the map’s Golf filter to see current courses by distance from 8592 Vanhoy Creek Street; Dr. Jan Duffy can pair those results with your commute preferences during buyer consults.`,
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    body: `Centennial Hills Hospital Medical Center at 6900 N Durango Drive is the named acute-care hospital northwest of Skye Canyon on this site. For specialists and urgent care, buyers typically pair Centennial Hills with clinics along Durango Drive and the Centennial Hills retail corridor — confirm current services and ER wait policies on the hospital’s official site.`,
  },
  {
    id: 'shopping',
    title: 'Shopping beyond the Marketplace',
    body: `Skye Canyon Marketplace covers daily grocery and pharmacy needs. For broader retail, Downtown Summerlin is roughly 12–15 miles southeast via US-95 and the 215 Beltway (approximate, traffic dependent). Centennial Hills retail along Skye Canyon Park Drive and the 95 corridor is the other common comparison shop for furniture and home-improvement runs.`,
  },
  {
    id: 'schools',
    title: 'Schools serving Skye Canyon',
    body: `Clark County School District schools named on this site near Terra at Skyeview include Kenneth Divich Elementary, Escobedo Middle, and Arbor View High. Skye Canyon marketing materials also reference James Bilbray Elementary and William and Mary Scherkenbach Elementary — confirm current attendance zoning on the CCSD school locator before you write an offer.`,
  },
  {
    id: 'commute',
    title: 'Commute and regional access',
    body: `Skye Canyon’s freeway gate is US-95 at Skye Canyon Park Drive. This site’s map page cites roughly 16 miles to downtown Las Vegas and roughly 18 miles to the Strip via US-95, traffic dependent. Harry Reid International Airport is approximately 25–30 miles via the 215 Beltway and I-15 (approximate). The 215 Beltway links northwest Las Vegas to Centennial Hills, Summerlin, and the airport corridor.`,
  },
]

export default function AmenitiesPage() {
  return (
    <div className="min-h-dvh bg-[#f7f3eb] text-[#0b1c2c]">
      <SiteHeader />

      <section className="bg-[#0b1c2c] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker className="mb-3" />
          <p className="text-xs font-semibold tracking-[0.28em] text-[#c4a35a] uppercase">
            {COMMUNITY_MASTER_PLAN} · {COMMUNITY_CITY} NV 89166
          </p>
          <h1 className="mt-2 max-w-3xl font-serif text-4xl md:text-6xl">
            Nearby Amenities in {COMMUNITY_NAME}, {COMMUNITY_CITY}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Interactive map and hyperlocal guide for grocery, parks, dining,
            schools, and healthcare around 8592 Vanhoy Creek Street. Call{' '}
            {SITE_PHONE_DISPLAY} before you tour so Dr. Jan Duffy can register
            you with Century Communities.
          </p>
        </div>
      </section>

      <OfficeListingsBand />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker />
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Interactive amenities map
          </h2>
          <p className="mt-3 max-w-2xl text-[#0b1c2c]/70">
            Filter restaurants, grocery, parks, healthcare, fitness, schools, and
            more around the Terra at Skyeview model pin. When live search is
            unavailable, the map shows featured places near {COMMUNITY_NAME} with
            a keyless embed and curated list.
          </p>
          <div className="mt-8">
            <NearbyAmenityMap height={520} />
          </div>
        </div>
      </section>

      <section className="border-y border-[#0b1c2c]/10 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker />
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Hyperlocal guide by category
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {WRITTEN_SECTIONS.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="rounded-2xl border border-[#0b1c2c]/10 p-6"
              >
                <h3 className="font-serif text-2xl">{section.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0b1c2c]/75">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker />
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Featured places on this map
          </h2>
          <p className="mt-3 max-w-2xl text-[#0b1c2c]/70">
            Featured places near {COMMUNITY_NAME} — each linked to a primary source
            (Skye Canyon, CCSD schools, hospital, or grocer).
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {CURATED_PLACES.filter((p) => p.name !== COMMUNITY_NAME).map(
              (place) => (
                <li
                  key={place.name}
                  className="rounded-xl border border-[#0b1c2c]/10 bg-white p-4 text-sm"
                >
                  <p className="font-semibold">{place.name}</p>
                  {place.address ? (
                    <p className="mt-1 text-[#0b1c2c]/70">{place.address}</p>
                  ) : null}
                  <p className="mt-2">
                    <a
                      href={place.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0b1c2c] underline"
                    >
                      Primary source
                    </a>
                  </p>
                  {place.note ? (
                    <p className="mt-2 text-[#0b1c2c]/60">{place.note}</p>
                  ) : null}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      <section className="bg-[#0b1c2c] py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 sm:flex-row sm:px-6 lg:px-8">
          <AgentPortrait size={120} className="shrink-0 shadow-lg" />
          <div>
            <HomebuyingKicker />
            <h2 className="mt-2 font-serif text-3xl">
              Your hyperlocal buyer&apos;s agent for {COMMUNITY_NAME}
            </h2>
            <p className="mt-3 max-w-2xl text-white/75">
              Homebuying with Dr. Jan Duffy is independent buyer representation at
              Terra at Skyeview — builder registration, lot selection against
              these amenities, and contract negotiation with Century Communities.
            </p>
            <address className="mt-4 not-italic text-sm text-white/80">
              Dr. Jan Duffy | {SITE_BROKERAGE} | {SITE_LICENSE}
              <br />
              8592 Vanhoy Creek Street, Las Vegas, NV 89166
              <br />
              <a href="tel:702-919-7292" className="text-[#c4a35a]">
                {SITE_PHONE_DISPLAY}
              </a>
              {' · '}
              <a href={`mailto:${SITE_EMAIL}`} className="text-[#c4a35a]">
                {SITE_EMAIL}
              </a>
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:702-919-7292"
                className="rounded-full bg-[#c4a35a] px-6 py-3 text-sm font-semibold text-[#0b1c2c]"
              >
                Call {SITE_PHONE_DISPLAY}
              </a>
              <Link
                href="/realtor-services"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold"
              >
                Realtor services
              </Link>
              <Link
                href="/communities/skyeview"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold"
              >
                View Terra homes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFaq faqs={AMENITIES_FAQS} />
      <CalendlySection event="consult" />
      <SiteFooter />
    </div>
  )
}
