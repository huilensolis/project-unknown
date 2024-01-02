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
      <div className="flex flex-col gap-4 w-full h-full max-w-5xl">
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
  function Box() {
    return (
      <div className="w-full h-full bg-neutral-900 p-10 rounded-xl">Box</div>
    );
  }

  return (
    <ul className="grid grid-cols-4 grid-rows-3 gap-4">
      <li className="col-span-1">
        <Box></Box>
      </li>
      <li className="col-span-2">
        <Box></Box>
      </li>
      <li className="col-span-1">
        <Box></Box>
      </li>
      <li className="col-span-2">
        <Box></Box>
      </li>
      <li className="col-span-2">
        <Box></Box>
      </li>
      <li className="col-span-1">
        <Box></Box>
      </li>
      <li className="col-span-2">
        <Box></Box>
      </li>
      <li className="col-span-1">
        <Box></Box>
      </li>
    </ul>
  );
}
