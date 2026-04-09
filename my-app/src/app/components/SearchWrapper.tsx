"use client"
import Link from "next/link"
import { useState } from "react"
import SearchBar from "./SearchBar"
import { League } from "../types"
export default function SearchWrapper(){
  const [SearchValue,setSearchValue] = useState("");  
  return(
    <div>
     
     <SearchBar value={SearchValue} setValue={setSearchValue}/> 
    </div>
    )
}