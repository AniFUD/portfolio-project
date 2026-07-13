import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function About() {
  const [activeMedia, setActiveMedia] = useState(null);
  const backgroundVideoRef = useRef(null);

  useEffect(() => {
    if (backgroundVideoRef.current) {
      if (activeMedia) {
        backgroundVideoRef.current.pause();
      } else {
        backgroundVideoRef.current.play().catch(err => {
          // Ignore interruption errors from autoplay policy
          console.log('Video autoplay interrupted:', err);
        });
      }
    }
  }, [activeMedia]);

  return (
    <div className="fade-in-el">
      {/* About Header Section */}
      <section className="about-header-section">
        <div className="about-avatar-container">
          <img
            src="/odun-avatar.png"
            alt="Odunayo Falade"
            className="about-avatar-img"
          />
        </div>
        <h1 className="about-main-heading">Hello! Odunayo here.</h1>
        <div className="about-intro-body">
          <p className="about-intro-p">
            Software fascinates me; especially how they come to be on our screens. And that’s possible because of design. So, I help build softwares through design.
          </p>
          <p className="about-intro-p">
            After over 5 years as both the sole designer and as a part of design teams, I've learned that good design isn't about making things pretty - it's about making information accessible and decisions easier.
          </p>
          <p className="about-intro-p">
            When I'm not pushing pixels or joining work syncs, you'll find me watching sports, lost in a book, listening to music, or on pinterest, adding new pins.
          </p>
        </div>
      </section>

      {/* Profile Photo Collage */}
      <section className={`about-collage ${activeMedia ? 'lightbox-active' : ''}`}>
        <div
          className="about-collage-img-box large"
          onClick={() => setActiveMedia({ type: 'video', src: '/Recreation.mp4' })}
        >
          <video
            ref={backgroundVideoRef}
            src="/Recreation.mp4"
            className="about-collage-img"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div
          className="about-collage-img-box"
          onClick={() => setActiveMedia({ type: 'image', src: '/about-middle.jpg' })}
        >
          <img
            src="/about-middle.jpg"
            alt="Designer collage photo 2"
            className="about-collage-img"
            loading="lazy"
          />
        </div>
        <div
          className="about-collage-img-box"
          onClick={() => setActiveMedia({ type: 'image', src: '/about-last.jpg' })}
        >
          <img
            src="/about-last.jpg"
            alt="Designer collage photo 3"
            className="about-collage-img"
            loading="lazy"
          />
        </div>
      </section>

      {/* Lightbox Overlay */}
      {activeMedia && createPortal(
        <div className="lightbox-overlay" onClick={() => setActiveMedia(null)}>
          <button className="lightbox-close" onClick={() => setActiveMedia(null)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {activeMedia.type === 'video' ? (
              <video
                src={activeMedia.src}
                className="lightbox-media video-media"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={activeMedia.src}
                className="lightbox-media image-media"
                alt="Expanded View"
              />
            )}
          </div>
        </div>,
        document.body
      )}

      {/* Grid of Sections */}
      <section className="about-sections">
        {/* How I Work */}
        <div className="about-section-card full-width">
          <h3 className="about-section-heading">How I work</h3>
          <div className="about-section-body">
            <p style={{ marginBottom: '16px' }}>
              I love solving problems that matter. Whether it's simplifying complex enterprise workflows, designing intuitive digital products, or building scalable design systems, I'm driven by the challenge of making things work better; for users and businesses. My approach starts with understanding the problem before exploring solutions. I rely on first-principles thinking, asking the right questions, challenging assumptions, and using research and data to uncover the root cause rather than treating symptoms.
            </p>
            <p style={{ marginBottom: '16px' }}>
              I collaborate with my team members and stakeholders to deliver a solution that truly meets the needs of the users, and achieves the business’ goals. I love working with and in systems, so I’m able to organize my findings after brainstorming.
            </p>
            <p>
              My design process usually starts with research and brainstorming, but it's rarely linear. Every project is different, and every challenge teaches me something new. I see each opportunity as a chance to learn, improve, and create products that make a real difference.
            </p>
          </div>
        </div>

        {/* Competencies */}
        <div className="about-section-card">
          <h3 className="about-section-heading">What I’m good at</h3>
          <ul className="about-skills-list">
            <li className="about-skill-badge">User Interface Design</li>
            <li className="about-skill-badge">Experience Design</li>
            <li className="about-skill-badge">Product Strategy</li>
            <li className="about-skill-badge">User Workflow</li>
            <li className="about-skill-badge">User Research</li>
            <li className="about-skill-badge">Information Architecture</li>
            <li className="about-skill-badge">Market Research</li>
          </ul>
        </div>

        {/* Drivers */}
        <div className="about-section-card">
          <h3 className="about-section-heading">What drives me</h3>
          <div className="about-section-body">
            <p>
              I find myself asking "why?" more often than most people. Why do users struggle here? Why was this decision made? Why does this process exist? That habit of questioning has shaped the way I approach both life and design. I'm constantly learning from books, conversations, products I use, and the people I work with; and every new insight becomes another tool I can use to build better experiences.
            </p>
          </div>
        </div>

        {/* My Interests */}
        <div className="about-section-card full-width">
          <h3 className="about-section-heading">My interests</h3>
          <div className="about-interests-list">
            <div className="about-interest-item">
              <strong>Sports</strong>
              <span>Football (Real Madrid), Basketball, Tennis, Volleyball... I love sports.</span>
            </div>
            <div className="about-interest-item">
              <strong>Movies & Movies</strong>
              <span>Yeah I love movies and TV shows (anywhere I can find a good story and plot). Music is the pathway to the soul (I listen to everything I can).</span>
            </div>
            <div className="about-interest-item">
              <strong>Reading</strong>
              <span>Comics, Articles, Fiction, Non-fiction, if it’s good, I’m there!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wanna Chat block */}
      <section className="about-chat-block">
        <h3 className="about-chat-title">Wanna chat?</h3>
        <p className="about-chat-desc">
          I’m available via email if you have an exciting idea you’d like to discuss or share some never before seen theories about lost civilizations. I’m excited to see what you find!
        </p>
        <div className="about-chat-links">
          <a href="https://www.linkedin.com/in/odunayo-falade/" target="_blank" rel="noopener noreferrer" className="about-chat-link">
            LinkedIn
          </a>
          <a href="https://dribbble.com/odunayofalade" target="_blank" rel="noopener noreferrer" className="about-chat-link">
            Dribbble
          </a>
        </div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-secondary)', marginTop: '16px' }}>
          Email: <a href="mailto:odun.designer@gmail.com" style={{ color: 'inherit', fontWeight: '600' }}>odun.designer@gmail.com</a>
        </p>
      </section>
    </div>
  );
}
