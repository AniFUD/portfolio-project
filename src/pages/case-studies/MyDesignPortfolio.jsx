import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLinkModal from '../../components/ExternalLinkModal';

export default function MyDesignPortfolio() {
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
        <span className="case-study-eyebrow">Personal Project - Portfolio Development</span>
        <h1 className="case-study-title">Design Portfolio: Architecting a living digital archive through AI-assisted product design and front-end engineering</h1>
      </header>

      {/* Hero Image */}
      <div className="case-study-hero-img-box" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', aspectRatio: '9072 / 5616' }}>
        <img 
          src="/portfolio_cover.png" 
          alt="Design Portfolio Hero Mockup" 
          className="case-study-hero-img"
          style={{ objectPosition: 'center', objectFit: 'cover' }}
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
              <li><a href="https://workflowy.com" target="_blank" rel="noopener noreferrer" className="case-study-sidebar-link">Workflowy</a><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>Outlining & Site Map</span></li>
              <li style={{marginTop:'8px'}}><a href="https://whimsical.com" target="_blank" rel="noopener noreferrer" className="case-study-sidebar-link">Whimsical</a><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>User Flows & Wireframes</span></li>
              <li style={{marginTop:'8px'}}><a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="case-study-sidebar-link">Claude</a><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>Architecture Design Partner</span></li>
              <li style={{marginTop:'8px'}}><a href="https://deepmind.google" target="_blank" rel="noopener noreferrer" className="case-study-sidebar-link">Antigravity</a><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>AI Pair Programmer & Builder</span></li>
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
                  <strong>Claude</strong> served as my structural architecture advisor. I brainstormed clean component modularity, outlined path structures, and mapped the data models for projects.
                </li>
                <li>
                  <strong>Antigravity</strong> was my direct implementation partner. Through dozens of iterations, I built and refined components: transitioning from Framer-hosted placeholders to high-fidelity local React elements, implementing theme toggling, adding interactive modals, and optimizing performance.
                </li>
              </ul>
              <p>
                One highlight of this collaboration was the introduction of auditory feedback. Using the **Web Audio API**, I synthesized custom hover chime sounds dynamically in the browser, catching autoplay policy constraints silently and playing only after a user gesture.
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
              <div className="sitemap-container">
                <div className="sitemap-tree">
                  
                  {/* Root Node */}
                  <div className="sitemap-root">
                    ROOT (/)
                  </div>
                  
                  <div className="sitemap-line"></div>
                  
                  {/* First Level Children */}
                  <div className="sitemap-branches">
                    
                    {/* Home Route Block */}
                    <div className="sitemap-branch">
                      <div className="sitemap-node">
                        Home Page (/)
                      </div>
                      <div className="sitemap-subline"></div>
                      <div className="sitemap-leaves">
                        <div>• Overview & Intro</div>
                        <div>• Selected Work Cards</div>
                        <div>• Buffalo Module List</div>
                        <div>• Interactive Theme Toggle</div>
                      </div>
                    </div>

                    {/* Work Route Block */}
                    <div className="sitemap-branch">
                      <div className="sitemap-node">
                        Work (/work)
                      </div>
                      <div className="sitemap-subline"></div>
                      <div className="sitemap-leaves">
                        <div>• The Buffalo Project</div>
                        <div>• Lagos Revenue Portal</div>
                        <div>• XND V2.0</div>
                        <div>• Techpay</div>
                        <div>• Moniehub</div>
                        <div>• Design Portfolio</div>
                      </div>
                    </div>

                    {/* About Route Block */}
                    <div className="sitemap-branch">
                      <div className="sitemap-node">
                        About (/about)
                      </div>
                      <div className="sitemap-subline"></div>
                      <div className="sitemap-leaves">
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

          {/* Section: Prompt & Loop Engineering */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Prompt & Loop Engineering</h3>
            <div className="case-study-body">
              <p>
                Building a modern portfolio platform from scratch is more than writing code—it is an exercise in recursive prompt and loop engineering. Working in tandem with AI agents, I treated the engineering lifecycle as a dynamic feedback loop. Instead of expecting immediate, static outputs from simple prompts, I structured development around <strong>multi-turn refining loops</strong>.
              </p>
              <p>
                Each interaction with the AI was evaluated against visual prototypes and user requirements. This cycle—designing, prompting, auditing code, checking rendering states, and running refactoring passes—was repeated dozens of times. I focused on micro-level adjustments: aligning card margins, structuring CSS tokens, configuring theme-switching states, and balancing layout offsets. By utilizing active review sessions, I identified discrepancies in the UI, adjusted the instructions, and re-executed until the layout looked premium and balanced.
              </p>
            </div>
          </section>

          {/* Section: Component Architecture & Code Snapshots */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Code Snapshots & Design Intent</h3>
            <div className="case-study-body">
              <p>
                To achieve high visual and interactive excellence, I wrote custom components to handle dynamic site states. Below are the key snapshots of code and what I set out to achieve with them:
              </p>

              <h4 style={{ marginTop: '24px', fontSize: '15px', color: 'var(--text-primary)' }}>1. Dynamic Web Audio Chime Synthesizer</h4>
              <p>
                <strong>Intent:</strong> Standard audio elements are heavy and suffer from loading lag. Instead, I wanted to synthesize clean, lightweight mechanical chime sounds directly in the browser using the Web Audio API. The challenge was preventing browser policy blocks on autoplay prior to user interaction.
              </p>
              <pre style={{
                background: 'var(--hover-bg)',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                overflowX: 'auto',
                fontSize: '13px',
                fontFamily: 'monospace',
                marginTop: '12px',
                color: 'var(--text-secondary)'
              }}>
{`let audioCtx = null;

const playTickSound = () => {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.08);
    
    gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);
  } catch (err) {
    // Suppress errors (like AudioContext blocked by autoplay)
  }
};`}
              </pre>

              <h4 style={{ marginTop: '24px', fontSize: '15px', color: 'var(--text-primary)' }}>2. Tactical Bottom Navigation & Sliding Hover States</h4>
              <p>
                <strong>Intent:</strong> For the case study footer, I designed a balanced, split-card layout with arrows and titles aligned on opposite ends. On hover, the arrow shifts dynamically along the X-axis while the card lifts vertically and expands a soft shadow.
              </p>
              <pre style={{
                background: 'var(--hover-bg)',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                overflowX: 'auto',
                fontSize: '13px',
                fontFamily: 'monospace',
                marginTop: '12px',
                color: 'var(--text-secondary)'
              }}>
{`/* Bottom Case Study Navigation */
.case-study-nav-btn {
  flex: 1;
  display: flex;
  align-items: center;
  text-decoration: none;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.3s ease;
}

.case-study-nav-btn:hover {
  background: var(--bg-secondary);
  border-color: var(--border-color);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.case-study-nav-btn.prev:hover .case-study-nav-arrow {
  transform: translateX(-4px);
  color: var(--accent);
}`}
              </pre>

              <h4 style={{ marginTop: '24px', fontSize: '15px', color: 'var(--text-primary)' }}>3. Failsafe Theme Switching Hook</h4>
              <p>
                <strong>Intent:</strong> Ensure theme changes happen instantaneously, sync dynamically across multiple open pages, and persist across user browser sessions without flashes.
              </p>
              <pre style={{
                background: 'var(--hover-bg)',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                overflowX: 'auto',
                fontSize: '13px',
                fontFamily: 'monospace',
                marginTop: '12px',
                color: 'var(--text-secondary)'
              }}>
{`const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('portfolio-theme', newTheme);
};`}
              </pre>
            </div>
          </section>

          {/* Section: Reviews & Continuous Enhancement */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Continuous Feedback & Iterative Reviews</h3>
            <div className="case-study-body">
              <p>
                A high-fidelity portfolio is a living product that thrives on design critique. During this project's development, I actively gathered feedback from reviews. This testing helped me identify areas where the layout didn't feel balanced or the contrast was too harsh.
              </p>
              <p>
                For example, reviews highlighted that the initial hero mockup image aspect-ratio cropped out vital page navigation elements. I responded by changing the cover asset and tuning the box ratio to its native proportions, ensuring full visibility. Similarly, my sound volumes were initially too low; user testing guided me to scale the Web Audio synthesizer gain settings so the click feedback was audible and satisfying.
              </p>
              <p>
                This process of gathering review feedback, refining implementation plans, and making structural adjustments is ongoing. I will continue collecting user feedback, auditing responsiveness, and deploying continuous layout updates to maintain a state-of-the-art interactive experience.
              </p>
            </div>
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
        projectName="Design Portfolio codebase"
      />
    </div>
  );
}
