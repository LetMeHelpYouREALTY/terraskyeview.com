'use client'

import { FaqStructuredData } from '@/app/components/structured-data'
import HomebuyingKicker from '@/app/components/homebuying-kicker'

export const DEFAULT_FAQS = [
  {
    q: 'What is homebuying with Dr. Jan Duffy at Terra at Skyeview?',
    a: 'Homebuying with Dr. Jan Duffy means she registers you with Century Communities before you tour Terra at Skyeview, then negotiates price, upgrades, and contract terms. Call (702) 919-7292. Model home: 8592 Vanhoy Creek Street, Las Vegas, NV 89166.',
  },
  {
    q: 'Do I pay Dr. Jan Duffy to represent me?',
    a: 'No. Homebuying with Dr. Jan Duffy is free to the buyer. The seller pays the commission. The on-site agent represents the builder; Dr. Jan represents you.',
  },
  {
    q: 'When should I call before touring Terra at Skyeview?',
    a: 'Call (702) 919-7292 before the first model-home visit. Homebuying with Dr. Jan Duffy requires builder registration first so she can represent you on the contract.',
  },
  {
    q: 'Where is Terra at Skyeview and what do homes cost?',
    a: 'Terra at Skyeview is at 8592 Vanhoy Creek Street, Las Vegas, NV 89166 in Skye Canyon. Two-story homes start at $479,990. Homebuying with Dr. Jan Duffy covers the three Terra floor plans from 1,792 to 2,119 square feet.',
  },
]

type SiteFaqProps = {
  faqs?: { q: string; a: string }[]
}

export default function SiteFaq({ faqs = DEFAULT_FAQS }: SiteFaqProps) {
  return (
    <section
      aria-labelledby="homebuying-faq-heading"
      className="border-y border-[#0b1c2c]/10 bg-white py-16"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <HomebuyingKicker />
        <h2
          id="homebuying-faq-heading"
          className="mt-2 font-serif text-3xl text-[#0b1c2c] md:text-4xl"
        >
          Homebuying with Dr. Jan Duffy: questions buyers ask
        </h2>
        <div className="mt-8 space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-[#0b1c2c]/10 pb-6">
              <h3 className="font-serif text-xl text-[#0b1c2c]">{item.q}</h3>
              <p className="mt-2 text-sm leading-6 text-[#0b1c2c]/70">{item.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#0b1c2c]/70">
          Dr. Jan Duffy | BHHS Nevada Properties | S.0197614 · (702) 919-7292 ·
          8592 Vanhoy Creek Street, Las Vegas, NV 89166
        </p>
      </div>
      <FaqStructuredData faqs={faqs} />
    </section>
  )
}
