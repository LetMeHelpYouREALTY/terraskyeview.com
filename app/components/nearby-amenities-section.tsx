import Link from 'next/link'
import HomebuyingKicker from '@/app/components/homebuying-kicker'
import NearbyAmenityMap from '@/app/components/nearby-amenity-map'
import { COMMUNITY_CITY, COMMUNITY_MASTER_PLAN, COMMUNITY_NAME } from '@/lib/amenities'

type NearbyAmenitiesSectionProps = {
  variant?: 'light' | 'dark'
  heading?: string
  compact?: boolean
}

export default function NearbyAmenitiesSection({
  variant = 'light',
  heading = `Life near ${COMMUNITY_NAME}`,
  compact = false,
}: NearbyAmenitiesSectionProps) {
  const isDark = variant === 'dark'

  return (
    <section
      className={
        isDark
          ? 'bg-[#0b1c2c] py-16 text-white'
          : 'border-y border-[#0b1c2c]/10 bg-white py-16'
      }
      aria-labelledby="nearby-amenities-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HomebuyingKicker className={isDark ? 'text-[#c4a35a]' : undefined} />
        <p
          className={`mt-2 text-xs font-semibold tracking-[0.28em] uppercase ${
            isDark ? 'text-[#c4a35a]' : 'text-[#c4a35a]'
          }`}
        >
          What&apos;s nearby · {COMMUNITY_MASTER_PLAN} · {COMMUNITY_CITY}
        </p>
        <h2
          id="nearby-amenities-heading"
          className={`mt-2 font-serif text-3xl md:text-4xl ${isDark ? 'text-white' : ''}`}
        >
          {heading}
        </h2>
        <p
          className={`mt-3 max-w-2xl ${isDark ? 'text-white/75' : 'text-[#0b1c2c]/70'}`}
        >
          Explore grocery, parks, dining, schools, and healthcare around the Terra
          at Skyeview model at 8592 Vanhoy Creek Street. Homebuying with Dr. Jan
          Duffy includes comparing lot locations to these everyday destinations.
        </p>
        <div className="mt-8">
          <NearbyAmenityMap height={compact ? 380 : 480} />
        </div>
        <p className="mt-6">
          <Link
            href="/amenities"
            className={`inline-flex rounded-full px-6 py-3 text-sm font-semibold ${
              isDark
                ? 'bg-[#c4a35a] text-[#0b1c2c] hover:bg-[#d4b56c]'
                : 'border border-[#0b1c2c]/20 bg-[#f7f3eb] text-[#0b1c2c] hover:border-[#c4a35a]'
            }`}
          >
            Full nearby amenities guide
          </Link>
        </p>
      </div>
    </section>
  )
}
