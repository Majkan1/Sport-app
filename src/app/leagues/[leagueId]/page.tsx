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
    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
      <h1 className="flex justify-center text-2xl font-bold sm:text-3xl">
        {league.strLeague}
      </h1>
      <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {teams && teams.map((team:Team)=>(
          <Link key={team.idTeam} href={`/leagues/${leagueId}/teams/${team.idTeam}`} className="group flex min-h-60 flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-lg">
            <div className="flex h-full flex-col gap-4">
              <h2 className="text-lg font-bold text-slate-900 transition group-hover:translate-x-0.5">{team.strTeam}</h2>
              {team.strBadge ? (
                <div className="mt-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                  <Image
                    src={team.strBadge}
                    alt="Club logo"
                    width={100}
                    height={100}
                    className="h-auto w-auto max-h-24 max-w-24 object-contain"
                  />
                </div>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
