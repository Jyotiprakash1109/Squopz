'use client'

import { motion } from 'framer-motion'
import {
  Bot,
  BarChart3,
  Building2,
  BrainCircuit,
  Workflow,
  Database,
} from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'AI Automation',
    description:
      'Automate repetitive business operations using intelligent AI workflows and automation systems.',
  },
  {
    icon: BarChart3,
    title: 'AI Dashboards',
    description:
      'Interactive analytics dashboards with real-time KPIs, forecasting, and business insights.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Chatbots',
    description:
      'Custom AI assistants for customer support, internal operations, and lead management.',
  },
  {
    icon: Building2,
    title: 'Real Estate AI',
    description:
      'Smart lead scoring, workspace prediction, CRM automation, and property analytics.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Automate approvals, reports, notifications, and business processes using AI-powered systems.',
  },
  {
    icon: Database,
    title: 'Analytics Systems',
    description:
      'Transform raw business data into intelligent decision-making systems and predictive models.',
  },
]

export default function Services() {
  return (

    <section
      id="services"
      className="relative py-32 px-6 bg-[#050816]"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-bold mb-6">

            <span className="gradient-text">
              Our Services
            </span>

          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AI-powered automation, analytics, and intelligent business systems
            designed for modern companies.
          </p>

        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-500 overflow-hidden"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-500/0 group-hover:from-cyan-400/10 group-hover:to-purple-500/10 transition-all duration-500" />

                {/* Icon */}
                <div className="relative z-10 mb-6">

                  <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">

                    <Icon className="text-cyan-400" size={32} />

                  </div>

                </div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-400 leading-relaxed">
                  {service.description}
                </p>

              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}