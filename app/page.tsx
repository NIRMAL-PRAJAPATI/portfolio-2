'use client'

import Link from "next/link"
import { ArrowRight, ArrowRightIcon, Github, Linkedin, LucideSquareDashedBottomCode, Mail, Twitter, WalletCards } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0B12]">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-24 md:py-36 text-white">
          {/* Grid Background */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 z-0">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-gray-900/70"></div>
          ))}
          <div className="absolute top-[30%] right-[20%] w-24 h-24 bg-[#7928CA] opacity-80"></div>
          <div className="absolute bottom-[40%] left-[30%] w-16 h-32 bg-[#7928CA] opacity-60"></div>
          <div className="absolute top-[60%] right-[40%] w-32 h-16 bg-[#7928CA] opacity-70"></div>
          <div className="absolute bottom-[20%] right-[10%] w-20 h-20 bg-[#7928CA] opacity-50"></div>
        </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col">
              <div className="space-y-2 z-10">
                <div className="inline-block rounded-full bg-indigo-600/10 px-3 py-1 text-sm text-indigo-500">
                  Full Stack Developer
                </div>
                <h1 className="text-4xl font-extrabold tracking text-white sm:text-6xl xl:text-7xl/none">
                  NIRMAL PRAJAPATI
                </h1>
                <p className="max-w-[700px] text-gray-400 md:text-xl">
                  Building full-stack web solutions that deliver real impact. Specializing in modern JavaScript frameworks and scalable backend technologies.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 z-10 mt-10">
                <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-700">
                  <Link href="mailto:nirmalprajapati727@gmail.com">
                    Email Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Link href="nirmal_prajapati_resume.pdf" download className="flex gap-2"><WalletCards className="mt-0.5" />Download Resume</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4 z-10">
                <div className="inline-block rounded-lg bg-indigo-600/10 px-3 py-1 text-sm text-indigo-500">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                  Passionate about building for the web
                </h2>
                <p className="text-gray-400 md:text-md/relaxed lg:text-base/relaxed xl:text-md/relaxed">Passionate third-year B.E.(IT) student focused on full-stack web development. Skilled in React, Express.js, Node.js, MongoDB etc for building scalable web apps. Driven by clean code, continuous learning, and solving real-world problems.
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-xl border border-gray-800 bg-[#13131A] p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-white">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Hosting", "Git & GitHub", "AI tools"].map(
                      (skill) => (
                        <div key={skill} className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
                          {skill}
                        </div>
                      ),
                    )}
                    <div className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300 cursor-pointer hover:text-indigo-500 hover:pl-4 hover:border border-indigo-500">
                          <ArrowRightIcon className="h-4 w-4" />
                        </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-white">Experience</h3>
                  <div className="grid gap-4">
                    <div className="grid gap-1">
                      <div className="font-medium text-white">Frontend Developer - Client Project Work</div>
                      <div className="text-xs text-gray-400">Nov 2024 - Jan 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl space-y-8">
              <div className="space-y-2 text-center">
                <div className="inline-block rounded-lg bg-indigo-600/10 px-3 py-1 text-sm text-indigo-500">
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Featured Work</h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my recent projects and collaborations.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <ProjectCard
                  title="EZService"
                  description="An e-commerce platform offering a wide range of on-demand services delivered to your doorstep."
                  tags={["React", "TailwindCSS", "Express.js", "Node.js", "PostgreSQL", "Sequelize", "Neon"]}
                  link="#"
                />
                <ProjectCard
                  title="Prattle"
                  description="A real-time chat web app with user authentication, live messaging, AI chatbot, and conversation management."
                  tags={["EJS", "tailwindCSS", "Socket.io", "Gemini API", "PostgreSQL", "Neon", "Render"]}
                  link="#"
                />
                <ProjectCard
                  title="Student Things"
                  description="A student portal for project uploads, user login, and interactive features like project likes and browsing."
                  tags={["EJS", "Bootstrap", "Express.js", "Node.js", "MongoDB"]}
                  link="#"
                />
                <a className="flex sm:justify-center sm:items-center" href="/projects">
                  <h1 className="flex overflow-hidden border border-gray-800 bg-[#13131A] transition-all hover:border-indigo-500/50 hover:shadow-md hover:shadow-indigo-500/10 px-5 py-3 rounded-lg cursor-pointer">
                  More Projects
                  <ArrowRight className="h-4 w-4 mt-1 ml-2" /></h1>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-8">
              
              <div className="mx-auto grid items-center gap-8">
                <div className="grid md:grid-cols-2 items-center space-y-6">
                  <div>
                    <div className="space-y-2 text-center">
                <div className="inline-block rounded-lg bg-indigo-600/10 px-3 py-1 text-sm text-indigo-500">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Get in Touch</h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interested in working together? Let's connect.
                </p>
              </div>
                  <div className="flex space-x-4 justify-center mt-5">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      <a href="mailto:nirmalprajapati727@gmail.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span></a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      <a href="https://github.com/NIRMAL-PRAJAPATI">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      <a href="https://www.linkedin.com/in/nirmal-prajapati-b206ba277/">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span></a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      <a href="https://leetcode.com/u/nirmalprajapati4008/">
                      <LucideSquareDashedBottomCode className="h-5 w-5" />
                      <span className="sr-only">LeetCode</span></a>
                    </Button>
                  </div>
                  </div>
                  <div className="w-full rounded-xl border border-gray-800 bg-[#13131A] p-6">
                    <form
  className="grid gap-4"
  action="https://formspree.io/f/mbloadjb"
  method="POST"
>
  <div className="grid gap-2">
    <label className="text-sm font-medium text-gray-300" htmlFor="name">
      Name
    </label>
    <input
      className="rounded-md border border-gray-700 bg-[#0B0B12] px-3 py-3 text-sm text-white"
      id="name"
      name="name"
      required
    />
  </div>
  <div className="grid gap-2">
    <label className="text-sm font-medium text-gray-300" htmlFor="email">
      Email
    </label>
    <input
      className="rounded-md border border-gray-700 bg-[#0B0B12] px-3 py-3 text-sm text-white"
      id="email"
      name="email"
      type="email"
      required
    />
  </div>
  <div className="grid gap-2">
    <label className="text-sm font-medium text-gray-300" htmlFor="message">
      Message
    </label>
    <textarea
      className="rounded-md border border-gray-700 bg-[#0B0B12] px-3 py-3 text-sm text-white"
      id="message"
      name="message"
      rows={4}
      required
    />
  </div>
  <button
    type="submit"
    className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-md py-2 px-4"
  >
    Send Message
  </button>
</form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

    </div>
  )
}
