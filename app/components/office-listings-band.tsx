import RealScoutOfficeListings from '@/app/components/realscout-office-listings'

export default function OfficeListingsBand() {
  return (
    <section
      aria-labelledby="office-listings-heading"
      className="border-b border-[#0b1c2c]/10 bg-white py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.28em] text-[#c4a35a] uppercase">
          BHHS Nevada Properties
        </p>
        <h2
          id="office-listings-heading"
          className="mt-2 font-serif text-3xl text-[#0b1c2c] md:text-4xl"
        >
          Current office listings
        </h2>
        <p className="mt-3 max-w-2xl text-[#0b1c2c]/70">
          Homes listed through Dr. Jan Duffy&apos;s office. Call (702) 919-7292
          before you tour so she can register you with the builder.
        </p>
        <div className="mt-8">
          <RealScoutOfficeListings />
        </div>
      </div>
    </section>
  )
}
