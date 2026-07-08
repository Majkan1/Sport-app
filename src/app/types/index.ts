export interface League {
  idLeague: string;
  strLeague: string;
  strSport?: string | null;
  strLeagueAlternate?: string | null;
  intFormedYear?: string | null;
  strCountry?: string | null;
  strDescriptionEN?: string | null;
  strLogo?: string | null;
  strWebsite?: string | null;
  strFacebook?: string | null;
  strInstagram?: string | null;
}

export interface Team {
  idTeam: string;
  strTeam: string;
  strCountry?: string | null;
  strStadium?: string | null;
  intFormedYear?: string | null;
  strLocation?: string | null;
  strDescriptionEN?: string | null;
  strWebsite?: string | null;
  strFacebook?: string | null;
  strInstagram?: string | null;
  strBadge?: string | null;
}

export interface LeaguesResponse {
  leagues: League[] | null;
}

export interface TeamsResponse {
  teams: Team[] | null;
}

export type PageProps<T> = {
  params: Promise<T>;
};
