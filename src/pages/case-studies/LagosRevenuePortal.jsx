import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLinkModal from '../../components/ExternalLinkModal';

export default function LagosRevenuePortal() {
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
        <span className="case-study-eyebrow">Lagos State Government - Lagos Revenue Portal</span>
        <h1 className="case-study-title">Lagos Revenue Portal: Designing a unified digital gateway for taxpayer education and revenue system access</h1>
      </header>

      {/* Hero Image */}
      <div className="case-study-hero-img-box">
        <img 
          src="https://framerusercontent.com/images/1K5SSU7eFyz54EzSYhVAPcENc.png?width=1600" 
          alt="Lagos Revenue Portal Hero Mockup" 
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
              <li>Product Strategy</li>
              <li>UX Research & Synthesis</li>
              <li>Information Architecture</li>
              <li>High-Fidelity UI Design</li>
              <li>Interactive Prototyping</li>
            </ul>
          </div>
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">Team & Partners</h4>
            <ul className="case-study-sidebar-list">
              <li><strong>Foluso Ojewale</strong><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>Product Manager</span></li>
              <li style={{marginTop:'8px'}}><strong>Leke Olatunji</strong><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>Lead Engineer</span></li>
              <li style={{marginTop:'8px'}}><strong>Ogunbanjo Temitope</strong><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>Frontend Engineer</span></li>
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
                As the sole product designer on this project, I owned the end-to-end design lifecycle for the public-facing portal. Working alongside our PM Foluso Ojewale, lead engineer Leke Olatunji, and frontend engineer Ogunbanjo Temitope, I transformed complex tax policies and fragmented public service systems into an intuitive, welcoming, and citizen-first digital directory.
              </p>
            </div>
          </section>

          {/* Section: Background */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Background</h3>
            <div className="case-study-body">
              <p>
                Lagos Revenue Portal (LRP) is the single authoritative digital gateway built specifically for taxpayer education, tax calculations, legal libraries, and gateway access in Lagos State. It consolidates taxes from LIRS, Lands Bureau (Land Use Charge), MVAA (Vehicle related taxes), LAWMA (Environmental charges), and LASAA (Signage & Advertisement).
              </p>
              <p>
                The state's revenue collection operates within a complex regulatory environment requiring multiple compliance procedures, rates, and agencies. Citizens and business owners had to deal with fragmented services, thus creating disjointed experiences where taxpayers struggled to find information or verify payments.
              </p>
            </div>
          </section>

          {/* Section: Context & Problem */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Context & Problem</h3>
            <div className="case-study-body">
              <p>
                Lagos tax systems were scattered across multiple different websites, platforms, and office locations. This fragmentation meant no unified portal: taxpayers struggled to compare options, calculate rates, search legal guidelines, or verify payment codes. This complexity increased compliance friction and manual processing bottlenecks.
              </p>
              <p>
                The fragmentation meant no oversight: no systematic moderation, compliance checking, or way to build payment transparency over time.
              </p>
            </div>
          </section>

          {/* Section: The Solution */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">The Solution</h3>
            <div className="case-study-body">
              <p>
                Our discovery phase involved competitive analysis of global tax portals and state-level digital services. Airbnb and Stripe became our benchmarks for high-density clarity and mobile-first navigation systems. The unified portal design balances density with transparency, making compliance feel like a helpful structure rather than a burden.
              </p>
              <p>
                We found that successful portals balance density with clarity and build trust through consistent patterns rather than overwhelming detail. This insight helped shape every design decision I made working on the project.
              </p>
              <p>
                LRP is designed as a centralized gateway with distinct features: Tax Explorer, Law Library, and Service Finder. This clear information architecture allows users to find exactly what they need while enabling cross-category discovery when taxpayers realize they need specific local permits or licenses alongside their personal returns.
              </p>
            </div>
          </section>

          {/* Gallery & Subsections */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Tax Explorer & Calculator</h3>
            <div className="case-study-body">
              <p>
                The collection pages transform browsing from chaotic agency sites to structured discovery. A calculation system that handles tax specifications without overwhelming users; location, income ranges, specific property sizes, vehicle capacity, categories & more.
              </p>
              <p>
                The mobile calculator panel keeps options accessible without dominating screen space. Calculation results display in a clear grid showing rate breakdowns, city location, and key legal bases. Taxpayer categories receive subtle visual priority through card treatments.
              </p>
            </div>
            <div className="case-study-gallery">
              <div className="case-study-gallery-img-box full">
                <img 
                  src="https://framerusercontent.com/images/WFFiK64JOIuZR0wKsCNS5kRYM.png?width=1200" 
                  alt="Tax Explorer view Mockup" 
                  className="case-study-gallery-img"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <section className="case-study-section">
            <h3 className="case-study-section-title">Single Sign-On & Verification</h3>
            <div className="case-study-body">
              <p>
                The flow to verify assessments begins with category selection (Personal, Business, Property), and then basic registration details: Payer ID validation, document upload supporting up to 6 files or receipts to match the chosen service.
              </p>
            </div>
            <div className="case-study-gallery">
              <div className="case-study-gallery-img-box full">
                <img 
                  src="https://framerusercontent.com/images/QGn2X70Yno2M7K7Y0D74lVHICM.png?width=1200" 
                  alt="SSO and Verification flow Mockup" 
                  className="case-study-gallery-img"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <section className="case-study-section">
            <h3 className="case-study-section-title">Law Library & Finder</h3>
            <div className="case-study-body">
              <p>
                The system facilitates real-time lookup of legal gazettes and circulars. Search results include filtering controls that filter documents by agency. The unified dashboard serves both citizens and assessors, with invoice tracking, receipt downloads, and more.
              </p>
            </div>
            <div className="case-study-gallery">
              <div className="case-study-gallery-img-box full">
                <img 
                  src="https://framerusercontent.com/images/2eBaL1exOTUjwaJ2inv8yIHQygM.png?width=1200" 
                  alt="Law Library dashboard Mockup" 
                  className="case-study-gallery-img"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Results Summary */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Results</h3>
            <div className="case-study-body">
              <p>
                Our unified portal design successfully consolidated the state's revenue ecosystem. By delivering targeted user flows, we achieved key improvements:
              </p>
              <ul style={{marginTop:'12px', marginLeft:'20px'}}>
                <li>Structured calculations that estimate PAYE, property, and vehicle levies dynamically.</li>
                <li>Created confidence in state transactions through consistent receipt verification and Single Sign-On profile synchronization.</li>
                <li>Made regulatory adherence straightforward by integrating legal library resources and guidelines directly into task flows.</li>
                <li>Transformed scattered agency links into a unified, searchable portal that improves both discoverability and credibility.</li>
                <li>Positioned featured services to support compliance growth.</li>
              </ul>
            </div>
          </section>

          {/* Section: Takeaways */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Takeaways</h3>
            <div className="case-study-body">
              <p>
                <strong>Designing trust into public sector flows requires subtle integration.</strong> The most effective trust signals work when they feel like natural parts of the user experience rather than complex compliance checkpoints.
              </p>
              <p>
                <strong>Balancing compliance with ease means treating rules as helpful structure.</strong> When tax calculations reduce payment uncertainty, citizens embrace the digital process more enthusiastically.
              </p>
              <p>
                <strong>Building responsive systems for public access means designing for the entire user journey.</strong> Since taxpayers use varying mobile devices, the portal needed to load fast and scale perfectly on low-bandwidth screens.
              </p>
            </div>
          </section>
        </main>
      </div>

      {/* Bottom Navigation */}
      <footer className="case-study-nav">
        <Link to="/selected-work/assets" className="case-study-nav-btn prev">
          <span className="case-study-nav-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </span>
          <span className="case-study-nav-title">The Buffalo Project</span>
        </Link>
        <Link to="/selected-work/xnd" className="case-study-nav-btn next">
          <span className="case-study-nav-title">XND V2.0</span>
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
        projectTitle="Lagos Revenue Portal"
        externalUrl="https://revenue.lagosstate.gov.ng/"
        isInternal={false}
      />
    </div>
  );
}
