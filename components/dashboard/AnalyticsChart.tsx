'use client'

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { month: 'Jan', value: 20 },
  { month: 'Feb', value: 40 },
  { month: 'Mar', value: 35 },
  { month: 'Apr', value: 60 },
  { month: 'May', value: 90 },
  { month: 'Jun', value: 120 },
]

export default function AnalyticsChart() {

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

      <h2 className="text-2xl font-semibold text-white mb-8">
        AI Growth Analytics
      </h2>

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis
              dataKey="month"
              stroke="#888"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#22D3EE"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}