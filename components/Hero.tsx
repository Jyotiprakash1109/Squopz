'use client'

import { motion } from 'framer-motion'
import NeuralSphere from './NeuralSphere'

export default function Hero() {

  return (

    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050816]">

      {/* 3D Background Sphere */}
      <div className="absolute inset-0">
        <NeuralSphere />
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">

          <span className="gradient-text">
            Squopz
          </span>

        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">

          AI Automation, Analytics Dashboards, Intelligent Business Systems,
          and Future-Ready Solutions for Modern Companies.

        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">

          {/* Primary Button */}
          <button className="px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30">

            Get Started

          </button>

          {/* Secondary Button */}
          <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white font-semibold text-lg hover:bg-white/10 transition duration-300">

            View Solutions

          </button>

        </div>

      </motion.div>

    </section>
  )
}