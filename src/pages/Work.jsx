import React from 'react';
import { Link } from 'react-router-dom';

export default function Work() {
  const caseStudies = [
    {
      id: 'assets',
      title: 'The Buffalo Project',
      year: '2026',
      category: 'Tax Administration',
      description: "Custom enterprise platform for tax administration and revenue management.",
      image: '/buffalo_cover.webm',
      path: '/selected-work/assets'
    },
    {
      id: 'lagos-revenue-portal',
      title: 'Lagos Revenue Portal',
      year: '2024',
      category: 'Govtech & Finance',
      description: 'Digital gateway for taxpayer education, tax calculations, and revenue system access in Lagos State.',
      image: '/LRP_Cover_Motion.webm',
      path: '/selected-work/lagos-revenue-portal'
    },
    {
      id: 'xnd',
      title: 'XND V2.0',
      year: '2025',
      category: 'Crypto Exchange',
      description: 'A secure peer-to-peer exchange platform for safe USDT trading and instant gift card conversion.',
      image: '/XND_Cover_II.webm',
      path: '/selected-work/xnd'
    },
    {
      id: 'techpay',
      title: 'Techpay',
      year: '2025',
      category: 'Fintech & Payments',
      description: 'A modern digital payment platform simplifying transaction workflows and business payouts.',
      image: '/Techpay.png',
      path: '/selected-work/techpay'
    },
    {
      id: 'moniehub',
      title: 'Moniehub',
      year: '2025',
      category: 'Fintech & Multi-Asset Cards',
      description: 'A unified digital finance wallet bridging fiat accounts, crypto assets, and virtual card issuance.',
      image: '/moniehub_cover_2.png',
      path: '/selected-work/moniehub'
    },
    {
      id: 'my-design-portfolio',
      title: 'Design Portfolio',
      year: '2026',
      category: 'Product Design & AI Engineering',
      description: 'Architecting a living digital archive through AI-assisted product design and front-end engineering.',
      image: '/homepage_snapshot.png',
      path: '/selected-work/my-design-portfolio'
    }
  ];

  return (
    <div className="work-page-container fade-in-el">
      <header className="work-page-header">
        <h1 className="work-page-title">Selected work</h1>
        <p className="work-page-subtitle">A collection of selected product design and strategy case studies.</p>
      </header>

      <section className="work-page-grid">
        {caseStudies.map((study) => (
          <Link key={study.id} to={study.path} className="work-page-card">
            <div className="work-page-card-image-container">
              {study.id === 'assets' ? (
                <video
                  src="/buffalo_cover.webm"
                  className="work-page-card-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : study.id === 'lagos-revenue-portal' ? (
                <video
                  src="/LRP_Cover_Motion.webm"
                  className="work-page-card-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : study.id === 'xnd' ? (
                <video
                  src="/XND_Cover_II.webm"
                  className="work-page-card-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
              ) : study.id === 'techpay' ? (
                <video
                  src="/Techpay_Cover_II.webm"
                  className="work-page-card-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : study.id === 'my-design-portfolio' ? (
                <video
                  src="/mydesign_recording.mp4"
                  className="work-page-card-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              ) : (
                <img
                  src={study.image}
                  alt={study.title}
                  className="work-page-card-image"
                  loading="lazy"
                />
              )}
            </div>
            <div className="work-page-card-info">
              <span className="work-page-card-category">{study.category}</span>
              <h2 className="work-page-card-title">
                {study.title} <span className="card-year">{study.year}</span>
              </h2>
              <p className="work-page-card-desc">{study.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
