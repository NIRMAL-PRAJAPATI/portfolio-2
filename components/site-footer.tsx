import Link from "next/link"
import { Frame } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-gray-800 bg-[#0B0B12] py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2 text-lg font-semibold text-white">
          <Frame className="h-5 w-5 text-indigo-500" />
          <span>Nirmal Prajapati</span>
        </div>
        <p className="text-center text-sm text-gray-400 md:text-left">
          © {new Date().getFullYear()} Nirmal Prajapati. All rights reserved.
        </p>
        <p className="text-center text-sm text-gray-400 md:text-left">Ahmedabad, Gujarat, India</p>
      </div>
    </footer>
  )
}
