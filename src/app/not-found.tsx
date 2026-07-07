import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto p-8 min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center">
      <div className="mb-6">
        <h1 className="text-7xl font-black text-slate-900 mb-2">404</h1>
      </div>
      <h2 className="text-3xl font-bold text-slate-900 mb-3">Page Not Found</h2>
      <p className="text-slate-600 mb-10 text-base max-w-md leading-relaxed">
        Sorry, we could not find the league or page you are looking for.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
      >
        ⬅️ Back to Home
      </Link>
    </main>
  );
}
