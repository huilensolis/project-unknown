import { ReactNode } from 'react'

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-5xl font-bold text-neutral-950 text-center text-balance">
      {children}
    </h2>
  )
}
