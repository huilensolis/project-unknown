import Link from 'next/link'
import { NavItem } from './nav-item'
import { NavLink } from './nav.models'

export function Nav() {
  const NAVLINKS: NavLink[] = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
    { title: 'FAQ', href: '/faq' },
    { title: 'Docs', href: '/docs' },
  ]
  return (
    <nav className="flex items-center justify-center w-full p-4 bg-neutral-50 border-b border-neutral-200">
      <div className="w-full max-w-6xl flex justify-between">
        <div className="w-full flex gap-4 items-center">
          <h2 className="text-xl font-bold w-max">PU</h2>
          <ul className="flex gap-2 items-center">
            {NAVLINKS.map((linkItem) => (
              <li key={linkItem.href}>
                <NavItem title={linkItem.title} href={linkItem.href} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <NavItem title="Login" href="/login" />
          <Link
            href="/signup"
            className="flex w-max bg-neutral-950 hover:bg-neutral-800 transition-all delay-75 text-neutral-50 py-2 px-4 rounded-lg"
          >
            Get PU for free
          </Link>
        </div>
      </div>
    </nav>
  )
}
