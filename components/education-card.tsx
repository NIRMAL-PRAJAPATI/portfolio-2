import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface EducationCardProps {
  degree: string
  institution: string
  location: string
  duration: string
  description: string
  courses: string[]
}

export function EducationCard({ degree, institution, location, duration, description, courses }: EducationCardProps) {
  return (
    <Card className="border-gray-800 bg-[#13131A] transition-all hover:border-indigo-500/50 hover:shadow-md hover:shadow-indigo-500/10">
      <CardHeader className="border-b border-gray-800 bg-[#0F0F17] p-6">
        <CardTitle className="text-white">{degree}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="font-medium text-white">{institution}</div>
          <div className="flex items-center text-sm text-gray-400">
            <MapPin className="mr-2 h-4 w-4" />
            {location}
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <Calendar className="mr-2 h-4 w-4" />
            {duration}
          </div>
        </div>
        <p className="text-gray-400">{description}</p>
        <div className="space-y-2">
          <div className="font-medium text-white">Key Courses</div>
          <div className="flex flex-wrap gap-2">
            {courses.map((course) => (
              <div key={course} className="rounded-full bg-indigo-600/10 px-3 py-1 text-xs text-indigo-500">
                {course}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
