"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlignRight, Frame } from "lucide-react"
import { useState } from "react";

export function SiteHeader() {
  const [navController, setNavController] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0B0B12]/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <Frame className="h-6 w-6 text-indigo-500" />
          <span>Nirmal Prajapati</span>
        </Link>

        {/* Mobile toggle icon */}
        <AlignRight
          onClick={() => setNavController((prev) => !prev)}
          className="text-white h-8 w-8 ml-auto block md:hidden cursor-pointer"
        />

        {/* Navigation menu */}
        <nav
          className={`
            flex-col md:flex-row ml-auto gap-4 sm:gap-6
            bg-[#0B0B12]/95 backdrop-blur-sm w-full md:w-auto
            md:relative md:flex
            ${navController ? "absolute top-16 left-0 flex" : "hidden"}
          `}
        >
          <div className="mt-6 ml-5 md:ml-0 flex gap-4 md:gap-6 flex-col md:flex-row">
            <Link href="/" className="text-sm font-medium text-gray-400 transition-colors hover:text-white" onClick={() => setNavController(false)}>
              Introduction
            </Link>
            <Link href="/projects" className="text-sm font-medium text-gray-400 transition-colors hover:text-white" onClick={() => setNavController(false)}>
              Projects
            </Link>
            <Link href="/skills" className="text-sm font-medium text-gray-400 transition-colors hover:text-white" onClick={() => setNavController(false)}>
              Skill & Experience
            </Link>
            <Link href="/education" className="text-sm font-medium text-gray-400 transition-colors hover:text-white" onClick={() => setNavController(false)}>
              Education
            </Link>
          </div>
          <button className="bg-purple-700 text-white hover:bg-indigo-500 p-3 md:p-5">
            <Link href="/#contact" onClick={() => setNavController(false)}>Hire Me</Link>
          </button>
        </nav>
      </div>
    </header>
  );
}
