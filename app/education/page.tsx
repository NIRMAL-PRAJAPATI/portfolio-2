import Link from "next/link"
import { ArrowLeft, GraduationCap } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function EducationPage() {
    const frontendSkills = [
    { name: "React", proficiency: 95 },
    { name: "Next.js", proficiency: 90 },
    { name: "TypeScript", proficiency: 85 },
    { name: "HTML/CSS", proficiency: 95 },
    { name: "Tailwind CSS", proficiency: 90 },
    { name: "Redux", proficiency: 80 },
    { name: "Vue.js", proficiency: 75 },
    { name: "Angular", proficiency: 70 },
  ]

  const backendSkills = [
    { name: "Node.js", proficiency: 90 },
    { name: "Express", proficiency: 85 },
    { name: "Python", proficiency: 80 },
    { name: "Django", proficiency: 75 },
    { name: "GraphQL", proficiency: 80 },
    { name: "REST API", proficiency: 95 },
  ]

  const databaseSkills = [
    { name: "PostgreSQL", proficiency: 85 },
    { name: "MongoDB", proficiency: 90 },
    { name: "Redis", proficiency: 75 },
    { name: "Firebase", proficiency: 80 },
    { name: "Prisma", proficiency: 85 },
  ]

  const devopsSkills = [
    { name: "Docker", proficiency: 85 },
    { name: "Kubernetes", proficiency: 75 },
    { name: "CI/CD", proficiency: 80 },
    { name: "AWS", proficiency: 85 },
    { name: "Vercel", proficiency: 90 },
    { name: "GitHub Actions", proficiency: 80 },
  ]

  const mobileSkills = [
    { name: "React Native", proficiency: 85 },
    { name: "Flutter", proficiency: 70 },
    { name: "iOS Development", proficiency: 65 },
    { name: "Android Development", proficiency: 60 },
  ]

  const otherSkills = [
    { name: "UI/UX Design", proficiency: 75 },
    { name: "Figma", proficiency: 80 },
    { name: "Testing", proficiency: 85 },
    { name: "Agile/Scrum", proficiency: 90 },
    { name: "Technical Writing", proficiency: 80 },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#0B0B12]">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl space-y-8">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white w-fit">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-indigo-600/10 px-3 py-1 text-sm text-indigo-500">
                    Education
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                    Academic Background
                  </h1>
                  <p className="max-w-[700px] text-gray-400 md:text-xl">
                    My educational journey and continuous learning path in technology and development.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5 text-indigo-500" />
                    <h2 className="text-xl font-bold text-white">Degrees</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="text-white p-5 rounded border border-gray-800 bg-[#13131A] transition-all hover:border-indigo-500/50 hover:shadow-md hover:shadow-indigo-500/10">
                      <i className="rounded-full bg-indigo-600/10 px-3 float-right py-1 text-xs text-indigo-500">Aug 2023 - Present</i>
                      <h1 className="text-2xl md:text-3xl mt-2 font-bold">Bachalors of Engineering</h1>
                      <p className="text-gray-500 text-lg">in Information Technology</p>
                      <p className="mt-3 text-gray-300">CGPA : 7.13</p>
                      <p className="mt-3">Government Engineering College, Modasa</p>
                      <p className="text-gray-500 text-xs">Affiliated by Gujarat Technological University</p>
                    </div>

                    <div className="text-white p-5 rounded border border-gray-800 bg-[#13131A] transition-all hover:border-indigo-500/50 hover:shadow-md hover:shadow-indigo-500/10">
                      <i className="rounded-full bg-indigo-600/10 px-3 float-right py-1 text-xs text-indigo-500">Aug 2020 - Jul 2023</i>
                      <h1 className="text-2xl md:text-3xl mt-2 font-bold">Diploma in Engineering</h1>
                      <p className="text-gray-500 text-lg">in Information Technology</p>
                      <p className="mt-3 text-gray-300">CGPA : 8.42</p>
                      <p className="mt-3">Government Polytechnic, Ahmedabad</p>
                      <p className="text-gray-500 text-xs">Affiliated by Gujarat Technological University</p>
                    </div>
                  </div>
                </div>

                {/* <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-indigo-500" />
                    <h2 className="text-xl font-bold text-white">Certifications</h2>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <CertificationCard
                      title="AWS Certified Solutions Architect"
                      issuer="Amazon Web Services"
                      date="2022"
                      credentialId="AWS-123456"
                      skills={["Cloud Architecture", "AWS Services", "Security"]}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
