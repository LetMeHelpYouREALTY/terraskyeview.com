const OFFICE_LISTINGS_HTML =
  '<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF"></realscout-office-listings>'

export default function RealScoutOfficeListings() {
  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{ __html: OFFICE_LISTINGS_HTML }}
    />
  )
}
