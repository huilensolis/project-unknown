import {
  AArrowUp,
  ChevronRight,
  FileAxis3d,
  Frame,
  Mail,
  Wand2,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function LandingPage() {
  return (
    <Layout>
      <main className="w-full h-full pt-44 mb-44">
        <article className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold text-neutral-800">
            Project Unknwon
          </h1>
          <sub className="text-3xl text-center text-balance font-semibold text-neutral-800">
            A secret project, wich will be cool, but we dont know why yet. Here
            are going to be named some cool features of this project.
          </sub>
          <Link
            href="/"
            className="flex items-center justify-center text-lg font-medium bg-neutral-950 hover:bg-neutral-800 transition-colors delay-75 text-neutral-50 py-2 px-4 rounded-lg mt-8"
          >
            Get PU for free <ChevronRight />
          </Link>
        </article>
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
        <JoinWitList />
      </section>
    </Layout>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen items-center bg-neutral-50">
      <div className="fixed top-0 left-0 w-full">
        <Nav />
      </div>
      <div className="flex flex-col gap-40 w-full h-full max-w-6xl">
        {children}
      </div>
      <Footer />
    </div>
  );
}

function Nav() {
  const NAVLINKS: { title: string; href: string }[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "FAQ", href: "/faq" },
    { title: "Docs", href: "/docs" },
  ];

  function NavItem({ title, href }: { title: string; href: string }) {
    return (
      <Link
        href={href}
        className="w-max py-2 px-4 rounded-sm hover:bg-neutral-100 transition-colors delay-75"
      >
        {title}
      </Link>
    );
  }

  return (
    <nav className="flex items-center justify-center w-full p-4 bg-neutral-50 border-b border-neutral-200">
      <div className="w-full max-w-6xl flex justify-between">
        <div className="w-full flex gap-4 items-center">
          <h2 className="text-xl font-bold w-max">PU</h2>
          <ul className="flex gap-2 items-center">
            {NAVLINKS.map((linkItem) => (
              <li key={linkItem.href}>
                <NavItem title={linkItem.title} href={linkItem.href} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <NavItem title="Login" href="/login" />
          <Link
            href="/signup"
            className="flex w-max bg-neutral-950 hover:bg-neutral-800 transition-all delay-75 text-neutral-50 py-2 px-4 rounded-lg"
          >
            Get PU for free
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return <footer>footer</footer>;
}

function OpenSource() {
  return (
    <article className="flex flex-col gap-4 items-center justify-center">
      <SectionTitle className="font-bold text-5xl">Open source</SectionTitle>
      <p className="text-balance font-medium text-lg text-center">
        All code is available at github, trusted by the community. <br />
        We respect your privacy. We dont collect any data.{" "}
      </p>
      <Link href="https://github.com" className="flex text-blue-500">
        Checkout Github Repository <ChevronRight />
      </Link>
    </article>
  );
}

function Box({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden">
      {children}
    </div>
  );
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
  );
}

function BroweserWindow({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full border border-neutral-200 rounded-xl overflow-hidden">
      <figure className="w-full h-12 px-4 border-b border-neutral-200 flex gap-2 items-center justify-start">
        <figure className="w-3 h-3 rounded-full bg-red-500" />
        <figure className="w-3 h-3 rounded-full bg-yellow-500" />
        <figure className="w-3 h-3 rounded-full bg-green-500" />
      </figure>
      <div>{children}</div>
    </div>
  );
}

function SaveFilesOnCloudSection() {
  return (
    <article className="flex flex-col justify-center items-center">
      <SectionTitle>Save your files on the cloud.</SectionTitle>
      <sub className="text-neutral-950 text-3xl font-medium text-balance text-center">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </sub>
    </article>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-5xl font-bold text-neutral-950 text-center text-balance">
      {children}
    </h2>
  );
}

function JoinWitList() {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <SectionTitle>Join the wait list, be the first to get UP.</SectionTitle>
        <p className="mb-8 text-xl font-normal text-neutral-950 text-center text-balance">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <form className="w-full max-w-md mx-auto">
          <label
            for="default-email"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
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
              classname="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email here..."
              required
            />
            <button
              type="submit"
              classname="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
