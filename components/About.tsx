'use client'

import { motion } from 'framer-motion'
import {
  BrainCircuit,
  Sparkles,
  ShieldCheck,
  Rocket,
} from 'lucide-react'

const features = [
  {
    icon: BrainCircuit,
    title: 'AI-Driven Innovation',
    description:
      'We build intelligent automation systems that transform how businesses operate and scale.',
  },
  {
    icon: Sparkles,
    title: 'Modern User Experience',
    description:
      'Premium futuristic interfaces designed with performance, elegance, and usability in mind.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Systems',
    description:
      'Secure, scalable, and production-ready solutions tailored for modern organizations.',
  },
  {
    icon: Rocket,
    title: 'Fast Business Growth',
    description:
      'Helping companies automate operations, improve efficiency, and unlock growth using AI.',
  },
]

const stats = [
  {
    number: '10+',
    label: 'AI Solutions',
  },
  {
    number: '99%',
    label: 'Automation Accuracy',
  },
  {
    number: '24/7',
    label: 'AI Operations',
  },
  {
    number: '5x',
    label: 'Business Efficiency',
  },
]

export default function About() {

  return (

    <section
      id="about"
      className="relative py-32 px-6 bg-[#050816] overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-5xl md:text-6xl font-bold mb-8">

            <span className="gradient-text">
              About Squopz
            </span>

          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">

            Squopz is building the next generation of AI-powered business
            automation systems, analytics platforms, and intelligent digital
            experiences for modern enterprises.

          </p>

        </motion.div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-28">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-4xl font-bold mb-8 text-white">

              Transforming Businesses
              <br />

              <span className="gradient-text">
                Through AI Innovation
              </span>

            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">

              Our mission is to help businesses automate operations,
              optimize workflows, unlock intelligent insights,
              and scale faster using advanced AI systems.

            </p>

            <p className="text-gray-400 text-lg leading-relaxed">

              From AI dashboards and workflow automation to predictive
              analytics and intelligent assistants — Squopz delivers
              future-ready digital infrastructure for modern companies.

            </p>

          </motion.div>

          {/* Right Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >

            {stats.map((stat, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl text-center"
              >

                <h4 className="text-5xl font-bold gradient-text mb-4">
                  {stat.number}
                </h4>

                <p className="text-gray-400 text-lg">
                  {stat.label}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {

            const Icon = feature.icon

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
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-500/0 group-hover:from-cyan-400/10 group-hover:to-purple-500/10 transition-all duration-500" />

                {/* Icon */}
                <div className="relative z-10 mb-6">

                  <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">

                    <Icon className="text-cyan-400" size={30} />

                  </div>

                </div>

                {/* Title */}
                <h4 className="relative z-10 text-2xl font-semibold mb-4 text-white">

                  {feature.title}

                </h4>

                {/* Description */}
                <p className="relative z-10 text-gray-400 leading-relaxed">

                  {feature.description}

                </p>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}