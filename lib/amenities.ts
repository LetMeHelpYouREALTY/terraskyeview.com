import { SITE_ADDRESS, SITE_GEO } from '@/lib/site'
import { MAPS_EMBED } from '@/lib/places'

/** Terra at Skyeview model home — same pin as lib/site.ts SITE_GEO (Google Maps place listing). */
export const COMMUNITY_NAME = 'Terra at Skyeview'
export const COMMUNITY_MASTER_PLAN = 'Skye Canyon'
export const COMMUNITY_CITY = 'Las Vegas'
export const COMMUNITY_STATE = 'NV'
export const COMMUNITY_ZIP = '89166'
export const COMMUNITY_CENTER = SITE_GEO

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

/** Family master-planned community: grocery and parks first, schools included. */
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
  address: string
  categories: AmenityCategoryId[]
  schemaType: string
  note?: string
}

/** Verified names and addresses used elsewhere on this site (lib/places, area-information, map page). */
export const CURATED_PLACES: CuratedPlace[] = [
  {
    name: COMMUNITY_NAME,
    address: `${SITE_ADDRESS.streetAddress}, ${SITE_ADDRESS.addressLocality}, ${SITE_ADDRESS.addressRegion} ${SITE_ADDRESS.postalCode}`,
    categories: [],
    schemaType: 'Place',
    note: 'Century Communities model homes. Homebuying with Dr. Jan Duffy — call (702) 919-7292 before you tour.',
  },
  {
    name: "Smith's Food & Drug (Skye Canyon Marketplace)",
    address: '9700 W Skye Canyon Park Drive, Las Vegas, NV 89166',
    categories: ['grocery', 'pharmacies', 'shopping'],
    schemaType: 'GroceryStore',
    note: 'Grocery, pharmacy, and in-center retail on Skye Canyon Park Drive.',
  },
  {
    name: 'Skye Canyon Park',
    address: '10111 W Skye Canyon Park Drive, Las Vegas, NV 89166',
    categories: ['parks', 'fitness'],
    schemaType: 'Park',
    note: 'Trails, courts, and the Skye Fitness building.',
  },
  {
    name: 'Eagle Canyon Park',
    address: '9799 Eagle Canyon Avenue, Las Vegas, NV 89166',
    categories: ['parks'],
    schemaType: 'Park',
  },
  {
    name: 'Skye View Park',
    address: '10501 Eagle Canyon Avenue, Las Vegas, NV 89166',
    categories: ['parks'],
    schemaType: 'Park',
  },
  {
    name: 'Starlight Park',
    address: '8931 Skye Village Drive, Las Vegas, NV 89166',
    categories: ['parks'],
    schemaType: 'Park',
  },
  {
    name: 'Kenneth Divich Elementary School',
    address: 'Las Vegas, NV 89166',
    categories: ['schools'],
    schemaType: 'School',
  },
  {
    name: 'Escobedo Middle School',
    address: 'Las Vegas, NV 89166',
    categories: ['schools'],
    schemaType: 'School',
  },
  {
    name: 'Arbor View High School',
    address: 'Las Vegas, NV 89166',
    categories: ['schools'],
    schemaType: 'School',
  },
  {
    name: 'Buffalo Wild Wings',
    address: 'Las Vegas, NV 89166',
    categories: ['restaurants'],
    schemaType: 'Restaurant',
  },
  {
    name: 'Baby Stacks Cafe',
    address: 'Las Vegas, NV 89166',
    categories: ['restaurants', 'cafes'],
    schemaType: 'Restaurant',
  },
  {
    name: 'Cafe Rio',
    address: 'Las Vegas, NV 89166',
    categories: ['restaurants'],
    schemaType: 'Restaurant',
  },
  {
    name: 'Starbucks',
    address: 'Las Vegas, NV 89166',
    categories: ['cafes'],
    schemaType: 'CafeOrCoffeeShop',
  },
  {
    name: 'Sprouts Farmers Market',
    address: 'Las Vegas, NV 89166',
    categories: ['grocery'],
    schemaType: 'GroceryStore',
  },
  {
    name: 'Centennial Hills Hospital Medical Center',
    address: '6900 N Durango Drive, Las Vegas, NV 89149',
    categories: ['healthcare'],
    schemaType: 'Hospital',
    note: 'Major acute-care hospital northwest of Skye Canyon (approximate drive time varies with traffic).',
  },
]

export const AMENITIES_FAQS = [
  {
    q: 'What grocery stores are near Terra at Skyeview?',
    a: "Smith's Food & Drug at Skye Canyon Marketplace (9700 W Skye Canyon Park Drive) and Sprouts Farmers Market in northwest Las Vegas ZIP 89166 are the everyday grocery options buyers name first near Terra at Skyeview.",
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
    a: 'Centennial Hills Hospital Medical Center on N Durango Drive is the named acute-care hospital northwest of Skye Canyon; confirm current ER and specialty services on the hospital’s site before an emergency.',
  },
  {
    q: 'What parks are inside Skye Canyon near Terra at Skyeview?',
    a: 'Skye Canyon Park on W Skye Canyon Park Drive is the central hub; Eagle Canyon Park, Skye View Park, and Starlight Park are neighborhood parks named on this site within ZIP 89166.',
  },
  {
    q: 'Which schools serve Terra at Skyeview?',
    a: 'Nearby Clark County schools named on this site include Kenneth Divich Elementary, Escobedo Middle, and Arbor View High — confirm current attendance zoning on the CCSD school locator before you write an offer.',
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
