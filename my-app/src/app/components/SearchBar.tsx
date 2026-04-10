"use client"
export default function SearchBar({value,onValue}:{
  value:string,
  onValue:(value:string)=> void
}){
  return(
    <div className="flex justify-center">
      <input 
      placeholder="Write here the league"
      value={value}
      onChange={(e)=>{onValue(e.target.value)}}
      />
    </div>
  )
}