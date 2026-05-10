import Link from "next/link"

 export default function Navbar(){
  return(
    <nav className="border-b-4 border-transparent">
      <div className="mx-auto max-w-6xl px-6 py-3 sm:px-8 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:underline transition duration-200">
          ⚽ SportsApp
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="font-semibold hover:underline transition duration-200">
            Leagues
          </Link>
          <Link href="/about" className="font-semibold hover:underline transition duration-200">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
