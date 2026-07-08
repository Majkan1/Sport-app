import { Team, PageProps } from "../../types";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getLeagueById, getTeamsByLeague } from "../../lib/api";

export async function generateMetadata({
  params,
}: PageProps<{ leagueId: string }>): Promise<Metadata> {
  const { leagueId } = await params;
  const league = await getLeagueById(leagueId);
  return {
    title: league ? `${league.strLeague} — Sports App` : "League not found",
  };
}

export default async function Page({
  params,
}: PageProps<{ leagueId: string }>) {
  const { leagueId } = await params;
  const league = await getLeagueById(leagueId);

  if (!league) {
    notFound();
  }

  const teams = await getTeamsByLeague(league.strLeague);
  return (
    <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 flex-1">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-pitch-muted hover:text-accent mb-6 transition-colors"
      >
        ← All Leagues
      </Link>
      <div className="flex flex-wrap items-end justify-between gap-4 pb-6 border-b border-pitch-line">
        <h1 className="font-display text-5xl sm:text-6xl font-bold uppercase text-pitch-text">
          {league.strLeague}
        </h1>
        <span className="mb-1 inline-flex items-center gap-2 rounded-full border border-pitch-border2 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] uppercase text-pitch-text2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {teams.length} {teams.length === 1 ? "club" : "clubs"}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-5 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {teams &&
          teams.map((team: Team) => (
            <Link
              key={team.idTeam}
              href={`/leagues/${leagueId}/teams/${team.idTeam}`}
              className="group flex min-h-60 flex-col items-center text-center rounded-lg bg-pitch-surface border border-pitch-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/55 hover:bg-pitch-surface2"
            >
              <div className="flex h-full flex-col items-center gap-3">
                {team.strBadge ? (
                  <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-lg">
                    <Image
                      src={team.strBadge}
                      alt="Club logo"
                      width={100}
                      height={100}
                      className="h-auto w-auto max-h-24 max-w-24 object-contain transition-transform group-hover:scale-110 duration-300"
                    />
                  </div>
                ) : null}
                <h2 className="font-display text-2xl font-bold uppercase text-pitch-text transition-colors duration-200">
                  {team.strTeam}
                </h2>
                {team.strStadium ? (
                  <p className="text-sm text-pitch-muted">{team.strStadium}</p>
                ) : null}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
