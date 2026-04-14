
export interface League {
  idLeague: number;
  strLeague: string;
  intFormedYear:number;
  strCountry:string;
  strDescriptionEN:string;
  strLeagueAlternate: string;
}

export interface ApiResponse {
  leagues: League[];
}

export interface Props {
  params: Promise<{ id: string }>;
}