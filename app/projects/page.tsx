import Link from "next/link"
import { ArrowLeft, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DetailedProjectCard } from "@/components/detailed-project-card"

export default function ProjectsPage() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "EZService",
      description: "An eCommerce platform where users can easily browse and purchase various services, ranging from home repairs to personal shopping, all delivered to their doorstep. With an intuitive interface, secure payments, and real-time tracking, the site offers a seamless experience for booking and enjoying services.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "SocketIO", "PostgreSQL", "Sequelize", "Neon"],
      demoUrl: "https://github.com/NIRMAL-PRAJAPATI/EZService",
      repoUrl: "https://github.com/NIRMAL-PRAJAPATI/EZService",
      featured: true
    },
    {
      id: 2,
      title: "Realtime Chat App",
      description: "Developed a real-time chat web application. Implemented backend functionality using Node.js and Express.js, with real-time communication powered by Socket.IO. Designed features to ensure seamless, instant messaging with a focus on performance and reliability.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "SocketIO", "PostgreSQL"],
      demoUrl: "https://github.com/NIRMAL-PRAJAPATI/chat-webapp-prattle",
      repoUrl: "https://github.com/NIRMAL-PRAJAPATI/chat-webapp-prattle",
      featured: true
    }
    ,
    {
      id: 3,
      title: "Student Things",
      description: "This is my full-stack project, where students can register and log in. They can upload projects, update or delete their profiles, view projects uploaded by other students, like them, and see their IDs. Additionally, students can update or delete their own projects and perform various other actions that enhance my backend development skills.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
      demoUrl: "https://github.com/NIRMAL-PRAJAPATI/student-things",
      repoUrl: "https://github.com/NIRMAL-PRAJAPATI/student-things",
      featured: true
    }
    ,
    {
      id: 4,
      title: "Nationalist",
      description: "This website is a comprehensive guide to India, providing in-depth information about its states, cities, political landscape, and rich cultural and historical heritage. Explore India's incredible diversity and uncover the key elements that make it truly unique.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js"],
      demoUrl: "https://nirmal-prajapati.github.io/nationalist/",
      repoUrl: "https://github.com/NIRMAL-PRAJAPATI/nationalist",
      featured: false
    }
    ,
    {
      id: 5,
      title: "Spotify Clone",
      description: "I developed a Spotify clone. The app mimics core Spotify features, including real-time song loading and playback without page reloads.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://nirmal-prajapati.github.io/spotify-clone/",
      repoUrl: "https://github.com/NIRMAL-PRAJAPATI/spotify-clone",
      featured: false
    }
    ,
    {
      id: 6,
      title: "Online Casino Game",
      description: "I developed an online casino game featuring an engaging interface and interactive gameplay. The game allows users to experience virtual casino entertainment with smooth animations and dynamic user interaction.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demoUrl: "https://nirmal-prajapati.github.io/online-casino-game/",
      repoUrl: "https://github.com/NIRMAL-PRAJAPATI/online-casino-game",
      featured: false
    }
    ,
    {
      id: 7,
      title: "Weather Information",
      description: "This website fetches real-time weather data from an external API, providing accurate and up-to-date weather information for any location users search for. It allows users to access current conditions, forecasts, and other essential weather updates seamlessly.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript", "Weather API"],
      demoUrl: "https://nirmal-prajapati.github.io/weather-web/",
      repoUrl: "https://github.com/NIRMAL-PRAJAPATI/weather-web",
      featured: false
    }
    ,
    {
      id: 8,
      title: "Number Finder",
      description: "Number finder game is an interactive project where players aim to discover a target number. By guessing correctly, they earn points, adding a fun challenge to the gameplay. The game enhances problem-solving and quick-thinking skills.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://nirmal-prajapati.github.io/bubble-hunter/",
      repoUrl: "https://github.com/NIRMAL-PRAJAPATI/bubble-hunter",
      featured: false
    },
    {
      id: 9,
      title: "Uplink Homepage Clone",
      description: "I created a functional clone of the Uplink website home page, replicating its design and layout using modern web technologies. The project showcases my ability to build responsive and visually accurate websites, reflecting a real-world application's user interface.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://nirmal-prajapati.github.io/stock_tempelate.github.io/",
      repoUrl: "https://github.com/NIRMAL-PRAJAPATI/stock_tempelate.github.io",
      featured: false
    },
    {
      id: 10,
      title: "Puma Homepage Clone",
      description: "Project is a responsive clone of the Puma website's home page, designed to adapt seamlessly across different devices. It replicates the sleek design, layout, and functionality of the original site, providing an engaging and user-friendly experience.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://nirmal-prajapati.github.io/puma_clone.github.io/",
      repoUrl: "https://github.com/NIRMAL-PRAJAPATI/puma_clone.github.io",
      featured: false
    },
    {
      id: 11,
      title: "Realtime Clock",
      description: "A real-time digital clock featuring a sleek design that displays the current time dynamically. Additionally, the clock includes special date reminders, ensuring users never miss important events. This project combines functionality with aesthetics, providing a practical tool for everyday use.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demoUrl: "https://nirmal-prajapati.github.io/clock_world.github.io/",
      repoUrl: "https://github.com/NIRMAL-PRAJAPATI/clock_world.github.io",
      featured: false
    },
    {
      id: 12,
      title: "Hacker Dashboard",
      description: "The Hacker Dashboard simulates real-time hacking tasks, utilizing the async and await concepts for smooth, non-blocking execution of multiple operations. It's designed to enhance understanding of asynchronous programming in JavaScript.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://nirmal-prajapati.github.io/hackerman.github.io/",
      repoUrl: "https://github.com/NIRMAL-PRAJAPATI/hackerman.github.io",
      featured: false
    },
    {
      id: 13,
      title: "Joke Generator",
      description: "This dynamic joke generator page delivers a fresh dose of humor at the click of a button. It seamlessly fetches and displays random jokes, providing a fun and engaging user experience.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demoUrl: "https://nirmal-prajapati.github.io/jokes-generator.github.io/",
      repoUrl: "https://github.com/NIRMAL-PRAJAPATI/jokes-generator.github.io",
      featured: false
    },
    {
      id: 14,
      title: "Learn Language Web",
      description: "Discover a fun and interactive way to learn new languages with our Bootstrap-powered platform. Featuring engaging lessons, quizzes, and a user-friendly interface, this website is designed to enhance your language skills at your own pace. Join a community of learners and embark on your journey to fluency today!",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "Bootstrap"],
      demoUrl: "https://nirmal-prajapati.github.io/Learning_Languages_sponzeall/",
      repoUrl: "https://github.com/NIRMAL-PRAJAPATI/Learning_Languages_sponzeall",
      featured: false
    }

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
                    Projects
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">My Work</h1>
                  <p className="max-w-[700px] text-gray-400 md:text-xl">
                    A collection of projects I've built throughout my career, showcasing my skills and expertise.
                  </p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                  <DetailedProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    demoUrl={project.demoUrl}
                    repoUrl={project.repoUrl}
                    featured={project.featured}
                  />
                ))}
              </div>

              <div className="flex justify-center pt-8">
                <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-700">
                  <Link href="/#contact">Discuss a Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
