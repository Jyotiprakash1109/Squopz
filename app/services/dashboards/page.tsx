'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  BarChart3,
  Users,
  Sparkles,
  ArrowRight,
  GraduationCap,
  LineChart,
  ShoppingCart,
  Activity,
  Zap,
  TrendingUp,
} from 'lucide-react'

const dashboards = [
  {
    id: 'educational-institute',
    icon: GraduationCap,
    title: 'Educational Institute Dashboard',
    description:
      'Student enrollment analytics, academic performance tracking, attendance monitoring, and resource allocation for educational institutions.',
    image: '/projects/Academic Dashboard .jpg',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'cyan',
  },
  {
    id: 'crm',
    icon: Users,
    title: 'CRM Dashboard',
    description:
      'Customer relationship management with lead tracking, sales pipeline, customer lifecycle, and revenue forecasting tools.',
    image: '/projects/CRM dashboard.png',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'purple',
  },
  {
    id: 'predictive-analytics',
    icon: LineChart,
    title: 'Predictive Analytics Dashboard',
    description:
      'Advanced forecasting with machine learning models, trend predictions, anomaly detection, and prescriptive insights.',
    image: '/projects/Predective Dashboard.png',
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'emerald',
  },
  {
    id: 'sales-revenue',
    icon: TrendingUp,
    title: 'Sales & Revenue Dashboard',
    description:
      'Monitor sales performance, revenue streams, conversion funnels, and customer acquisition metrics in real-time.',
    image: '/projects/Sales&revenue dashboard-2.jpg.webp',
    gradient: 'from-orange-500 to-rose-500',
    glow: 'orange',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce Dashboard',
    description:
      'Real-time sales tracking, inventory management, customer behavior analysis, and order fulfillment metrics.',
    image: '/projects/Ecommerce Sales Dashboard.PNG',
    gradient: 'from-pink-500 to-red-500',
    glow: 'pink',
  },
  {
    id: 'health-analytics',
    icon: Activity,
    title: 'Health & Fitness Analytics',
    description:
      'Patient health metrics, wellness tracking, appointment scheduling, and healthcare provider performance analytics.',
    image: '/projects/health&Fitness DAshboard-1.jpeg',
    gradient: 'from-green-500 to-emerald-500',
    glow: 'green',
  },
  {
    id: 'iot-monitoring',
    icon: Zap,
    title: 'IoT & Real-Time Monitoring',
    description:
      'Live sensor data visualization, device health monitoring, alert management, and predictive maintenance scheduling.',
    image: '/projects/IOT dashboard-1.jpeg',
    gradient: 'from-yellow-500 to-orange-500',
    glow: 'yellow',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'General Analytics Dashboard',
    description:
      'Real-time performance metrics with KPI tracking, trend analysis, and data visualization for informed decision-making.',
    image: '/projects/BI dashboard.png',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'blue',
  },
]

export default function DashboardsPage() {
  const router = useRouter()

  return (
    <main className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* Animated Background Glows */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-20 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-1/2 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 p-8 md:p-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24 text-center"
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles className="text-cyan-400 w-5 h-5" />

              <span className="text-cyan-400 font-semibold text-sm tracking-widest">
                ADVANCED ANALYTICS
              </span>

              <Sparkles className="text-cyan-400 w-5 h-5" />
            </motion.div>

            <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Dashboards
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Transform your business data into{' '}
              <span className="text-cyan-400 font-semibold">
                intelligent insights
              </span>{' '}
              with our advanced AI-powered dashboards, KPI systems, and
              forecasting engines.
            </p>
          </motion.div>

          {/* Dashboards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 mb-24">
            {dashboards.map((dashboard, index) => {
              const Icon = dashboard.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group h-full"
                >
                  <div className="relative h-full">
                    {/* Glow Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${dashboard.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0`}
                    />

                    {/* Card Container */}
                    <div className="relative h-full flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/10 shadow-2xl group-hover:shadow-2xl group-hover:scale-105">
                      {/* Animated Border Glow */}
                      <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `conic-gradient(from 0deg, ${
                            dashboard.glow === 'cyan'
                              ? '#06b6d4'
                              : dashboard.glow === 'purple'
                              ? '#a855f7'
                              : dashboard.glow === 'emerald'
                              ? '#10b981'
                              : '#f97316'
                          }, transparent)`,
                        }}
                      />

                      {/* Image Container */}
                      <div className="relative overflow-hidden h-72 group/image">
                        <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-10" />

                        <motion.img
                          whileHover={{ scale: 1.1, rotate: 0.5 }}
                          transition={{ duration: 0.6 }}
                          src={dashboard.image}
                          alt={dashboard.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Icon Badge */}
                      <div className="absolute top-6 right-6 z-20">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${dashboard.gradient} flex items-center justify-center border border-white/20 backdrop-blur-xl shadow-2xl`}
                        >
                          <Icon className="text-white w-8 h-8" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative p-8 flex-1 flex flex-col">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 relative">
                          {dashboard.title}

                          <motion.div
                            className={`absolute -bottom-1 left-0 h-1 bg-gradient-to-r ${dashboard.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: 60 }}
                            transition={{
                              duration: 0.6,
                              delay: index * 0.15 + 0.3,
                            }}
                            viewport={{ once: true }}
                          />
                        </h3>

                        <p className="text-gray-300 leading-relaxed text-base flex-1 mt-4 mb-6">
                          {dashboard.description}
                        </p>

                        {/* CTA Link */}
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 font-semibold text-sm group/btn"
                          onClick={(e) => {
                            e.stopPropagation()
                            router.push(`/services/dashboards/${dashboard.id}`)
                          }}
                        >
                          <span
                            className={`bg-gradient-to-r ${dashboard.gradient} bg-clip-text text-transparent`}
                          >
                            Learn More
                          </span>

                          <ArrowRight
                            className={`w-4 h-4 bg-gradient-to-r ${dashboard.gradient} bg-clip-text text-transparent group-hover/btn:translate-x-1 transition-transform`}
                          />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/5 via-purple-400/5 to-pink-400/5 backdrop-blur-2xl p-12 md:p-20"
          >
            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              >
                Ready to Transform Your Data?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto"
              >
                Let our AI experts create a custom dashboard solution tailored
                to your business needs and goals.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-bold text-lg rounded-xl overflow-hidden group/cta"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <span className="relative flex items-center gap-2">
                  Schedule Consultation

                  <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}