"use client"
export default function SearchBar({value,onValue}:{
  value:string,
  onValue:(value:string)=> void
}){
  return(
    <div className="flex justify-center">
      <input 
        className="w-full max-w-md rounded-xl border-2 border-blue-200 bg-white p-3 text-slate-700 placeholder-slate-400 shadow-lg transition-all duration-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 hover:border-blue-300"
        placeholder="Search leagues..."
        value={value}
        onChange={(e)=>{onValue(e.target.value)}}
      />
    </div>
  )
}