import { getAllLeagues } from './lib/api';
import SearchWrapper from './components/SearchWrapper';
export default async function Home() {
  const leagues = await getAllLeagues();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <SearchWrapper leagues={leagues}/>
    </main>
  )
}