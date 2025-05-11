import Link from "next/link"
import { ArrowLeft, BetweenHorizonalStart, Code, Database, Layout, Server, Settings, Smartphone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SkillCategory } from "@/components/skill-category"
import { Button } from "@/components/ui/button"
import { ExperienceCard } from "@/components/experience-card"

export default function SkillsPage() {
  const problemSolving = [
    { name: "C" },
    { name: "JAVA" },
    { name: "Basic DSA" },
    { name: "OOPs" },
  ]

  const frontendSkills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "AJAX" },
    { name: "JQuery" },
  ]

  const backendSkills = [
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "REST API" },
    { name: "Twilio" },
    { name: "Authentication" },
    { name: "Authorization" }
  ]

  const databaseSkills = [
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "Sequelize" },
    { name: "Neon" },
    { name: "Supabase" },
  ]

  const otherSkills = [
    { name: "Github Pages" },
    { name: "Render" },
    { name: "Varcel" },
    { name: "Chat GPT" },
    { name: "V0 by Varcel" },
    { name: "MS office" },
    { name: "Git" },
    { name: "GitHub" },
  ]

  const experiences = [
    {
      id: 1,
      position: "QFAvionics - Frontend Developer",
      company: "Client Project",
      location: "Canada",
      type: "Remote",
      duration: "Nov 2024 - Jan 2025",
      description:
        "Collaborated with a team of college peers to develop a responsive fullstack web application for a Canadian client managing an airplane parts warehouse.",
      responsibilities: [
        "Designed and implemented user-friendly interfaces using HTML, CSS, JavaScript, and Bootstrap.",
        "Focused on responsive design and smooth user experience across devices",
        "Ensured timely project delivery, meeting all client expectations and functional requirements.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
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
                    Experience
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                    Professional Journey
                  </h1>
                  <p className="max-w-[700px] text-gray-400 md:text-xl">
                    My career path and professional experience in the technology industry.
                  </p>
                </div>
              </div>

              <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gray-700 md:before:mx-auto md:before:translate-x-0">
                {experiences.map((experience, index) => (
                  <ExperienceCard
                    key={experience.id}
                    position={experience.position}
                    company={experience.company}
                    location={experience.location}
                    type={experience.type}
                    duration={experience.duration}
                    description={experience.description}
                    responsibilities={experience.responsibilities}
                    technologies={experience.technologies}
                    isLeft={index % 2 === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <main className="flex-1">
        <section className="w-full pb-10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl space-y-8">
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-indigo-600/10 px-3 py-1 text-sm text-indigo-500">
                    Skills
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                    Technical Expertise
                  </h1>
                  <p className="max-w-[700px] text-gray-400 md:text-xl">
                    A comprehensive overview of my technical skills and proficiency levels across various domains.
                  </p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <SkillCategory
                  title="Problem Solving"
                  icon={<Code className="h-5 w-5 text-indigo-500" />}
                  skills={problemSolving}
                />
                <SkillCategory
                  title="Frontend Development"
                  icon={<Layout className="h-5 w-5 text-indigo-500" />}
                  skills={frontendSkills}
                />
                <SkillCategory
                  title="Backend Development"
                  icon={<Server className="h-5 w-5 text-indigo-500" />}
                  skills={backendSkills}
                />
                <SkillCategory
                  title="Database & ORM"
                  icon={<Database className="h-5 w-5 text-indigo-500" />}
                  skills={databaseSkills}
                />
                <SkillCategory
                  title="Hosting & Other Skills"
                  icon={<BetweenHorizonalStart className="h-5 w-5 text-indigo-500" />}
                  skills={otherSkills}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
