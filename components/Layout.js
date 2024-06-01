// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gray-800 p-4">
        <nav>
          <Link href="/"><a className="text-white">Home</a></Link>
          <Link href="/about"><a className="text-white ml-4">About</a></Link>
          <Link href="/projects"><a className="text-white ml-4">Projects</a></Link>
          <Link href="/contact"><a className="text-white ml-4">Contact</a></Link>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-800 p-4 text-center text-white">
        &copy; {new Date().getFullYear()} My Portfolio
      </footer>
    </div>
  );
}
