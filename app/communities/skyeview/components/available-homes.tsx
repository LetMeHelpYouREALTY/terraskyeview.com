'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Home, BedDouble, Bath, Car, MapPin } from 'lucide-react'
import { mediaUrl } from '@/lib/media'

const availableHomes = [
  {
    id: 1,
    address: '10735 Alamino Ave',
    lot: 'Lot TE0291',
    model: 'Residence 1792',
    type: 'Single Family Home',
    price: 521620,
    estimatedPayment: 2890,
    sqft: 1792,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['LVP Flooring', 'Upgraded Cabinets'],
    image: mediaUrl('residence-1792.jpg'),
  },
  {
    id: 2,
    address: '10734 Alamino Ave',
    lot: 'Lot TE0292',
    model: 'Residence 1943',
    type: 'Single Family Home',
    price: 553620,
    estimatedPayment: 3067,
    sqft: 1943,
    bedrooms: 4,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Nov. Move In',
    features: ['Modeled', 'Premium Lot'],
    image: mediaUrl('residence-1943.jpg'),
  },
  {
    id: 3,
    address: '10741 Alamino Ave',
    lot: 'Lot TE0290',
    model: 'Residence 2119',
    type: 'Single Family Home',
    price: 569620,
    estimatedPayment: 3155,
    sqft: 2119,
    bedrooms: 5,
    bathrooms: 3,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['5 Bedrooms', 'Corner Lot'],
    image: mediaUrl('residence-2119.jpg'),
  },
]

export default function AvailableHomes() {
  const [sortBy, setSortBy] = useState('price-low')

  const sortedHomes = [...availableHomes].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'sqft-low':
        return a.sqft - b.sqft
      case 'sqft-high':
        return b.sqft - a.sqft
      default:
        return 0
    }
  })

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Homes at Terra at Skyeview</h2>
        <p className="text-lg text-gray-700 mb-4">
          Discover {availableHomes.length} new construction homes ready for move-in. 
          Each Terra home by Century Communities features modern two-story living with spacious layouts, 
          premium finishes, and energy-efficient design. Work with Dr. Jan Duffy to secure the best 
          price and access exclusive financing benefits.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6">
          <p className="text-sm text-gray-800">
            <strong>💡 Buyer's Agent Tip:</strong> These homes are first-come, first-served. Contact 
            Dr. Jan Duffy today to schedule a tour and get pre-qualified before your dream home is gone!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Browse Current Inventory</h3>
          <p className="text-gray-600 mt-2">
            {availableHomes.length} homes ready for move-in
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="sqft-low">Sq Ft: Low to High</option>
            <option value="sqft-high">Sq Ft: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedHomes.map((home) => (
          <div
            key={home.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition group"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={home.image}
                alt={`${home.model} at ${home.address}, Terra at Skyeview, Las Vegas`}
                className="h-full w-full object-cover"
              />
              {home.features.length > 0 && (
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {home.features.slice(0, 2).map((feature, idx) => (
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
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {home.address}
                  </h3>
                  <p className="text-sm text-gray-500">{home.lot}</p>
                </div>
              </div>

              <p className="text-sm font-medium text-gray-700 mb-1">{home.model}</p>
              <p className="text-xs text-gray-500 mb-4">{home.type}</p>

              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-bold text-gray-900">
                    ${home.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Est. ${home.estimatedPayment.toLocaleString()}/mo
                </p>
              </div>

              {/* Home Details */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Home className="w-4 h-4" />
                  <span>{home.sqft.toLocaleString()} sq ft</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <BedDouble className="w-4 h-4" />
                  <span>{home.bedrooms} br</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Bath className="w-4 h-4" />
                  <span>{home.bathrooms} ba</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Car className="w-4 h-4" />
                  <span>{home.parking} bay</span>
                </div>
              </div>

              <div className="mb-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm font-medium text-green-800">
                  Est. Completion: {home.completion}
                </p>
              </div>

              <div className="flex gap-2">
                <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer">
                    Request Info
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
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

