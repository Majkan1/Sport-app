import SearchWrapper from './components/SearchWrapper';
import { ApiResponse } from './types';
export default async function Home() {

  const data = await fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?s=Soccer');
  const res: ApiResponse = await data.json();
  return (
    <main className="max-w-4xl mx-auto p-8">
      <SearchWrapper leagues={res.leagues}/>
    </main>
  )
}