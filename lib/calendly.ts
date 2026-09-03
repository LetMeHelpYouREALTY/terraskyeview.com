export const CALENDLY_PROFILE_URL = 'https://calendly.com/drjanduffy'

/** Only public event type currently published on calendly.com/drjanduffy */
export const CALENDLY_LIVE_EVENT_URL = 'https://calendly.com/drjanduffy/15min'

export const CALENDLY_EVENTS = {
  strategy: {
    slug: '15min',
    url: CALENDLY_LIVE_EVENT_URL,
    title: 'Free 15-minute market strategy call',
    description:
      'Get a zip-level read on what is selling this month and whether your timing makes sense. Book with Dr. Jan Duffy.',
  },
  consult: {
    slug: '15min',
    url: CALENDLY_LIVE_EVENT_URL,
    title: 'Book a call before you tour',
    description:
      'Use this 15-minute strategy call to register for Terra at Skyeview, review inventory, and map next steps with Dr. Jan Duffy.',
  },
} as const

export type CalendlyEvent = keyof typeof CALENDLY_EVENTS

function assertNever(value: never): never {
  throw new Error(`Unhandled Calendly event: ${String(value)}`)
}

export function calendlyEmbedUrl(event: CalendlyEvent): string {
  let base: string
  switch (event) {
    case 'strategy':
      base = CALENDLY_EVENTS.strategy.url
      break
    case 'consult':
      base = CALENDLY_EVENTS.consult.url
      break
    default:
      assertNever(event)
  }
  const params = new URLSearchParams({
    hide_gdpr_banner: '1',
    primary_color: 'c4a35a',
  })
  return `${base}?${params.toString()}`
}
