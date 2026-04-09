"use client"
export default function SearchBar({value,setValue}:{
  value:string,
  setValue:(value:string)=> void
}){
  return(
    <div className="flex justify-center">
      <input 
      placeholder="Write here the league"
      value={value}
      onChange={(e)=>{setValue(e.target.value)}}
      />
    </div>
  )
}