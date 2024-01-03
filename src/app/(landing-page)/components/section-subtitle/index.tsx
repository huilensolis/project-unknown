import { ReactNode } from 'react'

export function SectionSubtitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-3xl text-center text-balance font-semibold text-neutral-800">
      {children}
    </h3>
  )
}
