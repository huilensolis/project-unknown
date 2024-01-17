import { ReactNode } from 'react'
import { AppAside } from './components/aside'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full min-h-screen grid grid-cols-[1fr,_4fr]">
      <div className="flex w-full h-full sticky top-0 left-0">
        <AppAside />
      </div>
      <main className="w-full p-4">{children}</main>
    </div>
  )
}
