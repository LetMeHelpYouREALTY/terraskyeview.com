'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { mediaUrl } from '@/lib/media'

const images = [
  {
    src: mediaUrl('hero.jpg'),
    alt: 'Two-story Terra at Skyeview home exterior at dusk in Skye Canyon, Las Vegas',
  },
  {
    src: mediaUrl('front-porch.jpg'),
    alt: 'Covered front porch of a Terra at Skyeview new home in Northwest Las Vegas',
  },
  {
    src: mediaUrl('living-room.jpg'),
    alt: 'Open great room with vaulted ceiling at Terra at Skyeview by Century Communities',
  },
  {
    src: mediaUrl('kitchen.jpg'),
    alt: 'Gourmet kitchen with island at Terra at Skyeview, Las Vegas NV 89166',
  },
  {
    src: mediaUrl('bedroom.jpg'),
    alt: 'Primary bedroom with mountain-view windows at Terra at Skyeview',
  },
  {
    src: mediaUrl('bathroom.jpg'),
    alt: 'Primary bathroom with soaking tub at Terra at Skyeview in Skye Canyon',
  },
  {
    src: mediaUrl('patio.jpg'),
    alt: 'Covered patio overlooking desert mountains at Terra at Skyeview',
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

  return (
    <div className="relative w-full bg-[#0b1c2c]">
      <div className="relative h-[400px] w-full overflow-hidden md:h-[600px]">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition hover:bg-white"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6 text-gray-900" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition hover:bg-white"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6 text-gray-900" />
        </button>
      </div>

      <div className="overflow-x-auto bg-[#0b1c2c] px-4 py-4">
        <div className="flex min-w-max justify-start gap-2 md:min-w-0 md:justify-center">
          {images.map((image, index) => (
            <button
              key={`thumb-${image.src}`}
              onClick={() => goToSlide(index)}
              className={`relative h-16 w-20 flex-shrink-0 overflow-hidden rounded border-2 transition md:h-20 md:w-24 ${
                currentIndex === index
                  ? 'border-[#c4a35a] opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-80'
              }`}
              aria-label={`View slide ${index + 1}`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
