import { useRouter } from "next/router"
import events from "../data/events"
import Link from "next/link"
const impactColors = { green: "bg-green-100 text-green-800", yellow: "bg-yellow-100 text-yellow-800", red: "bg-red-100 text-red-800" }
const assetLabels = { sip: "SIP / Mutual Funds", fd: "Fixed Deposit", stocks: "Stocks / Equity", crypto: "Crypto", beginner: "Just Starting Out" }
export default function Impact() {
const router = useRouter()
const profileParam = router.query.profile || ""
const selected = profileParam ? profileParam.split(",") : []
return (
<main className="min-h-screen bg-white px-6 py-12 max-w-2xl mx-auto">
<div className="flex items-center justify-between mb-2">
<h1 className="text-2xl font-bold text-gray-900">Today Market Impact</h1>
<Link href="/profile" className="text-sm text-gray-500 underline">Change Profile</Link>
</div>
{selected.length > 0 && (<p className="text-sm text-gray-500 mb-10">Showing impact for: <span className="font-medium text-gray-700">{selected.map(s => assetLabels[s]).join(", ")}</span></p>)}
<div className="flex flex-col gap-6">
{events.map(event => (
<div key={event.id} className="border border-gray-200 rounded-2xl p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{event.category}</span>
<span className="text-xs text-gray-400">{event.date}</span>
</div>
<h2 className="text-lg font-semibold text-gray-900 mb-2">{event.headline}</h2>
<p className="text-sm text-gray-500 mb-5">{event.shortExplanation}</p>
<div className="flex flex-col gap-3">
{selected.map(assetId => {
const impact = event.impact[assetId]
if (!impact) return null
return (<div key={assetId} className={"rounded-xl px-4 py-3 " + impactColors[impact.level]}><p className="text-xs font-semibold uppercase tracking-wide mb-1">{assetLabels[assetId]}</p><p className="text-sm">{impact.explanation}</p></div>)
})}
</div>
<a href={event.sourceURL} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-xs text-gray-400 underline">Read source</a>
</div>
))}
</div>
</main>
)
}
