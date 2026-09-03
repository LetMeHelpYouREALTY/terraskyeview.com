import Link from 'next/link'
import Image from 'next/image'
import SiteHeader from '@/app/components/site-header'
import SiteFooter from '@/app/components/site-footer'
import HomebuyingKicker from '@/app/components/homebuying-kicker'
import SiteFaq from '@/app/components/site-faq'
import OfficeListingsBand from '@/app/components/office-listings-band'
import CalendlySection from '@/app/components/calendly-section'
import { LANDMARKS } from '@/lib/places'
import { mediaUrl } from '@/lib/media'

const CANYON_FAQS = [
  {
    q: 'Where is Skye Canyon in Las Vegas?',
    a: 'Skye Canyon is a master-planned community in northwest Las Vegas ZIP 89166, accessed from US-95 at Skye Canyon Park Drive. Homebuying with Dr. Jan Duffy at Terra at Skyeview uses 8592 Vanhoy Creek Street as the model address.',
  },
  {
    q: 'Which Century Communities villages are in Skye Canyon?',
    a: 'Century Communities currently markets Mesa, Terra, Sierra, and Arroyo at Skyeview inside Skye Canyon. Homebuying with Dr. Jan Duffy is focused on Terra’s two-story plans from 1,792 to 2,119 square feet.',
  },
  {
    q: 'What is near Terra at Skyeview besides the models?',
    a: 'Skye Canyon Park at 10111 W Skye Canyon Park Drive, Skye Canyon Marketplace at 9700 W Skye Canyon Park Drive, and neighborhood parks on Eagle Canyon Avenue and Skye Village Drive. Call (702) 919-7292 before you tour.',
  },
  {
    q: 'Who represents buyers in Skye Canyon new construction?',
    a: 'Dr. Jan Duffy, BHHS Nevada Properties, S.0197614. Homebuying with Dr. Jan Duffy is independent buyer representation. The builder’s agent represents Century Communities.',
  },
]

export default function SkyeCanyonPage() {
  return (
    <div className="min-h-dvh bg-[#f7f3eb] text-[#0b1c2c]">
      <SiteHeader current="homes" />

      <section className="relative isolate min-h-[70vh] overflow-hidden">
        <Image
          src={mediaUrl('amenities.jpg')}
          alt="Skye Canyon recreation amenities near Terra at Skyeview in Las Vegas NV 89166"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1c2c]/70" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-4 pb-16 sm:px-6 lg:px-8">
          <HomebuyingKicker className="mb-3" />
          <p className="text-xs font-semibold tracking-[0.28em] text-[#c4a35a] uppercase">
            Northwest Las Vegas · ZIP 89166
          </p>
          <h1 className="mt-2 max-w-3xl font-serif text-4xl text-white md:text-6xl">
            Skye Canyon real estate with Dr. Jan Duffy
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            Homebuying with Dr. Jan Duffy for Terra at Skyeview inside Skye
            Canyon. Model home: 8592 Vanhoy Creek Street, Las Vegas, NV 89166.
            Call (702) 919-7292 first.
          </p>
        </div>
      </section>

      <OfficeListingsBand />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker />
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            What Skye Canyon is, in facts
          </h2>
          <p className="mt-3 max-w-3xl text-[#0b1c2c]/70">
            Skye Canyon sits at the northwest edge of the Las Vegas Valley at
            US-95 and Skye Canyon Park Drive. Homebuying with Dr. Jan Duffy
            treats that geography as commute math, not a slogan: about 16 miles
            to downtown and about 18 miles to the Strip, traffic dependent. The
            215 Beltway is the connector toward Centennial Hills and the airport
            corridor.
          </p>
          <p className="mt-4 max-w-3xl text-[#0b1c2c]/70">
            Terra at Skyeview is the Century Communities two-story collection
            inside the master plan. Floor plans run 1,792 to 2,119 square feet,
            from $479,990. Dr. Jan Duffy | BHHS Nevada Properties | S.0197614.
          </p>
        </div>
      </section>

      <section className="border-y border-[#0b1c2c]/10 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker />
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Parks, trails, and the Marketplace
          </h2>
          <p className="mt-3 max-w-2xl text-[#0b1c2c]/70">
            Homebuying with Dr. Jan Duffy includes walking these addresses so
            you know drive times from a specific Terra lot, not a brochure
            average.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {LANDMARKS.map((place) => (
              <article key={place.name} className="rounded-2xl border border-[#0b1c2c]/10 p-6">
                <h3 className="font-serif text-2xl">{place.name}</h3>
                <p className="mt-2 text-sm font-semibold">{place.address}</p>
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
            Schools and outdoor access, named
          </h2>
          <p className="mt-3 max-w-3xl text-[#0b1c2c]/70">
            Nearby Clark County schools include Kenneth Divich Elementary, James
            Bilbray Elementary, William and Mary Scherkenbach Elementary,
            Escobedo Middle, and Arbor View High. Confirm current zoning on the
            CCSD locator before you write an offer. Outdoor access: Red Rock
            Canyon National Conservation Area about 12 miles southwest; Tule
            Springs Fossil Beds and Floyd Lamb Park are the closer northwest
            open-space options.
          </p>
        </div>
      </section>

      <section className="bg-[#0b1c2c] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomebuyingKicker />
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Buy Terra at Skyeview with a buyer’s agent
          </h2>
          <p className="mt-3 max-w-2xl text-white/75">
            Homebuying with Dr. Jan Duffy is the realtor service for this
            community: register, tour 8592 Vanhoy Creek Street, then negotiate.
            Hours Monday–Saturday 10:00 AM–6:00 PM, Sunday 11:00 AM–6:00 PM.
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
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold"
            >
              Skye Canyon map
            </Link>
            <Link
              href="/realtor-services"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold"
            >
              Realtor services
            </Link>
          </div>
        </div>
      </section>

      <SiteFaq faqs={CANYON_FAQS} />
      <CalendlySection event="consult" />
      <SiteFooter />
    </div>
  )
}
