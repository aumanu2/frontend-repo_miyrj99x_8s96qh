import React from 'react'
import HeroCover from './components/HeroCover'
import SummaryCards from './components/SummaryCards'
import DailyPnLHeatmap from './components/DailyPnLHeatmap'
import ChartsPanel from './components/ChartsPanel'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <HeroCover />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <SummaryCards />
        <ChartsPanel />
        <DailyPnLHeatmap />

        <section className="text-center text-xs text-gray-500">
          <p>
            Mock data shown. Backend integration with MEXC and secure API key storage will be added in the next step.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
