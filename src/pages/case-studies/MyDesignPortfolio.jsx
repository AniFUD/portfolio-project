import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLinkModal from '../../components/ExternalLinkModal';

export default function MyDesignPortfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState('light');

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
        <span className="case-study-eyebrow">Personal Project - Portfolio Development</span>
        <h1 className="case-study-title">My Design Portfolio: Architecting a living digital archive through AI-assisted product design and front-end engineering</h1>
      </header>

      {/* Hero Image */}
      <div className="case-study-hero-img-box" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
        <img 
          src="/homepage_snapshot.png" 
          alt="My Design Portfolio Hero Mockup" 
          className="case-study-hero-img"
          style={{ objectPosition: 'top' }}
        />
      </div>

      {/* Content Grid */}
      <div className="case-study-content-grid">
        {/* Sidebar Metadata */}
        <aside className="case-study-sidebar">
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">Skills I contributed</h4>
            <ul className="case-study-sidebar-list">
              <li>AI-Augmented Design</li>
              <li>UX & Interaction Architecture</li>
              <li>Front-End Engineering (React)</li>
              <li>Systems & Layout Typography</li>
              <li>Audio Synthesis (Web Audio API)</li>
            </ul>
          </div>
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">Tools & Agents</h4>
            <ul className="case-study-sidebar-list">
              <li><strong>Workflowy</strong><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>Outlining & Site Map</span></li>
              <li style={{marginTop:'8px'}}><strong>Whimsical</strong><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>User Flows & Wireframes</span></li>
              <li style={{marginTop:'8px'}}><strong>Claude</strong><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>Architecture Design Partner</span></li>
              <li style={{marginTop:'8px'}}><strong>Antigravity</strong><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>AI Pair Programmer & Builder</span></li>
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
                As an AI Product Designer, I acted as the sole product strategist, interaction designer, and front-end developer for my portfolio. Instead of handing off static layouts, I collaborated directly with state-of-the-art AI agents, bridging the gap between high-fidelity UI design and robust production-ready code.
              </p>
            </div>
          </section>

          {/* Section: Vision */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Vision & The Pitch</h3>
            <div className="case-study-body">
              <p>
                In the era of AI, product design is shifting. Designers can no longer stop at static canvas handoffs. We must design with system context, understand how dynamic variables render in production, and build working products. This portfolio is a living testament to that philosophy. By designing and writing clean, scalable React components alongside AI agents, I demonstrate how a modern Product Designer leverages artificial intelligence to execute complex layout structures, audio feedback, and dark-mode states at high velocity.
              </p>
            </div>
          </section>

          {/* Section: Ideation & Mapping */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Ideation Process</h3>
            <div className="case-study-body">
              <p>
                I began my journey with **Workflowy** to lay down an outline of everything I wanted to showcase—experience levels, core services, and structural information architecture. 
              </p>
              <p>
                From there, I moved into **Whimsical** to map user flows. I analyzed how a potential client or hiring manager would navigate my work: they want fast access to high-density layouts, clear project outcomes, and minimal distraction. I designed a split-column overview system for the home page, giving immediate biographical context on the left, while maintaining an interactive project gallery on the right.
              </p>
            </div>
          </section>

          {/* Section: Color Theory */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">The Color Palette Theory</h3>
            <div className="case-study-body">
              <p>
                For the visual design, I chose an editorial, high-end design aesthetic. I wanted the site to feel like a premium, physical monographic book:
              </p>
              <ul>
                <li>
                  <strong>Light Mode: Physical Print Aesthetics</strong><br/>
                  I structured Light Mode around a clean canvas feel. The background is a soft, warm off-white that prevents eye fatigue while matching the pages of physical design journals. Text elements use deep charcoal instead of pure black for a softer, more readable contrast, paired with slate-gray secondary metadata.
                </li>
                <li>
                  <strong>Dark Mode: Pure Obsidian Workspace</strong><br/>
                  I engineered Dark Mode as a dark obsidian workspace. Instead of standard gray dark modes, the primary background shifts to a pure obsidian black (`#0f0f0f`), creating an infinite depth effect. Content cards employ a slightly lighter slate-obsidian mix, making them float cleanly over the base background.
                </li>
                <li>
                  <strong>Accent Orange (`#ff8f57`)</strong><br/>
                  To tie the two modes together, I selected a single vibrant accent color—a warm, glowing sunset orange. This color acts as my primary call-to-action anchor. It stands out sharply in both light and dark modes, indicating interactive elements, active pagination counts, and hover transitions like the Buffalo case study statuses.
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Dark Mode & Responsiveness */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Dark Mode & Responsive Architecture</h3>
            <div className="case-study-body">
              <p>
                I engineered the theme system dynamically using custom CSS variables mapped to the HTML `data-theme` attribute. Clicking the header's theme toggle triggers a localized hook that updates the DOM instantly, allowing color variables to swap with a smooth `0.3s` fade transition.
              </p>
              <p>
                To handle mobile responsiveness, I designed a fluid mobile layout that restructures the split columns. On desktop, the Home page uses a split flexbox layout (bio overview on the left, work grid on the right) keeping the user anchored as they scroll. On mobile, the viewport collapses into a linear vertical layout. The overview section anchors itself at the top as an introduction card, and the work cards scale to a clean single-column layout. 
              </p>
              <p>
                Similarly, the main navigation links collapse on mobile into a responsive sliding side panel, triggered by a hamburger menu icon, ensuring that navigation is thumb-friendly and does not clutter the screen space.
              </p>
            </div>
          </section>

          {/* Section: AI Collaboration */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">The AI Cohort: Claude & Antigravity</h3>
            <div className="case-study-body">
              <p>
                To bring the designs to life, I formed an AI design-to-code workflow:
              </p>
              <ul>
                <li>
                  <strong>Claude</strong> served as my structural architecture advisor. We brainstormed clean component modularity, outlined path structures, and mapped the data models for projects.
                </li>
                <li>
                  <strong>Antigravity</strong> was my direct implementation partner. Through dozens of iterations, we built and refined components: transitioning from Framer-hosted placeholders to high-fidelity local React elements, implementing theme toggling, adding interactive modals, and optimizing performance.
                </li>
              </ul>
              <p>
                One highlight of this collaboration was the introduction of auditory feedback. Using the **Web Audio API**, we synthesized custom hover chime sounds dynamically in the browser, catching autoplay policy constraints silently and playing only after a user gesture.
              </p>
            </div>
          </section>

          {/* Section: Site Map */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Information Architecture</h3>
            <div className="case-study-body">
              <p>
                Here is the sitemap of the portfolio platform, detailing the flow of routing and dynamic view states:
              </p>
              
              {/* Custom Styled CSS Sitemap */}
              <div className="custom-sitemap-container" style={{
                background: 'var(--hover-bg)',
                borderRadius: '8px',
                padding: '24px',
                marginTop: '16px',
                border: '1px solid var(--border-color)',
                fontFamily: 'var(--font-sans)'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                  
                  {/* Root Node */}
                  <div style={{
                    background: 'var(--text-primary)',
                    color: 'var(--bg-primary)',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontWeight: '600',
                    fontSize: '13px',
                    letterSpacing: '0.5px'
                  }}>
                    ROOT (/)
                  </div>
                  
                  <div style={{ width: '2px', height: '20px', background: 'var(--border-color)' }}></div>
                  
                  {/* First Level Children */}
                  <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', gap: '12px', flexWrap: 'wrap' }}>
                    
                    {/* Home Route Block */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1', minWidth: '160px' }}>
                      <div style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        fontWeight: '600',
                        fontSize: '12px',
                        textAlign: 'center',
                        width: '100%'
                      }}>
                        Home Page (/)
                      </div>
                      <div style={{ width: '2px', height: '16px', background: 'var(--border-color)' }}></div>
                      <div style={{
                        background: 'var(--hover-bg)',
                        border: '1px dashed var(--border-color)',
                        padding: '8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        color: 'var(--text-secondary)',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px'
                      }}>
                        <div>• Overview & Intro</div>
                        <div>• Selected Work Cards</div>
                        <div>• Buffalo Module List</div>
                        <div>• Interactive Theme Toggle</div>
                      </div>
                    </div>

                    {/* Work Route Block */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1', minWidth: '160px' }}>
                      <div style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        fontWeight: '600',
                        fontSize: '12px',
                        textAlign: 'center',
                        width: '100%'
                      }}>
                        Work (/work)
                      </div>
                      <div style={{ width: '2px', height: '16px', background: 'var(--border-color)' }}></div>
                      <div style={{
                        background: 'var(--hover-bg)',
                        border: '1px dashed var(--border-color)',
                        padding: '8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        color: 'var(--text-secondary)',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px'
                      }}>
                        <div>• Assets Case Study</div>
                        <div>• Ton-Kilometres</div>
                        <div>• Lagos Revenue Portal</div>
                        <div>• XND V2.0 & Techpay</div>
                        <div>• My Design Portfolio</div>
                      </div>
                    </div>

                    {/* About Route Block */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1', minWidth: '160px' }}>
                      <div style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        fontWeight: '600',
                        fontSize: '12px',
                        textAlign: 'center',
                        width: '100%'
                      }}>
                        About (/about)
                      </div>
                      <div style={{ width: '2px', height: '16px', background: 'var(--border-color)' }}></div>
                      <div style={{
                        background: 'var(--hover-bg)',
                        border: '1px dashed var(--border-color)',
                        padding: '8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        color: 'var(--text-secondary)',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px'
                      }}>
                        <div>• Biography Section</div>
                        <div>• Core Methodologies</div>
                        <div>• Tech Stack Matrix</div>
                        <div>• Resume Downloads</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Section: Revisions */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Revisions & Execution Details</h3>
            <div className="case-study-body">
              <p>
                My process values feedback loops. Throughout development, I refined key features based on live testing:
              </p>
              <ul>
                <li>
                  <strong>Typography Scale</strong>: Adjusted typography settings dynamically, moving case study titles to `34px` with a lighter `500` weight, and section titles to `14px` uppercase with generous tracking to convey elegance and structure.
                </li>
                <li>
                  <strong>Modals & Media</strong>: Upgraded external links to trigger custom-designed navigation confirmation modals, keeping users anchored to the site context while opening projects in new tabs.
                </li>
                <li>
                  <strong>Asset Optimization</strong>: Substituted static placeholders with optimized WebM loops and local high-fidelity mockups (e.g., in the XND case study dashboard gallery).
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Visual Gallery */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Page Snapshots</h3>
            <div className="case-study-body">
              <p>
                Below are the snapshots of my portfolio showing layout densities, typography hierarchies, and dark-mode structures across different states:
              </p>
            </div>

            {/* Mode Tab Switcher */}
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              marginBottom: '24px', 
              marginTop: '16px',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '8px'
            }}>
              <button 
                onClick={() => setActiveGalleryTab('light')}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: activeGalleryTab === 'light' ? '2px solid var(--accent)' : '2px solid transparent',
                  padding: '8px 16px',
                  fontWeight: '600',
                  fontSize: '13px',
                  color: activeGalleryTab === 'light' ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  cursor: 'pointer',
                  outline: 'none',
                  letterSpacing: '0.5px'
                }}
              >
                LIGHT MODE
              </button>
              <button 
                onClick={() => setActiveGalleryTab('dark')}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: activeGalleryTab === 'dark' ? '2px solid var(--accent)' : '2px solid transparent',
                  padding: '8px 16px',
                  fontWeight: '600',
                  fontSize: '13px',
                  color: activeGalleryTab === 'dark' ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  cursor: 'pointer',
                  outline: 'none',
                  letterSpacing: '0.5px'
                }}
              >
                DARK MODE
              </button>
            </div>
            
            {activeGalleryTab === 'light' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                
                {/* Homepage Section */}
                <div className="case-study-responsive-showcase">
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>HOMEPAGE DESKTOP (LIGHT)</h4>
                    <div style={{ border: '1px solid var(--border-color)', borderRadius: '6px', overflow: 'hidden' }}>
                      <img src="/homepage_snapshot.png" alt="Homepage Desktop Light" style={{ width: '100%', display: 'block' }} />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>HOMEPAGE MOBILE (LIGHT)</h4>
                    <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', background: 'var(--bg-secondary)', padding: '6px' }}>
                      <img src="/homepage_mobile_snapshot.png" alt="Homepage Mobile Light" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
                    </div>
                  </div>
                </div>

                {/* Selected Work Archive */}
                <div className="case-study-responsive-showcase">
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>WORK GRID DESKTOP (LIGHT)</h4>
                    <div style={{ border: '1px solid var(--border-color)', borderRadius: '6px', overflow: 'hidden' }}>
                      <img src="/work_snapshot.png" alt="Work Archive Desktop Light" style={{ width: '100%', display: 'block' }} />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>WORK GRID MOBILE (LIGHT)</h4>
                    <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', background: 'var(--bg-secondary)', padding: '6px' }}>
                      <img src="/work_mobile_snapshot.png" alt="Work Archive Mobile Light" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
                    </div>
                  </div>
                </div>

                {/* About Profile Section */}
                <div className="case-study-responsive-showcase">
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>ABOUT DESKTOP (LIGHT)</h4>
                    <div style={{ border: '1px solid var(--border-color)', borderRadius: '6px', overflow: 'hidden' }}>
                      <img src="/about_snapshot.png" alt="About Section Desktop Light" style={{ width: '100%', display: 'block' }} />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>ABOUT MOBILE (LIGHT)</h4>
                    <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', background: 'var(--bg-secondary)', padding: '6px' }}>
                      <img src="/about_mobile_snapshot.png" alt="About Section Mobile Light" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                
                {/* Homepage Section */}
                <div className="case-study-responsive-showcase">
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>HOMEPAGE DESKTOP (DARK)</h4>
                    <div style={{ border: '1px solid var(--border-color)', borderRadius: '6px', overflow: 'hidden' }}>
                      <img src="/homepage_dark_snapshot.png" alt="Homepage Desktop Dark" style={{ width: '100%', display: 'block' }} />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>HOMEPAGE MOBILE (DARK)</h4>
                    <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', background: 'var(--bg-secondary)', padding: '6px' }}>
                      <img src="/homepage_mobile_dark_snapshot.png" alt="Homepage Mobile Dark" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
                    </div>
                  </div>
                </div>

                {/* Selected Work Archive */}
                <div className="case-study-responsive-showcase">
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>WORK GRID DESKTOP (DARK)</h4>
                    <div style={{ border: '1px solid var(--border-color)', borderRadius: '6px', overflow: 'hidden' }}>
                      <img src="/work_dark_snapshot.png" alt="Work Archive Desktop Dark" style={{ width: '100%', display: 'block' }} />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>WORK GRID MOBILE (DARK)</h4>
                    <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', background: 'var(--bg-secondary)', padding: '6px' }}>
                      <img src="/work_mobile_dark_snapshot.png" alt="Work Archive Mobile Dark" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
                    </div>
                  </div>
                </div>

                {/* About Profile Section */}
                <div className="case-study-responsive-showcase">
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>ABOUT DESKTOP (DARK)</h4>
                    <div style={{ border: '1px solid var(--border-color)', borderRadius: '6px', overflow: 'hidden' }}>
                      <img src="/about_dark_snapshot.png" alt="About Section Desktop Dark" style={{ width: '100%', display: 'block' }} />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>ABOUT MOBILE (DARK)</h4>
                    <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', background: 'var(--bg-secondary)', padding: '6px' }}>
                      <img src="/about_mobile_dark_snapshot.png" alt="About Section Mobile Dark" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
                    </div>
                  </div>
                </div>

              </div>
            )}
          </section>

        </main>
      </div>

      {/* Bottom Navigation */}
      <footer className="case-study-nav">
        <Link to="/selected-work/moniehub" className="case-study-nav-btn prev">
          <span className="case-study-nav-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </span>
          <span className="case-study-nav-title">Moniehub</span>
        </Link>
        <Link to="/selected-work/assets" className="case-study-nav-btn next">
          <span className="case-study-nav-title">The Buffalo Project</span>
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
        projectUrl="https://github.com/odunayofalade"
        projectName="My Design Portfolio codebase"
      />
    </div>
  );
}
