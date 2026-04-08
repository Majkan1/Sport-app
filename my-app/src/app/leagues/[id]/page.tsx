
interface Props {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const { id } = params;
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
    </div>
  );
}