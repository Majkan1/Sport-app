"use client"
import { useState } from "react"
export default function SearchBar(){
  const [tekst,setTekst] = useState("");
  return(
    <div>
      <input
      placeholder="Write here the league"
      value={tekst}
      onChange={()=>{setTekst(tekst)}}
      />
    </div>
  )
}