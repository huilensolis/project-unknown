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
          <sub className="text-4xl text-center text-balance font-bold text-neutral-800">
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
  return (
    <nav className="flex justify-between w-full p-4">
      <div className="w-full flex gap-4 items-center">
        <h2 className="text-xl font-bold w-max">Project Unknwon</h2>
        <ul className="flex gap-4 items-center">
          {NAVLINKS.map((linkItem) => (
            <li key={linkItem.href}>
              <Link href={linkItem.href}>{linkItem.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <Link href="/login" className="flex w-max">
          Log In
        </Link>
        <Link
          href="/signup"
          className="flex w-max bg-neutral-800 text-white py-2 px-4 rounded-lg"
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
            <header className="flex flex-col p-10">
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
            <header className="flex flex-col p-10">
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
            <header className="flex flex-col p-10">
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
            <header className="flex flex-col p-10">
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
            <header className="flex flex-col p-10">
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
