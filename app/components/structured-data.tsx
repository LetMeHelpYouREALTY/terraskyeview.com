'use client'

import {
  SITE_ADDRESS,
  SITE_BROKERAGE,
  SITE_EMAIL,
  SITE_GEO,
  SITE_LICENSE,
  SITE_NAME,
  SITE_PHONE_E164,
  SITE_SERVICE,
  SITE_URL,
} from '@/lib/site'

const NAP_ADDRESS = {
  '@type': 'PostalAddress',
  ...SITE_ADDRESS,
}

export function SiteGraphStructuredData() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': `${SITE_URL}/#agent`,
        name: 'Dr. Jan Duffy',
        alternateName: SITE_NAME,
        legalName: `Dr. Jan Duffy | ${SITE_BROKERAGE} | ${SITE_LICENSE}`,
        honorificPrefix: 'Dr.',
        givenName: 'Jan',
        familyName: 'Duffy',
        jobTitle: SITE_SERVICE,
        description:
          'Homebuying with Dr. Jan Duffy at Terra at Skyeview in Skye Canyon, Las Vegas NV 89166. Preferred buyer’s agent for Century Communities new construction. Call 702-919-7292 before you tour.',
        url: `${SITE_URL}/about-dr-janet-duffy`,
        image: `${SITE_URL}/images/dr-jan-duffy.png`,
        logo: `${SITE_URL}/images/dr-jan-duffy.png`,
        telephone: SITE_PHONE_E164,
        email: SITE_EMAIL,
        address: NAP_ADDRESS,
        geo: {
          '@type': 'GeoCoordinates',
          ...SITE_GEO,
        },
        hasMap: `https://www.google.com/maps?q=${SITE_ADDRESS.streetAddress},+${SITE_ADDRESS.addressLocality},+${SITE_ADDRESS.addressRegion}+${SITE_ADDRESS.postalCode}`,
        priceRange: '$$',
        currenciesAccepted: 'USD',
        paymentAccepted: 'Cash, Conventional, FHA, VA',
        areaServed: [
          { '@type': 'City', name: 'Las Vegas' },
          { '@type': 'City', name: 'North Las Vegas' },
          { '@type': 'Place', name: 'Skye Canyon' },
          { '@type': 'PostalAddress', postalCode: '89166', addressLocality: 'Las Vegas', addressRegion: 'NV' },
        ],
        knowsAbout: [
          SITE_SERVICE,
          'Terra at Skyeview',
          'Skye Canyon',
          'Century Communities',
          'New construction buyer representation',
          'Las Vegas NV 89166',
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            opens: '10:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '11:00',
            closes: '18:00',
          },
        ],
        memberOf: {
          '@type': 'RealEstateAgent',
          name: SITE_BROKERAGE,
        },
        knowsLanguage: 'English',
        sameAs: [
          'https://calendly.com/drjanduffy',
          'http://drjanduffy.realscout.com',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: SITE_SERVICE,
          itemListElement: [
            {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              itemOffered: {
                '@type': 'Service',
                '@id': `${SITE_URL}/#homebuying-service`,
                name: SITE_SERVICE,
                serviceType: 'Buyer representation',
                provider: { '@id': `${SITE_URL}/#agent` },
                areaServed: 'Las Vegas, NV 89166',
                description:
                  'Homebuying with Dr. Jan Duffy includes builder registration, price and upgrade negotiation, and representation at Terra at Skyeview. No cost to the buyer.',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `Terra at Skyeview | ${SITE_SERVICE}`,
        description:
          'Homebuying with Dr. Jan Duffy for new two-story homes at Terra at Skyeview, 8592 Vanhoy Creek Street, Las Vegas, NV 89166.',
        inLanguage: 'en-US',
        publisher: { '@id': `${SITE_URL}/#agent` },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: { name: string; href: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href.startsWith('http') ? item.href : `${SITE_URL}${item.href}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function FaqStructuredData({
  faqs,
}: {
  faqs: { q: string; a: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function RealEstateListingStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'Terra at Skyeview | Homebuying with Dr. Jan Duffy',
    description:
      'Homebuying with Dr. Jan Duffy for two-story Century Communities homes at Terra at Skyeview, Skye Canyon, Las Vegas NV 89166. From $479,990.',
    url: `${SITE_URL}/communities/skyeview`,
    image: `${SITE_URL}/og-image.jpg`,
    address: NAP_ADDRESS,
    geo: {
      '@type': 'GeoCoordinates',
      ...SITE_GEO,
    },
    seller: { '@id': `${SITE_URL}/#agent` },
    offers: {
      '@type': 'Offer',
      price: '479990',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function ArticleStructuredData({
  headline,
  description,
  url,
  image,
  datePublished,
}: {
  headline: string
  description: string
  url: string
  image: string
  datePublished: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: url,
    author: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      url: `${SITE_URL}/about-dr-janet-duffy`,
    },
    publisher: { '@id': `${SITE_URL}/#agent` },
    about: SITE_SERVICE,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function PlaceStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${SITE_URL}/map#place`,
    name: 'Terra at Skyeview Model Home | Homebuying with Dr. Jan Duffy',
    description:
      'Century Communities model home at 8592 Vanhoy Creek Street, Las Vegas, NV 89166 in Skye Canyon. Homebuying with Dr. Jan Duffy starts with a call at 702-919-7292 before you tour.',
    url: `${SITE_URL}/map`,
    telephone: SITE_PHONE_E164,
    address: NAP_ADDRESS,
    geo: {
      '@type': 'GeoCoordinates',
      ...SITE_GEO,
    },
    hasMap: `https://www.google.com/maps?q=${SITE_ADDRESS.streetAddress},+${SITE_ADDRESS.addressLocality},+${SITE_ADDRESS.addressRegion}+${SITE_ADDRESS.postalCode}`,
    containedInPlace: {
      '@type': 'Place',
      name: 'Skye Canyon',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89166',
        addressCountry: 'US',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function RealtorServiceStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/realtor-services#service`,
    name: SITE_SERVICE,
    serviceType: 'Residential buyer representation',
    provider: { '@id': `${SITE_URL}/#agent` },
    areaServed: [
      { '@type': 'Place', name: 'Skye Canyon' },
      { '@type': 'Place', name: 'Northwest Las Vegas' },
      { '@type': 'City', name: 'Las Vegas' },
      {
        '@type': 'PostalAddress',
        postalCode: '89166',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
      },
    ],
    description:
      'Homebuying with Dr. Jan Duffy: builder registration, price and upgrade negotiation, and contract representation at Terra at Skyeview in Skye Canyon. No cost to the buyer.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    url: `${SITE_URL}/realtor-services`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
