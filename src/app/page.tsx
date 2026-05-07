import { getAllLeagues } from './lib/api';
import SearchWrapper from './components/SearchWrapper';
import { ApiResponse } from './types';
export default async function Home() {

  const response = await getAllLeagues();

  let res: ApiResponse | null = null;
  if (response.ok) {
    try {
      res = await response.json();
    } catch {
      res = null;
    }
  }

  const leagues = Array.isArray(res?.countries)
    ? res.countries
    : Array.isArray(res?.leagues)
      ? res.leagues
      : [];

  return (
    <main className="max-w-4xl mx-auto p-8">
      <SearchWrapper leagues={leagues}/>
    </main>
  )
}