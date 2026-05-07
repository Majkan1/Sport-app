import React from "react";

type Props = {
	params: {
		leagueId: string;
		teamId: string;
	};
};

export default async function Page({ params }: Props) {
	const { teamId } = params;

	return (
		<div className="p-8">
			<h1 className="text-2xl font-bold">Team {teamId}</h1>
			<p className="text-sm text-slate-600">Szczegóły drużyny (szkic)</p>
		</div>
	);
}
