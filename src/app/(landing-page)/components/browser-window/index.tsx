import { ReactNode } from 'react'

export function BroweserWindow({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full border border-neutral-200 rounded-xl overflow-hidden">
      <figure className="w-full h-12 px-4 border-b border-neutral-200 flex gap-2 items-center justify-start">
        <figure className="w-3 h-3 rounded-full bg-red-500" />
        <figure className="w-3 h-3 rounded-full bg-yellow-500" />
        <figure className="w-3 h-3 rounded-full bg-green-500" />
      </figure>
      <div>{children}</div>
    </div>
  )
}
