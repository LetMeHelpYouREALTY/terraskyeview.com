export function FAQSchema() {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need a buyer\'s agent to purchase at Terra at Skyeview?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While not required, having Dr. Jan Duffy as your buyer\'s agent ensures you get the best price and expert representation at NO COST to you. The builder\'s agent represents Century Communities\' interests, while Dr. Jan represents YOUR interests exclusively.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much do homes cost at Terra at Skyeview?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'New two-story homes at Terra at Skyeview start from $479,990. The Terra collection offers three floor plans ranging from 1,792 to 2,119 square feet with 3-5 bedrooms and 2.5-3 bathrooms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Dr. Jan Duffy\'s service free to buyers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Dr. Jan Duffy\'s buyer representation services are completely FREE to homebuyers. Her commission is paid by the seller (Century Communities), so you get expert representation, negotiation, and up to $5,000 in closing cost assistance at no cost to you.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Terra at Skyeview located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Terra at Skyeview is located at 8592 Vanhoy Creek Street, Las Vegas, NV 89166, within the Skye Canyon master-planned community in Northwest Las Vegas.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes Century Communities different from other builders?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Century Communities is a Top 10 national homebuilder known for quality construction, modern floor plans, energy-efficient features, and comprehensive warranties. They offer flexible financing options and work with preferred lenders to provide competitive rates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I contact Dr. Jan Duffy before visiting the model homes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'YES! It\'s critical to contact Dr. Jan Duffy at (702) 919-7292 BEFORE your first visit to the model homes. This ensures she can register you with Century Communities as your buyer\'s agent, protecting her ability to represent you and negotiate the best price on your behalf.',
        },
      },
      {
        '@type': 'Question',
        name: 'What financing options are available at Terra at Skyeview?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Terra at Skyeview offers FHA, VA, and conventional financing through preferred lenders. Current promotions include rates as low as 3.875% with up to $5,000 toward closing costs. Dr. Jan Duffy can connect you with lenders offering the best terms.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build a home at Terra at Skyeview?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Move-in ready homes are available for immediate occupancy. New construction typically takes 4-6 months depending on customization options and current building schedule. Dr. Jan Duffy can provide exact timelines for specific homes.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  )
}

