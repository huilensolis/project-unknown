'use client'

import { SlashCommandMenu } from '@/components/slash-command-menu'
import { useRef, useState } from 'react'

const inputBoxBaseClassName = 'border-2 border-gray-300 p-2'

export function EditableBox() {
  const editableBoxRef = useRef<HTMLDivElement>(null)
  const [showCommandMenu, setShowCommandMenu] = useState(false)

  // const handleInput: FormEventHandler<HTMLDivElement> = (event) => {
  //   const textContent = event.currentTarget.textContent ?? ''
  // }

  return (
    <section className="relative">
      <div
        ref={editableBoxRef}
        className={inputBoxBaseClassName}
        contentEditable
        // onInput={handleInput}
        onKeyDown={(event) => {
          if (event.key === '/') {
            setShowCommandMenu(true)
          }

          if (event.key === 'Escape') {
            setShowCommandMenu(false)
          }
        }}
      />{' '}
      {showCommandMenu ? (
        <aside className="absolute">
          <SlashCommandMenu
            onHideMenu={() => {
              setShowCommandMenu(false)
              if (editableBoxRef.current) {
                editableBoxRef.current.focus()
              }
            }}
          />
        </aside>
      ) : null}
    </section>
  )
}
