import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>GAA Stats World</title>
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to GAA Stats World</h1>
        <p className="mb-2">Your hub for GAA stats, results, and rankings.</p>
        <nav className="space-x-4">
          <Link href="/teams">Teams</Link>
          <Link href="/players">Players</Link>
          <Link href="/stats-hub">Stats Hub</Link>
        </nav>
      </main>
    </>
  );
}