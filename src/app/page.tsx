import { getAllLeagues } from './lib/api';
import SearchWrapper from './components/SearchWrapper';
export default async function Home() {
  const leagues = await getAllLeagues();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
      <SearchWrapper leagues={leagues}/>
    </main>
  )
}