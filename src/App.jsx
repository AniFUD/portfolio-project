import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import LagosRevenuePortal from './pages/case-studies/LagosRevenuePortal';
import Xnd from './pages/case-studies/Xnd';
import BuffaloCaseStudy from './pages/case-studies/BuffaloCaseStudy';
import TechpayCaseStudy from './pages/case-studies/TechpayCaseStudy';
import MyDesignPortfolio from './pages/case-studies/MyDesignPortfolio';
import Moniehub from './pages/case-studies/Moniehub';


const playTickSound = () => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.04);
    
    gainNode.gain.setValueAtTime(0.012, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.04);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.04);
  } catch (err) {
    // Suppress errors (like AudioContext blocked by autoplay policy before user interaction)
  }
};

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Reset cursor active state on route changes
function RouteChangeListener({ setIsCursorActive }) {
  const { pathname } = useLocation();

  useEffect(() => {
    setIsCursorActive(false);
  }, [pathname, setIsCursorActive]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isCursorActive, setIsCursorActive] = useState(false);

  useEffect(() => {
    // 1. Start overlay fade out after 1.2s
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1200);

    // 2. Completely remove loader overlay from DOM after 1.8s
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    let lastHoveredElement = null;

    const handleMouseOver = (e) => {
      const hoverable = e.target.closest(
        '.nav-link, .nav-logo-group, .case-study-back-btn, .case-study-view-project-btn, .theme-toggle-btn, .menu-toggle-btn, .work-grid-card, .work-page-card, .list-card-item, .footer-link, .footer-social-icon, .footer-resume-link, .about-collage-img-box'
      );
      
      if (hoverable) {
        if (lastHoveredElement !== hoverable) {
          lastHoveredElement = hoverable;
          playTickSound();
        }
      } else {
        lastHoveredElement = null;
      }
    };

    const handleMouseOut = (e) => {
      if (lastHoveredElement && !e.relatedTarget?.closest(
        '.nav-link, .nav-logo-group, .case-study-back-btn, .case-study-view-project-btn, .theme-toggle-btn, .menu-toggle-btn, .work-grid-card, .work-page-card, .list-card-item, .footer-link, .footer-social-icon, .footer-resume-link, .about-collage-img-box'
      )) {
        lastHoveredElement = null;
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const isCard = e.target.closest('.work-grid-card.image-card, .work-page-card');
      if (isCard) {
        setIsCursorActive(true);
      }
    };

    const handleMouseOut = (e) => {
      const isCard = e.target.closest('.work-grid-card.image-card, .work-page-card');
      if (isCard) {
        const related = e.relatedTarget;
        if (!related || !isCard.contains(related)) {
          setIsCursorActive(false);
        }
      }
    };

    const handleMouseClick = () => {
      setIsCursorActive(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('click', handleMouseClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <div className={isFadingOut ? 'site-ready' : 'site-loading'}>
      {isLoading && (
        <div className={`app-loader ${isFadingOut ? 'fade-out' : ''}`}>
          <div className="loader-spinner"></div>
        </div>
      )}
      <Router>
        <ScrollToTop />
        <RouteChangeListener setIsCursorActive={setIsCursorActive} />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/selected-work/lagos-revenue-portal" element={<LagosRevenuePortal />} />
            <Route path="/selected-work/xnd" element={<Xnd />} />
            <Route path="/selected-work/assets" element={<BuffaloCaseStudy />} />
            <Route path="/selected-work/techpay" element={<TechpayCaseStudy />} />
            <Route path="/selected-work/moniehub" element={<Moniehub />} />
            <Route path="/selected-work/my-design-portfolio" element={<MyDesignPortfolio />} />
          </Routes>
        </Layout>
      </Router>
      <div 
        className={`custom-cursor-label ${isCursorActive ? 'active' : ''}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`
        }}
      >
        view project
      </div>
    </div>
  );
}
