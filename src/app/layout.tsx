import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Insight Hub',
  description: 'AI Insight Hub is an innovative subscription-based platform that uses AI to analyze web3 data for small businesses. It provides real-time market insights, competitive analysis, and trend forecasting specifically tailored to the needs of SMBs in the web3 space.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
