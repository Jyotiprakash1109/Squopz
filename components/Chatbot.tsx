'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { FaRobot } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5'

export default function Chatbot() {

  const [open, setOpen] = useState(false)

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hi 👋 Welcome to Squopz AI. How can we help you today?',
    },
  ])

  const [input, setInput] = useState('')

  const sendMessage = () => {

    if (!input.trim()) return

    const newMessages = [
      ...messages,
      {
        role: 'user',
        text: input,
      },
      {
        role: 'assistant',
        text: 'Our AI team will contact you shortly.',
      },
    ]

    setMessages(newMessages)
    setInput('')
  }

  return (
    <>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-2xl shadow-cyan-500/30"
      >
        <FaRobot size={28} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-6 z-50 w-[380px] h-[550px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-cyan-500/10"
          >

            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-5">

              <h2 className="text-black font-bold text-xl">
                Squopz AI Assistant
              </h2>

              <p className="text-black/70 text-sm">
                AI-powered support & automation
              </p>

            </div>

            {/* Messages */}
            <div className="p-5 h-[390px] overflow-y-auto space-y-4 bg-[#050816]">

              {messages.map((msg, index) => (

                <div
                  key={index}
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'ml-auto bg-cyan-400 text-black'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  {msg.text}
                </div>

              ))}

            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-[#0b1020] flex items-center gap-3">

              <input
                type="text"
                placeholder="Ask anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white outline-none focus:border-cyan-400"
              />

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={sendMessage}
                className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center"
              >
                <IoSend />
              </motion.button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  )
}