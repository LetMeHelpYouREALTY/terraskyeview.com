import Link from 'next/link'
import MobileMenu from '@/app/components/mobile-menu'
import AgentPortrait from '@/app/components/agent-portrait'

type NavKey = 'home' | 'homes' | 'about' | 'blog'

type SiteHeaderProps = {
  current?: NavKey
}

const navClass = (active: boolean) =>
  `text-sm font-semibold tracking-wide transition ${
    active ? 'text-[#c4a35a]' : 'text-white/90 hover:text-[#c4a35a]'
  }`

export default function SiteHeader({ current = 'home' }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1c2c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <AgentPortrait size={44} className="hidden sm:block" />
            <span>
              <span className="block font-serif text-xl text-white">
                Terra at Skyeview
              </span>
              <span className="block text-[11px] tracking-widest text-[#c4a35a] uppercase">
                by Century Communities
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            <Link href="/" className={navClass(current === 'home')}>
              Home
            </Link>
            <Link
              href="/communities/skyeview"
              className={navClass(current === 'homes')}
            >
              Available Homes
            </Link>
            <Link
              href="/about-dr-janet-duffy"
              className={navClass(current === 'about')}
            >
              About Dr. Jan
            </Link>
            <Link href="/blog" className={navClass(current === 'blog')}>
              Blog
            </Link>
            <a
              href="#schedule-consultation"
              className="hidden rounded-md border border-[#c4a35a] px-4 py-2 text-sm font-semibold text-[#c4a35a] hover:bg-[#c4a35a] hover:text-[#0b1c2c] lg:inline-flex"
            >
              Book a call
            </a>
            <a
              href="tel:702-919-7292"
              className="rounded-md bg-[#c4a35a] px-4 py-2 text-sm font-semibold text-[#0b1c2c] hover:bg-[#d4b56c]"
            >
              Call (702) 919-7292
            </a>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
