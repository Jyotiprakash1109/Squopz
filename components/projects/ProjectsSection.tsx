'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'AI Dashboard System',

    category: 'Analytics',

    description:
      'Advanced AI analytics dashboard with KPI forecasting and business intelligence.',

    technologies: [
      'Next.js',
      'Python',
      'FastAPI',
      'OpenAI',
    ],

    image: '/projects/dashboard1.jpg',

    caseStudy:
      '/projects/dashboard-case-study.pdf',

    demo:
      'https://squopz.com',
  },

  {
    title: 'AI Chatbot Platform',

    category: 'Chatbot',

    description:
      'LLM-powered chatbot platform for customer support and workflow automation.',

    technologies: [
      'LangChain',
      'OpenAI',
      'Firebase',
      'React',
    ],

    image: '/projects/chatbot1.jpg',

    caseStudy:
      '/projects/chatbot-case-study.pdf',

    demo:
      'https://squopz.com',
  },
]

export default function ProjectsSection() {

  return (

    <section className="relative py-32 px-6 bg-[#050816]">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-bold mb-6">

            <span className="gradient-text">
              Featured Projects
            </span>

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">

            Real-world AI systems,
            dashboards,
            automation platforms,
            and intelligent applications.

          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <ProjectCard
              key={index}
              {...project}
            />

          ))}

        </div>

      </div>

    </section>

  )
}