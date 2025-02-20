import Link from "next/link"
import { Search } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="bg-orange-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Mantra
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-orange-200">
            Home
          </Link>
          <Link href="/explore" className="hover:text-orange-200">
            Explore
          </Link>
          <Link href="/write" className="hover:text-orange-200">
            Write
          </Link>
          <Link href="/library" className="hover:text-orange-200">
            Library
          </Link>
          <Link href="/profile" className="hover:text-orange-200">
            Profile
          </Link>
        </div>
        <div className="relative">
          <input type="text" placeholder="Search novels..." className="pl-8 pr-2 py-1 rounded-full text-black" />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

