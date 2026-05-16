'use client'

const activities = [
  'New AI dashboard deployed',
  'Client automation completed',
  'Analytics report generated',
  'Lead scoring model updated',
]

export default function ActivityFeed() {

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

      <h2 className="text-2xl font-semibold text-white mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="border border-white/10 rounded-2xl p-4 text-gray-300"
          >
            {activity}
          </div>

        ))}

      </div>

    </div>
  )
}