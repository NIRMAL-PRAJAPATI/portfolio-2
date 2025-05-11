import { Award, Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  credentialId: string
  skills: string[]
}

export function CertificationCard({ title, issuer, date, credentialId, skills }: CertificationCardProps) {
  return (
    <Card className="border-gray-800 bg-[#13131A] transition-all hover:border-indigo-500/50 hover:shadow-md hover:shadow-indigo-500/10">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <Award className="h-6 w-6 text-indigo-500 mt-1" />
          <div className="space-y-1">
            <h3 className="font-medium text-white">{title}</h3>
            <div className="text-sm text-gray-400">{issuer}</div>
            <div className="flex items-center text-xs text-gray-400">
              <Calendar className="mr-1 h-3 w-3" />
              {date}
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-400">Credential ID: {credentialId}</div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div key={skill} className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
              {skill}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-800 p-4">
        <Link
          href="#"
          className="inline-flex items-center gap-1 text-xs text-indigo-500 transition-colors hover:text-indigo-400"
        >
          Verify Credential <ExternalLink className="h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  )
}
