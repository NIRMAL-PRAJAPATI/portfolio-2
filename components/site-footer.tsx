import Link from "next/link"
import { Frame } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-gray-800 bg-[#0B0B12] py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2 text-lg font-semibold text-white">
          <Frame className="h-5 w-5 text-indigo-500" />
          <span>Alex Johnson</span>
        </div>
        <p className="text-center text-sm text-gray-400 md:text-left">
          © {new Date().getFullYear()} Alex Johnson. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs text-gray-400 transition-colors hover:text-white">
            Privacy
          </Link>
          <Link href="#" className="text-xs text-gray-400 transition-colors hover:text-white">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  )
}
