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
		<div className="mx-auto max-w-4xl px-6 py-10 sm:px-8">
			<Link href={`/leagues/${leagueId}`} className="mb-4 inline-block text-slate-600 hover:underline">
				← Back to {league.strLeague}
			</Link>
			<div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8">
				{team.strBadge ? (
					<div className="mb-6 flex h-40 w-40 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
						<Image
							src={team.strBadge}
							alt={team.strTeam}
							width={150}
							height={150}
							className="h-auto w-auto max-h-32 max-w-32 object-contain"
						/>
					</div>
				) : null}
				<h1 className="mb-2 text-3xl font-bold text-slate-900">{team.strTeam}</h1>
				<p className="mb-1 text-lg text-slate-600">Country: {team.strCountry}</p>
				{team.strStadium && <p className="mb-4 text-lg text-slate-600">Stadium: {team.strStadium}</p>}

				<div className="mb-6 flex flex-wrap gap-3">
					{team.strWebsite ? (
						<Link
							href={team.strWebsite.trim().startsWith("http") ? team.strWebsite.trim() : `https://${team.strWebsite.trim()}`}
							target="_blank"
							rel="noopener noreferrer"
							className="text-slate-600 hover:underline"
						>
							Visit website
						</Link>
					) : null}
					{team.strFacebook ? (
						<Link
							href={team.strFacebook.trim().startsWith("http") ? team.strFacebook.trim() : `https://${team.strFacebook.trim()}`}
							target="_blank"
							rel="noopener noreferrer"
							className="text-slate-600 hover:underline"
						>
							Facebook
						</Link>
					) : null}
					{team.strInstagram ? (
						<Link
							href={team.strInstagram.trim().startsWith("http") ? team.strInstagram.trim() : `https://${team.strInstagram.trim()}`}
							target="_blank"
							rel="noopener noreferrer"
							className="text-slate-600 hover:underline"
						>
							Instagram
						</Link>
					) : null}
				</div>

				<ReadMore text={team.strDescriptionEN} />
			</div>
		</div>
	);
}
