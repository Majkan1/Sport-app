import { Props } from "../../types";
export default async function Page({ params }: Props) {
  const { id } = await params;
  const res = await fetch(
    `https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?s=Soccer`
  );

  const data = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">
        {data?.leagues[0]?.strLeague}
      </h1>
      <p>{data?.leagues[0]?.strSport}</p>
    </div>
  );
}