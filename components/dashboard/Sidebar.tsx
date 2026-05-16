'use client'

import {
  LayoutDashboard,
  Bot,
  BarChart3,
  Users,
  Settings,
} from 'lucide-react'

export default function Sidebar() {

  const items = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
    },
    {
      icon: Bot,
      label: 'AI Automation',
    },
    {
      icon: BarChart3,
      label: 'Analytics',
    },
    {
      icon: Users,
      label: 'Clients',
    },
    {
      icon: Settings,
      label: 'Settings',
    },
  ]

  return (
    <aside className="fixed left-0 top-0 w-[260px] h-screen bg-white/5 border-r border-white/10 backdrop-blur-xl p-6">

      <h1 className="text-3xl font-bold gradient-text mb-14">
        Squopz
      </h1>

      <nav className="space-y-4">

        {items.map((item, index) => {

          const Icon = item.icon

          return (
            <button
              key={index}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-gray-300 hover:bg-cyan-400 hover:text-black transition-all"
            >
              <Icon size={22} />

              <span>{item.label}</span>
            </button>
          )
        })}

      </nav>

    </aside>
  )
}