
export interface League {
  idLeague: number;
  strLeague: string;
  intFormedYear:number;
  strCountry:string;
  strDescriptionEN:string;
  strLeagueAlternate: string;
  strLogo:string;
  strWebsite:string
  strFacebook:string,
  strInstagram:string
}

export interface Team {
  idTeam: number;
  strTeam: string;
  strCountry?: string;
  strStadium?: string;
  strDescriptionEN?: string;
  strWebsite?: string;
  strFacebook?:string;
  strInstagram?:string;
}

export interface ApiResponse {
  countries?:League[] | null;
  leagues?:League[] | null;
}

export interface Props{
  params: Promise<{ id: string }>;
}
