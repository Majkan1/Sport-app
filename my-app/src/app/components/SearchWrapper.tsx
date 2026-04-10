"use client"
import Link from "next/link"
import { useState } from "react"
import SearchBar from "./SearchBar"
import { League } from "../types"
export default function SearchWrapper({leagues}:{leagues:League[]}){
  const [SearchValue,setSearchValue] = useState("");  
  const filterd = leagues.filter((league)=>
    league.strLeague.toLowerCase().includes(SearchValue.toLowerCase())
  );
  return(
    <div className="">
      <SearchBar value={SearchValue} onValue={setSearchValue}/>
      <div className="mt-6 grid grid-cols-3 gap-1 p-7">
        {filterd.length > 0 ? (
          filterd.map((item)=>(
            <Link key={item.idLeague} href={`/leagues/${item.idLeague}`}>
              <div>
                <p className="p-7 hover:text-blue-600">{item.strLeague}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No leagues found</p>
        )}
      </div>
    </div>
    )
}