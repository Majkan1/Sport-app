import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-4xl flex-1 flex-col items-center justify-center p-8 text-center">
      <h1 className="font-display text-[96px] font-bold uppercase leading-none text-accent">
        404
      </h1>
      <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-[0.02em]">
        Page not found
      </h2>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-pitch-muted">
        Sorry, we could not find the league or page you are looking for.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-[14px] font-semibold text-accent-ink transition-[filter] duration-200 hover:brightness-110"
      >
        ← Back to home
      </Link>
    </main>
  );
}
