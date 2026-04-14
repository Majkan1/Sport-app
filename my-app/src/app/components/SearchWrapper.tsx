"use client"
import Link from "next/link"
import { useState } from "react"
import SearchBar from "./SearchBar"
import { League } from "../types"
export default function SearchWrapper({countries}:{countries:League[]}){
  const [SearchValue,setSearchValue] = useState("");  
  const filterd = countries.filter((country)=>
    country.strLeague.toLowerCase().includes(SearchValue.toLowerCase())
  );
  return(
    <div className="space-y-8 mb-57">
      <SearchBar value={SearchValue} onValue={setSearchValue}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {filterd.length > 0 ? (
          filterd.map((item)=>(
            <Link className="className= bg-blue-950 rounded-xl p-6 text-white font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer" key={item.idLeague} href={`/leagues/${item.idLeague}`}>
              {item.strLeague} 
            </Link>
          ))
        ) : (
          <p className="text-slate-400  text-center py-12 text-lg">No leagues found</p>
        )}
      </div>
    </div>
    )
}