import { Phone, Mail, Calendar } from 'lucide-react'
import AgentPortrait from '@/app/components/agent-portrait'
import CalendlyEmbed from '@/app/components/calendly-embed'

export default function ContactForm() {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div className="rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="mb-2 text-3xl font-bold text-gray-900">
          Book a Terra at Skyeview consultation
        </h2>
        <p className="mb-6 text-gray-600">
          Pick a 30-minute slot to register with Century Communities before you
          tour. Dr. Jan Duffy will confirm next steps by phone at (702) 919-7292.
        </p>
        <CalendlyEmbed event="consult" />
      </div>

      <div className="flex flex-col justify-center">
        <div className="text-white">
          <div className="mb-6">
            <div className="mb-4">
              <AgentPortrait size={80} />
            </div>
            <h3 className="mb-2 text-3xl font-bold">Get in Touch</h3>
            <p className="mb-2 text-xl font-semibold text-blue-100">
              Dr. Jan Duffy
            </p>
            <p className="text-blue-100">Your Local Real Estate Expert</p>
          </div>
          <p className="mb-8 text-lg text-blue-100">
            Call before the first model-home visit so Dr. Jan can register you
            at Terra at Skyeview. Model home: 8592 Vanhoy Creek Street, Las
            Vegas, NV 89166.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="mb-1 text-lg font-semibold">Call Us</h4>
                <a
                  href="tel:702-919-7292"
                  className="text-lg text-blue-100 transition hover:text-white"
                >
                  (702) 919-7292
                </a>
                <p className="mt-1 text-sm text-blue-100">
                  Mon–Sat 10:00 AM–6:00 PM · Sun 11:00 AM–6:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="mb-1 text-lg font-semibold">Email Us</h4>
                <a
                  href="mailto:DrJanSells@TerraSkyeview.com"
                  className="text-blue-100 transition hover:text-white"
                >
                  DrJanSells@TerraSkyeview.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="mb-1 text-lg font-semibold">Visit Our Models</h4>
                <p className="text-blue-100">
                  8592 Vanhoy Creek Street
                  <br />
                  Las Vegas, NV 89166
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
