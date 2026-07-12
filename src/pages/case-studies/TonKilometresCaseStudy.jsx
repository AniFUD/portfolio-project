import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLinkModal from '../../components/ExternalLinkModal';

export default function TonKilometresCaseStudy() {
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
        <span className="case-study-eyebrow">ABC x Trustpointly - The Buffalo Project</span>
        <h1 className="case-study-title">Ton-Kilometres: Eliminating Daily Excel Struggles: Building Instant Logistics Performance Insights</h1>
      </header>

      {/* Hero Image */}
      <div className="case-study-hero-img-box">
        <img 
          src="https://framerusercontent.com/images/h2kdU9yBI0CIsaYeWdJNuIqRLwQ.png?width=1600" 
          alt="Ton-Kilometres Hero Mockup" 
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
              <li>User Research</li>
              <li>Data Visualization</li>
              <li>UX & UI Design</li>
              <li>Information Architecture</li>
            </ul>
          </div>
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">Team & Partners</h4>
            <ul className="case-study-sidebar-list">
              <li><strong>Osazuwa Ero-Uwagie</strong><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>Engineer</span></li>
              <li style={{marginTop:'8px'}}><strong>Eseavworho Akpevwe</strong><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>Engineer</span></li>
              <li style={{marginTop:'8px'}}><strong>David Akor</strong><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>Product Manager</span></li>
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
                I designed the experience and interface of this module, working closely with engineers Osazuwa Ero-Uwagie and Eseavworho Akpevwe under David Akor's guidance.
              </p>
              <p>
                We (the team) conducted stakeholder interviews with the logistics division to understand their challenges and data analysis needs. I designed the report visualizations, trip management workflows, and data entry forms.
              </p>
            </div>
          </section>

          {/* Section: Background */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Background</h3>
            <div className="case-study-body">
              <p>
                Tonne Kilometres is a standard unit of measurement used in the transport and logistics sector to quantify the volume of freight work performed. It is defined as the transportation of one (1) tonne of cargo or goods over a distance of one (1) kilometre:
              </p>
              <p style={{fontStyle:'italic', fontWeight:'600', padding:'12px', borderLeft:'3px solid var(--accent)', backgroundColor:'var(--bg-secondary)', margin:'12px 0'}}>
                Ton-km = Weight (Tonnes) &times; Distance (Kilometres)
              </p>
              <p>
                As a composite measure, it is a key indicator of efficiency and productivity in freight transport operations. At ABC x Trustpointly, the logistics division specifically used Excel spreadsheets to calculate and report this measure. Managers and officers alike entered and calculated ton-km values manually. They used the output from their calculations to make decisions on cargo delivery costs, internal business transfers between their plants, fleet allocation, route planning, and evaluating fuel consumption.
              </p>
            </div>
          </section>

          {/* Section: Context & Problem */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Context & Problem</h3>
            <div className="case-study-body">
              <p>
                Logistics managers were managing performance through complex Excel spreadsheets that required manual data entry, formula maintenance, and time-consuming compilation across multiple files for numerous business units.
              </p>
              <p>
                Teams tracked ton-kilometre metrics separately for internal inventory movements, Customers, and third-party logistics, with each requiring individual variance calculations and percentage achievement tracking against monthly targets.
              </p>
              <p>
                This Excel-based system required manual updates for different breakdowns: by location, by business channel, and by vehicle utilization categories. Prone to formula corruption and version control issues, reports were static and retrospective, meaning route optimization and fuel audits were always lagging.
              </p>
            </div>
          </section>

          {/* Section: The Solution */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">The Solution</h3>
            <div className="case-study-body">
              <p>
                We knew we’d be unable to completely eliminate the manual processes involved in collecting, calculating, and reporting on the ton kilometres for every transaction, so we elected to automate the ones we could, and make the data entry process easier.
              </p>
              <p>
                By having the users enter general information on the nature and key details of each transaction, The Buffalo Project would calculate the ton-km for them, save it for future reference, and generate reports automatically.
              </p>
              <p>
                The solution comprised of two main components: the input (Trips), and the output (the performance report).
              </p>
            </div>
          </section>

          {/* Section: Trips */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Trips Logging & Table</h3>
            <div className="case-study-body">
              <p>
                The Buffalo Project's users were accustomed to working with data tables from Excel, so it made sense to keep that familiar experience they were already comfortable with. We rolled out "Trips"—a way to log and view every cargo/freight transaction in a scannable format with built-in search and filtering capabilities: cargo type, truck type, payload pattern, destination, and dates.
              </p>
              <p>
                The form was split into two main sections: Truck details and Cargo information. In the payload pattern section, the user specifies the nature of the transaction:
              </p>
              <ul style={{marginLeft:'20px', marginTop:'8px'}}>
                <li><strong>Full Outbound - Empty Return</strong> (Truck leaves loaded, returns empty)</li>
                <li><strong>Empty Outbound - Load Return</strong> (Truck goes empty, returns loaded)</li>
                <li><strong>Deadhead only</strong> (Truck travels empty both ways for repositioning)</li>
              </ul>
              <p style={{marginTop:'12px'}}>
                Using integrations with the Assets module we built prior, The Buffalo Project knows every truck's tare weight (empty weight). The Buffalo Project sums this weight with the product quantity to get the gross weight, infers the distance from start/stop locations, and instantly calculates the ton-kilometre composite score.
              </p>
            </div>
            <div className="case-study-gallery">
              <div className="case-study-gallery-row">
                <div className="case-study-gallery-img-box">
                  <img src="https://framerusercontent.com/images/5bdcrPOqxTaOJT484TuntKvkQM.png?width=800" alt="Trip Entry Form" className="case-study-gallery-img" loading="lazy" />
                </div>
                <div className="case-study-gallery-img-box">
                  <img src="https://framerusercontent.com/images/dACYvKSEQCf4I3VTCQd0OI0q5Y.png?width=800" alt="Trip Detailed View Drawer" className="case-study-gallery-img" loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          {/* Section: Performance Report */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Performance Reports & Data Visualization</h3>
            <div className="case-study-body">
              <p>
                The report showcases how each truck and truck category fares against ABC x Trustpointly's expectations over weekly, monthly, quarterly, and yearly targets. The report dashboard was split into four major sections:
              </p>
              <ol style={{marginLeft:'20px', marginTop:'8px'}}>
                <li><strong>Summary:</strong> Real-time metrics across four key indicators: Total trips, Total tonnes moved, Total ton-km, and Average ton-km per trip.</li>
                <li><strong>Trips & Ton-km Trend Analysis:</strong> Identifies seasonal patterns and efficiency improvements.</li>
                <li><strong>Truck Type Performance:</strong> Evaluates internal fleets against outsourced third-party logistics.</li>
                <li><strong>Budget-Actual Breakdown:</strong> Visual performance indicators replacing manual Excel variance calculations, featuring interactive charts and hover ratings.</li>
              </ol>
            </div>
            <div className="case-study-gallery">
              <div className="case-study-gallery-img-box full">
                <img 
                  src="https://framerusercontent.com/images/11u7Ngqn56rg1R28dbDc8eVG8.png?width=1200" 
                  alt="Analytics Dashboard Performance Overview" 
                  className="case-study-gallery-img"
                  loading="lazy"
                />
              </div>
              <div className="case-study-gallery-row">
                <div className="case-study-gallery-img-box">
                  <img src="https://framerusercontent.com/images/ZY9Q3NT1OwyFErwzIXIcGHVu6k.png?width=800" alt="Trend Analysis Widget" className="case-study-gallery-img" loading="lazy" />
                </div>
                <div className="case-study-gallery-img-box">
                  <img src="https://framerusercontent.com/images/CoaLAOb9pFi6twtZChSJqDtc7c.png?width=800" alt="Budget Variance Breakdown" className="case-study-gallery-img" loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          {/* Section: Results */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Results</h3>
            <div className="case-study-results-grid">
              <div className="case-study-result-card">
                <div className="case-study-result-val">Real-time</div>
                <div className="case-study-result-lbl">Access to logistics insights, replacing legacy spreadsheets</div>
              </div>
              <div className="case-study-result-card">
                <div className="case-study-result-val">Location</div>
                <div className="case-study-result-lbl">Improved visibility and route tracking across multiple plants</div>
              </div>
              <div className="case-study-result-card">
                <div className="case-study-result-val">Immediate</div>
                <div className="case-study-result-lbl">Identification of underperforming routes, trucks, and payloads</div>
              </div>
            </div>
          </section>

          {/* Section: Takeaways */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Takeaways</h3>
            <div className="case-study-body">
              <p>
                <strong>Leverage mental models.</strong> Analyzing the spreadsheets revealed how users mentally organized operational information. This shaped layout decisions to match their cognitive patterns rather than imposing a completely new structure.
              </p>
              <p>
                <strong>Granular depth vs. simplification.</strong> I learned to balance operational efficiency with analytical depth, maintaining the granular data coordinators relied on while simplifying interactions and variance calculations for managers.
              </p>
            </div>
          </section>
        </main>
      </div>

      {/* Bottom Navigation */}
      <footer className="case-study-nav">
        <Link to="/selected-work/assets" className="case-study-nav-btn prev">
          <span className="case-study-nav-lbl">Previous Project</span>
          <span className="case-study-nav-title">The Buffalo Project - Assets</span>
        </Link>
        <Link to="/selected-work/lagos-revenue-portal" className="case-study-nav-btn next">
          <span className="case-study-nav-lbl">Next Project</span>
          <span className="case-study-nav-title">Lagos Revenue Portal</span>
        </Link>
      </footer>

      <ExternalLinkModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectTitle="The Buffalo Project — Ton-Kilometres"
        externalUrl=""
        isInternal={true}
      />
    </div>
  );
}
