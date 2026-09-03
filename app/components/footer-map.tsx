'use client'

import { useState } from 'react'
import Image from 'next/image'
import { mediaUrl } from '@/lib/media'

const MAPS_EMBED =
  'https://www.google.com/maps?q=8592+Vanhoy+Creek+Street,+Las+Vegas,+NV+89166&output=embed'

export default function FooterMap() {
  const [showMap, setShowMap] = useState(false)

  if (showMap) {
    return (
      <iframe
        src={MAPS_EMBED}
        title="Map pin for Terra at Skyeview model home at 8592 Vanhoy Creek Street, Las Vegas"
        width="100%"
        height="240"
        className="border-0"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setShowMap(true)}
      className="relative block h-[240px] w-full overflow-hidden text-left"
      aria-label="Load Google Map of 8592 Vanhoy Creek Street, Las Vegas"
    >
      <Image
        src={mediaUrl('front-porch.jpg')}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
      <span className="absolute inset-0 bg-[#0b1c2c]/45" />
      <span className="absolute inset-x-4 bottom-4 rounded-full bg-[#c4a35a] px-4 py-2 text-center text-sm font-semibold text-[#0b1c2c]">
        Load map of 8592 Vanhoy Creek Street
      </span>
    </button>
  )
}
