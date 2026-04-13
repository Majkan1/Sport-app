"use client"
export default function SearchBar({value,onValue}:{
  value:string,
  onValue:(value:string)=> void
}){
  return(
    <div className="flex justify-center">
      <input
        aria-label="Search leagues" 
        className="w-full max-w-md rounded-xl border-2 border-blue-200 bg-white p-3 text-slate-700 placeholder-slate-400 shadow-lg"
        placeholder="Search leagues..."
        value={value}
        onChange={(e)=>{onValue(e.target.value)}}
      />
    </div>
  )
}