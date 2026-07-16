import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const buffaloModules = [
    { id: 'enumeration', name: 'ENUMERATION', year: '2025', active: false },
    { id: 'self-service', name: 'SELF SERVICE PORTAL', year: '2026', active: false },
    { id: 'admin-hub', name: 'ADMIN HUB', year: '2025', active: false },
    { id: 'tax-consultants', name: 'TAX CONSULTANTS', year: '2026', active: false },
    { id: 'revenue-consultants', name: 'REVENUE CONSULTANTS', year: '2025', active: false },
    { id: 'payment-providers', name: 'PAYMENT PROVIDERS', year: '2026', active: false },
    { id: 'tax-audit', name: 'TAX AUDIT', year: '2025', active: false },
    { id: 'bill-management', name: 'BILL MANAGEMENT', year: '2026', active: false },
    { id: 'assessment', name: 'ASSESSMENT', year: '2025', active: false },
    { id: 'objections', name: 'OBJECTIONS', year: '2026', active: false },
    { id: 'tax-returns', name: 'TAX RETURNS', year: '2025', active: false },
    { id: 'requests', name: 'REQUESTS', year: '2026', active: false },
    { id: 'revenue-management', name: 'REVENUE MANAGEMENT', year: '2025', active: false },
    { id: 'reporting', name: 'REPORTING', year: '2026', active: false },
    { id: 'tax-clearance', name: 'TAX CLEARANCE', year: '2025', active: false },
    { id: 'accounts', name: 'ACCOUNTS', year: '2026', active: false },
    { id: 'amendments', name: 'AMENDMENTS & REVERSALS', year: '2025', active: false },
    { id: 'audit-trail', name: 'AUDIT TRAIL', year: '2026', active: false },
    { id: 'payroll-management', name: 'PAYROLL MANAGEMENT', year: '2025', active: false },
    { id: 'taxpayer-services', name: 'TAXPAYER SERVICES', year: '2026', active: false }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(buffaloModules.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const currentItems = buffaloModules.slice(startIndex, startIndex + itemsPerPage);

  // Typewriter effect state and loop
  const words = ['engineers.', 'ideates.', 'creates.', 'transforms.', 'builds.', 'collaborates.', 'reimagines.'];
  const [wordIdx, setWordIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIdx];

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        // Organic human-like typing speed variation
        const typingSpeed = Math.random() * (130 - 70) + 70;
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Smooth pause at the end of word
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
      }
    } else {
      if (displayText.length > 0) {
        // Faster smooth deletion speed
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIdx]);

  return (
    <div className="split-content-wrapper fade-in-el">
      {/* Left Column: Overview */}
      <section className="split-overview">
        <div className="split-bio-card">
          <div className="split-avatar-container">
            <img
              src="/odun-avatar.png"
              alt="Odunayo Falade Profile"
              className="split-avatar"
            />
          </div>
          <h1 className="split-title">
            I'm Odunayo, a product designer <br />
            who <span className="typing-word">{displayText}</span>
            <span className="typing-cursor"></span>
          </h1>
          <div className="split-bio-text">
            <p>
              I'm a product designer who thrives in complexity — enterprise platforms, logistics dashboards, data-heavy tools. The kind of work where a good layout can save someone an hour a day.
            </p>
            <p>
              I've spent 5+ years leading end-to-end design as a sole contributor, turning tangled business problems into clear, usable products. Currently based in Lagos, Nigeria.
            </p>
            <p>
              Outside of work, I enjoy bouncing a basketball, a good book, movies and whatever else piques my interest.
            </p>
          </div>
        </div>
      </section>

      {/* Right Column: Selected Work */}
      <section className="split-works" id="selected-work-section">
        <h2 className="split-works-heading">SELECTED WORK</h2>
        <div className="split-works-grid">
          {/* Card 1: The Buffalo Project */}
          <Link to="/selected-work/assets" className="work-grid-card image-card">
            <div className="card-img-container">
              <video
                src="/buffalo_cover.webm"
                className="card-img"
                autoPlay
                loop
                muted
                playsInline
                style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="card-info">
              <h3 className="card-title">The Buffalo Project <span className="card-year">2026</span></h3>
              <p className="card-desc">Custom enterprise platform for tax administration and revenue management.</p>
            </div>
          </Link>

          {/* Card 2: Modules List with Pagination */}
          <div className="work-grid-card list-card">
            <div className="list-card-content">
              {currentItems.map((item, idx) => {
                const isLastItem = idx === currentItems.length - 1;
                if (item.active) {
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className={`list-card-item ${isLastItem ? 'last' : ''}`}
                    >
                      <span className="list-item-name">{item.name}</span>
                      <span className="list-item-year">
                        <span className="year-val">{item.year}</span>
                        <span className="coming-soon-val">COMING SOON</span>
                      </span>
                    </Link>
                  );
                } else {
                  return (
                    <div
                      key={item.id}
                      className={`list-card-item disabled ${isLastItem ? 'last' : ''}`}
                    >
                      <span className="list-item-name">{item.name}</span>
                      <span className="list-item-year">
                        <span className="year-val">{item.year}</span>
                        <span className="coming-soon-val">COMING SOON</span>
                      </span>
                    </div>
                  );
                }
              })}
            </div>

            {/* Pagination Controls */}
            <div className="list-card-pagination">
              <span className="pagination-info">
                PAGE {currentPage + 1} OF {totalPages}
              </span>
              <div className="pagination-buttons">
                <button
                  className="pagination-btn"
                  onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                  disabled={currentPage === 0}
                  aria-label="Previous Page"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button
                  className="pagination-btn"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                  disabled={currentPage === totalPages - 1}
                  aria-label="Next Page"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Lagos Revenue Portal */}
          <Link to="/selected-work/lagos-revenue-portal" className="work-grid-card image-card">
            <div className="card-img-container">
              <video
                src="/LRP_Cover_Motion.webm"
                className="card-img"
                autoPlay
                loop
                muted
                playsInline
                style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="card-info">
              <h3 className="card-title">Lagos Revenue Portal <span className="card-year">2024</span></h3>
              <p className="card-desc">Designing a unified digital gateway for taxpayer education, tax calculations, and revenue system access in Lagos State.</p>
            </div>
          </Link>

          {/* Card 4: XND */}
          <Link to="/selected-work/xnd" className="work-grid-card image-card">
            <div className="card-img-container">
              <video
                src="/XND_Cover_II.webm"
                className="card-img"
                autoPlay
                loop
                muted
                playsInline
                style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className="card-info">
              <h3 className="card-title">XND <span className="card-year">2025</span></h3>
              <p className="card-desc">A secure peer-to-peer exchange platform for safe USDT trading and instant gift card conversion.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
