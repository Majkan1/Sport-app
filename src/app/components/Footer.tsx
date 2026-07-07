export default function Footer(){
  return(
    <footer className="mt-auto py-6 border-t-4 border-transparent">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex justify-center items-center">
          <p className="text-center">© {new Date().getFullYear()} Created by <span className="font-bold">Mikołaj Michalak</span></p>
        </div>
      </div>
    </footer>
  )
}
