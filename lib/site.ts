export const SITE_URL = 'https://www.terraskyeview.com'
export const SITE_PHONE_DISPLAY = '(702) 919-7292'
export const SITE_PHONE_E164 = '+1-702-919-7292'
export const SITE_EMAIL = 'DrJanSells@TerraSkyeview.com'
export const SITE_NAME = 'Homes By Dr. Jan Duffy'
export const SITE_SERVICE = 'Homebuying with Dr. Jan Duffy'
export const SITE_LICENSE = 'S.0197614'
export const SITE_BROKERAGE = 'BHHS Nevada Properties'
export const SITE_ADDRESS = {
  streetAddress: '8592 Vanhoy Creek Street',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  postalCode: '89166',
  addressCountry: 'US',
} as const
export const SITE_GEO = {
  latitude: 36.316134,
  longitude: -115.32963,
} as const

/** ISO date (YYYY-MM-DD) per public route; update when page content changes. */
export const PAGE_LAST_MODIFIED: Record<string, string> = {
  '/': '2026-10-17',
  '/communities/skyeview': '2026-09-03',
  '/special-offers': '2026-09-03',
  '/about-dr-janet-duffy': '2026-09-03',
  '/blog': '2026-09-03',
  '/homebuying-process': '2026-09-03',
  '/for-buyers': '2026-09-03',
  '/for-sellers': '2026-10-12',
  '/map': '2026-09-03',
  '/realtor-services': '2026-09-03',
  '/skye-canyon': '2026-09-03',
  '/privacy-policy': '2026-10-17',
  '/blog/should-i-use-realtor-planned-community': '2025-02-25',
  '/blog/what-are-closing-costs': '2025-01-20',
  '/blog/redefining-homebuying-experience': '2025-01-15',
}
