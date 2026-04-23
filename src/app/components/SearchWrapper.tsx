"use client"
import Link from "next/link"
import { useState } from "react"
import SearchBar from "./SearchBar"
import { League } from "../types"
export default function SearchWrapper({leagues = []}:{leagues?:League[] | null}){
  const [searchValue, setSearchValue] = useState("");
  const safeLeagues = Array.isArray(leagues) ? leagues : [];
  const filtered = safeLeagues.filter((league) =>
    league.strLeague.toLowerCase().includes(searchValue.toLowerCase())
  );

  return(
    <div className="space-y-8 mb-57">
      <SearchBar value={searchValue} onValue={setSearchValue}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {filtered.length > 0 ? (
          filtered.map((item)=>(
            <div  className="bg-blue-950 rounded-xl p-6 text-white font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer" key={item.idLeague}>
              <Link href={`/leagues/${item.idLeague}`}>
                {item.strLeague} 
              </Link>
              <button className="m-1 bg-amber-300 rounded-xl p-1">
                Add to the favourite
                <input type="checkbox" className="m-1" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-slate-400  text-center py-12 text-lg">No leagues found</p>
        )}
      </div>
    </div>
    )
}