import Image from 'next/image'

export default function Docs() {
  return (
    <>
      {/* Header */}
      <header className="site-header">
        <a className="site-brand" href="/">
          <Image src="/logo.jpg" alt="CPAI" width={28} height={28} />
          <span>COPILOT AI</span>
        </a>
        <nav className="site-nav">
          <a href="/product">Product</a>
          <a href="/token">Token</a>
          <a href="/docs">Docs</a>
        </nav>
        <div className="header-actions">
          <a className="header-social" href="https://x.com/CopilotAI_RH" target="_blank" rel="noreferrer">
            𝕏
          </a>
        </div>
