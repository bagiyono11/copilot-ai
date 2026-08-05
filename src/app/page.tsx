import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* ===== HEADER ===== */}
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
          <a className="header-social" href="https://x.com/CopilotAI_RH" target="_blank" rel="noreferrer" aria-label="CPAI on X">
            𝕏
          </a>
          <a className="btn-header" href="https://x.com/CopilotAI_RH" target="_blank" rel="noreferrer">
            Follow ↗
          </a>
        </div>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section className="hero">
          <p className="hero-kicker">AI TRADING COPILOT FOR ROBINHOOD CHAIN</p>
          <h1>
            Trade smarter.<br />
            Your copilot <em>is here.</em>
          </h1>
          <p className="hero-lede">
            CPAI analyzes tokens, suggests optimal entries, and manages risk—so you don&apos;t have to trade alone on Robinhood Chain.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="/product">
              Explore Product →
            </a>
            <a className="btn-secondary" href="#signals">
              Explore the engine ↓
            </a>
          </div>

          {/* Terminal Widget */}
          <div className="terminal-widget">
            <div className="terminal-header">
              <span>PRE-TRADE / LIVE ANALYSIS</span>
              <span className="terminal-status">COPILOT ONLINE</span>
            </div>
            <div className="terminal-asset">
              <div>
                <span>TOKEN</span>
                <strong>CPAI<small> / WETH</small></strong>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span>STATUS</span>
                <strong style={{ color: 'var(--accent)' }}>ACTIVE</strong>
              </div>
            </div>
            <div className="terminal-signal">
              <div className="signal-box">
                <span>SIGNAL</span>
                <div className="signal-value">BUY</div>
              </div>
              <div className="signal-box">
                <span>CONFIDENCE</span>
                <div className="signal-confidence">HIGH</div>
                <div className="signal-desc">Strong momentum detected. Entry recommended.</div>
              </div>
            </div>
          </div>

          {/* Ticker Bar */}
          <div className="ticker-bar">
            <span>24 / 7 COPILOT</span>
            <span>ANALYZE • SUGGEST • MANAGE</span>
            <span>ROBINHOOD CHAIN</span>
          </div>
        </section>

        {/* ===== SECTION 01: THE PROBLEM ===== */}
        <section className="section-dark">
          <div className="section-inner two-col">
            <div>
              <p className="section-kicker">01 / THE PROBLEM</p>
              <h2 className="section-title">
                Trading on Robinhood Chain is complex.<br />
                <em>You&apos;re on your own.</em>
              </h2>
              <p className="section-desc">
                No analysis. No risk management. No guidance. Every day, traders lose money because they have no copilot.
              </p>
            </div>
            <div>
              {/* Architecture Stack */}
              <div className="arch-flow">
                <div className="arch-step">
                  <span>OBSERVE</span>
                  <strong>Market Signals</strong>
                  <small>continuous</small>
                </div>
                <div className="arch-arrow">→</div>
                <div className="arch-step">
                  <span>ANALYZE</span>
                  <strong>AI Engine</strong>
                  <small>real-time</small>
                </div>
                <div className="arch-arrow">→</div>
                <div className="arch-step">
                  <span>ACT</span>
                  <strong>Trade Signal</strong>
                  <small>instant</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 02: THREE SIGNALS ===== */}
        <section className="section-light" id="signals">
          <div className="section-inner">
            <p className="section-kicker">02 / THREE SIGNALS. ONE DECISION.</p>
            <h2 className="section-title">Intelligence, assembled<br />in real time.</h2>
            <p className="section-desc">
              CPAI turns fragmented market data into one clear action: buy, hold, or sell.
            </p>
            <div className="signal-cards">
              <div className="signal-card">
                <span className="signal-card-num">01</span>
                <div>
                  <h3>Token Analysis</h3>
                  <p>AI-powered analysis of token fundamentals, liquidity, and momentum before you buy.</p>
                </div>
              </div>
              <div className="signal-card">
                <span className="signal-card-num">02</span>
                <div>
                  <h3>Entry Suggestions</h3>
                  <p>Optimal entry points identified by analyzing price action, volume, and market structure.</p>
                </div>
              </div>
              <div className="signal-card">
                <span className="signal-card-num">03</span>
                <div>
                  <h3>Risk Management</h3>
                  <p>Automatic risk assessment with stop-loss suggestions and position sizing guidance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 03: VERDICT SYSTEM ===== */}
        <section className="section-dark">
          <div className="section-inner">
            <p className="section-kicker">THE SIGNAL SYSTEM</p>
            <h2 className="section-title">Readable in a second.<br />Defensible under scrutiny.</h2>
            <p className="section-desc">
              One vocabulary across every surface. Humans and agents receive identical signal semantics.
            </p>
            <div className="verdict-cards">
              <div className="verdict-card buy">
                <div className="verdict-label">0–24</div>
                <h3>BUY</h3>
                <p>Strong fundamentals. Good entry point. Low risk.</p>
              </div>
              <div className="verdict-card hold">
                <div className="verdict-label">25–49</div>
                <h3>HOLD</h3>
                <p>Mixed signals. Wait for confirmation.</p>
              </div>
              <div className="verdict-card sell">
                <div className="verdict-label">50–74</div>
                <h3>SELL</h3>
                <p>Deteriorating conditions. Consider exit.</p>
              </div>
              <div className="verdict-card avoid">
                <div className="verdict-label">75–100</div>
                <h3>AVOID</h3>
                <p>High risk. Do not enter.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 04: AI FEATURES ===== */}
        <section className="section-light">
          <div className="section-inner">
            <div className="two-col">
              <div>
                <p className="section-kicker">03 / AI WHERE IT MATTERS</p>
                <h2 className="section-title">The market has context.<br /><em>Static rules don&apos;t.</em></h2>
              </div>
              <div>
                <p className="section-desc">
                  AI finds and structures the information that static analysis cannot see. Every signal remains deterministic, auditable, and reproducible.
                </p>
              </div>
            </div>
            <div className="ai-grid">
              <div className="ai-card">
                <div className="ai-card-num">01</div>
                <h3>Momentum Scanner</h3>
                <p>Detects emerging momentum before it becomes obvious to the crowd.</p>
              </div>
              <div className="ai-card">
                <div className="ai-card-num">02</div>
                <h3>Liquidity Analyzer</h3>
                <p>Evaluates real executable depth, not just headline TVL numbers.</p>
              </div>
              <div className="ai-card">
                <div className="ai-card-num">03</div>
                <h3>Risk Scorer</h3>
                <p>Scores risk based on volatility, liquidity, and market structure.</p>
              </div>
              <div className="ai-card">
                <div className="ai-card-num">04</div>
                <h3>Entry Optimizer</h3>
                <p>Identifies optimal entry points using price action and volume analysis.</p>
              </div>
              <div className="ai-card">
                <div className="ai-card-num">05</div>
                <h3>Position Manager</h3>
                <p>Suggests position sizes and stop-loss levels based on risk tolerance.</p>
              </div>
              <div className="ai-card">
                <div className="ai-card-num">06</div>
                <h3>Market Context</h3>
                <p>Understands broader market conditions and their impact on individual tokens.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 05: DELIVERY ===== */}
        <section className="section-dark">
          <div className="section-inner">
            <p className="section-kicker">04 / ONE ENGINE, FOUR SURFACES</p>
            <h2 className="section-title">Protection wherever<br />execution begins.</h2>
            <div className="delivery-cards">
              <div className="delivery-card">
                <div className="delivery-card-icon">📊</div>
                <h3>Dashboard</h3>
                <p>Clear signals, factors, and market context for retail traders.</p>
                <a href="/product">For humans →</a>
              </div>
              <div className="delivery-card">
                <div className="delivery-card-icon">📱</div>
                <h3>Mobile Alerts</h3>
                <p>Signal alerts, market reports, and instant notifications for active traders.</p>
                <a href="/docs">See delivery →</a>
              </div>
              <div className="delivery-card">
                <div className="delivery-card-icon">⚡</div>
                <h3>API</h3>
                <p>Native signal query for autonomous agents and trading bots.</p>
                <a href="/product">For agents →</a>
              </div>
              <div className="delivery-card">
                <div className="delivery-card-icon">🛡️</div>
                <h3>Guard</h3>
                <p>Trades that breach policy revert automatically.</p>
                <a href="/product">See enforcement →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 06: ROADMAP ===== */}
        <section className="section-light">
          <div className="section-inner">
            <p className="section-kicker">05 / BUILDING IN THE OPEN</p>
            <h2 className="section-title">AI observes.<br />Policy decides.<br /><em>The copilot acts.</em></h2>
            <div className="roadmap-grid">
              <div className="roadmap-card">
                <div className="roadmap-phase">NOW</div>
                <h3>Read-only signals</h3>
                <p>Collecting historical conditions and exposing transparent factors before enforcement.</p>
              </div>
              <div className="roadmap-card">
                <div className="roadmap-phase">NEXT</div>
                <h3>Agent dry runs</h3>
                <p>Signal simulation and API-native verdicts for agent developers.</p>
              </div>
              <div className="roadmap-card">
                <div className="roadmap-phase">LATER</div>
                <h3>Guarded execution</h3>
                <p>Session-key enforcement after signals are proven against real outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 07: TOKEN ===== */}
        <section className="section-dark">
          <div className="section-inner" style={{ textAlign: 'center' }}>
            <p className="section-kicker">06 / THE TOKEN</p>
            <h2 className="section-title">$CPAI</h2>
            <p className="section-desc" style={{ margin: '0 auto 32px' }}>
              The first AI trading copilot on Robinhood Chain.
            </p>
            <div className="token-grid">
              <div className="token-card" style={{ borderColor: 'var(--border-dark)' }}>
                <span>Name</span>
                <strong>Copilot AI</strong>
              </div>
              <div className="token-card" style={{ borderColor: 'var(--border-dark)' }}>
                <span>Symbol</span>
                <strong>CPAI</strong>
              </div>
              <div className="token-card" style={{ borderColor: 'var(--border-dark)' }}>
                <span>Chain</span>
                <strong>Robinhood</strong>
              </div>
              <div className="token-card" style={{ borderColor: 'var(--border-dark)' }}>
                <span>DEX</span>
                <strong>Uniswap V2</strong>
              </div>
              <div className="token-card" style={{ borderColor: 'var(--border-dark)' }}>
                <span>Supply</span>
                <strong>100T</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="section-accent cta-section">
          <div className="section-inner">
            <p className="section-kicker" style={{ color: 'rgba(0,0,0,0.6)' }}>LAUNCH / 2026</p>
            <h2 className="section-title">Trade smarter with your copilot.</h2>
            <p className="section-desc" style={{ margin: '0 auto', color: 'rgba(0,0,0,0.7)' }}>
              We&apos;re opening the read-only signals first while the engine collects the history needed for responsible calibration.
            </p>
            <div className="cta-actions">
              <a className="btn-accent" href="/token">
                View Token →
              </a>
              <a className="btn-text" href="/docs">
                Read the docs →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer">
        <div className="footer-status">COPILOT STATUS: ONLINE</div>
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-brand-logo" href="/">
              <Image src="/logo.jpg" alt="CPAI" width={28} height={28} />
              <span>COPILOT AI</span>
            </a>
            <p>The first AI trading copilot on Robinhood Chain. Trade smarter, not harder.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Explore</h4>
              <a href="/product">Product</a>
              <a href="/token">Token</a>
              <a href="/docs">Docs</a>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <a href="https://x.com/CopilotAI_RH" target="_blank" rel="noreferrer">X</a>
              <a href="mailto:support@copilotai.site">Email</a>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <a href="/docs">Docs</a>
              <a href="#roadmap">Roadmap</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Copilot AI</span>
          <span>ROBINHOOD CHAIN</span>
          <span>TRADE SMARTER. YOUR COPILOT IS HERE.</span>
        </div>
      </footer>
    </>
  )
}
