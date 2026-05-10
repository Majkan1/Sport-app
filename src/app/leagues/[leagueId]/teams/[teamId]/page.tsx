import { League, Team } from "../../../../types";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllLeagues, getTeamsByLeague } from "../../../../lib/api";
import ReadMore from "../../../../components/ReadMore";

type PageProps = {
	params: {
		leagueId: string;
		teamId: string;
	};
};

export default async function Page({ params }: PageProps) {
	const { leagueId, teamId } = await params;
	const leagues = await getAllLeagues();
	const league = leagues?.find((item: League) => String(item.idLeague) === leagueId);

	if (!league) {
		notFound();
	}

	const teams = await getTeamsByLeague(league.strLeague);
	const team = teams?.find((t: Team) => String(t.idTeam) === teamId);

	if (!team) {
		notFound();
	}

	return (
		<div className="mx-auto max-w-4xl px-6 py-8 sm:px-8 flex-1">
			<Link href={`/leagues/${leagueId}`} className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold mb-6 transition-colors">
				← Back to {league.strLeague}
			</Link>
			<div className="mt-6 rounded-lg bg-slate-50 p-8 shadow-md">
				{team.strBadge ? (
					<div className="mb-6 flex h-40 w-40 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm">
						<Image
							src={team.strBadge}
							alt={team.strTeam}
							width={150}
							height={150}
							className="h-auto w-auto max-h-36 max-w-36 object-contain"
						/>
					</div>
				) : null}
				<h1 className="mb-2 text-3xl font-bold text-slate-900">{team.strTeam}</h1>
				<p className="mb-1 text-base text-slate-700 font-semibold">🌍 Country: <span className="text-slate-900">{team.strCountry}</span></p>
				{team.strStadium && <p className="mb-6 text-base text-slate-700 font-semibold">🏟️ Stadium: <span className="text-teal-700">{team.strStadium}</span></p>}

				<div className="mb-8 flex flex-wrap gap-3">
					{team.strWebsite ? (
						<Link
							href={team.strWebsite.trim().startsWith("http") ? team.strWebsite.trim() : `https://${team.strWebsite.trim()}`}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-2 font-semibold hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-md"
						>
							🌐 Website
						</Link>
					) : null}
					{team.strFacebook ? (
						<Link
							href={team.strFacebook.trim().startsWith("http") ? team.strFacebook.trim() : `https://${team.strFacebook.trim()}`}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-5 py-2 font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
						>
							👍 Facebook
						</Link>
					) : null}
					{team.strInstagram ? (
						<Link
							href={team.strInstagram.trim().startsWith("http") ? team.strInstagram.trim() : `https://${team.strInstagram.trim()}`}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-lg bg-slate-700 text-white px-5 py-2 font-semibold hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-md"
						>
							📷 Instagram
						</Link>
					) : null}
				</div>

				<div className="pt-6">
					<h3 className="text-lg font-bold text-slate-900 mb-3">About this team</h3>
					<ReadMore text={team.strDescriptionEN} />
				</div>
			</div>
		</div>
	);
}
