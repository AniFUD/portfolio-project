import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLinkModal from '../../components/ExternalLinkModal';

export default function Funconnect() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="case-study-container fade-in-el">
      {/* Header Navigation */}
      <div className="case-study-nav-header">
        <Link to="/work" className="case-study-back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </Link>
        <button className="case-study-view-project-btn" onClick={() => setIsModalOpen(true)}>
          VIEW FIGMA FILE
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </button>
      </div>

      {/* Case Study Header */}
      <header className="case-study-title-block">
        <span className="case-study-eyebrow" style={{ color: '#7e7e7eff' }}>Social Booking & Planning</span>
        <h1 className="case-study-title">Funconnect: Designing a mobile ecosystem for local recreation and social event planning</h1>
      </header>

      {/* Hero Image */}
      <div className="case-study-hero-img-box" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', background: '#d3d3d3ff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="/Internal Cover.png"
          alt="Funconnect Mobile App Mockups"
          className="case-study-hero-img"
          style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
        />
      </div>

      {/* Content Grid */}
      <div className="case-study-content-grid">
        {/* Sidebar Metadata */}
        <aside className="case-study-sidebar">
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">Skills I contributed</h4>
            <ul className="case-study-sidebar-list">
              <li>Product Design & Strategy</li>
              <li>Information Architecture</li>
              <li>UX Research & Synthesis</li>
              <li>High-Fidelity UI Design</li>
              <li>Interactive Prototyping</li>
            </ul>
          </div>

          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">Core Sections</h4>
            <ul className="case-study-sidebar-list">
              <li>Home & Discovery</li>
              <li>User Feeds & Social Community</li>
              <li>Event Ticketing & Booking</li>
              <li>Collaborative Planner</li>
              <li>Dual Theme Interface System</li>
            </ul>
          </div>
        </aside>

        {/* Main Case Study Body */}
        <main className="case-study-main">
          {/* Section: Project Overview */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Project Overview</h3>
            <div className="case-study-body">
              <p>
                Planning social outings with friends is notoriously fragmented. People jump between messaging threads to debate ideas, search engines to check review ratings, map tools to coordinate driving routes, and ticketing apps to buy passes.
              </p>
              <p>
                To solve this, I designed <strong>Funconnect</strong>—a unified mobile application that bridges local discovery and cooperative group planning. I designed the entire product from the ground up, focusing on bridging the gap between social content and direct, actionable group itineraries.
              </p>
            </div>
          </section>

          {/* Section: Product Onboarding & Adaptive Themes */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Product Onboarding & Adaptive Themes</h3>
            <div className="case-study-body">
              <p>
                To welcome users and set an energetic, active tone, I designed a premium onboarding flow utilizing custom video loops. I built a flexible, native dual-theme system (supporting light mode and dark mode) to ensure perfect legibility, whether users explore outdoor locations in bright sunlight or coordinate night outings inside late-night lounges.
              </p>
              <p>
                I also designed a robust network error overlay (offline splash states) to make sure users receive clear, friendly notifications when connection drops rather than facing generic system alerts.
              </p>

              <h4 style={{ fontSize: '15px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', color: 'var(--text-primary)' }}>Light Mode Onboarding Flow</h4>
            </div>
            <div className="case-study-gallery" style={{ marginTop: '16px', marginBottom: '24px' }}>
              <div className="case-study-gallery-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '16px' }}>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_onboarding_light_apple.png" alt="Light Apple Sign In" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_onboarding_light_email.png" alt="Light Email Sign In" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_onboarding_light_auth.png" alt="Light Authentication" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_onboarding_light_profile.png" alt="Light Profile Setup" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
              </div>
            </div>

            <div className="case-study-body">
              <h4 style={{ fontSize: '15px', fontWeight: '600', marginTop: '24px', marginBottom: '16px', color: 'var(--text-primary)' }}>Dark Mode Onboarding Flow</h4>
            </div>
            <div className="case-study-gallery" style={{ marginTop: '16px' }}>
              <div className="case-study-gallery-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '16px' }}>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_onboarding_dark_apple.png" alt="Dark Apple Sign In" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_onboarding_dark_email.png" alt="Dark Email Sign In" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_onboarding_dark_auth.png" alt="Dark Authentication" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_onboarding_dark_profile.png" alt="Dark Profile Setup" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          {/* Section: The Home Page */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">1. The Home Page (Discovery & Filtering)</h3>
            <div className="case-study-body">
              <p>
                I designed the Home page to serve as the gateway to finding nearby activities and recreational facilities. At the top of the interface, I positioned a prominent, smart search feature that lets users look up specific facilities, areas, or activities.
              </p>
              <p>
                Directly below the search input, I built a fast, horizontal category filtering system. By separating facilities into clear categories (such as Museums, Parks, Bistros, and Beaches), I made it possible to filter and compare recreational spots instantly based on mood or trip type. I designed the location cards to display high-fidelity photography, distance indices, and price estimates, prioritizing immediate visual feedback.
              </p>
            </div>
            <div className="case-study-gallery" style={{ marginTop: '24px' }}>
              <div className="case-study-gallery-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_optional.png" alt="Promotion Optional Screen" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_short.png" alt="Homescreen Short View" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_long.png" alt="Homescreen Long View" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          {/* Section: Feeds Navigation */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">2. Feeds Navigation (Social Outings & Interactions)</h3>
            <div className="case-study-body">
              <p>
                I designed the Feeds navigation section to introduce authentic, user-generated proof into the discovery process. Instead of relying solely on official business reviews, I created a social workspace where users post photos, reviews, and short videos of their visits to recreation centers.
              </p>
              <p>
                I implemented structured interaction patterns where users can like, share, and comment directly on posts. This social feed gives people real-time, visual inspiration from their friend network, encouraging them to click directly on tagged locations and save them for their next adventure.
              </p>
            </div>
            <div className="case-study-gallery" style={{ marginTop: '24px' }}>
              <div className="case-study-gallery-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_feed_main.png" alt="Feeds Main View" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_feed_new.png" alt="New Post Creation" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_feed_post.png" alt="Feed Post Detail" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          {/* Section: Events Navigation */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">3. Events Navigation (Ticketing & Booking Checkout)</h3>
            <div className="case-study-body">
              <p>
                To provide direct planning actions within the app, I designed the Events page. This space hosts local workshops, music festivals, concerts, and family gatherings.
              </p>
              <p>
                I engineered the layout to present upcoming activities sequentially, complete with dates, locations, ticket pricing, and description briefs. I streamlined the booking flow, designing a secure checkout experience that allows users to select ticket quantities, pay directly inside the application, and save digital tickets to their profile.
              </p>
            </div>
            <div className="case-study-gallery" style={{ marginTop: '24px' }}>
              <div className="case-study-gallery-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_events_main.png" alt="Events List View" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_events_book.png" alt="Book Event Screen" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_events_tickets.png" alt="Purchased Ticket Screen" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          {/* Section: The Planner Navigation */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">4. The Planner Navigation (Collaborative Itineraries)</h3>
            <div className="case-study-body">
              <p>
                The core innovation of Funconnect is the Planner navigation, which I designed to eliminate group chat coordination chaos. In this workspace, a user can set up a new plan (e.g. "Summer Roadtrip") and pin specific recreational activities and centers.
              </p>
              <p>
                To make planning collaborative, I designed a group invitation flow that lets users invite friends and family to join their plan. Once added, collaborators can view the proposed destinations, add comments, vote on specific outings, and build a unified itinerary. I also designed intuitive empty states (with friendly illustrations) to guide new users through setting up their very first collaborative adventure.
              </p>
            </div>
            <div className="case-study-gallery" style={{ marginTop: '24px' }}>
              <div className="case-study-gallery-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_planner_description.png" alt="Activity Description" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_planner_create.png" alt="Create Plan Flow" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/funconnect_planner_create_1.png" alt="Active Planning Board" style={{ display: 'block', width: '100%', height: 'auto' }} loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          {/* Section: Key Takeaways */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Key Takeaways</h3>
            <div className="case-study-body">
              <p>
                <strong>Unifying fragmented flows requires strong information architecture.</strong> Consolidating discovery, social feeds, event booking, and cooperative planning under one application only works when navigation feels seamless and tab structures are highly focused.
              </p>
              <p>
                <strong>Collaborative interfaces require micro-interactions to build momentum.</strong> Designing clear, helpful empty states, contributor avatars, and live activity voting badges keeps users engaged in cooperative planning tasks.
              </p>
              <p>
                <strong>Designing for mobile utilities demands environmental consideration.</strong> Supporting both light and dark modes natively isn't just an aesthetic preference; it keeps screens accessible whether a user is exploring outdoor parks in bright sunlight or checking plans inside late-night lounges.
              </p>
              <p>
                <strong>Graceful connection fallback is critical for products on the move.</strong> Custom offline warning states and error-handling screens ensure users aren't left with blank pages when their internet drops while navigating between recreational activities.
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
        <Link to="/selected-work/my-design-portfolio" className="case-study-nav-btn next">
          <span className="case-study-nav-title">Design Portfolio</span>
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
        projectTitle="Funconnect Figma Design"
        externalUrl="https://www.figma.com/design/Q2TeKkWgvH0sfSnwgzXKqo/Sakaar?node-id=162-115016&t=jU98hg2trVv6wEIN-11"
        isInternal={false}
      />
    </div>
  );
}
