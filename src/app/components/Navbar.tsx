import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-pitch-line relative z-10">
      <div className="mx-auto max-w-300 px-8 py-4.5 flex justify-between items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-pitch-text"
        >
          <span className="inline-block h-3 w-3 rounded-full bg-accent" />
          <span className="font-display font-bold text-2xl tracking-[0.06em] uppercase">
            SportsApp
          </span>
        </Link>
        <div className="flex gap-8 items-center">
          <Link
            href="/"
            className="text-[13px] font-semibold tracking-[0.14em] uppercase text-pitch-text transition-colors duration-200 hover:text-accent"
          >
            Leagues
          </Link>
          <Link
            href="/about"
            className="text-[13px] font-semibold tracking-[0.14em] uppercase text-pitch-muted transition-colors duration-200 hover:text-accent"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
