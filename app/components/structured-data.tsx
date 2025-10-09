export function RealEstateAgentStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    description: 'Preferred Buyer\'s Agent at Terra at Skyeview by Century Communities in Skye Canyon, Las Vegas',
    telephone: '+1-702-919-7292',
    email: 'DrJanSells@TerraSkyeview.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8592 Vanhoy Creek Street',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89166',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
    },
    priceRange: '$$$',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function RealEstateListingStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'Terra at Skyeview by Century Communities',
    description: 'New two-story homes in Skye Canyon master-planned community, Las Vegas. 3-5 bedrooms from $479,990.',
    url: 'https://terraskyeview.com/communities/skyeview',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8592 Vanhoy Creek Street',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89166',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.316134,
      longitude: -115.32963,
    },
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

export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Terra at Skyeview',
    description: 'New homes by Century Communities in Skye Canyon, Las Vegas',
    url: 'https://terraskyeview.com',
    logo: 'https://terraskyeview.com/og-image.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-702-919-7292',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/las-vegas/skye-canyon/skyeview---terra/',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

