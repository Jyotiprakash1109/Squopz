'use client'

import { motion } from 'framer-motion'

import {
    MapPin,
    Phone,
    Mail,
  } from 'lucide-react'
  
  import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from 'react-icons/fa'

export default function Contact() {

  return (

    <section
      id="contact"
      className="relative py-32 px-6 bg-[#050816] overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP CONTACT CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >

          {/* Office */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="flex justify-center mb-6">

              <div className="p-5 rounded-full bg-cyan-400/10">

                <MapPin className="text-cyan-400" size={42} />

              </div>

            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              OUR OFFICE
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Address Coming Soon
            </p>

          </div>

          {/* Phone */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="flex justify-center mb-6">

              <div className="p-5 rounded-full bg-cyan-400/10">

                <Phone className="text-cyan-400" size={42} />

              </div>

            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              PHONE NUMBER
            </h3>

            <p className="text-gray-400 leading-relaxed">
              +91 8596063058
            </p>

          </div>

          {/* Email */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="flex justify-center mb-6">

              <div className="p-5 rounded-full bg-cyan-400/10">

                <Mail className="text-cyan-400" size={42} />

              </div>

            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              EMAIL
            </h3>

            <p className="text-gray-400 leading-relaxed">
              hello@squopz.com
            </p>

          </div>

        </motion.div>

        {/* MAIN CONTACT BOX */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(0,255,255,0.08)]"
        >

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT SIDE FORM */}
            <div className="p-12 md:p-16">

              <form className="space-y-10">

                {/* Email */}
                <div>

                  <label className="block text-white text-sm uppercase tracking-widest mb-4">

                    Email

                  </label>

                  <input
                    type="email"
                    placeholder="Enter a valid email address"
                    className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-gray-500 outline-none focus:border-cyan-400 transition-all duration-300"
                  />

                </div>

                {/* Name */}
                <div>

                  <label className="block text-white text-sm uppercase tracking-widest mb-4">

                    Name

                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-gray-500 outline-none focus:border-cyan-400 transition-all duration-300"
                  />

                </div>

                {/* Message */}
                <div>

                  <label className="block text-white text-sm uppercase tracking-widest mb-4">

                    Message

                  </label>

                  <textarea
                    rows={5}
                    placeholder="Enter your message"
                    className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-gray-500 outline-none resize-none focus:border-cyan-400 transition-all duration-300"
                  />

                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="w-full py-5 rounded-full bg-cyan-400 text-black font-bold tracking-[4px] hover:bg-cyan-300 transition-all duration-300 mt-8"
                >

                  SUBMIT

                </motion.button>

              </form>

            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="p-12 md:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">

              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">

                <span className="gradient-text">
                  Get in touch
                </span>

              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">

                We build futuristic AI-powered systems for businesses,
                automation workflows, analytics platforms, and scalable
                intelligent solutions.

              </p>

              <p className="text-gray-400 leading-relaxed mb-12">

                Whether you're looking for AI automation, custom dashboards,
                internal tools, or advanced business intelligence systems —
                Squopz can help you transform operations with modern AI.

              </p>

              {/* SOCIAL ICONS */}
              <div className="flex gap-6">

                <a
                  href="#"
                  className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >

                  <FaFacebookF size={22} />

                </a>

                <a
                  href="#"
                  className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >

                  <FaTwitter size={22} />

                </a>

                <a
                  href="#"
                  className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >

                  <FaInstagram size={22} />

                </a>

                <a
                  href="#"
                  className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >

                  <FaLinkedinIn size={22} />

                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}