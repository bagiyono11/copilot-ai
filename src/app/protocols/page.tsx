import Image from 'next/image'

export default function Protocols() {
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
          <label className="hamburger" htmlFor="mobile-toggle-protocols">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <input type="checkbox" id="mobile-toggle-protocols" className="mobile-toggle" />
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
          <p className="hero-kicker-light">FOR PROTOCOLS</p>
          <h1>Trading signals your<br />protocol can consume.</h1>
          <p className="hero-lede-light">
            DEXes, wallets, and trading bots need more than a price feed. CPAI packages market context and risk analysis into protocol-ready signals.
          </p>
        </section>

        {/* Feature Cards */}
        <section className="section-beige">
          <div className="section-inner">
            <div className="protocol-cards">
              <div className="protocol-card">
                <div className="protocol-icon">📊</div>
                <span className="protocol-num">01 / SIGNALFEED</span>
                <h3>Token signal feed</h3>
                <p>Real-time BUY/HOLD/SELL/AVOID signals for any token on Robinhood Chain, delivered via API or on-chain oracle.</p>
                <ul className="protocol-features">
                  <li>On-chain signal publication</li>
                  <li>Token-level factor metadata</li>
                  <li>Configurable update cadence</li>
                </ul>
              </div>
              <div className="protocol-card">
                <div className="protocol-icon">⚡</div>
                <span className="protocol-num">02 / RISKFEED</span>
                <h3>Risk assessment feed</h3>
                <p>Continuous risk scoring for tokens, pools, and trading pairs. Know the risk before your users do.</p>
                <ul className="protocol-features">
                  <li>Liquidity depth analysis</li>
                  <li>Volatility scoring</li>
                  <li>Smart contract risk flags</li>
                </ul>
              </div>
              <div className="protocol-card">
                <div className="protocol-icon">🔔</div>
                <span className="protocol-num">03 / ALERTFEED</span>
                <h3>Market alert feed</h3>
                <p>Instant alerts for significant market events: volume spikes, momentum shifts, and potential catalysts.</p>
                <ul className="protocol-features">
                  <li>Real-time event detection</li>
                  <li>Webhook delivery</li>
                  <li>Severity classification</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Model */}
        <section className="section-dark">
          <div className="section-inner">
            <div className="two-col">
              <div>
                <p className="section-kicker">INTEGRATION MODEL</p>
                <h2 className="section-title">One signal engine.<br />Multiple integrations.</h2>
                <p className="section-desc">
                  Every protocol utility is downstream of data the core signal engine already produces. That keeps the system coherent and the scope honest.
                </p>
              </div>
              <div className="integration-diagram">
                <div className="diagram-core">
                  <span>CPAI</span>
                  <strong>SIGNAL ENGINE</strong>
                </div>
                <div className="diagram-products">
                  <div className="diagram-product">DEX integration</div>
                  <div className="diagram-product">Wallet signals</div>
                  <div className="diagram-product">Bot API</div>
                  <div className="diagram-product">Lending risk</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-white">
          <div className="section-inner">
            <p className="section-kicker-light">USE CASES</p>
            <h2 className="section-title-light">Who benefits from protocol signals?</h2>
            <div className="usecase-grid">
              <div className="usecase-item">
                <span className="usecase-icon">🔄</span>
                <h3>DEXes</h3>
                <p>Display risk warnings next to swap interfaces. Help users avoid high-risk trades before they execute.</p>
              </div>
              <div className="usecase-item">
                <span className="usecase-icon">👛</span>
                <h3>Wallets</h3>
                <p>Show signal badges on token holdings. Alert users when a token&apos;s risk profile changes.</p>
              </div>
              <div className="usecase-item">
                <span className="usecase-icon">🤖</span>
                <h3>Trading Bots</h3>
                <p>Consume signals via API to automate trading decisions. Filter out low-confidence trades.</p>
              </div>
              <div className="usecase-item">
                <span className="usecase-icon">🏦</span>
                <h3>Lending Protocols</h3>
                <p>Adjust collateral requirements based on real-time risk scores. Protect against volatile assets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deferred */}
        <section className="section-beige">
          <div className="section-inner">
            <div className="two-col">
              <div>
                <p className="section-kicker-light">WHAT WE WILL NOT RUSH</p>
                <h2 className="section-title-light">Execution changes the risk surface.</h2>
              </div>
              <div className="deferred-block">
                <span className="deferred-badge">DEFERRED</span>
                <h3>Automated trade execution</h3>
                <p>
                  Executing trades on behalf of protocols requires custody integration and smart contract upgrades. It becomes a separate product surface, so it follows proven signal usage—not the MVP.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-orange cta-section">
          <div className="section-inner">
            <p className="section-kicker-orange">BUILD WITH US / 2026</p>
            <h2 className="section-title-orange">Build trading products<br />with context.</h2>
            <p className="section-desc-orange">
              We&apos;re opening protocol integrations for partners who want to add signal intelligence to their products.
            </p>
            <div className="cta-actions">
              <a className="btn-dark" href="/docs">
                Read the docs →
              </a>
              <a className="btn-light-outline" href="mailto:support@copilotai.site">
                Contact us →
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
