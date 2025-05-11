import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlignRight, Frame } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0B0B12]/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <Frame className="h-6 w-6 text-indigo-500" />
          <span>Nirmal Prajapati</span>
        </Link>
        <AlignRight className="text-white h-8 w-8 flex ml-auto gap-4 sm:gap-6 block md:hidden"></AlignRight>
        <nav className="ml-auto gap-4 sm:gap-6 hidden md:flex">
          <div className="mt-6 flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
            Introduction
          </Link>
          <Link href="/projects" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
            Projects
          </Link>
          <Link href="/skills" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
            Skill & Experience
          </Link>
          <Link href="/education" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
            Education
          </Link>
          </div>
          <button className="bg-purple-700 text-white hover:bg-indigo-500 p-5">
            <Link href="/#contact">Hire Me</Link>
          </button>
        </nav>
      </div>
    </header>
  )
}
