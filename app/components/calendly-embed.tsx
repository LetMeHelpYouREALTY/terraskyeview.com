'use client'

import { useState } from 'react'
import {
  calendlyEmbedUrl,
  type CalendlyEvent,
} from '@/lib/calendly'

type CalendlyEmbedProps = {
  event: CalendlyEvent
}

function assertNever(value: never): never {
  throw new Error(`Unhandled Calendly event: ${String(value)}`)
}

export default function CalendlyEmbed({ event }: CalendlyEmbedProps) {
  const [showScheduler, setShowScheduler] = useState(false)

  let title: string
  switch (event) {
    case 'strategy':
      title =
        'Calendly scheduler for a 15-minute market strategy call with Dr. Jan Duffy'
      break
    case 'consult':
      title = 'Calendly scheduler for a 15-minute call with Dr. Jan Duffy'
      break
    default:
      assertNever(event)
  }

  if (showScheduler) {
    return (
      <iframe
        src={calendlyEmbedUrl(event)}
        title={title}
        className="h-[700px] w-full min-w-[320px] border-0"
        loading="eager"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setShowScheduler(true)}
      className="flex min-h-[240px] w-full flex-col items-center justify-center gap-3 bg-[#0b1c2c] px-6 py-16 text-center"
      aria-label="Load the 15-minute Calendly scheduler with Dr. Jan Duffy"
    >
      <span className="font-serif text-2xl text-white">
        Load the 15-minute scheduler
      </span>
      <span className="max-w-md text-sm text-white/75">
        Homebuying with Dr. Jan Duffy. Or call (702) 919-7292.
      </span>
      <span className="rounded-full bg-[#c4a35a] px-6 py-2.5 text-sm font-semibold text-[#0b1c2c]">
        Open Calendly
      </span>
    </button>
  )
}
