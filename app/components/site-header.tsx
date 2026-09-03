import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MobileMenu from '@/app/components/mobile-menu'

type NavKey = 'home' | 'homes' | 'about' | 'blog'

type SiteHeaderProps = {
  current?: NavKey
}

const navClass = (active: boolean) =>
  `text-base font-semibold transition ${
    active ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
  }`

export default function SiteHeader({ current = 'home' }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              Terra at Skyeview
            </span>
            <span className="ml-2 text-xs text-gray-500">
              by Century Communities
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
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
            <Button asChild className="bg-blue-600 font-semibold text-white hover:bg-blue-700">
              <a href="tel:702-919-7292">Contact</a>
            </Button>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
