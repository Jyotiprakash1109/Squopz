'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRobot, FaBrain, FaLanguage, FaChartLine, FaCheckCircle, FaCode } from 'react-icons/fa'
import { IoSend, IoSparkles } from 'react-icons/io5'

// Types for Simulated Chat
interface Message {
  id: number;
  role: 'assistant' | 'user';
  text: string;
}

export default function AIChatbotService() {
  // Demo Interaction State
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'assistant', text: 'Hi! I am the Squopz AI Agent. Ask me how I can scale your operations.' },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Automatic script simulation to act like a 'Live Interaction Video' if the user is idle
  useEffect(() => {
    const script = [
      { trigger: 3000, user: "Can you integrate with our CRM?", reply: "Absolutely! We build custom webhooks to sync instantly with HubSpot, Salesforce, or your proprietary database." },
      { trigger: 9000, user: "What languages do you support?", reply: "I can communicate natively in over 45 languages, automatically detecting customer preferences." }
    ]

    const timers = script.map((item) => {
      return setTimeout(() => {
        // User types
        setMessages(prev => [...prev, { id: Date.now(), role: 'user', text: item.user }])
        setIsTyping(true)
        
        // Assistant replies after delay
        setTimeout(() => {
          setIsTyping(false)
          setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', text: item.reply }])
        }, 1500)
      }, item.trigger)
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg: Message = { id: Date.now(), role: 'user', text: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, role: 'assistant', text: 'Thanks for trying out our demo! Our specialized AI engineers can customize this specific flow for your business workflow.' }
      ])
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative selection:bg-cyan-500 selection:text-black">
      
      {/* 3D Background Ambient Animation Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none animate-ping [animation-duration:8s]" />

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Pitch and Details */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            <IoSparkles className="text-cyan-400 animate-spin [animation-duration:3s]" />
            <span className="text-sm font-medium text-cyan-300 tracking-wide uppercase">Next-Gen Automation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Custom <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 bg-clip-text text-transparent">AI Chatbots</span> Built For Your Growth.
          </h1>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Transform customer experiences with hyper-intelligent, human-like AI agents. We engineer, train, and deploy custom LLM solutions tailored directly to your business datasets.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold rounded-xl shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 transition-all active:scale-95">
              Deploy Your Bot
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-medium rounded-xl transition-all">
              See Case Studies
            </button>
          </div>
        </motion.div>

        {/* Right Side: 3D Animated Live Simulation UI Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          {/* Neon Glow Box behind the mockup */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          
          {/* Outer Mock Frame */}
          <div className="relative border border-white/10 bg-black/40 backdrop-blur-3xl rounded-3xl overflow-hidden shadow-2xl h-[560px] flex flex-col">
            
            {/* Live Header Status */}
            <div className="bg-white/[0.02] border-b border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-400/20">
                  <FaRobot className="text-black text-lg animate-bounce [animation-duration:4s]" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-black rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">Squopz Core Agent</h3>
                  <p className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" /> Live Simulation
                  </p>
                </div>
              </div>
              <span className="text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-gray-400">Sandbox v2.4</span>
            </div>

            {/* Chat Messages Stream */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed tracking-wide shadow-md ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-medium rounded-tr-none'
                        : 'bg-white/5 border border-white/10 text-gray-100 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-black/20 flex items-center gap-3">
              <input
                type="text"
                placeholder="Type your own question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
              <button
                type="submit"
                className="w-11 h-11 rounded-xl bg-cyan-400 text-black flex items-center justify-center hover:bg-cyan-300 transition-colors active:scale-95 shadow-lg shadow-cyan-400/10"
              >
                <IoSend size={16} />
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* --- SERVICES & ARCHITECTURE DETAILS --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-white/5">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">Engineered Capabilities</h2>
          <p className="text-gray-400 max-w-xl mx-auto">We look beyond simple prompt wrappers. Our chatbots integrate advanced enterprise architecture patterns.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, borderColor: 'rgba(34,211,238,0.3)' }}
              className="p-8 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-xl mb-6">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- DEVELOPMENT PIPELINE / HOW WE BUILD --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10 border-t border-white/5">
        <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-3xl font-black">Ready to scale your business operations?</h2>
            <p className="text-gray-300 leading-relaxed">
              From RAG (Retrieval-Augmented Generation) infrastructure ingestion down to exact brand-voice calibration, we fine-tune everything setup for high throughput and military-grade security compliance.
            </p>
            <ul className="space-y-3">
              {['GDPR & SOC2 Ready Pipelines', 'Seamless API / Webhook Bridges', 'Real-time Vector Database Contextual Sync'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-200">
                  <FaCheckCircle className="text-cyan-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-auto bg-black/40 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs text-gray-400 border-b border-white/10 pb-3">
              <FaCode className="text-purple-400" />
              <span>SquopzDeploymentPipeline.yaml</span>
            </div>
            <pre className="text-xs text-cyan-300/90 font-mono leading-relaxed space-y-1">
              <div><span className="text-purple-400">pipeline:</span> AI-Agent-Ingest</div>
              <div>  <span className="text-purple-400">engine:</span> GPT-4o / Claude-3.5</div>
              <div>  <span className="text-purple-400">vector_db:</span> Pinecone / PgVector</div>
              <div>  <span className="text-purple-400">memory_layer:</span> Redis Semantic Cache</div>
              <div>  <span className="text-purple-400">status:</span> <span className="text-emerald-400 animate-pulse">Ready to Deploy</span></div>
            </pre>
          </div>
        </div>
      </section>

    </div>
  )
}

const features = [
  {
    icon: <FaBrain />,
    title: "RAG Knowledge Bases",
    description: "Connect your PDFs, internal wikis, and markdown libraries. The chatbot extracts exact contextual answers using Semantic Vector Embeddings."
  },
  {
    icon: <FaLanguage />,
    title: "Multilingual Intelligence",
    description: "Natively context-aware translation handling across 45+ languages. Flawless grammar and culturally native idiom alignments."
  },
  {
    icon: <FaChartLine />,
    title: "Conversion Tracking",
    description: "Engineered specifically to qualify leads, book calendar discovery meetings, and inject high-intent conversations directly into your CRM."
  }
]