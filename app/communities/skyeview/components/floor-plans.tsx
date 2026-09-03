'use client'

import { Button } from '@/components/ui/button'
import { Home, BedDouble, Bath, Car } from 'lucide-react'
import { mediaUrl } from '@/lib/media'

const floorPlans = [
  {
    id: 1,
    name: 'Residence 1792',
    type: 'Single Family Home',
    startingPrice: 479990,
    estimatedPayment: 2660,
    sqft: 1792,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    features: ['Twin Bedrooms', 'Open Floor Plan'],
    image: mediaUrl('residence-1792.jpg'),
  },
  {
    id: 2,
    name: 'Residence 1943',
    type: 'Single Family Home',
    startingPrice: 494990,
    estimatedPayment: 2743,
    sqft: 1943,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    features: ['Modeled', 'Open floor plan'],
    image: mediaUrl('residence-1943.jpg'),
  },
  {
    id: 3,
    name: 'Residence 2119',
    type: 'Single Family Home',
    startingPrice: 509990,
    estimatedPayment: 2826,
    sqft: 2119,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    features: ['MODELED', 'Up to 5 bedrooms'],
    image: mediaUrl('residence-2119.jpg'),
  },
]

export default function FloorPlans() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Terra Collection Floor Plans</h2>
        <p className="text-xl text-gray-700 mb-4">Inspired Two-Story Home Designs</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Terra collection at Skyeview features three carefully designed two-story floor plans, each 
          offering spacious living areas, modern amenities, and flexible room configurations. Built by 
          Century Communities, these homes showcase quality craftsmanship and attention to detail throughout.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Whether you need extra bedrooms, a dedicated office, or space for entertaining, each Terra
          home includes open-concept living areas, kitchens with islands, primary suites with
          walk-in closets, and 2-car garages.
        </p>
        <p className="text-gray-600 mb-6">
          <strong>Work with Dr. Jan Duffy</strong> to tour these homes and discuss which floor plan best 
          fits your needs. She'll help you understand upgrade options, structural modifications available, 
          and which features add the most value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {floorPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            {/* Floor Plan Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={plan.image}
                alt={`${plan.name} two-story home at Terra at Skyeview in Skye Canyon, Las Vegas`}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">{plan.name}</p>
              </div>
              {plan.features.length > 0 && (
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {plan.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{plan.type}</p>

              <div className="border-t border-b border-gray-200 py-4 mb-4">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm text-gray-600">From</span>
                  <span className="text-2xl font-bold text-gray-900">
                    ${plan.startingPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Est. ${plan.estimatedPayment.toLocaleString()}/mo
                </p>
              </div>

              {/* Plan Details */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                    <Home className="w-4 h-4" />
                    <span className="font-medium">Square Footage</span>
                  </div>
                  <p className="text-gray-900 font-semibold">
                    {plan.sqft.toLocaleString()} sq ft
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                    <BedDouble className="w-4 h-4" />
                    <span className="font-medium">Bedrooms</span>
                  </div>
                  <p className="text-gray-900 font-semibold">{plan.bedrooms} br</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                    <Bath className="w-4 h-4" />
                    <span className="font-medium">Bathrooms</span>
                  </div>
                  <p className="text-gray-900 font-semibold">{plan.bathrooms} ba</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                    <Car className="w-4 h-4" />
                    <span className="font-medium">Parking Bays</span>
                  </div>
                  <p className="text-gray-900 font-semibold">{plan.parking} bay</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button asChild variant="outline" className="flex-1">
                  <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer">
                    Request Info
                  </a>
                </Button>
                <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer">
                    View Details
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

