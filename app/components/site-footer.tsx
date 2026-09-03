import Link from 'next/link'
import FooterMap from '@/app/components/footer-map'

const MAPS_PLACE =
  'https://www.google.com/maps/place/Terra+at+Skyeview+by+Homes+Dr.+Jan+Duffy/@36.316134,-115.32963,17z'
const MAPS_DIRECTIONS =
  'https://www.google.com/maps/dir/?api=1&destination=8592+Vanhoy+Creek+Street,+Las+Vegas,+NV+89166'

export default function SiteFooter() {
  return (
    <footer className="bg-[#0b1c2c] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="font-serif text-2xl">Terra at Skyeview</p>
          <p className="mt-1 text-sm text-[#c4a35a]">
            by Century Communities · Preferred buyer&apos;s agent Dr. Jan Duffy
          </p>
          <address className="mt-6 not-italic text-sm leading-7 text-white/80">
            Dr. Jan Duffy | BHHS Nevada Properties | S.0197614
            <br />
            8592 Vanhoy Creek Street, Las Vegas, NV 89166
            <br />
            <a href="tel:702-919-7292" className="text-[#c4a35a] hover:underline">
              (702) 919-7292
            </a>
            {' · '}
            <a
              href="mailto:DrJanSells@TerraSkyeview.com"
              className="text-[#c4a35a] hover:underline"
            >
              DrJanSells@TerraSkyeview.com
            </a>
          </address>
          <p className="mt-4 text-sm text-white/70">
            Model hours: Monday–Saturday 10:00 AM–6:00 PM · Sunday 11:00 AM–6:00 PM
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:702-919-7292"
              className="rounded-full bg-[#c4a35a] px-4 py-2 text-sm font-semibold text-[#0b1c2c]"
            >
              Call
            </a>
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:border-[#c4a35a]"
            >
              Directions
            </a>
            <a
              href={MAPS_PLACE}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:border-[#c4a35a]"
            >
              View Google Reviews
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10">
          <FooterMap />
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        <p>
          &copy; 2026 Terra Skyeview | Homes By Dr. Jan Duffy. All rights reserved. |
          Equal Housing Opportunity
        </p>
        <Link href="/privacy-policy" className="mt-2 inline-block hover:text-white">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
