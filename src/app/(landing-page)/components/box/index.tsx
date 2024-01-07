import { ReactNode } from 'react'

export function Box({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden">
      {children}
    </div>
  )
}
