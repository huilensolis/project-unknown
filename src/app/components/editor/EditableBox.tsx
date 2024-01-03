'use client'
import React, { FormEventHandler, useState, useRef } from 'react'

const baseClassName = 'border-2 border-gray-300 p-2'

export function EditableBox() {
  const [className, setClassName] = useState(baseClassName)
  const isTitle = useRef(false)
  const rawText = useRef('')
  const divRef = useRef<HTMLDivElement>(null)

  const up = (parsedText: string) => {
    if (!divRef.current) return
    divRef.current.innerHTML = parsedText
    // set focus to the end of the text
    const range = document.createRange()
    const sel = window.getSelection()
    // add a text node as the first child
    const textNode = document.createTextNode('')
    divRef.current.appendChild(textNode)
    range.setStart(divRef.current, 1)
    range.collapse(true)
    sel?.removeAllRanges()
    sel?.addRange(range)
    divRef.current.focus()
  }
  const handleInput: FormEventHandler<HTMLDivElement> = (event) => {
    const textContent = event.currentTarget.textContent ?? ''

    rawText.current = textContent

    if (textContent.startsWith('# ')) {
      up(textContent.substring(2))
      isTitle.current = true
    } else {
      setClassName(baseClassName)
      up(textContent)
    }

    if (isTitle.current === true) {
      setClassName(baseClassName + ' text-3xl font-bold')
    }

    if (textContent.length === 1) {
      isTitle.current = false
    }
  }

  return (
    <div>
      <div
        ref={divRef}
        className={className}
        contentEditable
        onInput={handleInput}
      />
    </div>
  )
}
