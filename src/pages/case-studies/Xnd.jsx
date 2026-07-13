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
          View project
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
          </section>

          {/* Galleries for Modules */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Dashboard</h3>
            <div className="case-study-body">
              <p>
                The dashboard became the anchor of the user's trading journey. I redesigned it to present an overview of transaction histories, active wallet balances, and current exchange rates in a clean layout. Prominent actions to buy, sell, and deposit assets ensure users feel in control of their portfolios.
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
                The seller's dashboard differs from the merchant dashboard in that the seller only sees a list of order listings they can sell their USDT or gift cards to, whereas the merchant dashboard shows comprehensive merchant analytics as well as the specific order listings they have created.
              </p>
            </div>
          </section>

          <section className="case-study-section">
            <h3 className="case-study-section-title">USDT Trading</h3>
            <div className="case-study-body">
              <p>
                USDT peer-to-peer trading is at the heart of the platform, requiring a high-fidelity checkout experience. The flow was streamlined to make local bank payments and escrow releases seamless, protecting both buyers and sellers from payment fraud.
              </p>
            </div>
            <div className="case-study-gallery">
              <div className="case-study-gallery-row">
                <div className="case-study-gallery-img-box">
                  <img src="https://framerusercontent.com/images/8IhyyPpAiLsISSWPYwQyvm1us.png?width=800" alt="USDT Trading Screen" className="case-study-gallery-img" loading="lazy" />
                </div>
                <div className="case-study-gallery-img-box">
                  <img src="https://framerusercontent.com/images/Zy3eWtegfBrcIJT2H9x4WeCNAZI.png?width=800" alt="P2P Trading flow" className="case-study-gallery-img" loading="lazy" />
                </div>
              </div>
            </div>
          </section>

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
                <strong>Sometimes skipping wireframes to jump straight into high-fidelity layout tests saved time and allowed us to iterate directly with engineering requirements.</strong>
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
