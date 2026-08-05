import Image from 'next/image'

export default function Home() {
  return (
    <main className="cpai-home">
      {/* Header */}
      <header className="cpai-header">
        <a className="cpai-brand" href="/">
          <Image src="/logo.svg" alt="CPAI" width={27} height={27} />
          <span>COPILOT AI</span>
        </a>
        <nav className="cpai-nav">
          <a href="/product">Product</a>
          <a href="/token">Token</a>
          <a href="/docs">Docs</a>
        </nav>
        <div className="header-actions">
          <a href="https://x.com/CopilotAI_RH" target="_blank" rel="noreferrer">
            X
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="cpai-hero">
        <div className="hero-copy">
          <p className="hero-kicker">AI TRADING COPILOT FOR ROBINHOOD CHAIN</p>
          <h1>Trade smarter.<br/>Your copilot <em>is here.</em></h1>
          <p className="hero-lede">
            CPAI analyzes tokens, suggests optimal entries, and manages risk—so you don&apos;t have to trade alone.
          </p>
          <div className="button-row">
            <a className="button-primary" href="https://x.com/CopilotAI_RH" target="_blank" rel="noreferrer">
              Follow on X
            </a>
          </div>
        </div>

        {/* Terminal Widget */}
        <div className="hero-terminal">
          <div className="terminal-top">
            <span>PRE-TRADE / LIVE ANALYSIS</span>
            <span><i></i> COPILOT ONLINE</span>
          </div>
          <div className="terminal-asset">
            <div>
              <span>TOKEN</span>
              <strong>COPILOT <small>/ WETH</small></strong>
            </div>
            <div>
              <span>STATUS</span>
              <strong>ACTIVE</strong>
            </div>
          </div>
          <div className="signal-row">
            <div className="signal-dial">
              <span>SIGNAL</span>
              <strong>BUY</strong>
            </div>
            <div className="signal-verdict">
              <span>CONFIDENCE</span>
              <strong>HIGH</strong>
              <p>Strong momentum detected. Entry recommended.</p>
            </div>
          </div>
        </div>

        <div className="hero-ticker" aria-hidden="true">
          <span>24 / 7 COPILOT</span>
          <span>ANALYZE • SUGGEST • MANAGE</span>
          <span>ROBINHOOD CHAIN</span>
        </div>
      </section>

      {/* Section 01: The Problem */}
      <section className="statement-section">
        <div className="statement-copy">
          <p className="statement-index">01 / THE PROBLEM</p>
          <h2>Trading on Robinhood Chain is complex.<br/><em>You&apos;re on your own.</em></h2>
          <p>No analysis. No risk management. No guidance. Every day, traders lose money because they have no copilot.</p>
        </div>
      </section>

      {/* Section 02: Three Signals */}
      <section className="signal-section" id="signals">
        <div className="section-heading">
          <p className="micro-label">02 / THREE SIGNALS. ONE DECISION.</p>
          <h2>Intelligence, assembled<br/>in real time.</h2>
          <p>CPAI turns fragmented market data into one clear action: buy, hold, or sell.</p>
        </div>
        <div className="signal-list">
          <article>
            <span>01</span>
            <h3>Token Analysis</h3>
            <p>AI-powered analysis of token fundamentals, liquidity, and momentum before you buy.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Entry Suggestions</h3>
            <p>Optimal entry points identified by analyzing price action, volume, and market structure.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Risk Management</h3>
            <p>Automatic risk assessment with stop-loss suggestions and position sizing guidance.</p>
          </article>
        </div>
      </section>

      {/* Section 03: Verdict System */}
      <section className="verdict-section">
        <div className="verdict-intro">
          <p className="micro-label">THE SIGNAL SYSTEM</p>
          <h2>Readable in a second.<br/>Defensible under scrutiny.</h2>
        </div>
        <div className="verdict-grid">
          <article className="verdict-card safe">
            <div><span>BUY</span></div>
            <h3>BUY</h3>
            <p>Strong fundamentals. Good entry point. Low risk.</p>
          </article>
          <article className="verdict-card wide">
            <div><span>HOLD</span></div>
            <h3>HOLD</h3>
            <p>Mixed signals. Wait for confirmation.</p>
          </article>
          <article className="verdict-card stale">
            <div><span>SELL</span></div>
            <h3>SELL</h3>
            <p>Deteriorating conditions. Consider exit.</p>
          </article>
          <article className="verdict-card halt">
            <div><span>AVOID</span></div>
            <h3>AVOID</h3>
            <p>High risk. Do not enter.</p>
          </article>
        </div>
      </section>

      {/* Section 04: AI Features */}
      <section className="ai-section">
        <div className="ai-heading">
          <p className="micro-label">03 / AI WHERE IT MATTERS</p>
          <h2>The market has context.<br/><em>Static rules don&apos;t.</em></h2>
          <p>AI finds and structures the information that static analysis cannot see.</p>
        </div>
        <div className="ai-grid">
          <article>
            <span>01</span>
            <div>
              <h3>Momentum Scanner</h3>
              <p>Detects emerging momentum before it becomes obvious to the crowd.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Liquidity Analyzer</h3>
              <p>Evaluates real executable depth, not just headline TVL numbers.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Risk Scorer</h3>
              <p>Scores risk based on volatility, liquidity, and market structure.</p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <h3>Entry Optimizer</h3>
              <p>Identifies optimal entry points using price action and volume analysis.</p>
            </div>
          </article>
          <article>
            <span>05</span>
            <div>
              <h3>Position Manager</h3>
              <p>Suggests position sizes and stop-loss levels based on risk tolerance.</p>
            </div>
          </article>
          <article>
            <span>06</span>
            <div>
              <h3>Market Context</h3>
              <p>Understands broader market conditions and their impact on individual tokens.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Section 05: Token */}
      <section className="token-section">
        <div className="section-heading">
          <p className="micro-label">04 / THE TOKEN</p>
          <h2>$CPAI</h2>
          <p>The first AI trading copilot on Robinhood Chain.</p>
        </div>
        <div className="token-grid">
          <div className="token-card">
            <span>Name</span>
            <strong>Copilot AI</strong>
          </div>
          <div className="token-card">
            <span>Symbol</span>
            <strong>CPAI</strong>
          </div>
          <div className="token-card">
            <span>Chain</span>
            <strong>Robinhood Chain</strong>
          </div>
          <div className="token-card">
            <span>DEX</span>
            <strong>Uniswap V2</strong>
          </div>
          <div className="token-card">
            <span>Tax</span>
            <strong>3% buy/sell</strong>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bottom-cta">
        <p className="micro-label">LAUNCH / 2026</p>
        <h2>Trade smarter with your copilot.</h2>
        <div className="button-row">
          <a className="button-primary button-light" href="https://x.com/CopilotAI_RH" target="_blank" rel="noreferrer">
            Follow on X
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="cpai-footer">
        <div className="footer-signal">
          <span className="signal-dot"></span> COPILOT STATUS: ONLINE
        </div>
        <div className="footer-main">
          <div>
            <a className="cpai-brand footer-brand" href="/">
              <Image src="/logo.svg" alt="CPAI" width={27} height={27} />
              <span>COPILOT AI</span>
            </a>
            <p>The first AI trading copilot on Robinhood Chain.</p>
          </div>
          <div className="footer-columns">
            <div>
              <span>Explore</span>
              <a href="/product">Product</a>
              <a href="/token">Token</a>
              <a href="/docs">Docs</a>
            </div>
            <div>
              <span>Connect</span>
              <a href="https://x.com/CopilotAI_RH" target="_blank" rel="noreferrer">X</a>
              <a href="mailto:support@copilotai.site">Email</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Copilot AI</span>
          <span>ROBINHOOD CHAIN</span>
          <span>TRADE SMARTER. YOUR COPILOT IS HERE.</span>
        </div>
      </footer>
    </main>
  )
}
