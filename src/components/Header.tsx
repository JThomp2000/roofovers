import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoCs = "/cs-logo.png";
  const logoRoofovers = "/roofovers.png";
  const logoDuke = "/duke-energy.png";
  const logoEStar = "/e-star.png";
  const logoGaf = "/gaf.png";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-item license-item">
            <span className="license-text">State Certified Contractor - CCC1325522</span>
          </div>
          <div className="top-bar-item">
            <a href="tel:3522425055" className="top-bar-link">
              <svg 
                className="phone-icon" 
                viewBox="0 0 512 512" 
                width="16" 
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" fill="currentColor" />
              </svg>
              <span className="contact-text">Contact us: </span>
              <span className="phone-number">(352) 242-5055</span>
            </a>
          </div>
        </div>
      </div>

      <div className="header-brand">
        <div className="container header-brand-container">
          <div className="brand-left">
            <Link to="/">
              <img 
                src={logoCs} 
                alt="CSRS Logo" 
                className="brand-logo-img cs-logo" 
              />
            </Link>
          </div>
          <div className="brand-center">
            <Link to="/">
              <img 
                src={logoRoofovers} 
                alt="Roofovers Logo" 
                className="brand-logo-img roofovers-logo" 
              />
            </Link>
          </div>
          <div className="brand-right">
            <div className="brand-partners">
              <span className="partners-label">Supported by:</span>
              <div className="partners-logos-stack">
                <img 
                  src={logoDuke} 
                  alt="Duke Energy" 
                  className="partner-logo duke-logo" 
                />
                <img 
                  src={logoEStar} 
                  alt="Energy Star" 
                  className="partner-logo estar-logo" 
                />
                <img 
                  src={logoGaf} 
                  alt="GAF" 
                  className="partner-logo gaf-logo" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="header-nav-container">
        <div className="container header-container">
          <div className="logo-text-mobile">ROOFOVERS</div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/brochures" onClick={() => setIsMenuOpen(false)}>Brochures</Link></li>
              <li><HashLink smooth to="/#services" onClick={() => setIsMenuOpen(false)}>Services</HashLink></li>
              <li><Link to="/job-photos" onClick={() => setIsMenuOpen(false)}>Job Photos</Link></li>
              <li><Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link></li>
              <li><Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
              <li><HashLink smooth to="/#contact" onClick={() => setIsMenuOpen(false)} className="contact-btn">Get a Quote</HashLink></li>
            </ul>
          </nav>

          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
