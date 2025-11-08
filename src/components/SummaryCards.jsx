import React from 'react'
import { ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react'

const SummaryCards = () => {
  const items = [
    {
      label: 'Portfolio Value',
      value: '$128,420',
      delta: '+2.3%',
      positive: true,
      icon: Wallet,
    },
    {
      label: 'Realized PnL (24h)',
      value: '+$1,240',
      delta: '+4.1%',
      positive: true,
      icon: ArrowUpRight,
    },
    {
      label: 'Unrealized PnL',
      value: '-$320',
      delta: '-0.8%',
      positive: false,
      icon: ArrowDownRight,
    },
    {
      label: '24h Change',
      value: '+$920',
      delta: '+1.2%',
      positive: true,
      icon: ArrowUpRight,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map(({ label, value, delta, positive, icon: Icon }) => (
        <div
          key={label}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
            </div>
            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
              positive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
            }`}>
              <Icon size={20} />
            </div>
          </div>
          <div className="mt-4">
            <span
              className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${
                positive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
              }`}
            >
              {delta}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SummaryCards
