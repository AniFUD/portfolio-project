import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLinkModal from '../../components/ExternalLinkModal';

export default function AssetsCaseStudy() {
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
        <h1 className="case-study-title">Assets: A Flexible Solution for Asset Tracking</h1>
      </header>

      {/* Hero Image */}
      <div className="case-study-hero-img-box">
        <img 
          src="https://framerusercontent.com/images/W87NFVxe7JuGBfW0n781qpEcXSw.png?width=1600" 
          alt="The Buffalo Project Assets Hero Mockup" 
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
              <li>User Research & Workflow</li>
              <li>Information Architecture</li>
              <li>UX & UI Design</li>
            </ul>
          </div>
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">Team & Partners</h4>
            <ul className="case-study-sidebar-list">
              <li><strong>Osazuwa Ero-Uwagie</strong><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>Engineer</span></li>
              <li style={{marginTop:'8px'}}><strong>Eseavworho Akpevwe</strong><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>Engineer</span></li>
              <li style={{marginTop:'8px'}}><strong>Debbie Fernandes & Marco Moreira</strong><br/><span style={{fontSize:'13px', color:'var(--text-tertiary)'}}>Consultants</span></li>
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
                I designed the Asset Management module from research to delivery, working with engineers Osazuwa Ero-Uwagie & Eseavworho Akpevwe, consultants Debbie Fernandes and Marco Moreira, and manager David Akor, to align with ABC x Trustpointly’s operational goals.
              </p>
            </div>
          </section>

          {/* Section: Background */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Background</h3>
            <div className="case-study-body">
              <p>
                 The Buffalo Project is ABC x Trustpointly’s internal automation hub, connecting all their key business units like trading, logistics, finance, operations and more into one streamlined platform.
              </p>
              <p>
                The Assets module was developed to provide a unified, reliable, and scalable way to track, monitor, and manage all company assets within ABC x Trustpointly. From field equipment and vehicles to digital resources and storage tanks, the platform enables end-to-end oversight of asset lifecycles. This centralization reduces operational silos, ensures data consistency, and equips teams with real-time information to make informed decisions.
              </p>
            </div>
          </section>

          {/* Section: Context & Problem */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Context & Problem</h3>
            <div className="case-study-body">
              <p>
                Before this module, asset tracking processes were inconsistent across business units. Field operators used paper logs or isolated spreadsheets, and managers relied on periodic reports that were often outdated by the time they were compiled. This lack of synchronization led to:
              </p>
              <ul style={{marginLeft: '20px', marginTop: '8px'}}>
                <li>Assets being misplaced or underutilized.</li>
                <li>Duplicate purchases due to incomplete records.</li>
                <li>Delays in maintenance scheduling.</li>
                <li>Reduced operational efficiency during scaling.</li>
              </ul>
            </div>
          </section>

          {/* Section: The Solution */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">The Solution</h3>
            <div className="case-study-body">
              <p>
                We had multiple sessions with members of staff across all the departments, especially staff members that interact with assets on a daily basis, to better understand how they use these assets, request for new ones, and put them up for repair or replacement. These sessions helped us immensely; they were led by consultants Marco and Debbie, and their work helped the team and I come up with the eventual solution.
              </p>
              <p>
                Before that, however, due to ABC x Trustpointly's unique business model and structure, it was imperative that we designed a system that was flexible enough to handle all kinds of assets and edge cases. A one-size-fits all way of adding, logging, and tracking assets—this proved to be the most challenging bit of the entire design process, especially with the constraints we had, one of which was a really short turnaround time.
              </p>
              <p>
                We realized not long into the process that the quickest way to building this flexible solution we envisioned wasn't going to be easy, since we had to first take inventory of all the assets on record, and then log and tag the ones that weren't. This meant working closely with all the business units, departments, and divisions, and doing the logging process. The team alongside Marco & Debbie fashioned a template, an Excel spreadsheet to help enumerate all the assets for each unit. This process was difficult because the units in question also had their primary responsibilities to get to, and so had a limited window to help compile the asset register. We got it done in the end.
              </p>
              <p>
                The design prioritized speed and clarity, allowing users to perform common actions without navigating away from their current view. From any asset listing, users can update the asset’s condition, assign it to a department, or schedule maintenance in just a few clicks. This reduces the time spent moving between screens and keeps workflows efficient.
              </p>
            </div>
          </section>

          {/* Section: Dashboard */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Dashboard & Overview</h3>
            <div className="case-study-body">
              <p>
                The dashboard acts as the operational hub of the module, giving users a high-level overview of asset health, recent changes, and upcoming maintenance. Designed to surface only the most critical information, it allows managers to make decisions at a glance without wading through large datasets. Visual status indicators and concise metrics ensure that urgent issues are immediately visible.
              </p>
            </div>
            <div className="case-study-gallery">
              <div className="case-study-gallery-img-box full">
                <img 
                  src="https://framerusercontent.com/images/iYyHmJOeLFOJNGmZk4IIeKUf4.png?width=1200" 
                  alt="Dashboard Overview Mockup" 
                  className="case-study-gallery-img"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Section: Directory */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Assets Directory</h3>
            <div className="case-study-body">
              <p>
                The directory provides a structured, searchable list of all registered assets. Each entry includes its name, image, unique identifier, product, category, and location. A combination of sorting controls and filter panels allows users to quickly find relevant items, whether they are locating a single piece of equipment or reviewing an entire category.
              </p>
            </div>
            <div className="case-study-gallery">
              <div className="case-study-gallery-img-box full">
                <img 
                  src="https://framerusercontent.com/images/SOzD2o9isodSpnxyk3mJPYfPc6Q.png?width=1200" 
                  alt="Assets Directory Mockup" 
                  className="case-study-gallery-img"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Section: Products */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Products & Components</h3>
            <div className="case-study-body">
              <p>
                One of the features that allowed us to create the flexibility we envisioned is 'Products'; Products represent the model, build, or make of any given asset. We realized that we had multiple units of the same asset, so during asset creation, users would have to recreate the same asset details multiple times, allowing for errors.
              </p>
              <p>
                Products allowed us to create one instance of the asset model details (e.g. Dell Latitude 5320). If there are 53 units of this laptop, instead of registering the model details 53 times, the user registers the product once and then maps a singular unit to that product, entering only its unique Serial Number/ID.
              </p>
            </div>
            <div className="case-study-gallery">
              <div className="case-study-gallery-row">
                <div className="case-study-gallery-img-box">
                  <img src="https://framerusercontent.com/images/CHC5af4AtgdeeKUNwSMaJqVto.png?width=800" alt="Products Listing" className="case-study-gallery-img" loading="lazy" />
                </div>
                <div className="case-study-gallery-img-box">
                  <img src="https://framerusercontent.com/images/28QlrgWZeRqgmqKdyAPNlpMhDfE.png?width=800" alt="Asset Details Page" className="case-study-gallery-img" loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          {/* Section: Integration */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Integration with The Buffalo Project Platform</h3>
            <div className="case-study-body">
              <p>
                The Asset Management module is deeply connected to the rest of The Buffalo Project platform, allowing asset-related updates to flow automatically to other operational areas. For example, moving a vehicle asset may update its location and status in Maintenance, Procurement, Finance, and others, ensuring that stock and equipment availability reflect the current state of operations.
              </p>
              <p>
                These connections eliminate the need for duplicate data entry and ensure that all modules work from the same source of truth. In practice, these integrations mean that a single update in Asset Management can trigger operational adjustments elsewhere in the system, supporting a more responsive and coordinated workflow.
              </p>
            </div>
          </section>

          {/* Section: Results */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Results</h3>
            <div className="case-study-results-grid">
              <div className="case-study-result-card">
                <div className="case-study-result-val">35%</div>
                <div className="case-study-result-lbl">Increase in on-time maintenance after deployment</div>
              </div>
              <div className="case-study-result-card">
                <div className="case-study-result-val">25%</div>
                <div className="case-study-result-lbl">Reduction in duplicate asset purchases</div>
              </div>
              <div className="case-study-result-card">
                <div className="case-study-result-val">40%</div>
                <div className="case-study-result-lbl">Quicker average asset retrieval time</div>
              </div>
            </div>
          </section>

          {/* Section: Takeaways */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Takeaways</h3>
            <div className="case-study-body">
              <p>
                <strong>Operational understanding comes first.</strong> The project demonstrated the value of deeply understanding operational workflows and field constraints before committing to design decisions.
              </p>
              <p>
                <strong>Internal tools require balance.</strong> Building a tool for internal use meant balancing speed, usability, and integration within existing legacy procedures.
              </p>
              <p>
                <strong>Scalable foundations are assets.</strong> The result is a scalable, flexible foundation that can grow alongside ABC x Trustpointly’s expanding enterprise operations.
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
        <Link to="/selected-work/ton-kilometres" className="case-study-nav-btn next">
          <span className="case-study-nav-lbl">Next Project</span>
          <span className="case-study-nav-title">The Buffalo Project - Ton-Kilometres</span>
        </Link>
      </footer>

      <ExternalLinkModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectTitle="The Buffalo Project — Assets"
        externalUrl=""
        isInternal={true}
      />
    </div>
  );
}
