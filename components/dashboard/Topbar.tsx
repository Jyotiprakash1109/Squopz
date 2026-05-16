'use client'

export default function Topbar() {

  return (
    <div className="flex items-center justify-between mb-10">

      <div>

        <h1 className="text-4xl font-bold text-white">
          AI Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Welcome back to Squopz Intelligence
        </p>

      </div>

      <div className="w-12 h-12 rounded-full bg-cyan-400" />

    </div>
  )
}