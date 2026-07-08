import { League, Team, LeaguesResponse, TeamsResponse } from "../types";

const BASE = "https://www.thesportsdb.com/api/v1/json/123";

async function fetchJson<T>(url: string, errorMessage: string): Promise<T> {
  const res = await fetch(url, { next: { revalidate: 86400 } });
  if (!res.ok) throw new Error(errorMessage);
  return res.json();
}

export async function getAllLeagues(): Promise<League[]> {
  const data = await fetchJson<LeaguesResponse>(
    `${BASE}/all_leagues.php`,
    "Failed to load leagues",
  );
  return data.leagues ?? [];
}

export async function getLeagueById(id: string): Promise<League | null> {
  const data = await fetchJson<LeaguesResponse>(
    `${BASE}/lookupleague.php?id=${encodeURIComponent(id)}`,
    "Failed to load the league",
  );
  return data.leagues?.[0] ?? null;
}

export async function getTeamsByLeague(leagueName: string): Promise<Team[]> {
  const data = await fetchJson<TeamsResponse>(
    `${BASE}/search_all_teams.php?l=${encodeURIComponent(leagueName)}`,
    "Failed to load teams",
  );
  return data.teams ?? [];
}

export async function getTeamById(id: string): Promise<Team | null> {
  const data = await fetchJson<TeamsResponse>(
    `${BASE}/lookupteam.php?id=${encodeURIComponent(id)}`,
    "Failed to load the team",
  );
  return data.teams?.[0] ?? null;
}
