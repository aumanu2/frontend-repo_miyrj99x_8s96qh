import React from 'react'

// Lightweight mock charts without external chart libs
// Cumulative PnL area-like chart (SVG) and Daily Returns bar series (div-based)

const genSeries = (n = 30) =>
  new Array(n).fill(null).map((_, i) => ({
    day: `D${i + 1}`,
    pnl: Math.round((Math.random() - 0.4) * 2000),
    returns: Math.round((Math.random() - 0.5) * 10),
  }))

const data = genSeries(28)

const MiniArea = ({ points }) => {
  const width = 600
  const height = 180
  const pad = 8
  const xs = points.map((_, i) => (i / (points.length - 1)) * (width - pad * 2) + pad)
  const ys = points.map((v) => v)
  const minY = Math.min(...ys)
  const maxY = Math.max(...ys)
  const scaleY = (v) => {
    if (maxY === minY) return height / 2
    const t = (v - minY) / (maxY - minY)
    return height - pad - t * (height - pad * 2)
  }
  const pathD = xs.map((x, i) => `${i === 0 ? 'M' : 'L'} ${x} ${scaleY(ys[i])}`).join(' ')
  const areaD = `${pathD} L ${xs[xs.length - 1]} ${height - pad} L ${xs[0]} ${height - pad} Z`

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-48">
      <defs>
        <linearGradient id="pnlGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2ecc71" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#2ecc71" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={width} height={height} fill="white" />
      <path d={areaD} fill="url(#pnlGradient)" stroke="none" />
      <path d={pathD} fill="none" stroke="#2ecc71" strokeWidth="2" />
    </svg>
  )
}

const ChartsPanel = () => {
  const pnlSeries = data.reduce((acc, d, i) => {
    const prev = acc[i - 1] ?? 0
    acc.push(prev + d.pnl)
    return acc
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Cumulative PnL</h3>
        <MiniArea points={pnlSeries} />
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Daily Returns</h3>
        <div className="h-48 flex items-end gap-1">
          {data.map((d, idx) => {
            const h = Math.min(100, Math.abs(d.returns) * 8)
            const positive = d.returns >= 0
            return (
              <div key={idx} className="flex flex-col items-center justify-end" style={{ width: `${100 / data.length}%` }}>
                <div
                  className={`w-full rounded-t ${positive ? 'bg-blue-500' : 'bg-rose-500'}`}
                  style={{ height: `${h}px` }}
                  title={`${d.day}: ${d.returns}%`}
                />
              </div>
            )
          })}
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-gray-500">
          <span>Start</span>
          <span>End</span>
        </div>
      </div>
    </div>
  )
}

export default ChartsPanel
