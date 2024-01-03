import { AArrowUp, Brush, FileAxis3d, Frame, Wand2 } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function LandingPage() {
  return (
    <Layout>
      <main className="w-full h-full pt-44 mb-44">
        <article className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-neutral-800">
            Project Unknwon
          </h1>
          <sub className="text-4xl text-center text-balance font-semibold text-neutral-800">
            A secret project, wich will be cool, but we dont know why yet. Here
            are going to be named some cool features of this project
          </sub>
        </article>
      </main>
      <section>
        <Bento />
      </section>
    </Layout>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Nav />
      <div className="flex flex-col gap-4 w-full h-full max-w-6xl">
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
    <nav className="flex justify-between w-full p-4">
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
          Get Project Unknwon for free
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  return <footer>footer</footer>;
}

function Bento() {
  function Box({ children }: { children: ReactNode }) {
    return (
      <div className="w-full h-full bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden">
        {children}
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-2 grid-rows-[repeat(6,_18rem)] gap-4">
      <li className="row-span-3 col-span-2">
        <Box>
          <article className="w-full h-full">
            <header className="flex flex-col gap-2 p-10">
              <Brush className="text-green-500" />
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
