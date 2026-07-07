import { League, Team, LeaguesResponse, TeamsResponse } from "../types";

const BASE = "https://www.thesportsdb.com/api/v1/json/123";

export async function getAllLeagues(): Promise<League[]> {
  const res = await fetch(`${BASE}/all_leagues.php`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) return [];
  const data: LeaguesResponse = await res.json();
  return data.leagues ?? [];
}

export async function getTeamsByLeague(leagueName: string): Promise<Team[]> {
  const res = await fetch(
    `${BASE}/search_all_teams.php?l=${encodeURIComponent(leagueName)}`,
    { next: { revalidate: 86400 } }
  );
  if (!res.ok) return [];
  const data: TeamsResponse = await res.json();
  return data.teams ?? [];
}
