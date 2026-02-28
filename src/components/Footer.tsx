import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-brand-logos">
              <Link to="/">
                <img 
                  src="/cs-logo.png" 
                  alt="CSRS Logo" 
                  className="footer-brand-logo footer-cs-logo" 
                />
              </Link>
              <Link to="/">
                <img 
                  src="/roofovers.png" 
                  alt="Roofovers Logo" 
                  className="footer-brand-logo footer-roof-logo" 
                />
              </Link>
            </div>
            <p>Your trusted roofing contractor for over 35 years. Quality workmanship and honest service.</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/brochures">Brochures</Link></li>
              <li><HashLink smooth to="/#services">Our Services</HashLink></li>
              <li><Link to="/job-photos">Job Photos</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><HashLink smooth to="/#contact">Contact Us</HashLink></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p className="footer-tel"><strong>Phone:</strong> <a href="tel:3522425055">(352) 242-5055</a></p>
            <p className="footer-email"><strong>Email:</strong> <a href="mailto:info@roofovers.com">info@roofovers.com</a></p>
            <p><strong>Roofovers</strong></p>
            <p>Clermont, FL 34711</p>
            <p>13,000+ Customers Served</p>
            <p className="footer-license-text">Florida License: CCC1325522</p>
            <div className="footer-support">
              <p className="support-label">Supported by:</p>
              <div className="footer-partners-wrapper">
                <img 
                  src="/duke-energy.png" 
                  alt="Duke Energy" 
                  className="footer-partner-logo footer-duke-logo" 
                />
                <img 
                  src="/e-star.png" 
                  alt="Energy Star" 
                  className="footer-partner-logo footer-estar-logo" 
                />
                <img 
                  src="/gaf.png" 
                  alt="GAF" 
                  className="footer-partner-logo footer-gaf-logo" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-license">State Certified Contractor - CCC1325522</p>
          <p>&copy; {currentYear} CSRS Roofovers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
