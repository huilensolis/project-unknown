import Link from 'next/link'

export function NavItem({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="w-max py-2 px-4 rounded-sm hover:bg-neutral-100 transition-colors delay-75"
    >
      {title}
    </Link>
  )
}
