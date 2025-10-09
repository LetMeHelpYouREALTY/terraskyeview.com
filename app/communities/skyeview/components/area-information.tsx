'use client'

import { GraduationCap, ShoppingCart, UtensilsCrossed } from 'lucide-react'

const schools = [
  { name: 'Divich Elementary School', type: 'Elementary' },
  { name: 'Escobedo Middle School', type: 'Middle School' },
  { name: 'Arbor View High School', type: 'High School' },
]

const shopping = [
  { name: "Sprouts Farmers Market", location: 'Las Vegas, NV 89166' },
  { name: "Smith's Food & Drug", location: 'Las Vegas, NV 89166' },
  { name: 'Montecito Marketplace', location: 'Las Vegas, NV 89166' },
  { name: 'The Shoppes', location: 'Las Vegas, NV 89166' },
  { name: "Lowe's Home Improvement", location: 'Las Vegas, NV 89166' },
]

const dining = [
  { name: 'Buffalo Wild Wings', location: 'Las Vegas, NV 89166' },
  { name: 'Baby Stacks Cafe', location: 'Las Vegas, NV 89166' },
  { name: 'Michocan Mexican', location: 'Las Vegas, NV 89166' },
  { name: 'Starbucks', location: 'Las Vegas, NV 89166' },
  { name: 'Cafe Rio', location: 'Las Vegas, NV 89166' },
  { name: 'Thai Spoon', location: 'Las Vegas, NV 89166' },
]

export default function AreaInformation() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Area Information</h2>
        <p className="text-gray-600">
          Everything you need is right around the corner
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Schools */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Schools</h3>
          </div>
          <ul className="space-y-4">
            {schools.map((school, index) => (
              <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <p className="font-semibold text-gray-900">{school.name}</p>
                <p className="text-sm text-gray-600">{school.type}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Shopping */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Shopping</h3>
          </div>
          <ul className="space-y-4">
            {shopping.map((store, index) => (
              <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <p className="font-semibold text-gray-900">{store.name}</p>
                <p className="text-sm text-gray-600">{store.location}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Dining */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
              <UtensilsCrossed className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Dining</h3>
          </div>
          <ul className="space-y-4">
            {dining.map((restaurant, index) => (
              <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <p className="font-semibold text-gray-900">{restaurant.name}</p>
                <p className="text-sm text-gray-600">{restaurant.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

