'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const images = [
  {
    src: '/images/skyeview/exterior-1.jpg',
    alt: 'A house with a garage and modern exterior',
  },
  {
    src: '/images/skyeview/exterior-2.jpg',
    alt: 'Beautiful home exterior with landscaping',
  },
  {
    src: '/images/skyeview/living-room.jpg',
    alt: 'Spacious living room with modern furnishings',
  },
  {
    src: '/images/skyeview/kitchen.jpg',
    alt: 'Gourmet kitchen with island and white cabinets',
  },
  {
    src: '/images/skyeview/master-bedroom.jpg',
    alt: 'Master bedroom with large windows',
  },
  {
    src: '/images/skyeview/bathroom.jpg',
    alt: 'Luxurious bathroom with modern fixtures',
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const translateX = `-${currentIndex * 100}%`

  return (
    <div className="relative w-full bg-gray-900">
      {/* Main Image */}
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(${translateX})` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full relative bg-gray-800 flex items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <svg
                  className="w-24 h-24"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white text-center px-4 z-10">{image.alt}</span>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-gray-900" />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="bg-gray-900 py-4 px-4 overflow-x-auto">
        <div className="flex gap-2 justify-start md:justify-center min-w-max md:min-w-0">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-20 h-16 md:w-24 md:h-20 flex-shrink-0 rounded overflow-hidden transition border-2 ${
                currentIndex === index
                  ? 'border-blue-500 opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-80'
              }`}
              aria-label={`View slide ${index + 1}`}
              title={`Go to slide ${index + 1}`}
            >
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

