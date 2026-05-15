'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (

    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/30 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">

          <span className="gradient-text">
            Squopz
          </span>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">

          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#services" className="hover:text-white transition">
            Services
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

          <button className="px-5 py-2 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300">
            Book Demo
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >

          {isOpen ? <X size={28} /> : <Menu size={28} />}

        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (

        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">

          <div className="flex flex-col px-6 py-6 gap-6 text-gray-300">

            <a href="#" onClick={() => setIsOpen(false)}>
              Home
            </a>

            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>

            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>

            <button className="px-5 py-3 rounded-full bg-cyan-400 text-black font-semibold">
              Book Demo
            </button>

          </div>

        </div>

      )}

    </nav>
  )
}