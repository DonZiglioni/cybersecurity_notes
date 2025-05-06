import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">CYBERSECURITY</h1>
      <h2 className="mb-4 text-lg font-light ">Notes & Research</h2>
      <p className="text-fd-muted-foreground">
        Navigate to {' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        to begin!
      </p>
    </main>
  );
}
