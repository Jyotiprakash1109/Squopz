'use client'

import { motion } from 'framer-motion'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import EducationalDashboard from '@/components/dashboards/EducationalDashboard'
import CRMDashboard from '@/components/dashboards/CRMDashboard'
import PredictiveAnalyticsDashboard from '@/components/dashboards/PredictiveAnalyticsDashboard'
import SalesRevenueDashboard from '@/components/dashboards/SalesRevenueDashboard'
import EcommerceDashboard from '@/components/dashboards/EcommerceDashboard'
import HealthAnalyticsDashboard from '@/components/dashboards/HealthAnalyticsDashboard'
import IoTMonitoringDashboard from '@/components/dashboards/IoTMonitoringDashboard'
import AnalyticsDashboard from '@/components/dashboards/AnalyticsDashboard'

const dashboardComponents = {
  'educational-institute': EducationalDashboard,
  crm: CRMDashboard,
  'predictive-analytics': PredictiveAnalyticsDashboard,
  'sales-revenue': SalesRevenueDashboard,
  ecommerce: EcommerceDashboard,
  'health-analytics': HealthAnalyticsDashboard,
  'iot-monitoring': IoTMonitoringDashboard,
  analytics: AnalyticsDashboard,
}

const dashboardTitles = {
  'educational-institute': 'Educational Institute Dashboard',
  crm: 'CRM Dashboard',
  'predictive-analytics': 'Predictive Analytics Dashboard',
  'sales-revenue': 'Sales & Revenue Dashboard',
  ecommerce: 'E-Commerce Dashboard',
  'health-analytics': 'Health & Fitness Analytics',
  'iot-monitoring': 'IoT & Real-Time Monitoring',
  analytics: 'General Analytics Dashboard',
}

export default function DashboardPage() {
  const router = useRouter()
  const params = useParams()
  const id = params?.id as string

  const DashboardComponent = dashboardComponents[id as keyof typeof dashboardComponents]
  const title = dashboardTitles[id as keyof typeof dashboardTitles] || 'Dashboard'

  if (!DashboardComponent) {
    return (
      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Dashboard Not Found</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/services/dashboards')}
            className="px-6 py-2 bg-cyan-500 text-black font-semibold rounded-lg"
          >
            Back to Dashboards
          </motion.button>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* Animated Background Glows */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-20 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 p-8 md:p-16">
        <div className="max-w-7xl mx-auto">
          {/* Header with Back Button */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.back()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-semibold">Back</span>
            </motion.button>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              {title}
            </motion.h1>
          </motion.div>

          {/* Dashboard Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <DashboardComponent />
          </motion.div>
        </div>
      </div>
    </main>
  )
}
