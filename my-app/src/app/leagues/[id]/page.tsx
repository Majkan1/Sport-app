import { Props } from "../../types";
export default async function Page({ params }: Props) {
  const { id } = await params;
  const res = await fetch(
    `https://www.thesportsdb.com/api/v1/json/3/lookupleague.php?id=${id}`
  );

  const data = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">
        {data?.countries?.strLeague}
      </h1>
      <p>{data?.countries?.strSport}</p>
      <div>
        <p>The Formed year <br/>{data?.countries[0]?.intFormedYear}</p>
        <p>Country:{data?.countries[0]?.strCountry}</p>
        <p>{data?.countries[0]?.strDescriptionEN}</p>
        <p>{data?.countries[0]?.strLeagueAlternate}</p>
        <p>{data?.countries[0]?.strLogo}</p>
      </div>
    </div>
  );
}