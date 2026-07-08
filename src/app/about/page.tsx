export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 sm:px-8">
      <h1 className="font-display text-[clamp(40px,6vw,64px)] font-bold uppercase leading-none tracking-[0.01em]">
        About SportsApp
      </h1>

      <p className="mt-5 max-w-[70ch] text-[15px] leading-[1.75] text-pitch-body">
        SportsApp is a lightweight application for browsing football leagues,
        teams, and basic competition information. The project aims to present
        external sports data in a clear, easy-to-navigate interface.
      </p>

      <section className="mt-10 rounded-[14px] border border-pitch-border bg-pitch-surface p-7">
        <h2 className="text-[13px] font-semibold tracking-[0.2em] uppercase text-accent">
          What you will find
        </h2>
        <ul className="mt-4 space-y-2.5 text-[15px] text-pitch-body">
          <li className="flex items-start gap-3">
            <span className="text-accent">→</span>
            <span>Lists of leagues with basic info.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent">→</span>
            <span>Teams for each league with logos.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent">→</span>
            <span>Quick links to websites and social profiles.</span>
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-[13px] font-semibold tracking-[0.2em] uppercase text-accent">
          Data source
        </h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-pitch-body">
          League and team data is fetched from TheSportsDB (
          <a
            href="https://www.thesportsdb.com"
            className="font-semibold text-pitch-text underline-offset-4 transition-colors duration-200 hover:text-accent hover:underline"
          >
            thesportsdb.com
          </a>
          ).
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-[13px] font-semibold tracking-[0.2em] uppercase text-accent">
          Tech stack
        </h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-pitch-body">
          Built with Next.js, React, Tailwind CSS, and TypeScript.
        </p>
      </section>

      <div className="mt-12 border-t border-pitch-line pt-8">
        <a
          href="https://github.com/Majkan1"
          className="inline-flex items-center gap-2 rounded-full border border-pitch-border3 px-6 py-2.5 text-[13px] font-semibold tracking-[0.14em] uppercase text-pitch-text transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          GitHub <span className="text-[12px]">↗</span>
        </a>
      </div>
    </main>
  );
}
