const BASE = 'https://www.thesportsdb.com/api/v1/json/123';

export async function getAllLeagues() {
  const res = await fetch(`${BASE}/all_leagues.php`, {
    next: { revalidate: 86400 } 
  });
  const data = await res.json();
  return data.leagues;
}

export async function getTeamsByLeague(leagueName: string) {
  const res = await fetch(`${BASE}/search_all_teams.php?l=${leagueName}`, {
    next: { revalidate: 86400 }
  });
  const data = await res.json();
  return data.teams;
}

export async function getPlayersByTeam(teamId: string) {
  const res = await fetch(`${BASE}/lookup_all_players.php?id=${teamId}`, {
    next: { revalidate: 86400 }
  });
  const data = await res.json();
  return data.player;
}

export async function getTeamsByLeague(leagueId: string) {
  const res = await fetch(
    `${BASE}/lookup_all_teams.php?id=${leagueId}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.teams ?? [];
}