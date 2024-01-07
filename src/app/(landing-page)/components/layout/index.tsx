import { ReactNode } from 'react'
import { Nav } from '../nav'
import { Footer } from '../footer'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen items-center bg-neutral-50">
      <div className="fixed top-0 left-0 w-full">
        <Nav />
      </div>
      <div className="flex flex-col gap-40 w-full h-full max-w-6xl">
        {children}
      </div>
      <Footer />
    </div>
  )
}
