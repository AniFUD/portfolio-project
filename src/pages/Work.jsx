import React from 'react';
import { Link } from 'react-router-dom';

export default function Work() {
  const caseStudies = [
    {
      id: 'assets',
      title: 'The Buffalo Project — Assets',
      year: '2026',
      category: 'ABC x Trustpointly — 2024',
      description: 'A flexible solution for real-time asset tracking and lifecycle management.',
      image: 'https://framerusercontent.com/images/W87NFVxe7JuGBfW0n781qpEcXSw.png?width=1000',
      path: '/selected-work/assets'
    },
    {
      id: 'ton-kilometres',
      title: 'The Buffalo Project — Ton-Kilometres',
      year: '2026',
      category: 'ABC x Trustpointly — 2025',
      description: 'Logistics performance dashboard automating composite metrics.',
      image: 'https://framerusercontent.com/images/h2kdU9yBI0CIsaYeWdJNuIqRLwQ.png?width=1000',
      path: '/selected-work/ton-kilometres'
    },
    {
      id: 'lagos-revenue-portal',
      title: 'Lagos Revenue Portal',
      year: '2024',
      category: 'Govtech & Finance — 2024',
      description: 'Designing a unified digital gateway for taxpayer education, tax calculations, and revenue system access in Lagos State.',
      image: 'https://framerusercontent.com/images/3CAADiyJJxYt0qsuiLHnyN6vcc.png?width=1000',
      path: '/selected-work/lagos-revenue-portal'
    },
    {
      id: 'xnd',
      title: 'XND V2.0',
      year: '2025',
      category: 'Crypto Exchange — 2025',
      description: 'A secure peer-to-peer exchange platform for safe USDT trading and instant gift card conversion.',
      image: 'https://framerusercontent.com/images/Fod1vHm21MZAnoFKjzMD7f4lzkI.png?width=1000',
      path: '/selected-work/xnd'
    },
    {
      id: 'techpay',
      title: 'Techpay',
      year: '2025',
      category: 'Fintech & Payments — 2025',
      description: 'A modern digital payment platform simplifying transaction workflows and business payouts.',
      image: '/Techpay.png',
      path: '/selected-work/techpay'
    },
    {
      id: 'moniehub',
      title: 'Moniehub',
      year: '2025',
      category: 'Fintech & Multi-Asset Cards — 2025',
      description: 'A unified digital finance wallet bridging fiat accounts, crypto assets, and virtual card issuance.',
      image: '/moniehub_cover_2.png',
      path: '/selected-work/moniehub'
    },
    {
      id: 'my-design-portfolio',
      title: 'My Design Portfolio',
      year: '2026',
      category: 'Product Design & AI Engineering — 2026',
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
              {study.id === 'lagos-revenue-portal' ? (
                <video
                  src="/LRP Thumbnail.webm"
                  className="work-page-card-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : study.id === 'xnd' ? (
                <video
                  src="/XND Thumbnail.webm"
                  className="work-page-card-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              ) : study.id === 'techpay' ? (
                <video
                  src="/Techpay.webm"
                  className="work-page-card-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : study.id === 'my-design-portfolio' ? (
                <video
                  src="/portfolio.webm"
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
