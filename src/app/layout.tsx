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
    images: [{ url: 'https://copilotai.site/logo.jpg', width: 1024, height: 1024 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copilot AI — Trade smarter with your AI copilot.',
    description: 'The first AI trading copilot on Robinhood Chain.',
    images: ['https://copilotai.site/logo.jpg'],
  },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
