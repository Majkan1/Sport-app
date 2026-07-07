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
    <div className="space-y-8">
      <SearchBar value={searchValue} onValue={setSearchValue}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
        {filtered.length > 0 ? (
          filtered.map((item)=>(
            <div  className="bg-slate-50 rounded-lg p-5 text-slate-900 font-semibold transition-all duration-300 transform hover:shadow-lg hover:scale-105 cursor-pointer" key={item.idLeague}>
              <Link href={`/leagues/${item.idLeague}`} className="flex items-center justify-between group">
                <span className="transition-colors duration-200">{item.strLeague}</span>
                <span className="text-slate-700 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-slate-500 text-center py-12 text-lg col-span-full">No leagues found</p>
        )}
      </div>
    </div>
    )
}
