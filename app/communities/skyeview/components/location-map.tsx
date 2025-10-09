'use client'

import { MapPin, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LocationMap() {
  const address = '8592 Vanhoy Creek Street, Las Vegas, NV 89166'
  const googleMapsUrl = 'https://www.google.com/maps/place/Terra+at+Skyeview+by+Homes+Dr.+Jan+Duffy/@36.316134,-115.32963,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8932543890a15:0x6ee8403ab08e6e6f!8m2!3d36.316134!4d-115.32963!16s%2Fg%2F11x7y849nj'
  
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="flex items-center gap-3 text-white">
          <MapPin className="w-8 h-8" />
          <div>
            <h3 className="text-xl font-bold">Visit Us</h3>
            <p className="text-blue-100 text-sm">Come see your future home</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h4 className="font-bold text-gray-900 mb-2">Model Home Location</h4>
          <p className="text-gray-700">{address}</p>
          <p className="text-sm text-gray-600 mt-2">
            Your Local Expert: <span className="font-semibold text-blue-600">Dr. Jan Duffy</span>
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.2847684!2d-115.32963!3d36.316134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8932543890a15%3A0x6ee8403ab08e6e6f!2sTerra%20at%20Skyeview%20by%20Homes%20Dr.%20Jan%20Duffy!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Terra at Skyeview Location Map"
          />
        </div>

        <div className="flex gap-3">
          <Button
            asChild
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </Button>
          <Button variant="outline" className="flex-1">
            <a href="tel:702-919-7292">Call Now</a>
          </Button>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h5 className="font-semibold text-gray-900 mb-2">Model Home Hours</h5>
          <div className="text-sm text-gray-700 space-y-1">
            <p><span className="font-medium">Monday - Saturday:</span> 10:00 AM - 6:00 PM</p>
            <p><span className="font-medium">Sunday:</span> 11:00 AM - 6:00 PM</p>
            <p className="text-xs text-gray-600 mt-2">
              Walk-ins welcome! Appointments preferred for personalized tours.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

