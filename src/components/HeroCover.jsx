import React from 'react'
import Spline from '@splinetool/react-spline'

const HeroCover = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[420px] bg-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Trading Analytics, Reimagined
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700">
            A professional dashboard to explore your MEXC trade history, visualize performance, and uncover insights.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroCover
