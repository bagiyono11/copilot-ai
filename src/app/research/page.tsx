import Image from 'next/image'

export default function Research() {
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
          <label className="hamburger" htmlFor="mobile-toggle-research">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <input type="checkbox" id="mobile-toggle-research" className="mobile-toggle" />
        </div>
      </header>
      <nav className="mobile-nav">
        <a href="/product">Product</a>
        <a href="/token">Token</a>
        <a href="/docs">Docs</a>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero-light">
          <p className="hero-kicker-light">RESEARCH / BUILD NOTES</p>
          <h1>Trust is earned<br />in the calibration.</h1>
          <p className="hero-lede-light">
            The difficult part is not producing a signal. It is proving that the signal behaves sensibly across tokens, timeframes, and market conditions.
          </p>
        </section>

        {/* Core Thesis */}
        <section className="section-white">
          <div className="section-inner">
            <p className="section-kicker-light">CORE THESIS</p>
            <h2 className="section-title-light">In 24/7 markets, data freshness is an edge.</h2>
            <div className="two-col" style={{ marginTop: 32 }}>
              <div>
                <p className="section-desc-light">
                  Token prices can look precise while underlying data decays. A liquidity pool that was deep an hour ago can be thin now. Momentum that looked strong at midnight can reverse by morning.
                </p>
                <p className="section-desc-light">
                  CPAI treats data freshness as a critical input. Every signal carries a timestamp and a freshness score—because a stale signal is worse than no signal at all.
                </p>
              </div>
              <div>
                <p className="section-desc-light">
                  The engine is built on transparency and explainability. When data quality drops, CPAI says so. When confidence is low, CPAI says why. There are no black boxes—only inspectable factors.
                </p>
                <p className="section-desc-light">
                  This is not about being right all the time. It is about knowing when you might be wrong, and saying it clearly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="section-beige">
          <div className="section-inner">
            <div className="two-col">
              <div>
                <p className="section-kicker-light">DESIGN PRINCIPLES</p>
                <h2 className="section-title-light">Constraints we refuse to blur.</h2>
              </div>
              <div className="principles-grid">
                <div className="principle-card">
                  <span className="principle-num">01</span>
                  <h3>AI suggests, humans decide</h3>
                  <p>Models analyze market context and produce signals, but the final trading decision always belongs to the user.</p>
                </div>
                <div className="principle-card">
                  <span className="principle-num">02</span>
                  <h3>Every signal explains itself</h3>
                  <p>Scores require factor explanations. No signal is delivered without the reasoning behind it.</p>
                </div>
                <div className="principle-card">
                  <span className="principle-num">03</span>
                  <h3>Simplicity over features</h3>
                  <p>A clear BUY/HOLD/SELL/AVOID is more useful than a dashboard full of charts no one reads.</p>
                </div>
                <div className="principle-card">
                  <span className="principle-num">04</span>
                  <h3>Conservative by default</h3>
                  <p>When in doubt, CPAI says AVOID. False negatives are safer than false positives in trading.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calibration Loop */}
        <section className="section-dark">
          <div className="section-inner">
            <p className="section-kicker">CALIBRATION LOOP</p>
            <h2 className="section-title">Observe first. Enforce when proven.</h2>
            <p className="section-desc" style={{ marginBottom: 40 }}>
              CPAI follows a methodical process to ensure signals are reliable before they influence trading decisions.
            </p>
            <div className="calibration-flow">
              <div className="calibration-step">
                <div className="calibration-num">01</div>
                <h3>Collect</h3>
                <p>Gather historical data: price action, volume, liquidity depth, holder patterns, and market events.</p>
              </div>
              <div className="calibration-arrow">→</div>
              <div className="calibration-step">
                <div className="calibration-num">02</div>
                <h3>Backtest</h3>
                <p>Validate signals against actual outcomes. Measure accuracy, timing, and risk-adjusted returns.</p>
              </div>
              <div className="calibration-arrow">→</div>
              <div className="calibration-step">
                <div className="calibration-num">03</div>
                <h3>Review</h3>
                <p>Audit false positives, missed signals, and edge cases. Identify where the model fails.</p>
              </div>
              <div className="calibration-arrow">→</div>
              <div className="calibration-step">
                <div className="calibration-num">04</div>
                <h3>Promote</h3>
                <p>Move verified signals into production only after they prove reliable across market conditions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="section-white">
          <div className="section-inner">
            <div className="two-col">
              <div>
                <p className="section-kicker-light">ROADMAP</p>
                <h2 className="section-title-light">Built in the order trust demands.</h2>
              </div>
              <div className="roadmap-phases">
                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-num">PHASE 01</span>
                    <span className="phase-status in-progress">IN PROGRESS</span>
                  </div>
                  <h3>Read-only signals</h3>
                  <p>Collecting historical conditions and exposing transparent factors before any enforcement.</p>
                </div>
                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-num">PHASE 02</span>
                    <span className="phase-status next">NEXT</span>
                  </div>
                  <h3>Agent and protocol APIs</h3>
                  <p>Signal simulation and API-native verdicts for agent developers and trading bots.</p>
                </div>
                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-num">PHASE 03</span>
                    <span className="phase-status after">AFTER CALIBRATION</span>
                  </div>
                  <h3>Guarded execution</h3>
                  <p>Session-key enforcement after signals are proven against real market outcomes.</p>
                </div>
                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-num">PHASE 04</span>
                    <span className="phase-status usage">USAGE LED</span>
                  </div>
                  <h3>Community and tuning</h3>
                  <p>Open calibration data, community feedback, and signal tuning based on real usage.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Stack */}
        <section className="section-dark">
          <div className="section-inner" style={{ textAlign: 'center' }}>
            <p className="section-kicker">DEPLOYMENT STACK</p>
            <div className="stack-card">
              <div className="stack-icon">⚙️</div>
              <h3>One Next.js app. One API. One chain.</h3>
              <p>
                The entire CPAI stack is intentionally simple. A static frontend, a signal API, and direct integration with Robinhood Chain. Complexity expands only when the data demands it.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-orange cta-section">
          <div className="section-inner">
            <p className="section-kicker-orange">BUILD IN PUBLIC / 2026</p>
            <h2 className="section-title-orange">Follow the copilot as it becomes real.</h2>
            <p className="section-desc-orange">
              We&apos;re building in public. Every calibration step, every backtest result, every design decision is documented and shared.
            </p>
            <div className="cta-actions">
              <a className="btn-dark" href="/docs">
                Read the docs →
              </a>
              <a className="btn-light-outline" href="/product">
                Explore product →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-status">COPILOT STATUS: ONLINE</div>
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-brand-logo" href="/">
              <Image src="/logo.jpg" alt="CPAI" width={28} height={28} />
              <span>COPILOT AI</span>
            </a>
            <p>The first AI trading copilot on Robinhood Chain.</p>
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
