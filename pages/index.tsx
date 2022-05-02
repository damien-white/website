import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-gray-300">
      <Head>
        <title>Dark Fusion Systems</title>
        <meta
          name="Dark Fusion Systems"
          content="Dark Fusion Systems – Software Development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="min-w-full">
        <nav className="flex p-5 bg-gray-800 border-b">
          <h1 className="ml-4 mr-auto">Dark Fusion Systems</h1>
          <ul className="mr-4 w-5/12 flex justify-between">
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Work / Projects</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="">
          <h1 className="text-6xl font-bold text-cyan-200">Dark Fusion</h1>
          <h2 className="text-5xl font-bold text-cyan-300">Systems</h2>
          <h3 className="text-3xl m-5 text-gray-300">
            Software Engineering and Automation
          </h3>
        </div>
      </main>

      <footer className="flex h-20 w-full items-center justify-center border-t bg-gray-800">
        <div className="flex flex-col text-center">
          <small>&copy; 2021-2022 — Dark Fusion Systems</small>
          <small>Site design by: Peter Donovan</small>
        </div>
      </footer>
      {/*<div>Current time: {new Date()}</div>*/}
    </div>
  );
};

export default Home;
