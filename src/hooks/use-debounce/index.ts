'use client'

import { useEffect, useState } from 'react'

export function useDebounce<T>({
  intitialValue,
  delay = 250,
}: {
  intitialValue: T
  delay?: number
}): {
  debouncedValue: T
} {
  const [value, setValue] = useState<T>(intitialValue)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(intitialValue)
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [intitialValue])

  return { debouncedValue: value }
}
