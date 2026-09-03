import CalendlyEmbed from '@/app/components/calendly-embed'
import {
  CALENDLY_EVENTS,
  type CalendlyEvent,
} from '@/lib/calendly'

type CalendlySectionProps = {
  event: CalendlyEvent
  heading?: string
  description?: string
}

function assertNever(value: never): never {
  throw new Error(`Unhandled Calendly event: ${String(value)}`)
}

export default function CalendlySection({
  event,
  heading,
  description,
}: CalendlySectionProps) {
  const meta = CALENDLY_EVENTS[event]
  let sectionId: string
  switch (event) {
    case 'strategy':
      sectionId = 'schedule-strategy-call'
      break
    case 'consult':
      sectionId = 'schedule-consultation'
      break
    default:
      assertNever(event)
  }

  return (
    <section
      id={sectionId}
      aria-labelledby={`${sectionId}-heading`}
      className="border-y border-[#0b1c2c]/10 bg-[#f7f3eb] py-16"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2
          id={`${sectionId}-heading`}
          className="text-center font-serif text-3xl text-[#0b1c2c] md:text-4xl"
        >
          {heading ?? meta.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#0b1c2c]/70">
          {description ?? meta.description} Or call{' '}
          <a href="tel:702-919-7292" className="font-semibold underline">
            (702) 919-7292
          </a>
          .
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
          <CalendlyEmbed event={event} />
        </div>
      </div>
    </section>
  )
}
