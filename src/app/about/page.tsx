export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 prose prose-slate">
      <h1>About SportsApp</h1>

      <p>
        SportsApp is a lightweight application for browsing football leagues,
        teams, and basic competition information. The project aims to present
        external sports data in a clear, easy-to-navigate interface.
      </p>

      <h2>What you will find in the app</h2>
      <ul>
        <li>Lists of leagues with basic info (country, founding year).</li>
        <li>Teams for each league with logos and short descriptions.</li>
        <li>Quick links to teams  websites and social profiles.</li>
      </ul>

      <h2>Data source</h2>
      <p>
        League and team data is fetched from TheSportsDB (
        <a href="https://www.thesportsdb.com" className="underline">thesportsdb.com</a>
        ). Because the data is provided by an external API, availability and
        content accuracy depend on the source.
      </p>

      <h2>Tech stack</h2>
      <p>
        The app uses Next.js, React and Tailwind CSS. The codebase is written
        in TypeScript to help with maintainability and type safety.
      </p>

      <h2>Contributing</h2>
      <p>
        The project welcomes improvements and suggestions. To report an issue
        or propose a feature, open an issue or submit a pull request on
        GitHub—link below.
      </p>

      <h2>Contact</h2>
      <p>
        Author: <a href="https://github.com/Majkan1" className="underline">Majkan1</a>
      </p>

      <div className="mt-6">
        <a
          href="https://github.com/Majkan1"
          className="inline-block rounded-md bg-slate-800 text-white px-4 py-2 hover:bg-slate-700"
        >
          View repository
        </a>
      </div>
    </main>
  );
}
