'use client'

import { ChangeEvent, useState } from 'react'
import { IHeaderProps } from './header.models'
import * as Tabs from '@radix-ui/react-tabs'
import * as Dialog from '@radix-ui/react-dialog'
import { Image } from 'lucide-react'

export function Header({ defaultBackground }: IHeaderProps) {
  const [background, setBackground] = useState<string | null>(
    () => defaultBackground ?? null,
  )

  // this only is for the button on the hover of an actual banner
  const [showButton, setShowButton] = useState<boolean>(false)

  function toggleButton() {
    setShowButton(!showButton)
  }

  return (
    <header className="w-full h-72 bg-neutral-200">
      {background && (
        <div
          className="w-full h-full flex relative"
          onMouseEnter={toggleButton}
          onMouseLeave={toggleButton}
        >
          <img
            src={background}
            className={`w-full h-full object-cover object-center ${
              showButton ? 'brightness-75' : ''
            } transition-all delay-75`}
          />
          {showButton && (
            <div className="absolute inset-0">
              <PickImage
                iconClasses="text-neutral-400"
                onNewBackground={(imageUrl) => setBackground(imageUrl)}
              />
            </div>
          )}
        </div>
      )}
      {!background && (
        <PickImage onNewBackground={(imageUrl) => setBackground(imageUrl)} />
      )}
    </header>
  )
}

function PickImage({
  onNewBackground,
  iconClasses,
}: {
  onNewBackground: (imageUrl: string) => void
  iconClasses?: string
}) {
  function handleNewBackground(imageUrl: string) {
    onNewBackground(imageUrl)
  }
  return (
    <div className="w-full h-full">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="flex items-center justify-center w-full h-full">
            <Image className={iconClasses ?? ''} />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-neutral-800/30">
            <div className="bg-neutral-50 flex flex-col gap-4 rounded-lg overflow-hidden">
              <ImagePicker onNewBackground={handleNewBackground} />
              <div className="w-full flex justify-end p-2">
                <Dialog.Close className="bg-neutral-700 text-neutral-50 px-3 py-2 rounded-lg">
                  Close
                </Dialog.Close>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

function ImagePicker({
  onNewBackground,
}: {
  onNewBackground: (imageUrl: string) => void
}) {
  function changeBackground(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) return
    const image = e.target.files[0]

    const render = new FileReader()
    render.readAsDataURL(image)
    render.onload = (event) => {
      if (!event.target) return
      onNewBackground(render.result as string)
    }
  }
  return (
    <Tabs.Root className="flex flex-col w-full" defaultValue="tab1">
      <Tabs.List
        className="shrink-0 flex border-b border-mauve6"
        aria-label="Manage your account"
      >
        <Tabs.Trigger
          className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
          value="tab1"
        >
          Pick from files
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
          value="tab2"
        >
          Pick from Unsplash
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="grow outline-none p-2" value="tab1">
        <div>
          <input type="file" onChange={changeBackground} />
        </div>
      </Tabs.Content>
      <Tabs.Content className="grow outline-none p-2" value="tab2">
        {/* */}
      </Tabs.Content>
    </Tabs.Root>
  )
}
