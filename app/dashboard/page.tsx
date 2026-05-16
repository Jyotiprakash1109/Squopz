import Sidebar from '@/components/dashboard/Sidebar'
import Topbar from '@/components/dashboard/Topbar'
import StatsCards from '@/components/dashboard/StatsCards'
import AnalyticsChart from '@/components/dashboard/AnalyticsChart'
import AIInsights from '@/components/dashboard/AIInsights'
import ActivityFeed from '@/components/dashboard/ActivityFeed'

export default function DashboardPage() {

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <Sidebar />

      <div className="ml-[260px] p-10">

        <Topbar />

        <StatsCards />

        <div className="grid lg:grid-cols-3 gap-8 mb-8">

          <div className="lg:col-span-2">
            <AnalyticsChart />
          </div>

          <AIInsights />

        </div>

        <ActivityFeed />

      </div>
    </main>
  )
}