import { Props } from "../../types";
import Image from "next/image";
export default async function Page({ params }: Props) {
  const { id } = await params;
  const res = await fetch(
    `https://www.thesportsdb.com/api/v1/json/3/lookupleague.php?id=${id}`
  );

  const data = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">
        {data?.leagues[0]?.strLeague}
      </h1>
      <p>{data?.leagues[0]?.strSport}</p>
      <div>
        <p>The Formed year <br/>{data?.leagues[0]?.intFormedYear}</p>
        <p>Country:{data?.leagues[0]?.strCountry}</p>
        <p>{data?.leagues[0]?.strDescriptionEN}</p>
        <p>{data?.leagues[0]?.strLeagueAlternate}</p>
        <Image  
        src = {data?.leagues[0]?.strLogo}
        alt = {`${data?.leagues[0]?.strLogo} logo`} 
        width={128}
        height={128}
        className="w-32 h-32 object-contain"
        />
      </div>
    </div>
  );
}