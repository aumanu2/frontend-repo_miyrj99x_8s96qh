import React from 'react'

// Simple grid heatmap for daily PnL cells (mocked data)
const generateDays = (n = 60) => {
  const arr = []
  for (let i = 0; i < n; i++) {
    const val = Math.round((Math.random() - 0.5) * 200)
    arr.push({ id: i, value: val, trades: Math.floor(Math.random() * 6) })
  }
  return arr
}

const DailyPnLHeatmap = () => {
  const days = React.useMemo(() => generateDays(84), [])

  const colorFor = (v) => {
    if (v > 0) return 'bg-[#2ecc71]/80'
    if (v < 0) return 'bg-[#ff4d4f]/80'
    return 'bg-[#bfbfbf]/70'
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-700">Daily PnL</h3>
        <p className="text-xs text-gray-500">Mock data</p>
      </div>
      <div className="grid grid-cols-14 gap-1">
        {days.map((d) => (
          <div key={d.id} className="group relative">
            <div
              className={`h-6 w-6 rounded ${colorFor(d.value)} shadow-sm`}
              title={`PnL: ${d.value} | Trades: ${d.trades}`}
            />
            <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
              {d.value > 0 ? '+' : ''}{d.value} • {d.trades} trades
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DailyPnLHeatmap
