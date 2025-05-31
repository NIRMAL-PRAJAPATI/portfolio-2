import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-gray-800 bg-[#13131A] transition-all hover:border-indigo-500/50 hover:shadow-md hover:shadow-indigo-500/10">
      <CardHeader className="border-b border-gray-800 bg-[#0F0F17] p-6">
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-400">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4 border-t border-gray-800 p-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div key={tag} className="rounded-full bg-indigo-600/10 px-3 py-1 text-xs text-indigo-500">
              {tag}
            </div>
          ))}
        </div>
        <Link
          href={link}
          className="inline-flex items-center pt-2 gap-1 text-sm text-indigo-500 transition-colors hover:text-indigo-400"
        >
          View Project <ArrowUpRight className="h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  )
}
