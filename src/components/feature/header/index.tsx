'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { IHeaderProps } from './header.models'
import * as Tabs from '@radix-ui/react-tabs'
import * as Dialog from '@radix-ui/react-dialog'
import { FileUp, Image, Search } from 'lucide-react'
import { useDebounce } from '@/hooks/use-debounce'
import { type Image as UnsplashImage } from '@/services/unsplash/models/entities'
import { ApiService } from '@/services/api'

export function Header({ defaultBackground }: IHeaderProps) {
  const [background, setBackground] = useState<string | null>(
    () => defaultBackground ?? null,
  )
  return (
    <header className="w-full h-72 bg-neutral-200 group" key={background}>
      {background && (
        <div className="w-full h-full flex relative">
          <img
            src={background}
            className="w-full h-full object-cover object-center grouphover:brightness-75 transition-all delay-75"
          />
          <div className="absolute inset-0 hidden group-hover:flex">
            <PickImage
              iconClasses="text-neutral-200"
              onNewBackground={(imageUrl) => setBackground(imageUrl)}
            />
          </div>
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
            <div className="bg-neutral-50 w-full max-w-2xl flex flex-col gap-4 rounded-lg overflow-hidden">
              <ImagePickerTabs onNewBackground={handleNewBackground} />
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

function ImagePickerTabs({
  onNewBackground,
}: {
  onNewBackground: (imageUrl: string) => void
}) {
  return (
    <Tabs.Root className="flex flex-col w-full" defaultValue="tab1">
      <Tabs.List
        className="shrink-0 w-full flex"
        aria-label="Manage your account"
      >
        <Tabs.Trigger
          className="border-b border-b-neutral-300 bg-neutral-50 px-5 w-full h-[45px] flex items-center justify-center text-[15px] text-neutral-800 select-none data-[state=active]:border-neutral-700 cursor-default"
          value="tab1"
        >
          Pick from files
        </Tabs.Trigger>
        <Tabs.Trigger
          className="border-b border-b-neutral-300 bg-neutral-50 px-5 w-full h-[45px] flex items-center justify-center text-[15px] text-neutral-800 select-none data-[state=active]:border-neutral-700 cursor-default"
          value="tab2"
        >
          Pick from Unsplash
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="grow outline-none px-2 py-4" value="tab1">
        <FilesImagePicker onNewBackground={onNewBackground} />
      </Tabs.Content>
      <Tabs.Content className="grow outline-none px-2 py-4" value="tab2">
        <UnsplashImagePicker onNewBackground={onNewBackground} />
      </Tabs.Content>
    </Tabs.Root>
  )
}

function FilesImagePicker({
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
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <FileUp className="text-gray-500" />
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={changeBackground}
        />
      </label>
    </div>
  )
}

function UnsplashImagePicker({
  onNewBackground,
}: {
  onNewBackground: (imageUrl: string) => void
}) {
  const [images, setImages] = useState<UnsplashImage[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [notFound, setNotFound] = useState<boolean>(false)

  const { debouncedValue } = useDebounce({
    intitialValue: searchValue,
    delay: 500,
  })

  function updateSearchValue(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    async function fetchImages() {
      try {
        setIsLoading(true)
        const { images, error } = await ApiService.searchImage({
          query: debouncedValue,
        })

        if (!images || images.length === 0 || error) {
          setIsLoading(false)
          setImages([])
          setNotFound(true)

          return
        }

        setIsLoading(false)
        setImages(images)
        setNotFound(false)
      } catch (e) {
        console.log(e)
        setIsLoading(false)
        setNotFound(true)
      }
    }
    if (searchValue.length > 0) {
      fetchImages()
    }
  }, [debouncedValue])
  return (
    <div className="flex flex-col gap-2">
      <section>
        <form>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search />
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-3 ps-10 text-neutral-800 border border-gray-300 rounded-lg bg-neutral-200 focus:outline-none text-lg"
              placeholder="Search"
              required
              onChange={updateSearchValue}
            />
          </div>
        </form>
      </section>
      {isLoading && searchValue.length > 0 && <>loading</>}
      {notFound && !isLoading && searchValue.length > 0 && <>not found</>}
      <section>
        <ul className="flex flex-wrap gap-2">
          {images.length !== 0 &&
            images.map((image) => (
              <li key={image.id} className="flex flex-col">
                <button
                  className="w-full h-full"
                  onClick={() => onNewBackground(image.urls.full)}
                >
                  <img
                    src={image.urls.small}
                    className="w-52 h-32 rounded-md object-cover object-center"
                  />
                </button>
                <a
                  href={`https://unsplash.com/@${image.user.username}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-800 w-full text-right underline"
                >
                  by {image.user.name}
                </a>
              </li>
            ))}
        </ul>
      </section>
    </div>
  )
}
