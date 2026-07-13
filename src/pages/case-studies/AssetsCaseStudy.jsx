import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLinkModal from '../../components/ExternalLinkModal';

export default function AssetsCaseStudy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fade-in-el">
      {/* Header Navigation */}
      <div className="case-study-nav-header">
        <Link to="/work" className="case-study-back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </Link>
        <button className="case-study-view-project-btn" style={{ cursor: 'not-allowed', opacity: 0.6 }} disabled>
          Project Under NDA
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </button>
      </div>

      {/* Case Study Header */}
      <header className="case-study-title-block">
        <span className="case-study-eyebrow" style={{ color: '#D97706' }}>Enterprise Operations Platform</span>
        <h1 className="case-study-title">The Buffalo Project: Custom enterprise resource and logistics workflow tracker</h1>
      </header>

      {/* Hero Image */}
      <div className="case-study-hero-img-box" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', background: '#000' }}>
        <video 
          src="/buffalo_cover.webm" 
          alt="The Buffalo Project Hero Video Loop" 
          className="case-study-hero-img"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', display: 'block', height: 'auto', objectFit: 'cover' }}
        />
      </div>

      {/* Content Grid */}
      <div className="case-study-content-grid">
        {/* Sidebar Metadata */}
        <aside className="case-study-sidebar">
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">Skills I contributed</h4>
            <ul className="case-study-sidebar-list">
              <li>Information Architecture</li>
              <li>UX & UI Design</li>
              <li>Product Strategy</li>
              <li>Competitive analysis</li>
              <li>User Research</li>
            </ul>
          </div>
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">Team & Partners</h4>
            <ul className="case-study-sidebar-list" style={{ fontSize: '13px', lineHeight: '1.6' }}>
              <li><strong>Mark Omoniyi</strong><br /><span style={{ color: 'var(--text-tertiary)' }}>Software Engineer</span></li>
              <li style={{ marginTop: '8px' }}><strong>Simeon Ayara</strong><br /><span style={{ color: 'var(--text-tertiary)' }}>Software Engineer</span></li>
              <li style={{ marginTop: '8px' }}><strong>Abiodun Adebayo</strong><br /><span style={{ color: 'var(--text-tertiary)' }}>Product Designer</span></li>
              <li style={{ marginTop: '8px' }}><strong>Odunlami Oluwatimilehin</strong><br /><span style={{ color: 'var(--text-tertiary)' }}>Product Designer</span></li>
              <li style={{ marginTop: '8px' }}><strong>Adeniji Oluyomi</strong><br /><span style={{ color: 'var(--text-tertiary)' }}>Product Manager</span></li>
              <li style={{ marginTop: '8px' }}><strong>Moshood Ayoyinka</strong><br /><span style={{ color: 'var(--text-tertiary)' }}>Business Analyst</span></li>
              <li style={{ marginTop: '8px' }}><strong>Simon Singlad</strong><br /><span style={{ color: 'var(--text-tertiary)' }}>Mobile Developer</span></li>
              <li style={{ marginTop: '8px' }}><strong>Tomi Agboola</strong><br /><span style={{ color: 'var(--text-tertiary)' }}>Cloud Infrastructure Engineer</span></li>
            </ul>
          </div>
        </aside>

        {/* Main Narrative */}
        <main className="case-study-main">
          {/* Section: Overview */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Project Status</h3>
            <div className="case-study-body">
              <div 
                style={{ 
                  background: 'rgba(217, 119, 6, 0.08)', 
                  border: '1px solid rgba(217, 119, 6, 0.25)', 
                  borderRadius: '8px', 
                  padding: '16px 20px', 
                  marginBottom: '24px',
                  color: '#D97706',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}
              >
                <strong>Active Non-Disclosure Agreement (NDA) & Under Development</strong>
                <p style={{ margin: '8px 0 0 0', color: 'var(--text-secondary)' }}>
                  This enterprise application is currently active, under development, and bound by confidentiality terms. Consequently, interactive wireframes, detailed functional layouts, and user conversion metrics cannot be fully disclosed at this time.
                </p>
              </div>
              <p>
                The Buffalo Project is a centralized operations and logistics management system designed for ABC x Trustpointly. It unifies high-scale industrial workflows—including real-time asset lifecycle tracking, dispatching routes, operator logs, and composite logistics metrics—into a unified digital dashboard.
              </p>
              <p>
                As a primary product designer on this initiative, I worked alongside a cross-functional team of engineering, product management, and business analytics specialists to establish the foundational information architecture and UI systems.
              </p>
              <p style={{ marginTop: '24px', fontWeight: '600', color: 'var(--text-primary)' }}>
                🚀 This case study is scheduled to be updated with comprehensive visual modules and detailed design process summaries soon.
              </p>
            </div>
          </section>
        </main>
      </div>

      {/* Bottom Navigation */}
      <footer className="case-study-nav">
        <Link to="/selected-work/my-design-portfolio" className="case-study-nav-btn prev">
          <span className="case-study-nav-lbl">Previous Project</span>
          <span className="case-study-nav-title">My Design Portfolio</span>
        </Link>
        <Link to="/selected-work/lagos-revenue-portal" className="case-study-nav-btn next">
          <span className="case-study-nav-lbl">Next Project</span>
          <span className="case-study-nav-title">Lagos Revenue Portal</span>
        </Link>
      </footer>
    </div>
  );
}
