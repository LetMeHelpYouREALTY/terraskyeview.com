'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Phone, Mail } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    rentOrOwn: 'rent',
    isRealtor: 'no',
    scheduleTour: 'no',
    tourPreferences: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Form Section */}
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Request Information</h2>
        <p className="text-gray-600 mb-6">
          Fill out the form below and we'll get back to you shortly
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="rentOrOwn" className="block text-sm font-medium text-gray-700 mb-1">
              Do You Currently Rent or Own
            </label>
            <select
              id="rentOrOwn"
              name="rentOrOwn"
              value={formData.rentOrOwn}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="rent">Rent</option>
              <option value="own">Own</option>
            </select>
          </div>

          <div>
            <label htmlFor="isRealtor" className="block text-sm font-medium text-gray-700 mb-1">
              I'm a realtor
            </label>
            <select
              id="isRealtor"
              name="isRealtor"
              value={formData.isRealtor}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <div>
            <label htmlFor="scheduleTour" className="block text-sm font-medium text-gray-700 mb-1">
              Schedule a Tour
            </label>
            <select
              id="scheduleTour"
              name="scheduleTour"
              value={formData.scheduleTour}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          {formData.scheduleTour === 'yes' && (
            <div>
              <label htmlFor="tourPreferences" className="block text-sm font-medium text-gray-700 mb-1">
                Tour Preferences
              </label>
              <textarea
                id="tourPreferences"
                name="tourPreferences"
                rows={3}
                value={formData.tourPreferences}
                onChange={handleChange}
                placeholder="Let us know your preferred date and time..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          <div className="text-xs text-gray-500 pt-2">
            By providing your information, you agree to be contacted about this community.
            Standard text message rates apply. You can opt out at any time.
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
          >
            Submit
          </Button>
        </form>
      </div>

      {/* Info Section */}
      <div className="flex flex-col justify-center">
        <div className="text-white">
          <div className="mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-blue-600">JD</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">Get in Touch</h3>
            <p className="text-xl font-semibold text-blue-100 mb-2">Dr. Janet Duffy</p>
            <p className="text-blue-100">Your Local Real Estate Expert</p>
          </div>
          <p className="text-blue-100 text-lg mb-8">
            I'm here to help you find your perfect home in Skyeview at Skye Canyon.
            Contact me today to schedule a tour or learn more about our available homes.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                <a
                  href="tel:702-919-7292"
                  className="text-blue-100 hover:text-white text-lg transition"
                >
                  702.568.0333
                </a>
                <p className="text-blue-100 text-sm mt-1">Mon-Sat: 10am - 6pm PST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                <a
                  href="mailto:info@terraskyeview.com"
                  className="text-blue-100 hover:text-white transition"
                >
                  info@terraskyeview.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Visit Our Models</h4>
                <p className="text-blue-100">
                  8592 Vanhoy Creek Street<br />
                  Las Vegas, NV 89166
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

