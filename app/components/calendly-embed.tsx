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
  let title: string
  switch (event) {
    case 'strategy':
      title = 'Calendly scheduler for a 15-minute market strategy call with Dr. Jan Duffy'
      break
    case 'consult':
      title = 'Calendly scheduler for a 15-minute call with Dr. Jan Duffy'
      break
    default:
      assertNever(event)
  }

  return (
    <iframe
      src={calendlyEmbedUrl(event)}
      title={title}
      className="h-[700px] w-full min-w-[320px] border-0"
      loading="lazy"
    />
  )
}
