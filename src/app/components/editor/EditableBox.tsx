'use client'

import { SlashCommandMenu } from '@/components/slash-command-menu'
import { MenuCommand, MenuCommandType } from '@/types'
import { useCallback, useRef, useState } from 'react'

const INPUT_BOX_BASE_CLASSNAME = 'border-2 border-gray-300 p-2'
export function EditableBox() {
  const editableBoxRef = useRef<HTMLDivElement>(null)
  const [showCommandMenu, setShowCommandMenu] = useState(false)
  const [inputBoxClassName, setInputBoxClassName] = useState(
    INPUT_BOX_BASE_CLASSNAME,
  )
  const focusEditableBox = useCallback(() => {
    if (editableBoxRef.current) {
      editableBoxRef.current.focus()
    }
  }, [])

  const onSelectCommand = (command: MenuCommand) => {
    const { type } = command

    if (type === MenuCommandType.HEADING) {
      setInputBoxClassName(INPUT_BOX_BASE_CLASSNAME + ' text-2xl font-bold')
    } else if (type === MenuCommandType.PARAGRAPH) {
      setInputBoxClassName(INPUT_BOX_BASE_CLASSNAME + ' text-base font-normal')
    }

    setShowCommandMenu(false)
    focusEditableBox()
  }

  return (
    <section className="relative">
      <div
        ref={editableBoxRef}
        className={inputBoxClassName}
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
      />

      {showCommandMenu ? (
        <aside className="absolute">
          <SlashCommandMenu
            onSelectCommand={onSelectCommand}
            onHideMenu={() => {
              setShowCommandMenu(false)
              focusEditableBox()
            }}
          />
        </aside>
      ) : null}
    </section>
  )
}
