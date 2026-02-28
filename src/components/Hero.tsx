import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <p className="slogan">The ONLY Company Where You Meet With the Contractor and Not a Salesman!</p>
          <p className="sub-slogan">Our 35th Year! - Over 13,000 Customers - Don't Settle For Less!</p>
          <div className="hero-btns">
            <HashLink smooth to="/#contact" className="btn btn-primary">Request a Free Estimate</HashLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
