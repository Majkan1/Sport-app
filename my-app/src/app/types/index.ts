
export interface League {
  idLeague: number;
  strLeague: string;
  intFormedYear:number;
  strCountry:string;
  strDescriptionEN:string;
  strLeagueAlternate: string;
  strLogo:string;
}

export interface ApiResponse {
  countries:League[];
}

export interface Props {
  params: Promise<{ id: string }>;
}