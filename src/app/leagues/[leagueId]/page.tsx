import { League,Team, Props } from "../../types";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllLeagues,getTeamsByLeague } from "../../lib/api";
export default async function Page({ params }: Props) {

  const { leagueId } = await params;
  const leagues = await getAllLeagues();
  const league = leagues?.find((item: League) => String(item.idLeague) === leagueId);

  if (!league) {
    notFound();
  }

  const teams = await getTeamsByLeague(league.strLeague)
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold flex justify-center">
        {league.strLeague}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {teams && teams.map((team:Team)=>(
          <Link key={team.idTeam} href={`/leagues/${leagueId}/teams/${team.idTeam}`} className="hover:shadow-lg transition-shadow rounded-lg p-4 border border-gray-200">
            <div className="">
              <h2 className="text-lg font-bold">{team.strTeam}</h2>
              {team.strBadge ? (
                <Image
                  src={team.strBadge}
                  alt="Club logo"
                  width={100}
                  height={100}
                />
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}