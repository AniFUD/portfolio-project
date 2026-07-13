import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLinkModal from '../../components/ExternalLinkModal';

export default function MoniehubCaseStudy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fade-in-el">
      {/* Header Navigation */}
      <div className="case-study-nav-header">
        <Link to="/work" className="case-study-back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </Link>
        <div className="tooltip-container" style={{ position: 'relative', display: 'inline-block' }}>
          <button
            className="case-study-view-project-btn"
            style={{
              background: 'rgba(217, 119, 6, 0.12)',
              borderColor: 'rgba(217, 119, 6, 0.4)',
              color: '#D97706',
              fontWeight: '600',
              cursor: 'help'
            }}
          >
            Under Development
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </button>
          <div
            className="tooltip-content"
            style={{
              position: 'absolute',
              top: '125%',
              left: '50%',
              transform: 'translateX(-50%) translateY(-5px)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-secondary)',
              padding: '12px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              lineHeight: '1.4',
              whiteSpace: 'normal',
              width: '250px',
              textAlign: 'center',
              boxShadow: '0 10px 15px -3px rgba(160, 160, 160, 0.3), 0 4px 6px -2px rgba(93, 93, 93, 0.05)',
              border: '1px solid var(--border-color)',
              zIndex: 100,
              pointerEvents: 'none',
              opacity: 0,
              transition: 'opacity 0.2s ease, transform 0.2s ease'
            }}
          >
            This project is currently active and under development. Figma design links are restricted.
          </div>
          <style>{`
            .tooltip-container:hover .tooltip-content {
              opacity: 1 !important;
              transform: translate(-50%, 4px) !important;
              pointer-events: auto !important;
            }
          `}</style>
        </div>
      </div>

      {/* Case Study Header */}
      <header className="case-study-title-block">
        <span className="case-study-eyebrow" style={{ color: '#7e7e7eff' }}>Fintech & Multi-Asset Card Rails</span>
        <h1 className="case-study-title">Moniehub: Architecting a unified fiat-crypto transaction dashboard and virtual card manager</h1>
      </header>

      {/* Hero Image */}
      <div className="case-study-hero-img-box" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
        <img
          src="/moniehub_cover_3.png"
          alt="Moniehub Mobile Application Dashboard Mockup"
          className="case-study-hero-img"
        />
      </div>

      {/* Content Grid */}
      <div className="case-study-content-grid">
        {/* Sidebar Metadata */}
        <aside className="case-study-sidebar">
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">Client</h4>
            <ul className="case-study-sidebar-list">
              <li>Moniehub Ltd.</li>
            </ul>
          </div>
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">My Role</h4>
            <ul className="case-study-sidebar-list">
              <li>Lead Product Designer</li>
            </ul>
          </div>
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">Technical Team</h4>
            <ul className="case-study-sidebar-list" style={{ fontSize: '13px', lineHeight: '1.6' }}>
              <li><strong>Paritie</strong><br />Engineering Partner</li>
            </ul>
          </div>
        </aside>

        {/* Main Narrative */}
        <main className="case-study-main">
          {/* Section: Overview */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Overview</h3>
            <div className="case-study-body">
              <p>
                Moniehub is a digital finance platform bridging fiat accounts, crypto assets, virtual card orchestration, and day-to-day utility bills into a single, cohesive mobile wallet. My mission as the Lead Product Designer was to collaborate with the engineering team at <strong>Paritie</strong> to transform complex multi-currency transactions into a seamless, secure, and highly visual personal treasury dashboard.
              </p>
            </div>
          </section>

          {/* Section: My Capacity */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">My capacity</h3>
            <div className="case-study-body">
              <p>
                I led the end-to-end user experience, wireframing, and interactive design layers. Daily, I converted complex compliance limits and volatile trading actions into clean mobile user flows. I worked in lockstep with Paritie engineers to translate strict financial requirements (like BVN/NIN validations, two-factor authentication, and biometrics verification) into intuitive, vault-like experiences.
              </p>
            </div>
          </section>

          {/* Section: The Challenge */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">The Challenge</h3>
            <div className="case-study-body">
              <p>
                Bridging NGN fiat with volatile crypto wallets (BTC, USDT, USDC) creates high user anxiety. Users are often intimidated by technical exchange rates, complex KYC compliance forms, and virtual card settings that typically feel like a black box.
              </p>
              <p>
                My goals were to:
              </p>
              <ol>
                <li>
                  <strong>Establish Trust in Conversions</strong>: Simplify multi-asset swap structures, providing transparent fees and conversion confirmations.
                </li>
                <li>
                  <strong>Demystify Compliance Tiers</strong>: Design a progressive limits manager that encourages users to complete identity verification without feeling overwhelmed by paperwork.
                </li>
                <li>
                  <strong>Empower Card Self-Service</strong>: Place total control of virtual cards—freezing, pin changes, limit adjustments, and screenshot security—directly at the user's fingertips.
                </li>
              </ol>
            </div>
          </section>

          {/* Section: Design Process & Solutions */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">My Design Process & Solutions</h3>
            <div className="case-study-body">

              <h4>1. Unified Multi-Asset Landing Screen</h4>
              <p>
                I designed the landing dashboard to give a clean overview of both NGN fiat and Crypto balances (BTC, USDT). Quick action buttons ("Deposit", "Withdraw", "Trade") sit right above a utility billing list, eliminating deep menu exploration. Recent transactions are presented with clear status badges.
              </p>

              {/* Home screens mockup grid */}
              <div className="stepper-mockup-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', margin: '24px 0' }}>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/landing_home.png" alt="Home Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Home</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/landing_home_closed.png" alt="Home Closed Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Amount hidden </div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/landing_deposit.png" alt="Deposit Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Multi-asset wallet</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/landing_deposit_btc.png" alt="Deposit BTC Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Deposit BTC</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/landing_transaction_page.png" alt="Transaction Page Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Transactions History</div>
                </div>
              </div>

              <h4>2. High-Trust Crypto Trade Swapping</h4>
              <p>
                Designing the Trade swap panel required extreme clarity. I created a clean split input (BTC/USDT to NGN) with prominent rate calculators, clear percentage selection buttons (25%, 50%, Max), and progress status cards that provide reassurance during block validations.
              </p>

              {/* Trade mockup grid */}
              <div className="stepper-mockup-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', margin: '24px 0' }}>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/swap_trade.png" alt="Select Asset Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Select Asset</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/swap_trade_1.png" alt="Enter Amount Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Enter Amount</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/swap_trade_2.png" alt="Preview Rate Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Preview Rate</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/swap_pin.png" alt="Confirm PIN Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Confirm PIN</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/swap_success.png" alt="Success Receipt Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Success Receipt</div>
                </div>
              </div>

              <h4>3. Value-Added Services & Bill Settlements</h4>
              <p>
                To enable seamless day-to-day payments, I designed a direct utility billing section on the main landing screen. Users can instantly buy Airtime or settle subscriptions (DSTV, GOTV, EKEDC) in less than three taps, supported by immediate transaction success logs.
              </p>

              {/* VAS section mockup grid */}
              <div className="stepper-mockup-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', margin: '24px 0' }}>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_services.png" alt="Services Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Services</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_select_phone.png" alt="Select Phone & Amount Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Select Phone & Amount</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_summary.png" alt="Summary Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Summary</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_pin.png" alt="Confirm PIN Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Confirm PIN</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_happy.png" alt="Happy Success Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Settle Bill Success</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_giftcards.png" alt="Giftcards Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Select Giftcard</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_select_card_type.png" alt="Select Card Type Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Select Card Type</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_select_currency.png" alt="Select Currency Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Select Currency</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_set_amount.png" alt="Set Amount Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Set Amount</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_trade_details.png" alt="Trade Details Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Trade Details</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_chat_admin.png" alt="Chat with Admin Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Chat with Admin</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_betting.png" alt="Betting Platform Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Select Betting</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_add_bet_amount.png" alt="Add Bet Amount Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Add Bet Amount</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_bet_summary.png" alt="Bet Summary Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Bet Summary</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_electricity.png" alt="Select Electricity Provider Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Select Provider</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_power_amount.png" alt="Enter Power Amount Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Enter Amount</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/vas_power_summary.png" alt="Power Summary Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Power Summary</div>
                </div>
              </div>

              <h4>4. Self-Service Virtual Card Orchestration</h4>
              <p>
                To eliminate pricing and transaction anxiety, I designed a card panel where users can view live card balances (in both NGN and converted USD), fund cards directly from fiat/crypto wallets, freeze cards instantly, and modify transaction ceilings.
              </p>

              {/* Cards screens mockup grid */}
              <div className="stepper-mockup-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', margin: '24px 0' }}>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/card_create.png" alt="Create Card Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Create Card</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/card_label.png" alt="Card Label Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Card Label</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/card_payment.png" alt="Card Creation Payment Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Card Creation Payment</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/card_active.png" alt="Active Card Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Active Card</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/card_manage.png" alt="Manage Card Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Manage Card</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/card_freeze.png" alt="Freeze Card Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Freeze Card</div>
                </div>
              </div>

              <h4>5. Progressive Compliance and Tiered Limits</h4>
              <p>
                Instead of requiring users to supply BVN, NIN, and address documents during their first login, I designed a tiered compliance structure. Users start at Tier 1 with small limits, and can upgrade dynamically as they verify their details, with clear visual benefits for each tier.
              </p>

              {/* Account limits mockup grid */}
              <div className="stepper-mockup-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', margin: '24px 0' }}>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/compliance_account.png" alt="Account Settings Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Account Settings</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/compliance_profile.png" alt="Profile Settings Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Profile Settings</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/compliance_limits.png" alt="Account Limits Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Account Limits</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/compliance_security.png" alt="Security Settings Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Security Settings</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/compliance_2fa.png" alt="2FA Verification Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2FA Settings</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/figma-screenshots/compliance_auth_2fa.png" alt="Authenticator 2FA Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '9px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2FA Verification</div>
                </div>
              </div>

            </div>
          </section>

          {/* Section: Security Constraints */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Vault-Grade Security Settings</h3>
            <div className="case-study-body">
              <p>
                Fintech interfaces demand strict local security to prevent social engineering and data leakage. I designed two key safeguards:
              </p>
              <ul>
                <li>
                  <strong>Screenshot Permissions Control</strong>: A toggle allowing users to block local screenshot tools from capturing sensitive virtual card CVVs/Credentials.
                </li>
                <li>
                  <strong>Biometrics & 2FA Overlay Guards</strong>: Embedded FaceID/TouchID biometrics validation and two-factor authentication (Google Authenticator 2FA) checks on all high-risk withdrawal and card-reveal events.
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Takeaways */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Key Takeaways</h3>
            <div className="case-study-body">
              <ul>
                <li>
                  <strong>Progressive Friction Encourages Growth</strong>: Users are highly receptive to completing KYC forms if they are broken into logical steps and paired with clear limit upgrades.
                </li>
                <li>
                  <strong>Consistent Branding Builds Trust</strong>: Using emerald green accents on deep obsidian cards conveys a sense of stability, growth, and bank-grade security.
                </li>
                <li>
                  <strong>Self-Service is the Best Support</strong>: Giving users complete agency over virtual cards (freezing, PIN resets, limits) radically reduces customer service overhead.
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>

      {/* Bottom Navigation */}
      <footer className="case-study-nav">
        <Link to="/selected-work/techpay" className="case-study-nav-btn prev">
          <span className="case-study-nav-lbl">Previous Project</span>
          <span className="case-study-nav-title">Techpay</span>
        </Link>
        <Link to="/selected-work/my-design-portfolio" className="case-study-nav-btn next">
          <span className="case-study-nav-lbl">Next Project</span>
          <span className="case-study-nav-title">My Design Portfolio</span>
        </Link>
      </footer>

      <ExternalLinkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectName="Moniehub Designs"
        projectUrl="https://www.figma.com/design/Q2TeKkWgvH0sfSnwgzXKqo/Sakaar?node-id=1-27293&m=dev"
      />
    </div>
  );
}
