import { getAllLeagues } from "./lib/api";
import SearchWrapper from "./components/SearchWrapper";
export default async function Home() {
  const leagues = await getAllLeagues();

  return (
    <main className="relative mx-auto w-full max-w-6xl flex-1 overflow-hidden px-6 py-8 sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-13 h-[min(700px,92vw)] w-[min(700px,92vw)] -translate-x-1/2 rounded-full border border-pitch-line/70 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_4%,transparent),transparent_72%)]"
      />
      <section className="relative mb-12 pt-10 text-center">
        <span className="mx-auto mb-7 block h-1.5 w-1.5 rounded-full bg-pitch-faintest" />
        <p className="text-[13px] font-semibold tracking-[0.3em] uppercase text-accent">
          Football · Leagues · Clubs
        </p>
        <h1 className="mt-5 font-display text-[clamp(56px,9vw,104px)] font-bold uppercase leading-[0.95] tracking-[0.01em]">
          Every League.
          <br />
          Every Club.
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-pitch-muted">
          Find your favorite sports leagues and teams
        </p>
      </section>
      <SearchWrapper leagues={leagues} />
    </main>
  );
}
