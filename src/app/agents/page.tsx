import Image from 'next/image'

export default function Agents() {
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
      </header>

      <main>
        {/* Hero */}
        <section className="hero-light">
          <p className="hero-kicker-light">FOR AUTONOMOUS AGENTS</p>
          <h1>Give your trading bot<br />a copilot it can trust.</h1>
          <p className="hero-lede-light">
            An agent can reason about a trade. CPAI gives it live market context—and gives the wallet a deterministic signal when reasoning is not enough.
          </p>
        </section>

        {/* Code + API */}
        <section className="section-white">
          <div className="section-inner">
            <div className="two-col">
              <div className="code-terminal">
                <div className="terminal-bar">
                  <span className="terminal-dots">● ● ●</span>
                  <span className="terminal-title">MCP / signal.evaluate</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-request">
                    <span className="terminal-label">REQUEST</span>
                    <pre>{`{
  "token": "CPAI",
  "pair": "CPAI/WETH",
  "action": "BUY",
  "notional_eth": 0.5,
  "wallet": "0x7451...495E"
}`}</pre>
                  </div>
                  <div className="terminal-response">
                    <span className="terminal-label">RESPONSE</span>
                    <pre>{`{
  "score": 18,
  "signal": "BUY",
  "confidence": "HIGH",
  "allowed": true,
  "factors": {
    "momentum": "strong",
    "liquidity": "deep",
    "risk": "low"
  }
}`}</pre>
                  </div>
                </div>
              </div>
              <div>
                <p className="section-kicker-light">NATIVE TO THE PLANNING LOOP</p>
                <h2 className="section-title-light">Ask before you sign.</h2>
                <p className="section-desc-light">
                  The API exposes the same factors humans see in the dashboard, shaped for tool use and deterministic follow-up.
                </p>
                <ul className="feature-list-light">
                  <li>Low-latency signal query</li>
                  <li>Signal-aware dry run</li>
                  <li>Structured factor explanations</li>
                  <li>Confidence scoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Guard Flow */}
        <section className="section-dark">
          <div className="section-inner">
            <div className="two-col">
              <div>
                <p className="section-kicker">THE LAST LINE OF DEFENSE</p>
                <h2 className="section-title">Warnings can be ignored.<br /><em>Signal policy cannot.</em></h2>
                <p className="section-desc">
                  CPAI evaluates a deterministic rule set at execution time. A trade outside policy never reaches the market.
                </p>
              </div>
              <div className="guard-flow">
                <div className="guard-step">
                  <div className="guard-icon">🤖</div>
                  <span>AGENT</span>
                  <strong>proposes trade</strong>
                </div>
                <div className="guard-arrow">→</div>
                <div className="guard-step">
                  <div className="guard-icon">📋</div>
                  <span>POLICY</span>
                  <strong>evaluates limits</strong>
                </div>
                <div className="guard-arrow">→</div>
                <div className="guard-step guard-revert">
                  <div className="guard-icon">🛡️</div>
                  <span>REVERT</span>
                  <strong>breach detected</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Compiler */}
        <section className="section-beige">
          <div className="section-inner">
            <div className="two-col">
              <div>
                <p className="section-kicker-light">SIGNAL POLICY</p>
                <h2 className="section-title-light">Write intent like a human.</h2>
                <div className="policy-example">
                  <p>&ldquo;Never buy a token with less than $10K liquidity. Cap order size at 2% of pool depth. Avoid tokens older than 24 hours without volume.&rdquo;</p>
                </div>
              </div>
              <div className="policy-pipeline">
                <div className="pipeline-step">
                  <span className="pipeline-icon">💬</span>
                  <div>
                    <span className="pipeline-label">NATURAL LANGUAGE</span>
                    <p>Human-readable trading rules</p>
                  </div>
                </div>
                <div className="pipeline-arrow">↓</div>
                <div className="pipeline-step">
                  <span className="pipeline-icon">{ }</span>
                  <div>
                    <span className="pipeline-label">VALIDATED POLICY</span>
                    <p>Schema-validated rule set</p>
                  </div>
                </div>
                <div className="pipeline-arrow">↓</div>
                <div className="pipeline-step">
                  <span className="pipeline-icon">🔒</span>
                  <div>
                    <span className="pipeline-label">DETERMINISTIC GUARD</span>
                    <p>Enforced at execution time</p>
                  </div>
                </div>
                <p className="pipeline-note">
                  The compiler proposes a rule. Validation and explicit approval happen before it can govern capital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-white">
          <div className="section-inner">
            <p className="section-kicker-light">FEATURES</p>
            <h2 className="section-title-light">Built for autonomous trading.</h2>
            <div className="feature-cards-light">
              <div className="feature-card-light">
                <span className="feature-icon">▶</span>
                <h3>Dry-run first</h3>
                <p>Simulate a proposed trade against signal and current market state without submitting a transaction.</p>
              </div>
              <div className="feature-card-light">
                <span className="feature-icon">{ }</span>
                <h3>Inspectable reasons</h3>
                <p>Every signal returns factors an agent can incorporate into its next plan instead of a generic error.</p>
              </div>
              <div className="feature-card-light">
                <span className="feature-icon">🛡️</span>
                <h3>Authority stays bounded</h3>
                <p>Risk limits sit alongside wallet permissions, keeping execution inside delegated intent.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-orange cta-section">
          <div className="section-inner">
            <p className="section-kicker-orange">EARLY ACCESS / 2026</p>
            <h2 className="section-title-orange">Let your agent move fast—<br />inside a boundary.</h2>
            <p className="section-desc-orange">
              We&apos;re opening the read-only signals first while the engine collects the history needed for responsible calibration.
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
      {/* Mobile Menu Overlay */}
      <div className="mobile-overlay">
        <div className="mobile-overlay-header">
          <span className="mobile-overlay-brand">COPILOT AI / MENU</span>
          <label className="mobile-overlay-close" htmlFor="mobile-menu-toggle">✕</label>
        </div>
        <nav className="mobile-overlay-nav">
          <a href="/">Home</a>
          <a href="/product">Product</a>
          <a href="/token">Token</a>
          <a href="/protocols">Protocols</a>
          <a href="/research">Research</a>
          <a href="/agents">Agents</a>
          <a href="/docs">Docs <span className="nav-arrow">↗</span></a>
          <a href="https://x.com/CopilotAI_RH" target="_blank" rel="noreferrer">X <span className="nav-arrow">↗</span></a>
        </nav>
        <a className="mobile-overlay-cta" href="/product">Try CPAI <span>→</span></a>
      </div>

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
