'use client'

import { motion } from 'framer-motion'
import { ImagePlus } from 'lucide-react'

export default function HealthAnalyticsDashboard() {
  return (
    <div className="space-y-12">
      {/* Overview Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Dashboard Overview</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Add your dashboard description here. This section showcases the Health & Fitness Analytics Dashboard
          that you have built. Describe the patient management, appointment scheduling, and wellness tracking features.
        </p>
      </motion.div>

      {/* Gallery Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Dashboard Screenshots</h2>

        {/* Dashboard Images Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group cursor-pointer hover:border-green-400/50 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:from-white/15 group-hover:to-white/10 transition-all">
              <div className="text-center">
                <ImagePlus className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-400 text-sm">Dashboard Image 1</p>
                <p className="text-gray-500 text-xs mt-2">Add your screenshot here</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Patient Management</h3>
              <p className="text-gray-400 text-sm">
                Add description for this dashboard screenshot
              </p>
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group cursor-pointer hover:border-emerald-400/50 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:from-white/15 group-hover:to-white/10 transition-all">
              <div className="text-center">
                <ImagePlus className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-400 text-sm">Dashboard Image 2</p>
                <p className="text-gray-500 text-xs mt-2">Add your screenshot here</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Appointments & Scheduling</h3>
              <p className="text-gray-400 text-sm">
                Add description for this dashboard screenshot
              </p>
            </div>
          </motion.div>

          {/* Image 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group cursor-pointer hover:border-teal-400/50 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:from-white/15 group-hover:to-white/10 transition-all">
              <div className="text-center">
                <ImagePlus className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-400 text-sm">Dashboard Image 3</p>
                <p className="text-gray-500 text-xs mt-2">Add your screenshot here</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Health Metrics</h3>
              <p className="text-gray-400 text-sm">
                Add description for this dashboard screenshot
              </p>
            </div>
          </motion.div>

          {/* Image 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group cursor-pointer hover:border-lime-400/50 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:from-white/15 group-hover:to-white/10 transition-all">
              <div className="text-center">
                <ImagePlus className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-400 text-sm">Dashboard Image 4</p>
                <p className="text-gray-500 text-xs mt-2">Add your screenshot here</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Analytics & Reports</h3>
              <p className="text-gray-400 text-sm">
                Add description for this dashboard screenshot
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-2">Feature 1</h3>
              <p className="text-gray-400">Add description of feature</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-2">Feature 2</h3>
              <p className="text-gray-400">Add description of feature</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-2">Feature 3</h3>
              <p className="text-gray-400">Add description of feature</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-lime-400 mt-2 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-2">Feature 4</h3>
              <p className="text-gray-400">Add description of feature</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
