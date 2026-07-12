import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLinkModal from '../../components/ExternalLinkModal';

export default function TechpayCaseStudy() {
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
        <span className="case-study-eyebrow">Fintech & Government Payments</span>
        <h1 className="case-study-title">Techpay: Designing a frictionless mobile billing portal for public utilities and digital treasury</h1>
      </header>

      {/* Hero Image */}
      <div className="case-study-hero-img-box" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
        <img
          src="/Techpay.png"
          alt="Techpay Mobile Application Mockup"
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
              <li>Techpay Ltd.</li>
            </ul>
          </div>
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">My Role</h4>
            <ul className="case-study-sidebar-list">
              <li>Lead UX/UI Designer</li>
            </ul>
          </div>
          <div className="case-study-sidebar-section">
            <h4 className="case-study-sidebar-title">Technical Team</h4>
            <ul className="case-study-sidebar-list" style={{ fontSize: '13px', lineHeight: '1.6' }}>
              <li><strong>Oyekemi Oyediran</strong><br />AMD, ACDS</li>
              <li style={{ marginTop: '6px' }}><strong>Maria Ayenuro</strong><br />Business Analyst</li>
              <li style={{ marginTop: '6px' }}><strong>Oluwatobiloba Adefuwa</strong><br />Developer</li>
              <li style={{ marginTop: '6px' }}><strong>Iyare Diagboya</strong><br />Developer</li>
              <li style={{ marginTop: '6px' }}><strong>Afolake Olabode</strong><br />Project Manager & QA</li>
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
                Techpay is an innovative mobile application designed to streamline the payment process for government bills, utility charges, and value-added services (VAS). As the Lead UX/UI Designer on the technical team, my mission was to craft a secure, accessible, and user-friendly mobile interface. We aimed to modernize government-related transactions by making public bill payments quick and convenient for a broad demographic.
              </p>
            </div>
          </section>

          {/* Section: My Capacity */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">My capacity</h3>
            <div className="case-study-body">
              <p>
                I functioned as the Lead UX/UI Designer. I collaborated daily with our Business Analyst, Maria Ayenuro, to translate functional requirements specifications into production-ready layout wireframes. I also partnered with our developers, Oluwatobiloba Adefuwa and Iyare Diagboya, to ensure our visual layouts and design patterns complied with core technical parameters like two-factor authentication (2FA) and biometric credentials validation.
              </p>
            </div>
          </section>

          {/* Section: The Challenge */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">The Challenge</h3>
            <div className="case-study-body">
              <p>
                Government billing processes are notoriously complex and intimidating. Users frequently face long forms, obscure terminology, and fragmented interfaces. Furthermore, requiring a registered account is a significant barrier for guest users who only want to settle a single utility bill quickly.
              </p>
              <p>
                My challenge was two-fold:
              </p>
              <ol>
                <li>
                  <strong>Reduce Cognitive Fatigue on Registration</strong>: The registration flow required a high level of security verification, demanding 9 different input parameters: First Name, Last Name, Date of Birth (DOB), National Identification Number (NIN), Bank Verification Number (BVN), Payer ID, Phone Number, OTP Token, and Login Password.
                </li>
                <li>
                  <strong>Architect a Dual-Access System</strong>: Seamlessly segmenting guest users (who only need access to quick bill verification and payment) from registered users (who manage dynamic in-app wallets, dispute tracking, biometrics, and transaction histories).
                </li>
              </ol>
            </div>
          </section>

          {/* Section: Design Process */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">My Design Process & Solutions</h3>
            <div className="case-study-body">
              <h4>1. Modular Progressive Onboarding Flow</h4>
              <p>
                To handle the 9-parameter registration requirement without causing high drop-off rates, I broke the onboarding process into distinct logical steps. Instead of a single overwhelming page, I designed a multi-step stepper interface:
              </p>
              <ul>
                <li><strong>Step 1: Bio-Identity</strong> (First Name, Last Name, DOB)</li>
                <li><strong>Step 2: Verification Details</strong> (NIN, BVN, Payer ID) with inline progress loading feedback.</li>
                <li><strong>Step 3: Access Validation</strong> (Phone validation, OTP token verification).</li>
                <li><strong>Step 4: Security setup</strong> (Login Password and 4-digit transaction PIN configuration).</li>
              </ul>

              {/* Onboarding Stepper Flow Mockups */}
              <div className="stepper-mockup-grid">
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_register_1.png" alt="Register New User Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>1. Register User</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_otp.png" alt="Get OTP Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>2. Verification OTP</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_password.png" alt="Setup Password Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>3. Access Password</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_pin.png" alt="Create Transaction PIN Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>4. Transaction PIN</div>
                </div>
              </div>

              <h4>2. Dual Portal Information Architecture</h4>
              <p>
                I established two clear visual workspaces on the home screen:
              </p>
              <ul>
                <li>
                  <strong>Registered User Dashboard</strong>: Offers a unified view of the in-app wallet balance (with a show/hide toggle), quick wallet funding actions, transaction receipt archives, and value-added services (VAS) like airtime, data, and utility top-ups.
                  <div style={{ display: 'flex', gap: '16px', margin: '16px 0 24px 0', maxWidth: '540px' }} className="responsive-flex-row">
                    <div style={{ flex: 1, border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                      <img src="/Techpay_home_screen.png" alt="Registered User Home Screen Mockup" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                      <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Registered Home Screen</div>
                    </div>
                    <div style={{ flex: 1, border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                      <img src="/Techpay_home_add_money.png" alt="Add Money Mockup" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                      <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Add Money Interface</div>
                    </div>
                  </div>
                </li>
                <li>
                  <strong>Guest Payment Workspace</strong>: An immediate entry point where guest users can directly select a government agency and input their billing reference. The design validates references against the EBS RCM (Electronic Billing System Revenue Collection Management) database before requesting payment details, preventing erroneous transactions.
                </li>
              </ul>

              {/* Guest Checkout & Payment Instrument Flows */}
              <div className="case-study-mockups-grid">
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_guest_login_apple.png" alt="Guest Apple Login Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>1. Login Option</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_guest_bill_0.png" alt="Guest Select Agency Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>2. Enter Bill Ref</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_guest_bill_1.png" alt="Guest Bill Reference Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>3. Choose Payment Method</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_guest_2.png" alt="Guest EBS RCM Validation Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>4. Enter Card Details</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_guest_3.png" alt="Guest Select Instrument Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>5. Verify Card PIN</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_guest_4.png" alt="Guest Card Details Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>6. Confirm OTP</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_guest_5.png" alt="Guest OTP Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>7. Payment Success</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_guest_bank.png" alt="Guest Bank Transfer Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>8. Bank Transfer</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_guest_choose_bank.png" alt="Guest Choose Bank Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>9. One-Time Account</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_guest_ussd.png" alt="Guest USSD Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>10. USSD Provider</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_guest_ussd_2.png" alt="Guest USSD Dialer Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>11. USSD Dial instructions</div>
                </div>
              </div>

              <h4>3. The Unified Payment Orchestration Panel</h4>
              <p>
                I designed a checkout UI that scales across four distinct transaction instruments:
              </p>
              <ul>
                <li><strong>Wallet Payment</strong>: Instantly checks balance sufficiency, verifying user funds prior to authentication.</li>
                <li><strong>Card Payment</strong>: Features an input layout with secure PCI-compliant card masking and real-time bank logo identification.</li>
                <li><strong>USSD Payment</strong>: Generates copyable, short-code strings paired with interactive steps to run on the native dialer.</li>
                <li><strong>Bank Transfer</strong>: Displays dynamic virtual account coordinates (Bank Name, Account Number, Exact Amount) with an active copy button.</li>
              </ul>

              {/* Wallet Checkout Flow Mockups */}
              <div className="five-column-grid">
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_wallet_invoice.png" alt="Wallet Invoice Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>1. Bill Invoice</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_wallet_method.png" alt="Select Payment Method Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>2. Select Payment</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_wallet_pay.png" alt="Verify Wallet Payment Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>3. Verify Details</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_wallet_pin.png" alt="Confirm PIN Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>4. Confirm PIN</div>
                </div>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                  <img src="/Techpay_wallet_success.png" alt="Wallet Payment Success Screen" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                  <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>5. Success Screen</div>
                </div>
              </div>

              <h4>4. High-Trust Dispute Center</h4>
              <p>
                Reconciliation is critical in fintech. I designed a clear dispute workspace where users can select dispute categories directly from transaction history logs, describe their issues, and upload image receipts. This automatically generates a structured support ticket routed to the administration panel, keeping users informed of resolution status.
              </p>
            </div>
          </section>

          {/* Section: Non-Functional Visual Design */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Designing for Non-Functional Constraints</h3>
            <div className="case-study-body">
              <p>
                Security and session constraints dictate UI states. I designed visual patterns to address these requirements:
              </p>
              <ul>
                <li>
                  <strong>OTP & Token Timeouts</strong>: Designed a visual countdown timer indicating the 5-minute token expiration period. When the token expires, the form transitions to a secondary state, letting users request a new code with a single tap.
                </li>
                <li>
                  <strong>Biometric Prompts</strong>: Designed setting panels and overlays for FaceID and fingerprint registration. These verify credentials during log in and authorize payment transactions securely.
                  <div style={{ maxWidth: '260px', margin: '16px 0 24px 0', border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '4px', background: 'var(--bg-secondary)' }}>
                    <img src="/Techpay_biometric_login.png" alt="Biometric Prompt Verification Mockup" style={{ width: '100%', borderRadius: '6px', display: 'block' }} />
                    <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '6px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>FaceID Biometric Login Prompt</div>
                  </div>
                </li>
                <li>
                  <strong>Security Masking</strong>: Masked sensitive data layers such as BVN/NIN codes and transaction PIN entry fields to protect user privacy.
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Key Takeaways */}
          <section className="case-study-section">
            <h3 className="case-study-section-title">Key takeaways</h3>
            <div className="case-study-body">
              <ul>
                <li>
                  <strong>Progressive Disclosure Overcomes Form Abandonment</strong><br />
                  Handling a 9-parameter onboarding requirement taught me that complexity is best managed when structured logically. Stepper panels make high-friction data entries feel natural and manageable.
                </li>
                <li style={{ marginTop: '12px' }}>
                  <strong>Frictionless Pathways Drive Engagement</strong><br />
                  Designing a quick guest payment path proved that forced sign-ups are unnecessary hurdles. By validating reference credentials directly against the EBS RCM database first, guest users could transact instantly while organically discovering the benefits of creating a wallet.
                </li>
                <li style={{ marginTop: '12px' }}>
                  <strong>Bridging Compliance and Interaction Design</strong><br />
                  Fintech UX design requires close developer alignment. Designing UI states for active session timeouts, masked credentials, and biometric checks ensured the build remained compliant with PCI DSS and 2FA guidelines without degrading the user experience.
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>

      {/* Bottom Navigation */}
      <footer className="case-study-nav">
        <Link to="/selected-work/xnd" className="case-study-nav-btn prev">
          <span className="case-study-nav-lbl">Previous Project</span>
          <span className="case-study-nav-title">XND V2.0</span>
        </Link>
        <Link to="/selected-work/my-design-portfolio" className="case-study-nav-btn next">
          <span className="case-study-nav-lbl">Next Project</span>
          <span className="case-study-nav-title">My Design Portfolio</span>
        </Link>
      </footer>

      <ExternalLinkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectName="Techpay portal"
        projectUrl="https://lagos.techpay.ng/"
      />
    </div>
  );
}
