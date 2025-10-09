export function RealEstateAgentStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://www.terraskyeview.com/#agent',
    name: 'Dr. Jan Duffy',
    givenName: 'Jan',
    familyName: 'Duffy',
    honorificPrefix: 'Dr.',
    jobTitle: 'Preferred Buyer\'s Agent',
    description: 'Preferred Buyer\'s Agent at Terra at Skyeview by Century Communities in Skye Canyon, Las Vegas. Specializing in new construction home purchases with expert negotiation and buyer representation.',
    url: 'https://www.terraskyeview.com/about-dr-janet-duffy',
    image: 'https://www.terraskyeview.com/og-image.png',
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.316134,
      longitude: -115.32963,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
      },
      {
        '@type': 'City',
        name: 'Henderson',
      },
      {
        '@type': 'City',
        name: 'North Las Vegas',
      },
    ],
    knowsAbout: [
      'New Construction Homes',
      'Buyer Representation',
      'Real Estate Negotiation',
      'Skye Canyon',
      'Century Communities',
      'Master-Planned Communities',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Buyer\'s Agent Services',
          description: 'FREE buyer representation with expert negotiation and closing cost assistance',
        },
        price: '0',
        priceCurrency: 'USD',
      },
    ],
    priceRange: 'FREE to buyers',
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
    url: 'https://www.terraskyeview.com/communities/skyeview',
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
    '@type': 'LocalBusiness',
    '@id': 'https://www.terraskyeview.com/#organization',
    name: 'Terra at Skyeview by Century Communities',
    alternateName: 'Terra Skyeview',
    description: 'New two-story homes by Century Communities in Skye Canyon master-planned community, Las Vegas. Expert buyer representation by Dr. Jan Duffy.',
    url: 'https://www.terraskyeview.com',
    logo: 'https://www.terraskyeview.com/og-image.png',
    image: 'https://www.terraskyeview.com/og-image.png',
    priceRange: '$479,990 - $569,990',
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.316134,
      longitude: -115.32963,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '10:00',
        closes: '18:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-702-919-7292',
      contactType: 'Sales',
      areaServed: ['Las Vegas', 'Henderson', 'North Las Vegas'],
      availableLanguage: 'English',
      contactOption: 'TollFree',
    },
    sameAs: [
      'https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/las-vegas/skye-canyon/skyeview---terra/',
      'http://drjanduffy.realscout.com',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

