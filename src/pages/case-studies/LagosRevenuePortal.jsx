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
        <span className="case-study-eyebrow">Lagos State Government - Lagos Revenue Portal</span>
        <h1 className="case-study-title">Lagos Revenue Portal: Designing a unified digital gateway for taxpayer education and revenue system access</h1>
      </header>

      {/* Hero Image */}
      <div className="case-study-hero-img-box">
        <img
          src="/LRP_Cover.png"
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
              <li><strong>Mark Adesina</strong><br /><span style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>Software Engineer</span></li>
              <li style={{ marginTop: '8px' }}><strong>Mejero Campbell</strong><br /><span style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>Product Delivery Manager</span></li>
              <li style={{ marginTop: '8px' }}><strong>Stephen Omoruahke</strong><br /><span style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>Software Engineer</span></li>
              <li style={{ marginTop: '8px' }}><strong>Joseph Fajemisin</strong><br /><span style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>QA Engineer</span></li>
            </ul>
          </div>
        </aside>

        {/* Main Narrative */}
        <main className="case-study-main">
          <section className="case-study-section">
            <h3 className="case-study-section-title">Case Study in Development</h3>
            <div className="case-study-body" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px dashed var(--border-color)',
                borderRadius: '12px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color, #3b82f6)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Documenting the Process</span>
                </div>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  I am currently detailing my design decisions and documenting the end-to-end UX process for the Lagos Revenue Portal.
                  This case study is being structured to provide a comprehensive look into how I designed a unified digital gateway for one of Africa's largest metropolitan states.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }}>What I am documenting:</h4>
                <ul style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '16px',
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    { title: "Project Overview", desc: "The vision, timeline, and core design objectives for the unified portal." },
                    { title: "Business Challenge", desc: "Consolidating fragmented government structures and regulatory requirements." },
                    { title: "Research Process", desc: "Citizen search behaviors, stakeholder discovery, and synthesis of public policy." },
                    { title: "Design Strategy", desc: "Defining my information architecture, density targets, and accessibility principles." },
                    { title: "User Flows", desc: "Designing simple wizards for tax calculations, SSO verification, and document audits." },
                    { title: "Design System", desc: "Developing a robust component library tailored for state brand guidelines." },
                    { title: "Key Features", desc: "Tax Explorer, centralized Law Library, and self-service assessment verification." },
                    { title: "Outcomes & Impact", desc: "Key performance metrics, system adoption rates, and citizen feedback." }
                  ].map((item, idx) => (
                    <li key={idx} style={{
                      background: 'rgba(255, 255, 255, 0.01)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}>
                      <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{item.title}</strong>
                      <span style={{ fontSize: '13px', color: 'var(--text-tertiary)', lineHeight: '1.4' }}>{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', fontStyle: 'italic', marginTop: '16px' }}>
                Detailed documentation and design artifacts will be published soon. In the meantime, you can explore the live portal using the "View Project" link above.
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
