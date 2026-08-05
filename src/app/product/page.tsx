import Image from 'next/image'

export default function Product() {
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
          <a href="/protocols">Protocols</a>
          <a href="/research">Research</a>
          <a href="/agents">Agents</a>
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
          <p className="hero-kicker-light">PRODUCT</p>
          <h1>One signal before<br />capital moves.</h1>
          <p className="hero-lede-light">
            CPAI evaluates market context around a trade—not just token price—then returns a clear signal, confidence score, and actionable factors.
          </p>
        </section>

        {/* Process */}
        <section className="section-white">
          <div className="section-inner">
            <div className="process-flow">
              <div className="process-card">
                <div className="process-icon">👁️</div>
                <div className="process-num">01</div>
                <h3>Observe</h3>
                <p>Gathers market data—session state, oracle data, liquidity, momentum, and news—into a continuous pipeline.</p>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-card">
                <div className="process-icon">📊</div>
                <div className="process-num">02</div>
                <h3>Score</h3>
                <p>Normalizes signals, evaluates against policy rules, and produces a confidence score with inspectable factors.</p>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-card">
                <div className="process-icon">⚡</div>
                <div className="process-num">03</div>
                <h3>Act</h3>
                <p>Delivers clear signals to humans via dashboard or agents via API. Enforcement through guard is optional.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Signals */}
        <section className="section-beige">
          <div className="section-inner">
            <div className="two-col">
              <div>
                <p className="section-kicker-light">SIGNALS</p>
                <h2 className="section-title-light">Three independent ways a trade fails.</h2>
              </div>
              <div>
                <p className="section-desc-light" style={{ marginBottom: 24 }}>
                  Each signal is evaluated independently. A weakness in any dimension can change the verdict.
                </p>
                <div className="signal-list-light">
                  <div className="signal-item-light">
                    <span className="signal-num-light">01</span>
                    <div>
                      <h4>Token Fundamentals</h4>
                      <p>Evaluates token contract, liquidity depth, holder distribution, and project credibility.</p>
                    </div>
                  </div>
                  <div className="signal-item-light">
                    <span className="signal-num-light">02</span>
                    <div>
                      <h4>Market Momentum</h4>
                      <p>Analyzes price action, volume patterns, and momentum indicators.</p>
                    </div>
                  </div>
                  <div className="signal-item-light">
                    <span className="signal-num-light">03</span>
                    <div>
                      <h4>Risk Assessment</h4>
                      <p>Scores risk based on volatility, liquidity, and market structure.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verdicts */}
        <section className="section-dark">
          <div className="section-inner">
            <p className="section-kicker">VERDICTS</p>
            <h2 className="section-title">One vocabulary across every surface.</h2>
            <p className="section-desc" style={{ marginBottom: 32 }}>
              Humans and agents receive identical signal semantics. Policies govern allowed actions.
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

        {/* Delivery */}
        <section className="section-white">
          <div className="section-inner">
            <div className="two-col">
              <div>
                <p className="section-kicker-light">DELIVERY</p>
                <h2 className="section-title-light">The same engine, shaped for the user.</h2>
              </div>
              <div>
                <div className="delivery-list-light">
                  <div className="delivery-item-light">
                    <span>📊</span>
                    <div>
                      <h4>Dashboard</h4>
                      <p>Watchlist, signal history, factor explanations.</p>
                    </div>
                  </div>
                  <div className="delivery-item-light">
                    <span>📱</span>
                    <div>
                      <h4>Mobile Alerts</h4>
                      <p>Signal alerts, market reports, instant notifications.</p>
                    </div>
                  </div>
                  <div className="delivery-item-light">
                    <span>⚡</span>
                    <div>
                      <h4>MCP + API</h4>
                      <p>Machine-readable queries for agent loops.</p>
                    </div>
                  </div>
                  <div className="delivery-item-light">
                    <span>🛡️</span>
                    <div>
                      <h4>Guard</h4>
                      <p>Session-key deterministic policy enforcement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-beige">
          <div className="section-inner">
            <p className="section-kicker-light">USE CASES</p>
            <h2 className="section-title-light">What can CPAI do?</h2>
            <div className="usecase-cards">
              <div className="usecase-card">
                <div className="usecase-icon">🌙</div>
                <h3>What happened while I slept?</h3>
                <p>Morning digest of overnight market movements, new tokens, and potential opportunities.</p>
              </div>
              <div className="usecase-card">
                <div className="usecase-icon">💰</div>
                <h3>What will this trade cost?</h3>
                <p>Simulate order impact vs pool depth before you execute. Know your slippage.</p>
              </div>
              <div className="usecase-card">
                <div className="usecase-icon">📰</div>
                <h3>Events, not just prices.</h3>
                <p>Structured event feeds for catalysts, news, and market-moving factors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-white" id="faq">
          <div className="section-inner">
            <div className="two-col">
              <div>
                <p className="section-kicker-light">FAQ</p>
                <h2 className="section-title-light">Sensible questions before trusting a copilot.</h2>
              </div>
              <div className="faq-list">
                <div className="faq-item">
                  <div className="faq-question">Does AI decide whether I should trade?</div>
                  <div className="faq-answer">No. CPAI provides signals and analysis. The final decision is always yours. AI discovers context; you decide.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">Is the signal financial advice?</div>
                  <div className="faq-answer">No. CPAI provides data-driven analysis, not financial advice. Always do your own research.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">Do I need the $CPAI token to use CPAI?</div>
                  <div className="faq-answer">The core signal engine is free to use. The $CPAI token provides governance and fee-sharing benefits.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">Which chains does CPAI support?</div>
                  <div className="faq-answer">Currently Robinhood Chain. We plan to expand to other chains based on community demand.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-red cta-section">
          <div className="section-inner">
            <p className="section-kicker-red">EARLY ACCESS / 2026</p>
            <h2 className="section-title-red">Trade smarter with your copilot.</h2>
            <p className="section-desc-red">
              We&apos;re opening the read-only signals first while the engine collects history for responsible calibration.
            </p>
            <div className="cta-actions">
              <a className="btn-dark" href="/token">
                View Token →
              </a>
              <a className="btn-light-outline" href="/docs">
                Read the docs →
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
              <a href="/protocols">Protocols</a>
          <a href="/research">Research</a>
          <a href="/agents">Agents</a>
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
