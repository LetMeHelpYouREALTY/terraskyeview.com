'use client'

import { Button } from '@/components/ui/button'
import { Home, BedDouble, Bath, Car } from 'lucide-react'

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
  },
]

export default function FloorPlans() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Floor Plans</h2>
        <p className="text-xl text-gray-600">Inspired home designs</p>
        <p className="text-gray-600 mt-2">
          Check out quality layouts that may be available for purchase at this community today!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {floorPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            {/* Floor Plan Image Placeholder */}
            <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
              <div className="text-center text-white">
                <Home className="w-20 h-20 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Floor Plan</p>
                <p className="text-sm opacity-75">{plan.name}</p>
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
                <Button variant="outline" className="flex-1">
                  Request Info
                </Button>
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

