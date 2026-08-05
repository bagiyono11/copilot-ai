'use client'

import { useState } from 'react'

// PLACEHOLDER - Replace these when launching
const CONTRACT_ADDRESS = '' // e.g. '0x1234...'
const DEXSCREENER_URL = '' // e.g. 'https://dexscreener.com/robinhood/0x1234...'

export default function ContractBar() {
  const [copied, setCopied] = useState(false)
  const isReady = CONTRACT_ADDRESS && DEXSCREENER_URL

  const handleCopy = async () => {
    if (!CONTRACT_ADDRESS) return
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = CONTRACT_ADDRESS
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <div className="contract-bar">
      <div className="contract-label">CONTRACT ADDRESS</div>
      <div className="contract-address-row">
        <div className="contract-address">
          {isReady ? CONTRACT_ADDRESS : '0x........................................'}
        </div>
        <button 
          className={`contract-copy ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          disabled={!isReady}
        >
          {copied ? 'COPIED ✓' : 'COPY'}
        </button>
        <a 
          className={`contract-trade ${!isReady ? 'disabled' : ''}`}
          href={isReady ? DEXSCREENER_URL : undefined}
          target={isReady ? '_blank' : undefined}
          rel={isReady ? 'noopener noreferrer' : undefined}
          onClick={(e) => !isReady && e.preventDefault()}
        >
          TRADE ↗
        </a>
      </div>
      {!isReady && (
        <div className="contract-status">COMING SOON</div>
      )}
    </div>
  )
}
