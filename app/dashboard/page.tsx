'use client'

import { useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '@/lib/firebase'

import Sidebar from '@/components/dashboard/Sidebar'
import Topbar from '@/components/dashboard/Topbar'
import StatsCards from '@/components/dashboard/StatsCards'
import AnalyticsChart from '@/components/dashboard/AnalyticsChart'
import AIInsights from '@/components/dashboard/AIInsights'
import ActivityFeed from '@/components/dashboard/ActivityFeed'
import LeadsTable from '@/components/dashboard/LeadsTable'

export default function DashboardPage() {

  const router = useRouter()

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {

        if (!user) {

          router.push('/login')

        }

      }
    )

    return () => unsubscribe()

  }, [router])

  return (

    <main className="min-h-screen bg-[#050816] text-white">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="ml-[260px] p-10">

        {/* Topbar */}

        <Topbar />

        {/* Stats Cards */}

        <StatsCards />

        {/* Charts + AI Insights */}

        <div className="grid lg:grid-cols-3 gap-8 mb-8">

          <div className="lg:col-span-2">

            <AnalyticsChart />

          </div>

          <AIInsights />

        </div>

        {/* Activity Feed */}

        <ActivityFeed />

        <div className="mt-10">

          < LeadsTable />

        </div>

      </div>

    </main>

  )
}