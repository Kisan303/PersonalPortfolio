"use client"

import { motion } from "framer-motion"
import { Calendar, Briefcase, GraduationCap } from "lucide-react"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string[]
  index: number
}

function ExperienceItem({ title, company, period, description, index }: ExperienceItemProps) {
  return (
    <motion.div
      className="mb-12 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-5 shadow-glow-blue">
          <Briefcase className="text-white h-6 w-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
          <p className="text-blue-300 text-lg">{company}</p>
        </div>
      </div>
      <div className="pl-20">
        <div className="flex items-center mb-4 text-base text-blue-200">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{period}</span>
        </div>
        <ul className="list-disc pl-5 space-y-3 text-blue-50">
          {description.map((item, i) => (
            <li key={i} className="text-lg leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

interface EducationItemProps {
  degree: string
  institution: string
  period: string
  index: number
}

function EducationItem({ degree, institution, period, index }: EducationItemProps) {
  return (
    <motion.div
      className="mb-10 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mr-5 shadow-glow-purple">
          <GraduationCap className="text-white h-6 w-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{degree}</h3>
          <p className="text-blue-300 text-lg">{institution}</p>
        </div>
      </div>
      <div className="pl-20">
        <div className="flex items-center text-base text-blue-200">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{period}</span>
        </div>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const experiences = [
    {
      title: "Junior Python Backend Developer",
      company: "Fusemachines",
      period: "Sept 2022 – March 2023",
      description: [
        "Developed backend systems using Python/Django, improving performance by 40% and building RESTful APIs for seamless integration.",
        "Optimized PostgreSQL queries and created dynamic views/templates with Django, boosting system speed by 84% and enhancing user experience.",
        "Integrated Stripe payment gateway and implemented advanced search/filter functionalities, increasing user engagement by 30%.",
        "Ensured code quality through unit/integration testing and Git version control, fostering efficient team collaboration.",
      ],
    },
    {
      title: "Android Application Developer",
      company: "EKbana Solutions Pte. Ltd · Internship",
      period: "Jan 2021 – May 2021",
      description: [
        "Redesigned the frontend of the Hamrobazzar Marketplace using Android Studio IDE (Java), ensuring a consistent and user-friendly interface.",
        "Built dynamic layouts with Material Design and integrated Google Maps API for responsive, location-based user experiences.",
        "Integrated Firebase for real-time data synchronization by leveraging Firestore and Realtime Database, resulting in faster updates for product listings and smoother user interactions.",
      ],
    },
  ]

  const education = [
    {
      degree: "Postgraduate in Full-Stack Software Development",
      institution: "Lambton College Sarnia, Ontario",
      period: "Expected graduation April 2025",
    },
    {
      degree: "Bachelor Honors in Computer Science",
      institution: "Herald College: Nepal | Affiliated with University of Wolverhampton, UK",
      period: "May 2018 – April 2021",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            index={index}
          />
        ))}
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Education
        </h2>
        {education.map((edu, index) => (
          <EducationItem
            key={index}
            degree={edu.degree}
            institution={edu.institution}
            period={edu.period}
            index={index}
          />
        ))}

        <h2 className="text-3xl font-bold mt-16 mb-10 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-glass p-6 rounded-xl hover:bg-white/10 transition-all">
            <h3 className="font-bold text-xl text-white mb-3">Programming Languages</h3>
            <p className="text-blue-100 text-lg">Python, Java, JavaScript, C#, HTML, CSS</p>
          </div>
          <div className="card-glass p-6 rounded-xl hover:bg-white/10 transition-all">
            <h3 className="font-bold text-xl text-white mb-3">Frameworks</h3>
            <p className="text-blue-100 text-lg">Django, Flask, Spring Boot</p>
          </div>
          <div className="card-glass p-6 rounded-xl hover:bg-white/10 transition-all">
            <h3 className="font-bold text-xl text-white mb-3">Cloud Computing</h3>
            <p className="text-blue-100 text-lg">Amazon Web Service (AWS)</p>
          </div>
          <div className="card-glass p-6 rounded-xl hover:bg-white/10 transition-all">
            <h3 className="font-bold text-xl text-white mb-3">DevOps</h3>
            <p className="text-blue-100 text-lg">Git, GitHub, Docker, CI/CD</p>
          </div>
          <div className="card-glass p-6 rounded-xl hover:bg-white/10 transition-all">
            <h3 className="font-bold text-xl text-white mb-3">Database</h3>
            <p className="text-blue-100 text-lg">MongoDB Atlas (NoSQL), MySQL (SQL), Firebase</p>
          </div>
          <div className="card-glass p-6 rounded-xl hover:bg-white/10 transition-all">
            <h3 className="font-bold text-xl text-white mb-3">Project Management</h3>
            <p className="text-blue-100 text-lg">Agile, Scrum</p>
          </div>
        </div>
      </div>
    </div>
  )
}

