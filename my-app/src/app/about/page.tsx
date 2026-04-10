export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">About SportsApp</h1>
      <p className="text-gray-600 mb-6">
        SportsApp lets you explore football leagues across Europe — browse standings,
        teams, and competition details all in one place.
      </p>

      <h2 className="text-xl font-semibold mb-2">Data</h2>
      <p className="text-gray-600 mb-6">
        League data is fetched from <a href="https://www.thesportsdb.com" className="underline">TheSportsDB</a> API.
      </p>

      <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
      <ul className="text-gray-600 list-disc list-inside mb-6">
        <li>Next.js 16.2.3</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Author</h2>
      <p className="text-gray-600">
        Built by <a href="https://github.com/Majkan1" className="underline">Majkan1</a>
      </p>
    </main>
  );
}