'use client'

import { MapPin, Trees, Home, Dumbbell, School, ShoppingBag } from 'lucide-react'

const amenities = [
  {
    icon: Trees,
    title: 'Parks & Trails',
    description: 'Beautiful walking trails and neighborhood parks',
  },
  {
    icon: Dumbbell,
    title: 'Recreation Center',
    description: 'State-of-the-art fitness and recreation facilities',
  },
  {
    icon: School,
    title: 'Top-Rated Schools',
    description: 'Quality education within the community',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping & Dining',
    description: 'Convenient access to retail and restaurants',
  },
]

export default function CommunityOverview() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Overview</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Overview Text */}
        <div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to <strong>Terra at Skyeview</strong>, a new home community by <strong>Century Communities</strong> offering inspired two-story homes for sale in Las Vegas, NV. Located within the Skye Canyon master-planned community, Terra offers plenty of adventure and relaxation with state-of-the-art amenities, annual community events, and interactive programming.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Discover quality new construction homes from one of the nation's top 10 homebuilders. Terra at Skyeview features modern two-story floor plans ranging from 1,792 to 2,119 square feet with 3-5 bedrooms. Start your dream home journey today with expert representation from Dr. Janet Duffy, your preferred buyer's agent.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Community Amenities
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A recreational playground with inspiring scenery and an emotionally appealing
              setting, Skye Canyon's 1,700 acres are designed for a more engaged community.
              Where work-life balance, a sense of well-being, and a vital active life are the
              norm.
            </p>
            <p className="text-gray-700 leading-relaxed">
              New schools, parks, trails, splash pads, tot lots, basketball courts, sports
              fields, recreation center and fitness center are all planned inside the
              masterplan of Skye Canyon.
            </p>
          </div>
        </div>

        {/* Amenities Grid */}
        <div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 hover:shadow-lg transition"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{amenity.title}</h4>
                    <p className="text-sm text-gray-600">{amenity.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Community Map Placeholder */}
          <div className="mt-6 bg-gray-800 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm font-medium">Community Map</p>
              <p className="text-xs">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

