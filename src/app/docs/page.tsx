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
          <a className="header-social" href="https://x.com/CopilotAI_RH" target="_blank" rel="noreferrer">𝕏</a>
          <a className="btn-header" href="https://x.com/CopilotAI_RH" target="_blank" rel="noreferrer">Follow ↗</a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero" style={{ paddingBottom: 40 }}>
          <p className="hero-kicker">DOCUMENTATION</p>
          <h1>Build with<br />Copilot AI.</h1>
          <p className="hero-lede">
            Everything you need to integrate CPAI signals into your trading workflow, agent, or protocol.
          </p>
        </section>

        {/* Quick Start */}
        <section className="section-dark">
          <div className="section-inner">
            <p className="section-kicker">QUICK START</p>
            <h2 className="section-title">Get started in minutes.</h2>
            <p className="section-desc" style={{ marginBottom: 32 }}>
              Follow these steps to start using CPAI signals.
            </p>
            <div className="roadmap-grid">
              <div className="roadmap-card">
                <div className="roadmap-phase">STEP 1</div>
                <h3>Connect Wallet</h3>
                <p>Connect your wallet to Robinhood Chain. Make sure you have ETH for gas.</p>
              </div>
              <div className="roadmap-card">
                <div className="roadmap-phase">STEP 2</div>
                <h3>Get Signals</h3>
                <p>Visit the dashboard or use the API to receive real-time trading signals.</p>
              </div>
              <div className="roadmap-card">
                <div className="roadmap-phase">STEP 3</div>
                <h3>Trade Smarter</h3>
                <p>Use CPAI signals to make informed trading decisions on Robinhood Chain.</p>
              </div>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section className="section-darker">
          <div className="section-inner">
            <p className="section-kicker">API REFERENCE</p>
            <h2 className="section-title">Integrate with your tools.</h2>
            <p className="section-desc" style={{ marginBottom: 32 }}>
              Use the CPAI API to integrate signals into your trading bot, agent, or protocol.
            </p>
            <div className="code-block" style={{ maxWidth: 700, margin: '0 auto' }}>
              <div className="code-header">
                <span>MCP / signal.evaluate</span>
                <span>JSON</span>
              </div>
              <div className="code-content">
                <pre><code>{`{
  "token": "CPAI",
  "pair": "CPAI/WETH",
  "action": "BUY",
  "confidence": "HIGH",
  "score": 18,
  "factors": {
    "momentum": "strong",
    "liquidity": "deep",
    "risk": "low"
  },
  "reasons": [
    "Strong upward momentum detected",
    "Liquidity depth exceeds order size",
    "Low volatility environment"
  ]
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Signal Types */}
        <section className="section-dark">
          <div className="section-inner">
            <p className="section-kicker">SIGNAL TYPES</p>
            <h2 className="section-title">Understanding signals.</h2>
            <div className="signal-cards">
              <div className="signal-card">
                <span className="signal-card-num">BUY</span>
                <div>
                  <h3>Buy Signal</h3>
                  <p>Strong fundamentals, good entry point, low risk. Recommended action: enter position.</p>
                </div>
              </div>
              <div className="signal-card">
                <span className="signal-card-num">HOLD</span>
                <div>
                  <h3>Hold Signal</h3>
                  <p>Mixed signals, wait for confirmation. Recommended action: maintain current position.</p>
                </div>
              </div>
              <div className="signal-card">
                <span className="signal-card-num">SELL</span>
                <div>
                  <h3>Sell Signal</h3>
                  <p>Deteriorating conditions, consider exit. Recommended action: reduce or close position.</p>
                </div>
              </div>
              <div className="signal-card">
                <span className="signal-card-num">AVOID</span>
                <div>
                  <h3>Avoid Signal</h3>
                  <p>High risk, do not enter. Recommended action: stay out of the market.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Factors */}
        <section className="section-darker">
          <div className="section-inner">
            <p className="section-kicker">FACTORS</p>
            <h2 className="section-title">What CPAI analyzes.</h2>
            <div className="ai-grid">
              <div className="ai-card">
                <div className="ai-card-num">01</div>
                <h3>Momentum</h3>
                <p>Price action, volume patterns, trend strength, and momentum indicators.</p>
              </div>
              <div className="ai-card">
                <div className="ai-card-num">02</div>
                <h3>Liquidity</h3>
                <p>Pool depth, order book analysis, and executable liquidity assessment.</p>
              </div>
              <div className="ai-card">
                <div className="ai-card-num">03</div>
                <h3>Risk</h3>
                <p>Volatility, drawdown potential, and risk-adjusted return metrics.</p>
              </div>
              <div className="ai-card">
                <div className="ai-card-num">04</div>
                <h3>Fundamentals</h3>
                <p>Token contract analysis, holder distribution, and project credibility.</p>
              </div>
              <div className="ai-card">
                <div className="ai-card-num">05</div>
                <h3>Market Context</h3>
                <p>Broader market conditions, correlation analysis, and sector trends.</p>
              </div>
              <div className="ai-card">
                <div className="ai-card-num">06</div>
                <h3>Catalysts</h3>
                <p>Upcoming events, news sentiment, and potential market-moving factors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Examples */}
        <section className="section-dark">
          <div className="section-inner">
            <p className="section-kicker">INTEGRATION</p>
            <h2 className="section-title">Use CPAI in your code.</h2>
            <div className="code-block" style={{ maxWidth: 700, margin: '0 auto' }}>
              <div className="code-header">
                <span>JavaScript</span>
                <span>Example</span>
              </div>
              <div className="code-content">
                <pre><code>{`// Fetch CPAI signal
const response = await fetch('https://api.copilotai.site/signal');
const signal = await response.json();

if (signal.action === 'BUY' && signal.confidence === 'HIGH') {
  // Execute trade
  console.log('Strong buy signal detected!');
  console.log('Score:', signal.score);
  console.log('Factors:', signal.factors);
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="section-darker">
          <div className="section-inner">
            <p className="section-kicker">RESOURCES</p>
            <h2 className="section-title">Learn more.</h2>
            <div className="delivery-cards">
              <div className="delivery-card">
                <div className="delivery-card-icon">📚</div>
                <h3>Whitepaper</h3>
                <p>Read the full technical whitepaper and research behind CPAI.</p>
                <a href="/product">Read more →</a>
              </div>
              <div className="delivery-card">
                <div className="delivery-card-icon">🔗</div>
                <h3>GitHub</h3>
                <p>View the open-source code and contribute to the project.</p>
                <a href="https://github.com/bagiyono11/copilot-ai" target="_blank" rel="noreferrer">View code →</a>
              </div>
              <div className="delivery-card">
                <div className="delivery-card-icon">💬</div>
                <h3>Community</h3>
                <p>Join the community on X to discuss and get support.</p>
                <a href="https://x.com/CopilotAI_RH" target="_blank" rel="noreferrer">Join →</a>
              </div>
              <div className="delivery-card">
                <div className="delivery-card-icon">📧</div>
                <h3>Contact</h3>
                <p>Have questions? Reach out to the team directly.</p>
                <a href="mailto:support@copilotai.site">Email us →</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-accent cta-section">
          <div className="section-inner">
            <p className="section-kicker" style={{ color: 'rgba(0,0,0,0.6)' }}>BUILD / 2026</p>
            <h2 className="section-title">Start building with CPAI.</h2>
            <p className="section-desc" style={{ margin: '0 auto', color: 'rgba(0,0,0,0.7)' }}>
              Integrate the first AI trading copilot into your workflow today.
            </p>
            <div className="cta-actions">
              <a className="btn-accent" href="https://x.com/CopilotAI_RH" target="_blank" rel="noreferrer">Follow on X ↗</a>
              <a className="btn-text" href="/product">Explore product →</a>
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
