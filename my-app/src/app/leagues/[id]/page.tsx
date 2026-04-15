import { Props } from "../../types";
import Image from "next/image";
import { notFound } from "next/navigation";
export default async function Page({ params }: Props) {
  const { id } = await params;
  const res = await fetch(
    `https://www.thesportsdb.com/api/v1/json/3/lookupleague.php?id=${id}`
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const league = data?.leagues?.[0];

  if (!league) {
    notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">
        {league.strLeague}
      </h1>
      <Image  
        src = {league.strLogo}
        alt = {`${league.strLogo} logo`} 
        width={128}
        height={128}
        className="w-32 h-32 object-contain"
      />
      <p>{league.strSport}</p>
      <div>
        <p>The Formed year <br/>{league.intFormedYear}</p>
        <p>Country:{league.strCountry}</p>
        <p>{league.strDescriptionEN}</p>
        <p>{league.strLeagueAlternate}</p>
      </div>
    </div>
  );
}