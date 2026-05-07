import { League,Team, Props } from "../../types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllLeagues,getTeamsByLeague } from "../../lib/api";
export default async function Page({ params }: Props) {

  const { id } = await params;
  const leagues = await getAllLeagues();
  const league = leagues?.find((item: League) => String(item.idLeague) === id);

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
          <div key={team.idTeam} className="">
            <h2 className="text-lg font-bold">{team.strTeam}</h2>
            {<p className="text-sm">{team.strCountry}</p>}
            {<p className="text-sm">{team.strStadium}</p>}
            {team.strWebsite ? (
              <Link
                href={team.strWebsite.trim().startsWith("http") ? team.strWebsite.trim() : `https://${team.strWebsite.trim()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit website
              </Link>
            ) : null}
            {team.strFacebook ? (
              <Link
                href={team.strFacebook.trim().startsWith("http") ? team.strFacebook.trim() : `https://${team.strFacebook.trim()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Facebook
              </Link>
            ) : null}
            {team.strInstagram ? (
              <Link
                href={team.strInstagram.trim().startsWith("http") ? team.strInstagram.trim() : `https://${team.strInstagram.trim()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Instagram
              </Link>
            ) : null}
          </div>
        ))
        
        }
      </div>
    </div>
  )
}