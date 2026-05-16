'use client'

const stats = [
  {
    title: 'Revenue',
    value: '$48,200',
  },
  {
    title: 'AI Automations',
    value: '128',
  },
  {
    title: 'Active Clients',
    value: '42',
  },
  {
    title: 'Conversion Rate',
    value: '89%',
  },
]

export default function StatsCards() {

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-10">

      {stats.map((stat, index) => (

        <div
          key={index}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
        >

          <p className="text-gray-400 mb-3">
            {stat.title}
          </p>

          <h2 className="text-3xl font-bold text-white">
            {stat.value}
          </h2>

        </div>

      ))}

    </div>
  )
}