export default function DashboardsPage() {

    return (
  
      <main className="min-h-screen bg-[#050816] text-white p-12">
  
        <div className="max-w-7xl mx-auto">
  
          <h1 className="
          text-6xl
          font-bold
          mb-6
          gradient-text
          ">
            AI Dashboards
          </h1>
  
          <p className="
          text-gray-400
          text-xl
          mb-16
          max-w-3xl
          ">
            Advanced analytics dashboards,
            KPI systems,
            forecasting engines,
            and AI-powered business intelligence platforms.
          </p>
  
          {/* Screenshots */}
  
          <div className="
          grid
          md:grid-cols-2
          gap-10
          ">
  
            <img
              src="/projects/Academic Dashboard .jpg"
              alt="Dashboard"
              className="
              rounded-3xl
              border
              border-white/10
              "
            />
  
            <img
              src="/projects/LIBRARY Dashboard.jpg"
              alt="Dashboard"
              className="
              rounded-3xl
              border
              border-white/10
              "
            />
  
          </div>
  
        </div>
  
      </main>
  
    )
  }