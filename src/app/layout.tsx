import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Copilot AI — The First AI Trading Copilot on Robinhood Chain',
  description: 'Your AI trading copilot on Robinhood Chain. Analyze tokens. Suggest entries. Manage risk.',
  openGraph: {
    title: 'Copilot AI — Trade smarter with your AI copilot.',
    description: 'The first AI trading copilot on Robinhood Chain.',
    url: 'https://copilotai.site',
    siteName: 'Copilot AI',
    images: [{ url: 'https://copilotai.site/og.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copilot AI — Trade smarter with your AI copilot.',
    description: 'The first AI trading copilot on Robinhood Chain.',
    images: ['https://copilotai.site/og.png'],
  },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
