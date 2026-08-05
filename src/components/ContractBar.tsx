'use client'

import { useState } from 'react'

const CONTRACT_ADDRESS = '0xE687195B9Db00c64B5b2256c849b0F704dEF8E17'
const UNISWAP_URL = 'https://app.uniswap.org/explore/tokens/robinhood/0xe687195b9db00c64b5b2256c849b0f704def8e17'

export default function ContractBar() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
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
          {CONTRACT_ADDRESS}
        </div>
        <button 
          className={`contract-copy ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
        >
          {copied ? 'COPIED ✓' : 'COPY'}
        </button>
        <a 
          className="contract-trade"
          href={UNISWAP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          BUY ON UNISWAP ↗
        </a>
      </div>
    </div>
  )
}
