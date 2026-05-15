'use client'

import { motion } from 'framer-motion'
import NeuralSphere from './NeuralSphere'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050816] text-white">

      {/* 3D Background Sphere */}
      <div className="absolute inset-0">
        <NeuralSphere />
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 blur-3xl" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          <span className="gradient-text">
            Squopz
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Forging Intelligent Business Systems.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <button className="px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300">
            Explore Platform
          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 backdrop-blur-md hover:bg-white/10 transition duration-300">
            Book Consultation
          </button>

        </div>

      </motion.div>
    </section>
  )
}