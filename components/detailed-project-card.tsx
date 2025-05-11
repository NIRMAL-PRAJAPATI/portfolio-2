import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github, Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DetailedProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  repoUrl: string
  featured: boolean
}

export function DetailedProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl,
  featured,
}: DetailedProjectCardProps) {
  return (
    <Card className="overflow-hidden border-gray-800 bg-[#13131A] transition-all hover:border-indigo-500/50 hover:shadow-md hover:shadow-indigo-500/10">
      <div className="relative">
        {featured && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-indigo-600 px-3 py-1 text-xs text-white">
            <Star className="h-3 w-3" />
            Featured
          </div>
        )}
      </div>
      <CardHeader className="border-b border-gray-800 bg-[#0F0F17] p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <p className="text-gray-400 text-justify">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div key={tag} className="rounded-full bg-indigo-600/10 px-3 py-1 text-xs text-indigo-500">
              {tag}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-gray-800 p-6">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <Link href={repoUrl}>
            <Github className="h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button asChild size="sm" className="bg-indigo-600 text-white hover:bg-indigo-700">
          <Link href={demoUrl}>
            Live Demo
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
