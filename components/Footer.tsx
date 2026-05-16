'use client'

import { motion } from 'framer-motion'

import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-14">

          {/* Branding */}
          <div>
            <h2 className="text-3xl font-bold gradient-text mb-5">
              Squopz
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Building AI-powered automation,
              analytics, and intelligent systems
              for the next generation of businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-cyan-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>AI Automation</li>
              <li>Analytics Dashboards</li>
              <li>AI Chatbots</li>
              <li>Real Estate AI</li>
              <li>Business Intelligence</li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Let’s Build Together
            </h3>

            <p className="text-gray-400 mb-6">
              Start transforming your business with AI-powered systems.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
            >
              Book a Free Consultation
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Squopz. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5">

            <motion.a
              whileHover={{ y: -4 }}
              href="#"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition"
            >
              <FaLinkedinIn />
            </motion.a>

            <motion.a
              whileHover={{ y: -4 }}
              href="#"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition"
            >
              <FaTwitter />
            </motion.a>

            <motion.a
              whileHover={{ y: -4 }}
              href="#"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              whileHover={{ y: -4 }}
              href="#"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition"
            >
              <FaGithub />
            </motion.a>

          </div>
        </div>
      </div>
    </footer>
  )
}