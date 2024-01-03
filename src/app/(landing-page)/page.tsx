import {
  AArrowUp,
  ChevronRight,
  FileAxis3d,
  Frame,
  Mail,
  Wand2,
} from 'lucide-react'
import Link from 'next/link'
import { SectionTitle } from './components/section-title'
import { BroweserWindow } from './components/browser-window'
import { Layout } from './components/layout'
import { Box } from './components/box'
import { SectionSubtitle } from './components/section-subtitle'

export default function LandingPage() {
  return (
    <Layout>
      <main className="w-full h-full pt-44 mb-44">
        <HeroSection />
      </main>
      <section>
        <div className="shadow-2xl shadow-neutral-500/20 rounded-xl">
          <BroweserWindow>
            <img
              src="https://www.kwrealestatenews.com/wp-content/uploads/2016/01/Screen-Shot-2016-01-18-at-8.20.08-AM-1050x628.png"
              className="w-full h-full object-cover object-center"
            />
          </BroweserWindow>
        </div>
      </section>
      <section>
        <Bento />
      </section>
      <section>
        <OpenSource />
      </section>
      <section>
        <SaveFilesOnCloudSection />
      </section>
      <section>
        <ShareYourFiles />
      </section>
      <section className="pb-52">
        <JoinWitList />
      </section>
    </Layout>
  )
}

function HeroSection() {
  return (
    <article className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-neutral-800">Project Unknwon</h1>
      <SectionSubtitle>
        A secret project, wich will be cool, but we dont know why yet. Here are
        going to be named some cool features of this project.
      </SectionSubtitle>
      <Link
        href="/"
        className="flex items-center justify-center text-lg font-medium bg-neutral-950 hover:bg-neutral-800 transition-colors delay-75 text-neutral-50 py-2 px-4 rounded-lg mt-8"
      >
        Get PU for free <ChevronRight />
      </Link>
    </article>
  )
}

function OpenSource() {
  return (
    <article className="flex flex-col items-center justify-center">
      <SectionTitle>Open source</SectionTitle>
      <SectionSubtitle>
        All code is available at github, trusted by the community. <br />
        We respect your privacy. We dont collect any data.{' '}
      </SectionSubtitle>
      <Link href="https://github.com" className="flex text-blue-500 mt-5">
        Checkout Github Repository <ChevronRight />
      </Link>
    </article>
  )
}

function Bento() {
  return (
    <ul className="grid grid-cols-2 grid-rows-[repeat(3,_18rem)] gap-4">
      <li className="row-span-2">
        <Box>
          <article className="w-full h-full">
            <header className="flex flex-col gap-2 p-10">
              <AArrowUp className="text-red-500" />
              <h3 className="text-neutral-900 font-bold text-xl">
                Here is supposed to be some cool features, but we dont know
                which yet
              </h3>
              <p className="text-base">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </p>
            </header>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/build-any-page-communicate-any-idea.png"
              className="w-full h-full pl-10 object-cover object-left-top"
            />
          </article>
        </Box>
      </li>
      <li className="row-span-1">
        <Box>
          <article className="w-full h-full">
            <header className="flex flex-col gap-2 p-10">
              <Wand2 className="text-violet-500" />
              <h3 className="text-neutral-900 font-bold text-xl">
                Here is supposed to be some cool features, but we dont know
                which yet
              </h3>
              <p className="text-base">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </p>
            </header>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/build-any-page-communicate-any-idea.png"
              className="w-full h-full pl-10 object-cover object-left-top"
            />
          </article>
        </Box>
      </li>
      <li className="row-span-2">
        <Box>
          <article className="w-full h-full">
            <header className="flex flex-col gap-2 p-10">
              <Frame className="text-yellow-500" />
              <h3 className="text-neutral-900 font-bold text-xl">
                Here is supposed to be some cool features, but we dont know
                which yet
              </h3>
              <p className="text-base">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </p>
            </header>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/build-any-page-communicate-any-idea.png"
              className="w-full h-full pl-10 object-cover object-left-top"
            />
          </article>
        </Box>
      </li>
      <li className="row-span-1">
        <Box>
          <article className="w-full h-full">
            <header className="flex flex-col gap-2 p-10">
              <FileAxis3d className="text-blue-500" />
              <h3 className="text-neutral-900 font-bold text-xl">
                Here is supposed to be some cool features, but we dont know
                which yet
              </h3>
              <p className="text-base">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </p>
            </header>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/build-any-page-communicate-any-idea.png"
              className="w-full h-full pl-10 object-cover object-left-top"
            />
          </article>
        </Box>
      </li>
    </ul>
  )
}

function SaveFilesOnCloudSection() {
  return (
    <article className="flex flex-col justify-center items-center">
      <SectionTitle>Save your files on the cloud.</SectionTitle>
      <SectionSubtitle>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </SectionSubtitle>
    </article>
  )
}

function ShareYourFiles() {
  return (
    <article>
      <div className="mb-10">
        <SectionTitle>Share your files.</SectionTitle>
        <SectionSubtitle>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </SectionSubtitle>
      </div>
      <BroweserWindow>
        <img
          src="https://www.nuclino.com/img/solutions/document-sharing-tool-editor.png"
          className="w-full h-full object-cover object-center"
        />
      </BroweserWindow>
    </article>
  )
}

function JoinWitList() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <SectionTitle>Join the wait list, be the first to get UP.</SectionTitle>
        <SectionSubtitle>
          lorem ipsum dolor sit amet, consectetur adipisicing elit lorem ipsum
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </SectionSubtitle>
        <form className="w-full max-w-md mx-auto mt-5">
          <label
            htmlFor="default-email"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Email sign-up
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <Mail className="text-neutral-400" />
            </div>
            <input
              type="email"
              id="default-email"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email here..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
