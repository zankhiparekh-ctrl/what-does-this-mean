import { useState } from 'react'
import { useRouter } from 'next/router'

const assets = [
  { id: 'sip', label: 'SIP / Mutual Funds', description: 'Monthly investments in mutual funds' },
  { id: 'fd', label: 'Fixed Deposit', description: 'Money locked in bank FDs' },
  { id: 'stocks', label: 'Stocks / Equity', description: 'Direct shares on NSE or BSE' },
  { id: 'crypto', label: 'Crypto', description: 'Bitcoin, Ethereum, or other crypto' },
  { id: 'beginner', label: 'Just Starting Out', description: 'I don\'t hold anything yet' },
]

export default function Profile() {
  const [selected, setSelected] = useState([])
  const router = useRouter()

  function toggleAsset(id) {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    )
  }

  function handleContinue() {
    router.push({
      pathname: '/impact',
      query: { profile: selected.join(',') },
    })
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        What does your money look like?
      </h1>
      <p className="text-gray-500 mb-10">
        Select everything that applies. We'll show you what today's market events mean for each.
      </p>

      <div className="flex flex-col gap-4 mb-10">
        {assets.map(asset => (
          <button
            key={asset.id}
            onClick={() => toggleAsset(asset.id)}
            className={`w-full text-left px-6 py-5 rounded-2xl border-2 transition ${
              selected.includes(asset.id)
                ? 'border-gray-900 bg-gray-50'
                : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{asset.label}</p>
                <p className="text-sm text-gray-500 mt-1">{asset.description}</p>
              </div>
              {selected.includes(asset.id) && (
                <span className="text-gray-900 text-xl">✓</span>
              )}
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={handleContinue}
        disabled={selected.length === 0}
        className={`w-full py-4 rounded-full font-medium text-base transition ${
          selected.length > 0
            ? 'bg-gray-900 text-white hover:bg-gray-700'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        Show My Impact →
      </button>
    </main>
  )
}