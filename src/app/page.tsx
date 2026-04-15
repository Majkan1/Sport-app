import SearchWrapper from './components/SearchWrapper';
import { ApiResponse } from './types';
export default async function Home() {

  const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?s=Soccer', {
    next: { revalidate: 3600 },
  });
  const res: ApiResponse = response.ok ? await response.json() : { countries: [] };
  const leagues = res.countries ?? res.leagues ?? [];
  return (
    <main className="max-w-4xl mx-auto p-8">
      <SearchWrapper leagues={leagues}/>
    </main>
  )
}