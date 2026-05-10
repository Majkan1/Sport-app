"use client"
export default function SearchBar({value,onValue}:{
  value:string,
  onValue:(value:string)=> void
}){
  return(
    <div className="flex justify-center mb-12">
      <input
        aria-label="Search leagues" 
        className="w-full max-w-2xl rounded-xl border-2 border-slate-900 bg-white p-4 text-slate-700 placeholder-slate-400 shadow-md focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-lg"
        placeholder="🔍 Search leagues..."
        value={value}
        onChange={(e)=>{onValue(e.target.value)}}
      />
    </div>
  )
}
