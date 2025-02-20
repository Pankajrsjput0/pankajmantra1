import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">© 2025 Mantra. All rights reserved.</div>
        <div className="space-x-4">
          <Link href="/about" className="hover:text-orange-200">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-orange-200">
            Contact Us
          </Link>
          <Link href="/legal" className="hover:text-orange-200">
            Legal
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

