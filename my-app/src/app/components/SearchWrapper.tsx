"use client"

import { useState } from "react"
import SearchBar from "./Search"

export default function Search(){
  const [SearchValue,setSearchValue] = useState("");  
  return(
    <div>
     
     <SearchBar value={SearchValue} setValue={setSearchValue}/> 
    </div>
    )
}