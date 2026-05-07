import { League, Props } from "../../types";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllLeagues,getTeamsByLeague } from "../../lib/api";
export default async function Page({ params }: Props

) {
  const { id } = await params;
  const leagues = await getAllLeagues();
  const league = leagues?.find((item: League) => String(item.idLeague) === id);

  if (!league) {
    notFound();
  }

  const teams = await getTeamsByLeague(league.strLeague)
  return (
    <p>hej</p>
  );
}