import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLinkModal from '../../components/ExternalLinkModal';

export default function Xnd() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fade-in-el">
      {/* Header Navigation */}
      <div className="case-study-nav-header">
        <Link to="/" className="case-study-back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </Link>
        <button className="case-study-view-project-btn" onClick={() => setIsModalOpen(true)}>
          VIEW PROJECT
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </button>
      </div>

      {/* Case Study Header */}
      <header className="case-study-title-block">
        <span className="case-study-eyebrow">Xchange Next Door - XND V2.0</span>
        <h1 className="case-study-title">XND V2.0: A secure peer-to-peer exchange platform for safe USDT trading and instant gift card conversion</h1>
      </header>

      {/* Hero Image */}
      <div className="case-study-hero-img-box">
        <img
          src="/XND_Cover_Image_Seller.png"
          alt="XND Hero Mockup"
          className="case-study-hero-img"
        />
      </div>

      {/* Content Grid */}
      <div className="case-study-content-grid">
        {/* Sidebar Metadata */}
        <aside className="case-study-sidebar">
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">Skills I contributed</h4>
            <ul className="case-study-sidebar-list">
              <li>Crypto P2P Flow</li>
              <li>UX & UI Design</li>
              <li>Interaction Design</li>
              <li>Product Strategy</li>
            </ul>
          </div>
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">Team & Partners</h4>
            <ul className="case-study-sidebar-list">
              <li><strong>XND Core Team</strong><br /><span style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>Partners & Stakeholders</span></li>
            </ul>
          </div>
        </aside>

        {/* Main Narrative */}
        <main className="case-study-main">
          {/* Section: My Role */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">My role</h3>
            <div className="case-study-body">
              <p>
                As the sole product designer on this project, I was responsible for overseeing the entire user experience redesign. I worked closely with engineers and product stakeholders to shape a secure, reliable transaction platform.
              </p>
            </div>
          </section>

          {/* Section: Background */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Background</h3>
            <div className="case-study-body">
              <p>
                XND (Xchange Next Door) is a peer-to-peer platform designed to enable secure trades of digital assets, primarily USDT and gift cards. It provides users with a safe, direct path to convert their assets to local currency without fear of fraud or payment delays.
              </p>
              <p>
                Crypto and gift card trading in local markets has historically been highly fragmented and risky. With the release of XND V2.0, the core focus was to create an authoritative, secure marketplace where buyers and sellers transact under verified escrow terms.
              </p>
            </div>
          </section>

          {/* Section: Context & Problem */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Context & Problem</h3>
            <div className="case-study-body">
              <p>
                Traders frequently faced issues like delayed transactions, payment defaults, high fee rates, and complex peer-to-peer flows. On general forums, transaction details get buried, and users struggle to verify counterparty credibility. These friction points alienated potential users, highlighting the need for a simplified, highly secure interface.
              </p>
              <p>
                The lack of responsive interfaces meant mobile accessibility was limited. Beyond layout, traditional transaction screens were inflexible, making it difficult to introduce merchant verification features without disrupting existing trading flows.
              </p>
            </div>
          </section>

          {/* Section: The Solution */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">The Solution</h3>
            <div className="case-study-body">
              <p>
                With speed and focus, I redesigned the core trading workflows. A mobile-first perspective guided the design of the verified merchant program, P2P escrow transaction UI, and instant checkout. Inspired by Stripe's transaction clarity, the layout groups key features; USDT trading, verified merchant listings, and escrow payouts; into a unified dashboard.
              </p>
              <p>
                Key updates included a streamlined multi-currency checkout flow for USDT and gift card swaps, and a directory for managing merchant listings. I also introduced a verified application flow to guide merchants onto the platform’s refreshed design language, tied together by a sharper and vibrant brand style.
              </p>
            </div>
          </section>          {/* Section: User Roles & Ecosystem Mapping */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">User Roles & Ecosystem Mapping</h3>
            <div className="case-study-body">
              <p>
                To design a secure P2P trading ecosystem, I first mapped out the distinct actors on XND and structured the platform around their operational goals. Through user interviews and workflow audits, I identified that the platform needed to cater to three primary roles, each requiring customized functional privileges and interfaces.
              </p>

              <h4 style={{ marginTop: '20px', fontSize: '15px', color: 'var(--text-primary)' }}>1. Merchants (Liquidity Providers)</h4>
              <p>
                Merchants act as the market makers on the platform, establishing inventory and publishing trade listings that other users execute against. To minimize cognitive overload, simplify compliance, and prevent execution errors, I separated merchants into two distinct profiles:
              </p>
              <ul>
                <li>
                  <strong>Gift Card Merchant:</strong> Can only create Gift Card order listings, manage gift card inventory, and complete trade requests initiated by users. They have no access to cryptocurrency listings, preventing accidental asset mixups.
                </li>
                <li>
                  <strong>USDT Merchant:</strong> Can only create USDT order listings, manage USDT liquidity, and facilitate direct P2P order execution. They manage cryptocurrency holdings and handle direct fiat payment confirmations.
                </li>
              </ul>
              <p>
                I designed this separation to improve operational clarity, minimize errors, simplify onboarding, and strengthen platform governance.
              </p>

              <h4 style={{ marginTop: '20px', fontSize: '15px', color: 'var(--text-primary)' }}>2. Normal Users (Retail Traders)</h4>
              <p>
                Normal users represent the retail customer segment. Unlike merchants, users consume listings rather than create them. They can browse all active USDT and Gift Card listings in the open marketplace, choose which verified merchant to trade with, initiate transactions, submit proof of payments, and track their trade lifecycle from initiation to final release.
              </p>
            </div>
          </section>

          {/* Section: Dashboard Architecture */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Dashboard Architecture</h3>
            <div className="case-study-body">
              <p>
                Instead of forcing all users into a generic, single-system interface, I designed two distinct dashboards tailored to the specific goals of each persona. Role-based permissions reduce complexity by keeping irrelevant data out of sight.
              </p>
              <p>
                <strong>The Merchant Dashboard</strong> is optimized for operational speed and liquidity management. It prioritizes order listing controls, active trade requests, wallet balance indicators, aggregate earnings, transaction history, and real-time alerts. This dashboard gives merchants the performance metrics and speed needed to manage assets and respond to customer requests instantly.
              </p>
            </div>
            <div className="case-study-gallery">
              <div className="case-study-gallery-row">
                <div className="case-study-gallery-img-box">
                  <img src="/XND_Dashboard_Merchant.png" alt="Merchant Dashboard Mockup" className="case-study-gallery-img" loading="lazy" />
                </div>
                <div className="case-study-gallery-img-box">
                  <img src="/XND_Dashboard_Seller.png" alt="Seller Dashboard Mockup" className="case-study-gallery-img" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="case-study-body" style={{ marginTop: '24px' }}>
              <p>
                <strong>The User Dashboard</strong>, on the other hand, centers entirely around trading activities. It displays active listings, open trades, transaction history, and simple wallet actions (deposits and withdrawals) in a layout that minimizes friction while helping users easily discover and complete trades.
              </p>
            </div>
          </section>

          {/* Section: P2P Trading Process */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">P2P Trading & Escrow Process</h3>
            <div className="case-study-body">
              <p>
                USDT peer-to-peer trading is at the heart of the platform, requiring a high-fidelity checkout experience. XND functions as a trusted intermediary and automated adjudicator rather than a direct exchange. I designed an 11-step escrow workflow that balances user trust, platform security, and operational efficiency:
              </p>
              <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', margin: '16px 0', fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                <li><strong>List Creation:</strong> A verified merchant publishes an order listing with rates and limits.</li>
                <li><strong>Marketplace Exposure:</strong> The listing becomes visible to all eligible users in the marketplace.</li>
                <li><strong>Listing Selection:</strong> A user reviews listings and selects a verified merchant.</li>
                <li><strong>Trade Initiation:</strong> The user enters the trade amount and starts the session.</li>
                <li><strong>Escrow Lock:</strong> The system automatically locks the merchant's assets in escrow to prevent double-spending.</li>
                <li><strong>Execution Step:</strong> Both parties perform their required actions (user uploads payment proof, merchant validates payment receipt).</li>
                <li><strong>Condition Audit:</strong> The platform verifies that transaction preconditions have been met.</li>
                <li><strong>Asset Protection:</strong> Throughout the verification window, the assets remain frozen inside the escrow container.</li>
                <li><strong>Escrow Release:</strong> Once receipt is verified, the system automatically releases the escrowed assets.</li>
                <li><strong>Trade Completion:</strong> The trade is completed, transferring assets to the buyer's wallet.</li>
                <li><strong>Rating & Auditing:</strong> Ratings, transaction history, and system records are updated.</li>
              </ol>
              <p>
                By displaying clear status indicators, progress tracking, and confirmations at every stage, I reduced transaction anxiety and made every trade state visible to both participants.
              </p>
            </div>
            <div className="case-study-gallery" style={{ marginTop: '24px' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', background: '#000', width: '100%' }}>
                <video
                  src="/USDT_Trading.webm"
                  alt="USDT Trading Flow Video Loop"
                  className="case-study-gallery-img"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div className="case-study-gallery" style={{ marginTop: '24px' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', background: '#000', width: '100%' }}>
                <video
                  src="/Giftcard_Trading_II.webm"
                  alt="Giftcard Trading Flow Video Loop"
                  className="case-study-gallery-img"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </section>

          {/* Section: Gift Card Conversion */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Gift Card Conversion</h3>
            <div className="case-study-body">
              <p>
                Converting gift cards to cash was redesigned as a fast, three-step wizard. Users select their card brand, input details, and view current rates immediately. Status updates (Pending, Verifying, Paid) keep traders informed throughout.
              </p>
            </div>
            <div className="case-study-gallery">
              <div className="case-study-gallery-row">
                <div className="case-study-gallery-img-box">
                  <img src="https://framerusercontent.com/images/zNhZ9l9e9WDvRe6RqdrhabPZtI.png?width=800" alt="Gift Card list Screen" className="case-study-gallery-img" loading="lazy" />
                </div>
                <div className="case-study-gallery-img-box">
                  <img src="https://framerusercontent.com/images/jWsteJOBQQTEC88YKgXlnrniPvI.png?width=800" alt="Conversion Setup Screen" className="case-study-gallery-img" loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          {/* Section: Merchant Portal */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Merchant Portal</h3>
            <div className="case-study-body">
              <p>
                Verified merchants operate as the backbone of the P2P system. The merchant directory and application flows allow trust verification badges to display prominently on listings, letting sellers select credible buyers with confidence.
              </p>
            </div>
            <div className="case-study-gallery">
              <div className="case-study-gallery-row">
                <div className="case-study-gallery-img-box">
                  <img src="https://framerusercontent.com/images/2T3QZQI9J1StOMPEInLr5gTYVzk.png?width=800" alt="Merchant Details Screen" className="case-study-gallery-img" loading="lazy" />
                </div>
                <div className="case-study-gallery-img-box">
                  <img src="https://framerusercontent.com/images/q8wCHzy7ByMHlwT83x9bRYalJM.png?width=800" alt="Merchant Directory Table" className="case-study-gallery-img" loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          {/* Section: Admin Portal */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Admin Portal & Governance</h3>
            <div className="case-study-body">
              <p>
                A healthy P2P marketplace requires robust administrative oversight. I designed a modular Admin Portal that provides platform administrators with the tools to manage ecosystem health, resolve disputes, and maintain security:
              </p>

              <h4 style={{ marginTop: '20px', fontSize: '15px', color: 'var(--text-primary)' }}>1. Admin Dashboard</h4>
              <p>
                Consolidates platform analytics, revenue metrics, active user trends, trade volume, and operational health in a centralized panel.
              </p>

              <h4 style={{ marginTop: '20px', fontSize: '15px', color: 'var(--text-primary)' }}>2. User Management</h4>
              <p>
                Enables administrators to inspect user accounts, verify new merchants, review KYC verification materials, and handle suspensions or permissions.
              </p>

              <h4 style={{ marginTop: '20px', fontSize: '15px', color: 'var(--text-primary)' }}>3. Transactions Auditing</h4>
              <p>
                Provides oversight of completed and active transactions, enabling admins to investigate disputes and audit ledger histories.
              </p>

              <h4 style={{ marginTop: '20px', fontSize: '15px', color: 'var(--text-primary)' }}>4. Wallet Management</h4>
              <p>
                Supports monitoring of system hot/cold wallets, balance adjustments, funding flows, and withdrawal verification.
              </p>

              <h4 style={{ marginTop: '20px', fontSize: '15px', color: 'var(--text-primary)' }}>5. Trade Management</h4>
              <p>
                Allows active trade monitoring, intervention in disputed transactions, and escrow control to release or return funds.
              </p>

              <h4 style={{ marginTop: '20px', fontSize: '15px', color: 'var(--text-primary)' }}>6. Customer Support</h4>
              <p>
                Integrates ticket queues, merchant inquiries, customer complaints, and support escalations into a structured workflow.
              </p>

              <h4 style={{ marginTop: '20px', fontSize: '15px', color: 'var(--text-primary)' }}>7. Platform Settings</h4>
              <p>
                Controls system parameters, including trading limits, transactional fees, notification configurations, and security policies.
              </p>

              <p style={{ marginTop: '16px' }}>
                Separating operational management into these modules improves administrative efficiency, makes compliance audits easier, and ensures governance doesn't disrupt the trading experience.
              </p>
            </div>
          </section>

          {/* Results Summary */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Results</h3>
            <div className="case-study-body">
              <p>
                The relaunch achieved its goal: boosting successful P2P trades with zero payment defaults. The revamped layout felt modern and secure, significantly reducing transaction times. Early adopter feedback was highly positive – save for some constructive feedbacks from stakeholders and users, highlighting the escrow confirmation screens as a major improvement.
              </p>
            </div>
          </section>

          {/* Section: Takeaways */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Takeaways</h3>
            <div className="case-study-body">
              <p>
                <strong>Designing trust into cryptocurrency transactions requires absolute transparency.</strong> Clear progress steps and escrow alerts work best when they feel like helpful instructions rather than friction.
              </p>
              <p>
                <strong>Sometimes skipping wireframes to jump straight into high-fidelity layout tests saved time and allowed me to iterate directly with engineering requirements.</strong>
              </p>
              <p>
                <strong>A product that works well today but is architected to scale tomorrow is essential when handling financial transactions, keeping merchant conversion rates high.</strong>
              </p>
              <p>
                <strong>Designing a clean, usable interface is just as important as how it is converted and handled.</strong>
              </p>
            </div>
          </section>
        </main>
      </div>

      {/* Bottom Navigation */}
      <footer className="case-study-nav">
        <Link to="/selected-work/lagos-revenue-portal" className="case-study-nav-btn prev">
          <span className="case-study-nav-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </span>
          <span className="case-study-nav-title">Lagos Revenue Portal</span>
        </Link>
        <Link to="/selected-work/techpay" className="case-study-nav-btn next">
          <span className="case-study-nav-title">Techpay</span>
          <span className="case-study-nav-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </Link>
      </footer>

      <ExternalLinkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectTitle="XND V2.0"
        externalUrl="https://www.xnexd.io/"
        isInternal={false}
      />
    </div>
  );
}
