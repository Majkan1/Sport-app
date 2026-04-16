import Link from "next/link"

 export default function Navbar(){
  return(
    <nav className="flex justify-center gap-4">
      <Link href="/">SportsApp</Link>
      <Link href="/about">About</Link>
      <p>Favourite one:</p>
    </nav>
  )
}