"use client"
export default function SearchBar({value,onValue}:{
  value:string,
  onValue:(value:string)=> void
}){
  return(
    <div className="flex justify-center">
      <input className="rounded-2xl border-2 border-lime-600 bg-amber-600 p-2.5"
      placeholder="Write here the league"
      value={value}
      onChange={(e)=>{onValue(e.target.value)}}
      />
    </div>
  )
}