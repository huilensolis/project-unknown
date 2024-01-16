'use client'

import { SlashCommandMenu } from '@/components/slash-command-menu'
import { INPUT_BOX_BASE_CLASSNAME, COMMAND_TYPE_CLASSNAMES } from '@/constants'
import { cn } from '@/lib/utils'
import { uuid } from '@/lib/uuid'
import { Box, MenuCommand, MenuCommandType } from '@/types'
import { useCallback, useRef, useState } from 'react'

export function EditableBox({
  box,
  onAddBox,
}: {
  box: Box
  onAddBox: (box: Box) => void
}) {
  const editableBoxRef = useRef<HTMLDivElement>(null)
  const [showCommandMenu, setShowCommandMenu] = useState(false)
  const [inputBoxClassName, setInputBoxClassName] = useState(
    cn(INPUT_BOX_BASE_CLASSNAME, COMMAND_TYPE_CLASSNAMES[box.type]),
  )
  const focusEditableBox = useCallback(() => {
    if (editableBoxRef.current) {
      editableBoxRef.current.focus()
    }
  }, [])

  const onSelectCommand = (command: MenuCommand) => {
    const { type } = command

    setInputBoxClassName(
      cn(INPUT_BOX_BASE_CLASSNAME, COMMAND_TYPE_CLASSNAMES[type]),
    )

    setShowCommandMenu(false)
    focusEditableBox()
  }

  return (
    <div className="relative my-2">
      <div
        data-box-id={box.id}
        ref={editableBoxRef}
        className={inputBoxClassName}
        contentEditable
        onKeyDown={(event) => {
          if (event.key === '/') {
            setShowCommandMenu(true)
          }

          if (event.key === 'Escape') {
            setShowCommandMenu(false)
          }

          if (event.key === 'Enter') {
            return onAddBox({
              content: '',
              id: uuid(),
              type: MenuCommandType.PARAGRAPH,
            })
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
    </div>
  )
}

export function EditableDoc() {
  const [boxes, setBoxes] = useState<Box[]>([
    {
      content: 'hello world',
      id: 'firstbox',
      type: MenuCommandType.HEADING,
    },
  ])
  const editableDocRef = useRef<HTMLElement>(null)

  const addBox = useCallback((newBox: Box) => {
    setBoxes((boxes) => {
      return [...boxes, newBox]
    })

    setTimeout(() => {
      if (!editableDocRef.current) return

      const selector = `[data-box-id='${newBox.id}']`

      const boxToFocus = editableDocRef.current.querySelector(selector)

      if (boxToFocus instanceof HTMLElement) {
        boxToFocus.focus()
      }
    }, 10)
  }, [])

  return (
    <section ref={editableDocRef}>
      {boxes.map((box, index) => {
        return <EditableBox onAddBox={addBox} key={index} box={box} />
      })}
    </section>
  )
}
