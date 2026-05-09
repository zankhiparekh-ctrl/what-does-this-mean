import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 flex flex-col items-center justify-center text-center">
      <p className="text-sm font-medium text-green-600 mb-4 tracking-widest uppercase">
        Financial News — Simplified
      </p>
      <h1 className="text-4xl font-bold text-gray-900 max-w-2xl leading-tight mb-6">
        The market moved. Here's what it means for your money.
      </h1>
      <p className="text-lg text-gray-500 max-w-xl mb-10">
        Select what you hold — SIP, FD, stocks, or crypto — and we'll tell you
        exactly how today's market events affect you. In plain English.
      </p>
      <Link
        href="/profile"
        className="bg-gray-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-700 transition"
      >
        Build My Profile →
      </Link>
    </main>
  )
}