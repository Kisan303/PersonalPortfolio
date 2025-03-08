import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { AnimatedText } from "@/components/animated-text"
import { ParallaxBackground } from "@/components/parallax-background"
import { FloatingIllustrations } from "@/components/floating-illustrations"
import { ContactForm } from "@/components/contact-form"
import { SkillsShowcase } from "@/components/skills-showcase"
import { GradientButton } from "@/components/ui/gradient-button"
import { InteractiveScene } from "@/components/interactive-scene"
import { ExperienceSection } from "@/components/experience-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <ParallaxBackground />
        <FloatingIllustrations />
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent px-3 py-1 text-lg font-bold">
              <AnimatedText text="Welcome to my portfolio" />
            </div>
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-emerald-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              <AnimatedText text="Kisan Rai" staggerChildren />
            </h1>
            <p className="mb-10 text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              <AnimatedText
                text="Full-Stack Software Developer specializing in Python, Django, and MERN Stack"
                delay={0.4}
              />
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link href="#projects">
                <GradientButton size="lg" className="gap-2 shadow-glow-pink text-base">
                  View My Work <ArrowRight className="h-4 w-4" />
                </GradientButton>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 text-white text-base"
                >
                  Contact Me <Mail className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Interactive Scene Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-indigo-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600">
              Interactive Experience
            </h2>
            <p className="section-description">
              Explore this interactive scene. Move your mouse to see the parallax effect and hover over elements to
              interact.
            </p>
          </div>
          <div className="h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <InteractiveScene />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-r from-slate-900 to-indigo-900">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/40 to-purple-600/40 backdrop-blur-xl flex items-center justify-center border border-white/10 shadow-xl relative z-10">
                <Image
                  src="https://github.com/Kisan303/SocialLink/blob/main/img/Profile2.0.jpg?raw=true"
                  alt="Kisan Rai"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/10 rotate-6"></div>
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10"></div>
            </div>
            <div>
              <h2 className="section-title bg-gradient-to-r from-blue-400 to-cyan-300 mb-8">About Me</h2>
              <p className="text-blue-50 mb-8 text-lg leading-relaxed">
                With 1.5 years of hands-on experience in software development, I've learned that true growth comes from
                embracing challenges and never settling for less. I'm the kind of developer who pushes boundaries—ready
                to relearn, adapt, and improve with every task.
              </p>
              <p className="text-blue-50 mb-8 text-lg leading-relaxed">
                When faced with unfamiliar situations, I take the initiative to find solutions and consistently deliver
                on time with my problem-solving skills to push above and beyond.
              </p>
              <div className="flex gap-5 mb-10">
                <Link href="https://github.com/Kisan303" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full h-12 w-12"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/kisanrai/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full h-12 w-12"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:kisanrai939@gmail.com">
                  <Button
                    variant="outline"
                    size="icon"
                    className="backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full h-12 w-12"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <GradientButton variant="default" className="shadow-glow-blue gap-2 text-base">
                  Download Resume <Download className="h-4 w-4" />
                </GradientButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gradient-to-b from-indigo-900 to-violet-950">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600">
              Experience & Education
            </h2>
            <p className="section-description">My professional journey and academic background</p>
          </div>
          <ExperienceSection />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gradient-to-b from-violet-950 to-slate-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600">My Skills</h2>
            <p className="section-description">Here are some of the technologies and tools I work with</p>
          </div>
          <SkillsShowcase />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400">My Projects</h2>
            <p className="section-description">
              Here are some of my recent projects that showcase my skills and expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="User Management System"
              description="A full-stack user management system using MongoDB, Express.js, React.js, and Node.js, enabling efficient CRUD operations."
              image="/placeholder.svg?height=400&width=600"
              tags={["MERN Stack", "MongoDB", "React.js"]}
              link="#"
              gradient="from-blue-500 to-cyan-400"
            />
            <ProjectCard
              title="User Track List"
              description="A Spring Boot application to manage user data, allowing users to create, view, and list records via a web interface."
              image="/placeholder.svg?height=400&width=600"
              tags={["Spring Boot", "Thymeleaf", "H2 Database"]}
              link="#"
              gradient="from-purple-500 to-pink-400"
            />
            <ProjectCard
              title="Dynamic Weather Widget"
              description="A responsive weather application using HTML, CSS, and JavaScript, leveraging the OpenWeatherMap REST API for real-time data."
              image="/placeholder.svg?height=400&width=600"
              tags={["JavaScript", "REST API", "CSS"]}
              link="#"
              gradient="from-emerald-400 to-teal-500"
            />
          </div>
          <div className="text-center mt-16">
            <Link href="https://github.com/Kisan303" target="_blank" rel="noopener noreferrer">
              <GradientButton variant="outline" className="gap-2 border-white/20 backdrop-blur-sm text-base">
                View All Projects <ExternalLink className="h-4 w-4" />
              </GradientButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-violet-950 to-slate-950">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title bg-gradient-to-r from-blue-400 to-emerald-400">Get In Touch</h2>
            <p className="section-description">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>
          <div className="max-w-xl mx-auto card-glass p-10 rounded-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 bg-slate-950">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-blue-100 text-lg font-medium">Kisan Rai</p>
              <p className="text-blue-300 mt-1">Full-Stack Software Developer</p>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="https://github.com/Kisan303" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-blue-200 hover:text-white hover:bg-white/10">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/kisanrai/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-blue-200 hover:text-white hover:bg-white/10">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:kisanrai939@gmail.com">
                <Button variant="ghost" size="icon" className="text-blue-200 hover:text-white hover:bg-white/10">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">© 2024 Kisan Rai. All rights reserved.</p>
            <p className="text-blue-300 text-sm mt-2 md:mt-0">
              <a href="mailto:kisanrai939@gmail.com" className="hover:text-blue-100">
                kisanrai939@gmail.com
              </a>{" "}
              |
              <a href="tel:+14376610038" className="hover:text-blue-100 ml-2">
                +1 437 661 0038
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

