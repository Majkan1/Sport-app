import { Props } from "../../types";
import Image from "next/image";
import { notFound } from "next/navigation";
export default async function Page({ params }: Props

) {
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
      <h1 className="text-2xl font-bold flex justify-center">
        {league.strLeague}
      </h1>
      <div className="flex justify-center">
        <Image
        src = {league.strLogo}
        alt = {`${league.strLeague} logo`} 
        width={256}
        height={256}
        className="object-contain w-64 h-auto"
        />
      </div>
      <div className="flex items-center flex-col p-3 m-3 ">
        <h3 className="font-bold m-3">{league.strSport}</h3>
        <p className="m-3">The founded year <br/>{league.intFormedYear}</p>
        <p className="w-250 p-1.5">{league.strDescriptionEN}</p>
        <div className="flex gap-1">
          <div>
            <a href={`http://${league.strWebsite}`} target="_blank" rel="noreferrer noopener"> 
              <Image
              src="/Albanian_Flag.svg"
              alt="Albanian flag"
              width={56}
              height={56}
              />
            </a>
          </div>
          <div>
            <a href={`http://${league.strFacebook}`} target="_blank" rel="noreferrer noopener">  
              <Image
              src="/Facebook.png"
              alt="Facebook"
              width={40}
              height={40}
              />
            </a>
          </div>
          <div>
            <a href={`http://${league.strInstagram}`} target="_blank" rel="noreferrer noopener">
              <Image
                src="/Instagram.webp"
                alt="Instagram"
                width={40}
                height={40}
                />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}