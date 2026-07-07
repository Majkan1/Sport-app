import { League, Team, PageProps } from "../../types";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllLeagues,getTeamsByLeague } from "../../lib/api";
export default async function Page({ params }: PageProps<{ leagueId: string }>) {

  const { leagueId } = await params;
  const leagues = await getAllLeagues();
  const league = leagues?.find((item: League) => String(item.idLeague) === leagueId);

  if (!league) {
    notFound();
  }

  const teams = await getTeamsByLeague(league.strLeague)
  return (
    <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 flex-1">
      <Link href="/" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold mb-6 transition-colors">
        ← Back to Leagues
      </Link>
      <h1 className="text-center text-4xl font-bold text-slate-900 mb-2">
        {league.strLeague}
      </h1>
      <p className="text-center text-slate-600 mb-10 text-base max-w-2xl mx-auto">Browse all teams in this league</p>
      <div className="grid grid-cols-1 gap-5 py-6 sm:grid-cols-2 lg:grid-cols-3">
        {teams && teams.map((team:Team)=>(
          <Link key={team.idTeam} href={`/leagues/${leagueId}/teams/${team.idTeam}`} className="group flex min-h-60 flex-col rounded-lg bg-slate-50 p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex h-full flex-col gap-3">
              <h2 className="text-lg font-bold text-slate-900 transition-colors duration-200">{team.strTeam}</h2>
              {team.strBadge ? (
                <div className="mt-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-lg bg-white">
                  <Image
                    src={team.strBadge}
                    alt="Club logo"
                    width={100}
                    height={100}
                    className="h-auto w-auto max-h-24 max-w-24 object-contain transition-transform group-hover:scale-110 duration-300"
                  />
                </div>
              ) : null}
              <div className="mt-auto pt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-slate-700 font-semibold text-sm">View details →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
