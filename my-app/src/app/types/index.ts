// src/types/index.ts
export interface League {
  idLeague: number;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
}

export interface ApiResponse {
  leagues: League[];
}

export interface Props {
  params: Promise<{ id: string }>;
}