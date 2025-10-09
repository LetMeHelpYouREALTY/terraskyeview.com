'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const communities = [
  {
    id: 1,
    name: 'Bravado',
    location: 'North Las Vegas, NV 89031',
    phone: '702.730.4300',
    startingPrice: 459990,
    estimatedPayment: 2548,
    status: ['Two Stunning Models', 'Tour Today!'],
  },
  {
    id: 2,
    name: 'Mesa at Skyeview',
    location: 'Las Vegas, NV 89166',
    phone: '702.568.0333',
    startingPrice: 528665,
    estimatedPayment: 2929,
    status: ['Masterplan Community', 'NW Las Vegas'],
  },
  {
    id: 3,
    name: 'Ironwood',
    location: 'Las Vegas, NV 89113',
    phone: '702.605.1504',
    startingPrice: 499990,
    estimatedPayment: 2770,
    status: ['Models Now Open', 'Great SW Location'],
  },
  {
    id: 4,
    name: 'Southwind',
    location: 'Las Vegas, NV 89178',
    phone: '702.789.6329',
    startingPrice: 564990,
    estimatedPayment: 3130,
    status: ['Located in the SW', 'Models Open'],
  },
  {
    id: 5,
    name: 'Eaglepointe at Skye Canyon',
    location: 'Las Vegas, NV 89166',
    phone: '702.781.3725',
    startingPrice: 614840,
    estimatedPayment: 3406,
    status: ['Model For Sale', 'Final Chances to Own'],
  },
]

export default function SimilarCommunities() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const canGoNext = currentIndex + itemsPerPage < communities.length
  const canGoPrevious = currentIndex > 0

  const goToNext = () => {
    if (canGoNext) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const goToPrevious = () => {
    if (canGoPrevious) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const visibleCommunities = communities.slice(
    currentIndex,
    currentIndex + itemsPerPage
  )

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Similar Communities Near You
        </h2>
        <p className="text-gray-600">
          Explore other exceptional communities in the Las Vegas area
        </p>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <div className="flex items-center justify-end gap-2 mb-4">
          <button
            onClick={goToPrevious}
            disabled={!canGoPrevious}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            aria-label="Previous communities"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            disabled={!canGoNext}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            aria-label="Next communities"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCommunities.map((community) => (
            <div
              key={community.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-white opacity-30" />
                </div>
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {community.status.map((status, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-blue-900 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {status}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {community.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{community.location}</p>
                <a
                  href={`tel:${community.phone}`}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  {community.phone}
                </a>

                <div className="border-t border-gray-200 mt-4 pt-4 mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm text-gray-600">Homes From</span>
                    <span className="text-xl font-bold text-gray-900">
                      ${community.startingPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Est. ${community.estimatedPayment.toLocaleString()}/mo
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    Schedule Tour
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

