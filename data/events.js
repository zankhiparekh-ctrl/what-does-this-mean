const events = [
  {
    id: "rbi-rate-apr-2026",
    slug: "rbi-holds-repo-rate-april-2026",
    headline: "RBI Holds Repo Rate at 6.5%",
    category: "Policy",
    date: "April 9, 2026",
    shortExplanation:
      "The RBI decided to keep borrowing costs unchanged, signaling stability in the near term.",
    fullExplanation:
      "The Reserve Bank of India's Monetary Policy Committee voted to hold the repo rate at 6.5% for the fifth consecutive meeting. This signals that the RBI is comfortable with current inflation levels and wants to support growth without overheating the economy.",
    sourceURL: "https://rbi.org.in",
    impact: {
      sip: {
        level: "green",
        explanation:
          "Stable rates support equity markets. Your SIP continues to benefit from consistent market conditions.",
      },
      fd: {
        level: "yellow",
        explanation:
          "FD rates are unlikely to change significantly. Lock in current rates if you are considering a new FD.",
      },
      stocks: {
        level: "green",
        explanation:
          "Markets typically react positively to rate stability. Broad indices may see mild short-term gains.",
      },
      crypto: {
        level: "yellow",
        explanation:
          "RBI rate decisions have indirect impact on crypto. Global sentiment matters more here than domestic policy.",
      },
      beginner: {
        level: "green",
        explanation:
          "A stable economy is a good time to start investing. Conditions are generally favorable for new investors.",
      },
    },
  },
  {
    id: "sensex-record-2026",
    slug: "sensex-hits-record-high",
    headline: "Sensex Hits All-Time High of 82,000",
    category: "Markets",
    date: "April 15, 2026",
    shortExplanation:
      "Indian equity markets surged to a record high driven by strong FII inflows and positive global cues.",
    fullExplanation:
      "The BSE Sensex crossed 82,000 for the first time, driven by heavy foreign institutional investor buying across banking and IT sectors. Analysts attribute the rally to easing global inflation fears and strong Q4 earnings expectations from major Indian corporates.",
    sourceURL: "https://bseindia.com",
    impact: {
      sip: {
        level: "green",
        explanation:
          "Your mutual fund NAV is likely up today. Long-term SIP investors benefit from this momentum.",
      },
      fd: {
        level: "yellow",
        explanation:
          "Stock market highs do not directly affect your FD returns. Your rate stays fixed.",
      },
      stocks: {
        level: "green",
        explanation:
          "Your portfolio value has likely increased today. Consider reviewing if any position is now overweight.",
      },
      crypto: {
        level: "green",
        explanation:
          "Risk-on sentiment in equity markets often spills into crypto. Watch for short-term upward movement.",
      },
      beginner: {
        level: "yellow",
        explanation:
          "Markets at all-time highs can feel like a bad time to start. It is not — time in market beats timing the market.",
      },
    },
  },
  {
    id: "inflation-mar-2026",
    slug: "india-inflation-drops-march-2026",
    headline: "India Retail Inflation Drops to 4.2%",
    category: "Economy",
    date: "April 12, 2026",
    shortExplanation:
      "CPI inflation cooled to a 14-month low, raising hopes of a future rate cut by the RBI.",
    fullExplanation:
      "India's Consumer Price Index inflation fell to 4.2% in March 2026, the lowest in over a year, primarily driven by falling food prices. Economists now expect the RBI to consider a rate cut in the June policy meeting, which could boost both equity and debt markets.",
    sourceURL: "https://mospi.gov.in",
    impact: {
      sip: {
        level: "green",
        explanation:
          "Lower inflation and potential rate cuts are positive for equity mutual funds. Good news for your SIP.",
      },
      fd: {
        level: "red",
        explanation:
          "If the RBI cuts rates, FD interest rates will likely fall. Consider locking in current rates before that happens.",
      },
      stocks: {
        level: "green",
        explanation:
          "Lower inflation is broadly positive for corporate earnings. Expect markets to react favorably.",
      },
      crypto: {
        level: "yellow",
        explanation:
          "Inflation data has limited direct impact on crypto in India. Watch US Fed response for global crypto direction.",
      },
      beginner: {
        level: "green",
        explanation:
          "Lower inflation means your money loses value more slowly. A good environment to begin your investing journey.",
      },
    },
  },
]

export default events