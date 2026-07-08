import { PageProps } from "../../../../types";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getLeagueById, getTeamById } from "../../../../lib/api";
import ReadMore from "../../../../components/ReadMore";

export async function generateMetadata({
  params,
}: PageProps<{ teamId: string }>): Promise<Metadata> {
  const { teamId } = await params;
  const team = await getTeamById(teamId);
  return { title: team ? `${team.strTeam} — Sports App` : "Team not found" };
}

export default async function Page({
  params,
}: PageProps<{ leagueId: string; teamId: string }>) {
  const { leagueId, teamId } = await params;
  const [league, team] = await Promise.all([
    getLeagueById(leagueId),
    getTeamById(teamId),
  ]);

  if (!league || !team) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 flex-1">
      <Link
        href={`/leagues/${leagueId}`}
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-pitch-muted hover:text-accent mb-6 transition-colors"
      >
        ← {league.strLeague}
      </Link>
      <div className="mt-6 rounded-2xl bg-pitch-surface border border-pitch-border p-8 sm:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          {team.strBadge ? (
            <div className="flex h-48 w-48 shrink-0 items-center justify-center self-center rounded-full border border-pitch-border2 md:self-auto">
              <Image
                src={team.strBadge}
                alt={team.strTeam}
                width={150}
                height={150}
                className="h-auto w-auto max-h-36 max-w-36 object-contain"
              />
            </div>
          ) : null}
          <div>
            <p className="mb-2 text-[13px] font-semibold tracking-[0.2em] uppercase text-accent">
              {league.strLeague}
            </p>
            <h1 className="mb-5 font-display text-5xl sm:text-6xl font-bold uppercase text-pitch-text">
              {team.strTeam}
            </h1>
            <div className="mb-7 flex flex-wrap gap-x-10 gap-y-4">
              {team.strCountry ? (
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-pitch-faint">
                    Country
                  </p>
                  <p className="mt-1 font-semibold text-pitch-text">
                    {team.strCountry}
                  </p>
                </div>
              ) : null}
              {team.strStadium ? (
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-pitch-faint">
                    Stadium
                  </p>
                  <p className="mt-1 font-semibold text-pitch-text">
                    {team.strStadium}
                  </p>
                </div>
              ) : null}
              {team.intFormedYear ? (
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-pitch-faint">
                    Founded
                  </p>
                  <p className="mt-1 font-semibold text-pitch-text">
                    {team.intFormedYear}
                  </p>
                </div>
              ) : null}
              {team.strLocation ? (
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-pitch-faint">
                    Location
                  </p>
                  <p className="mt-1 font-semibold text-pitch-text">
                    {team.strLocation}
                  </p>
                </div>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-3">
              {team.strWebsite ? (
                <Link
                  href={
                    team.strWebsite.trim().startsWith("http")
                      ? team.strWebsite.trim()
                      : `https://${team.strWebsite.trim()}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-ink px-5 py-2 font-semibold hover:brightness-110 transition-all duration-200"
                >
                  Website ↗
                </Link>
              ) : null}
              {team.strFacebook ? (
                <Link
                  href={
                    team.strFacebook.trim().startsWith("http")
                      ? team.strFacebook.trim()
                      : `https://${team.strFacebook.trim()}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-pitch-border3 text-pitch-text px-5 py-2 font-semibold hover:border-accent hover:text-accent transition-all duration-200"
                >
                  Facebook ↗
                </Link>
              ) : null}
              {team.strInstagram ? (
                <Link
                  href={
                    team.strInstagram.trim().startsWith("http")
                      ? team.strInstagram.trim()
                      : `https://${team.strInstagram.trim()}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-pitch-border3 text-pitch-text px-5 py-2 font-semibold hover:border-accent hover:text-accent transition-all duration-200"
                >
                  Instagram ↗
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-4">
          <h2 className="whitespace-nowrap text-[13px] font-semibold tracking-[0.2em] uppercase text-accent">
            About the club
          </h2>
          <span className="h-px flex-1 bg-pitch-line" />
        </div>
        <div className="mt-5">
          <ReadMore text={team.strDescriptionEN} />
        </div>
      </div>
    </div>
  );
}
