import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Insight Hub',
  description: 'AI Insight Hub is an innovative subscription-based platform that uses AI to analyze web3 data for small businesses. It provides real-time market insights, competitive analysis, and trend forecasting specifically tailored to the needs of SMBs in the web3 space.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">AI Insight Hub</h1>
      <p className="mt-4 text-lg">AI Insight Hub is an innovative subscription-based platform that uses AI to analyze web3 data for small businesses. It provides real-time market insights, competitive analysis, and trend forecasting specifically tailored to the needs of SMBs in the web3 space.</p>
    </main>
  )
}
