import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto p-8 min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-8 text-lg">
        Sorry, we could npt find the league or page you are looking for.
      </p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
      >
        Back to Home
      </Link>
    </main>
  );
}
