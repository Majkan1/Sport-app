import { getAllLeagues } from './lib/api';
import SearchWrapper from './components/SearchWrapper';
export default async function Home() {
  const leagues = await getAllLeagues();

  return (
    <main className="mx-auto max-w-6xl px-6 py-8 sm:px-8 flex-1">
      <div className="mb-8 text-center">
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Find your favorite sports leagues and teams
        </p>
      </div>
      <SearchWrapper leagues={leagues}/>
    </main>
  )
}