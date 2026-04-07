export default async function Home() {

  interface League {
    idLeague: number;
    strLeague:string,
    strSport: string,
    strLeagueAlternate:string
  }
  interface ApiResponse {
  leagues: League[]
}

  const data = await fetch('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php');
  const res: ApiResponse = await data.json();
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold">Sports App</h1>
      <p className="text-gray-500 mt-2">Browse leagues and teams</p>
      {res.leagues.map((item)=>(
        <p key={item.idLeague}>{item.strLeague}</p>
      ))}
    </main>
  )
}