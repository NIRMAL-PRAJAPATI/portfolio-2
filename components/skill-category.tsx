import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Skill {
  name: string
  proficiency: number
}

interface SkillCategoryProps {
  title: string
  icon: ReactNode
  skills: Skill[]
}

export function SkillCategory({ title, icon, skills }: SkillCategoryProps) {
  return (
    <Card className="border-gray-800 bg-[#13131A] transition-all hover:border-indigo-500/50 hover:shadow-md hover:shadow-indigo-500/10">
      <CardHeader className="border-b border-gray-800 bg-[#0F0F17] p-6">
        <CardTitle className="flex items-center gap-2 text-white">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="py-5">
  <div className="flex flex-wrap gap-3">
    {skills.map((skill) => (
      <div
        key={skill.name}
        className="flex items-center justify-between text-xs sm:text-sm font-medium text-white rounded-full bg-indigo-600/10 px-3 sm:px-4 py-1 sm:py-2 text-indigo-500"
      >{skill.name}</div>
    ))}
  </div>
</CardContent>

    </Card>
  )
}
