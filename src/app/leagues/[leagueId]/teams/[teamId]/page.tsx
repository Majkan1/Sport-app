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
		<div className="p-8">
			<Link href={`/leagues/${leagueId}`} className="text-blue-600 hover:underline mb-4 inline-block">
				← Back to {league.strLeague}
			</Link>
			<div className="mt-6">
				{team.strBadge ? (
					<Image
						src={team.strBadge}
						alt={team.strTeam}
						width={150}
						height={150}
						className="mb-4"
					/>
				) : null}
				<h1 className="text-3xl font-bold mb-2">{team.strTeam}</h1>
				<p className="text-lg text-gray-600 mb-1">Country: {team.strCountry}</p>
				{team.strStadium && <p className="text-lg text-gray-600 mb-4">Stadium: {team.strStadium}</p>}

				<div className="flex gap-4 mb-6">
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
							Facebook
						</Link>
					) : null}
					{team.strInstagram ? (
						<Link
							href={team.strInstagram.trim().startsWith("http") ? team.strInstagram.trim() : `https://${team.strInstagram.trim()}`}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:underline"
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
