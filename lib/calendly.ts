export const CALENDLY_PROFILE_URL = 'https://calendly.com/drjanduffy'

export const CALENDLY_EVENTS = {
  strategy: {
    slug: '15min',
    url: 'https://calendly.com/drjanduffy/15min',
    title: 'Free 15-minute market strategy call',
    description:
      'Get a zip-level read on what is selling this month and whether your timing makes sense. Book with Dr. Jan Duffy.',
  },
  consult: {
    slug: '30-minute',
    url: 'https://calendly.com/drjanduffy/30-minute',
    title: '30-minute buyer consultation',
    description:
      'Register before you tour Terra at Skyeview, review inventory, and map next steps with Dr. Jan Duffy.',
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
    embed_domain: 'www.terraskyeview.com',
    embed_type: 'Inline',
  })
  return `${base}?${params.toString()}`
}
