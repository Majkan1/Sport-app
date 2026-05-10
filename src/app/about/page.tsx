export default function AboutPage() {
  return (
    <main className="min-h-screen flex-1 mx-auto max-w-3xl px-6 py-8">
      <div className="bg-white rounded-lg shadow-sm p-8 border-l-8 border-slate-900">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">About SportsApp</h1>

        <p className="text-base text-slate-700 mb-8 leading-relaxed">
          SportsApp is a lightweight application for browsing football leagues,
          teams, and basic competition information. The project aims to present
          external sports data in a clear, easy-to-navigate interface.
        </p>

  <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">✨ What you will find</h2>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <span>Lists of leagues with basic info.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <span>Teams for each league with logos.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <span>Quick links to websites and social profiles.</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-2">📊 Data source</h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            League and team data is fetched from TheSportsDB (
            <a href="https://www.thesportsdb.com" className="text-blue-600 hover:text-blue-800 font-semibold underline">thesportsdb.com</a>
            ).
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-2">🛠️ Tech stack</h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            Built with Next.js, React, Tailwind CSS, and TypeScript.
          </p>
        </div>

        <div className="pt-6 border-t-2 border-slate-200">
          <a
            href="https://github.com/Majkan1"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-6 py-2 font-semibold hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-md text-sm"
          >
            📂 GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
