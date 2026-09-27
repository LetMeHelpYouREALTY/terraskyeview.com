import { SITE_ADDRESS, SITE_GEO } from '@/lib/site'
import { MAPS_EMBED } from '@/lib/places'

/** Terra at Skyeview model home — same pin as lib/site.ts SITE_GEO (Google Maps place listing). */
export const COMMUNITY_NAME = 'Terra at Skyeview'
export const COMMUNITY_MASTER_PLAN = 'Skye Canyon'
export const COMMUNITY_CITY = 'Las Vegas'
export const COMMUNITY_STATE = 'NV'
export const COMMUNITY_ZIP = '89166'
export const COMMUNITY_CENTER = SITE_GEO

/** Keyless embed (address-based); interactive fallback uses lat/lng via keylessMapEmbedUrl. */
export const AMENITIES_MAP_EMBED = MAPS_EMBED

export type AmenityCategoryId =
  | 'grocery'
  | 'parks'
  | 'restaurants'
  | 'healthcare'
  | 'fitness'
  | 'cafes'
  | 'shopping'
  | 'pharmacies'
  | 'schools'
  | 'golf'
  | 'parking'

export type AmenityCategory = {
  id: AmenityCategoryId
  label: string
  /** Google Places API (New) primary types for searchNearby */
  googlePrimaryTypes: string[]
  ariaLabel: string
}

export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: 'grocery',
    label: 'Grocery',
    googlePrimaryTypes: ['grocery_store', 'supermarket'],
    ariaLabel: 'Show grocery stores near Terra at Skyeview',
  },
  {
    id: 'parks',
    label: 'Parks',
    googlePrimaryTypes: ['park'],
    ariaLabel: 'Show parks near Terra at Skyeview',
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    googlePrimaryTypes: ['restaurant'],
    ariaLabel: 'Show restaurants near Terra at Skyeview',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    googlePrimaryTypes: ['hospital', 'doctor'],
    ariaLabel: 'Show healthcare near Terra at Skyeview',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    googlePrimaryTypes: ['gym', 'fitness_center'],
    ariaLabel: 'Show fitness centers near Terra at Skyeview',
  },
  {
    id: 'cafes',
    label: 'Cafes',
    googlePrimaryTypes: ['cafe', 'coffee_shop'],
    ariaLabel: 'Show cafes near Terra at Skyeview',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    googlePrimaryTypes: ['shopping_mall', 'department_store'],
    ariaLabel: 'Show shopping near Terra at Skyeview',
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    googlePrimaryTypes: ['pharmacy', 'drugstore'],
    ariaLabel: 'Show pharmacies near Terra at Skyeview',
  },
  {
    id: 'schools',
    label: 'Schools',
    googlePrimaryTypes: ['school', 'primary_school', 'secondary_school'],
    ariaLabel: 'Show schools near Terra at Skyeview',
  },
  {
    id: 'golf',
    label: 'Golf',
    googlePrimaryTypes: ['golf_course'],
    ariaLabel: 'Show golf courses near Terra at Skyeview',
  },
  {
    id: 'parking',
    label: 'Parking',
    googlePrimaryTypes: ['parking'],
    ariaLabel: 'Show parking near Terra at Skyeview',
  },
]

export type CuratedPlace = {
  name: string
  /** Full mailing line when verified against sourceUrl; omit for list-only entries. */
  address?: string
  sourceUrl: string
  categories: AmenityCategoryId[]
  schemaType: string
  note?: string
}

/** Primary-source verified places near Skye Canyon / Terra at Skyeview. */
export const CURATED_PLACES: CuratedPlace[] = [
  {
    name: COMMUNITY_NAME,
    address: `${SITE_ADDRESS.streetAddress}, ${SITE_ADDRESS.addressLocality}, ${SITE_ADDRESS.addressRegion} ${SITE_ADDRESS.postalCode}`,
    sourceUrl: 'https://www.terraskyeview.com/communities/skyeview',
    categories: [],
    schemaType: 'Place',
    note: 'Century Communities model homes. Call (702) 919-7292 before you tour.',
  },
  {
    name: "Smith's Food & Drug (Skye Canyon Marketplace)",
    address: '9710 W Skye Canyon Park Drive, Las Vegas, NV 89166',
    sourceUrl:
      'https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/skye-canyon-marketplace/704003',
    categories: ['grocery', 'pharmacies', 'shopping'],
    schemaType: 'GroceryStore',
    note: 'Grocery and pharmacy at Skye Canyon Marketplace.',
  },
  {
    name: 'Skye Canyon Park',
    address: '10111 W Skye Canyon Park Drive, Las Vegas, NV 89166',
    sourceUrl: 'https://skyecanyon.com/amenities/parks/',
    categories: ['parks', 'fitness'],
    schemaType: 'Park',
    note: '15-acre hub with trails, courts, and Skye Fitness (resident access).',
  },
  {
    name: 'Eagle Canyon Park',
    address: '9799 Eagle Canyon Avenue, Las Vegas, NV 89166',
    sourceUrl: 'https://skyecanyon.com/amenities/parks/',
    categories: ['parks'],
    schemaType: 'Park',
  },
  {
    name: 'Skye View Park',
    address: '10501 Eagle Canyon Avenue, Las Vegas, NV 89166',
    sourceUrl: 'https://skyecanyon.com/amenities/parks/',
    categories: ['parks'],
    schemaType: 'Park',
  },
  {
    name: 'Starlight Park',
    address: '8931 Skye Village Drive, Las Vegas, NV 89166',
    sourceUrl: 'https://skyecanyon.com/about/',
    categories: ['parks'],
    schemaType: 'Park',
  },
  {
    name: 'Kenneth Divich Elementary School',
    address: '9851 Donald Nelson Avenue, Las Vegas, NV 89149',
    sourceUrl: 'https://www.divichelementary.org/about-us1/contact/contact-us',
    categories: ['schools'],
    schemaType: 'School',
  },
  {
    name: 'Edmundo Escobedo Sr. Middle School',
    address: '9501 Echelon Point Drive, Las Vegas, NV 89149',
    sourceUrl: 'https://www.escobedoms.com/apps/contact/',
    categories: ['schools'],
    schemaType: 'School',
  },
  {
    name: 'Arbor View High School',
    address: '7500 Whispering Sands Drive, Las Vegas, NV 89131',
    sourceUrl: 'https://www.arborviewhs.org/apps/contact/',
    categories: ['schools'],
    schemaType: 'School',
  },
  {
    name: 'Centennial Hills Hospital Medical Center',
    address: '6900 North Durango Drive, Las Vegas, NV 89149',
    sourceUrl: 'https://www.centennialhillshospital.com/about/contact-us',
    categories: ['healthcare'],
    schemaType: 'Hospital',
    note: 'Acute-care hospital northwest of Skye Canyon; confirm services on the hospital site.',
  },
]

export const AMENITIES_FAQS = [
  {
    q: 'What grocery stores are near Terra at Skyeview?',
    a: "Smith's Food & Drug at Skye Canyon Marketplace (9710 W Skye Canyon Park Drive, Las Vegas, NV 89166) is the anchor grocery with pharmacy access on the same corridor.",
  },
  {
    q: 'How far is Terra at Skyeview from the Las Vegas Strip?',
    a: 'From Skye Canyon at US-95, Terra at Skyeview is roughly 18 miles to the Strip via freeway, depending on traffic — similar to the commute context published on this site’s map page.',
  },
  {
    q: 'How far is Terra at Skyeview from Harry Reid International Airport?',
    a: 'Harry Reid International Airport is approximately 25–30 miles from northwest Las Vegas 89166 via the 215 Beltway and I-15, depending on route and traffic (approximate).',
  },
  {
    q: 'Are there hospitals near Terra at Skyeview?',
    a: 'Centennial Hills Hospital Medical Center at 6900 North Durango Drive is the named acute-care hospital northwest of Skye Canyon; confirm current ER and specialty services on the hospital’s official site before an emergency.',
  },
  {
    q: 'What parks are inside Skye Canyon near Terra at Skyeview?',
    a: 'Skye Canyon Park on W Skye Canyon Park Drive is the central hub; Eagle Canyon Park, Skye View Park, and Starlight Park are neighborhood parks listed on Skye Canyon’s official park pages within ZIP 89166.',
  },
  {
    q: 'Which schools serve Terra at Skyeview?',
    a: 'Clark County schools named on this map include Kenneth Divich Elementary (9851 Donald Nelson Avenue), Edmundo Escobedo Sr. Middle School (9501 Echelon Point Drive), and Arbor View High School (7500 Whispering Sands Drive). Confirm current attendance zoning on the CCSD school locator before you write an offer.',
  },
  {
    q: 'How do I reach Downtown Summerlin from Skye Canyon?',
    a: 'Downtown Summerlin is roughly 12–15 miles south and east via US-95 and the 215 Beltway, depending on traffic (approximate) — a common comparison shop for dining and retail outside the master plan.',
  },
  {
    q: 'Who is the buyer’s agent for Terra at Skyeview?',
    a: 'Dr. Jan Duffy, BHHS Nevada Properties, S.0197614, represents buyers at 8592 Vanhoy Creek Street; call (702) 919-7292 before your first model-home visit so she can register you with Century Communities.',
  },
]

export function getCategoryById(id: AmenityCategoryId): AmenityCategory {
  const category = AMENITY_CATEGORIES.find((c) => c.id === id)
  if (!category) {
    throw new Error(`Unknown amenity category: ${id}`)
  }
  return category
}

export function curatedPlacesForCategory(
  categoryId: AmenityCategoryId,
): CuratedPlace[] {
  return CURATED_PLACES.filter((p) => p.categories.includes(categoryId))
}

/** Parse "street, City, ST ZIP" into schema.org PostalAddress parts. */
export function parseVerifiedAddressLine(line: string): {
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
} | null {
  const match = line.match(/^(.+),\s*([^,]+),\s*([A-Z]{2})\s*(\d{5}(?:-\d{4})?)$/)
  if (!match) return null
  return {
    streetAddress: match[1].trim(),
    addressLocality: match[2].trim(),
    addressRegion: match[3].trim(),
    postalCode: match[4].trim(),
  }
}
