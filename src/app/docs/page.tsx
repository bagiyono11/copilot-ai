import Image from 'next/image'

export default function Docs() {
  return (
    <>
      {/* Header */}
      <header className="docs-header">
        <a className="docs-brand" href="/">
          <Image src="/logo.jpg" alt="CPAI" width={24} height={24} />
          <span>Copilot AI</span>
          <span className="docs-label">Docs</span>
        </a>
        <div className="docs-search">
          <input type="text" placeholder="Search documentation..." />
        </div>
        <a className="docs-github" href="https://github.com/bagiyono11/copilot-ai" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </header>

      <div className="docs-layout">
        {/* Left Sidebar */}
        <aside className="docs-sidebar">
          <div className="sidebar-section">
            <h4>Overview</h4>
            <a href="/docs" className="active">Introduction</a>
            <a href="/docs/core-utility">Core Utility</a>
            <a href="/docs/channels">Delivery Channels</a>
          </div>
          <div className="sidebar-section">
            <h4>AI Layer</h4>
            <a href="/docs/ai-layer">Overview</a>
            <a href="/docs/ai-layer/momentum-scanner">1. Momentum Scanner</a>
            <a href="/docs/ai-layer/liquidity-analyzer">2. Liquidity Analyzer</a>
            <a href="/docs/ai-layer/risk-scorer">3. Risk Scorer</a>
            <a href="/docs/ai-layer/entry-optimizer">4. Entry Optimizer</a>
            <a href="/docs/ai-layer/position-manager">5. Position Manager</a>
            <a href="/docs/ai-layer/market-context">6. Market Context</a>
          </div>
          <div className="sidebar-section">
            <h4>Utilities</h4>
            <a href="/docs/utilities/trader">Trader-facing</a>
            <a href="/docs/utilities/agent">Agent-facing</a>
            <a href="/docs/utilities/protocol">Protocol-facing</a>
          </div>
          <div className="sidebar-section">
            <h4>Platform</h4>
            <a href="/docs/architecture">Architecture</a>
            <a href="/docs/api">API Reference</a>
            <a href="/docs/integration">Integration</a>
          </div>
          <div className="sidebar-section">
            <h4>Project</h4>
            <a href="/docs/token">Token Note</a>
            <a href="/docs/roadmap">Roadmap</a>
            <a href="/docs/references">References</a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="docs-content">
          {/* Breadcrumb */}
          <div className="docs-breadcrumb">
            <span>Overview</span>
            <span>›</span>
            <span className="active">Introduction</span>
          </div>

          {/* Title */}
          <h1>Introduction</h1>
          <p className="docs-summary">
            An AI-powered trading copilot for Robinhood Chain, helping both humans and autonomous agents make smarter trading decisions with real-time signals and risk analysis.
          </p>

          {/* Content */}
          <div className="docs-body">
            {/* The Gap */}
            <section id="the-gap">
              <h2>The gap</h2>
              <p>Trading on Robinhood Chain is complex. You&apos;re on your own.</p>
              <p>That gap is where retail traders get destroyed and where autonomous agents fail silently. Without proper analysis, risk management, or guidance, every day traders lose money because they have no copilot.</p>
              <div className="docs-callout">
                <p className="callout-title">CPAI is the missing copilot.</p>
                <p>The market never sleeps, but you do. CPAI watches the hours you can&apos;t.</p>
              </div>
            </section>

            {/* What it scores */}
            <section id="what-it-scores">
              <h2>What it scores</h2>
              <p>CPAI continuously scores the best trading action for a given token <em>right now</em>, combining:</p>
              <ul>
                <li>Token fundamentals and contract analysis</li>
                <li>Market momentum and volume patterns</li>
                <li>Liquidity depth relative to order size</li>
                <li>Risk assessment and volatility metrics</li>
                <li>An AI layer that reads market context and catalysts</li>
              </ul>
            </section>

            {/* The verdict */}
            <section id="the-verdict">
              <h2>The verdict</h2>
              <p>The output is a clear signal plus a confidence score, delivered through multiple channels.</p>
              <div className="docs-badges">
                <span className="badge buy">BUY</span>
                <span className="badge hold">HOLD</span>
                <span className="badge sell">SELL</span>
                <span className="badge avoid">AVOID</span>
              </div>
              <p>A signal is not advice — it is data-driven analysis. The final decision is always yours.</p>
            </section>

            {/* At a glance */}
            <section id="at-a-glance">
              <h2>At a glance</h2>
              <table className="docs-table">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Copilot AI</td>
                  </tr>
                  <tr>
                    <td>Ticker</td>
                    <td><code>$CPAI</code></td>
                  </tr>
                  <tr>
                    <td>Domain</td>
                    <td><a href="https://copilotai.site">copilotai.site</a></td>
                  </tr>
                  <tr>
                    <td>Chain</td>
                    <td>Robinhood Chain</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>

          {/* Next Page */}
          <nav className="docs-nav">
            <span></span>
            <a href="/docs/core-utility" className="next">Core Utility →</a>
          </nav>
        </main>

        {/* Right Sidebar */}
        <aside className="docs-toc">
          <h4>On This Page</h4>
          <ul>
            <li><a href="#the-gap">The gap</a></li>
            <li><a href="#what-it-scores">What it scores</a></li>
            <li><a href="#the-verdict">The verdict</a></li>
            <li><a href="#at-a-glance">At a glance</a></li>
          </ul>
        </aside>
      </div>

      {/* Footer */}
      <footer className="docs-footer">
        <span>Copilot AI ($CPAI) — the first AI trading copilot on Robinhood Chain.</span>
        <nav>
          <a href="https://copilotai.site">copilotai.site</a>
          <a href="https://x.com/CopilotAI_RH" target="_blank" rel="noreferrer">X</a>
          <a href="https://github.com/bagiyono11/copilot-ai" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </footer>
    </>
  )
}
