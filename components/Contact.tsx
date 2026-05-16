'use client'

import { motion } from 'framer-motion'

import {
    MapPin,
    Phone,
    Mail,
    Calendar,
  } from 'lucide-react'
  
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from 'react-icons/fa'

import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default function Contact() {

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')

  const [project, setProject] = useState('')

  const submitLead = async () => {

    try {

      await addDoc(
        collection(db, 'leads'),
        {
          name,
          email,
          project,
          createdAt: new Date(),
          status: 'New Lead',
        }
      )

      alert('Inquiry submitted successfully')

      setName('')
      setEmail('')
      setProject('')

    } catch (error) {

      console.error(error)

      alert('Submission failed')

    }

  }

  return (

    <section
      id="contact"
      className="relative py-32 px-6 bg-[#050816] overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">

        {/* LEFT SIDE */}

        <div>

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-5">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold text-white leading-tight mb-8">
            Let’s Build
            <br />
            Something Amazing
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            We help businesses automate workflows,
            build AI systems, dashboards, and intelligent
            digital products.
          </p>

          {/* Contact Cards */}

          <div className="space-y-6">

            {/* Email */}

            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

              <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center">

                <Mail className="text-cyan-400" />

              </div>

              <div>

                <p className="text-gray-400 text-sm mb-1">
                  Email
                </p>

                <p className="text-white text-lg">
                  hello@squopz.com
                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

              <div className="w-14 h-14 rounded-2xl bg-purple-400/20 flex items-center justify-center">

                <Phone className="text-purple-400" />

              </div>

              <div>

                <p className="text-gray-400 text-sm mb-1">
                  Phone
                </p>

                <p className="text-white text-lg">
                  +91 8596063058
                </p>

              </div>

            </div>

            {/* Schedule */}

            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

              <div className="w-14 h-14 rounded-2xl bg-pink-400/20 flex items-center justify-center">

                <Calendar className="text-pink-400" />

              </div>

              <div>

                <p className="text-gray-400 text-sm mb-1">
                  Schedule Meeting
                </p>

                <p className="text-white text-lg">
                  Calendly Integration Soon
                </p>

              </div>

            </div>

          </div>

          {/* Social Icons */}

          <div className="flex gap-5 mt-12">

            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-400/20 transition cursor-pointer">

              <FaFacebookF className="text-white" />

            </div>

            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-400/20 transition cursor-pointer">

              <FaInstagram className="text-white" />

            </div>

            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-400/20 transition cursor-pointer">

              <FaLinkedinIn className="text-white" />

            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}

        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10">

          <h3 className="text-3xl font-bold text-white mb-10">
            Send Inquiry
          </h3>

          <div className="space-y-8">

            {/* Name */}

            <div>

              <label className="block text-gray-300 mb-3">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
              />

            </div>

            {/* Email */}

            <div>

              <label className="block text-gray-300 mb-3">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
              />

            </div>

            {/* Project */}

            <div>

              <label className="block text-gray-300 mb-3">
                Project Details
              </label>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none resize-none"
              />

            </div>

            {/* Submit Button */}

            <button
              onClick={submitLead}
              className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300"
            >
              Submit Inquiry
            </button>

          </div>

        </div>

      </div>

    </section>

  )
}