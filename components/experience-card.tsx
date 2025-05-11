import { Briefcase, MapPin } from "lucide-react"

interface ExperienceCardProps {
  position: string
  company: string
  location: string
  type: string
  duration: string
  description: string
  responsibilities: string[]
  technologies: string[]
  isLeft: boolean
}

export function ExperienceCard({
  position,
  company,
  location,
  type,
  duration,
  description,
  responsibilities,
  technologies,
  isLeft,
}: ExperienceCardProps) {
  return (
    <div className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-x-4`}>
      <div className="flex md:w-1/2">
        <div className="flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-[#13131A] z-10">
            <Briefcase className="h-5 w-5 text-indigo-500" />
          </div>
          <div className="w-px grow bg-gray-700" />
        </div>
        <div className={`grow ${isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} pt-1.5 pb-8`}>
          <div className="space-y-1">
            <h3 className="font-bold text-white text-xl">{position}</h3>
            <div className="text-indigo-500">{company}</div>
            <div className="flex items-center text-sm text-gray-400 gap-2 mb-2 flex-wrap">
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {location}
              </div>
              <span className="hidden md:inline">•</span>
              <div>{type}</div>
              <span className="hidden md:inline">•</span>
              <div>{duration}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 ml-10 md:ml-0">
        <div className={`rounded-xl border border-gray-800 bg-[#13131A] p-6 ${isLeft ? "md:mr-8" : "md:ml-8"}`}>
          <div className="space-y-4">
            <p className="text-gray-400">{description}</p>
            <div className="space-y-2">
              <h4 className="font-medium text-white">Key Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-sm text-gray-400">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-white">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <div key={tech} className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
