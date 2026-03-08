import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet-async';
import './Brochures.css';

const brochurePanels = [
  {
    url: "https://rest.edit.site/filestorage-api-service/6cb0bd3eeecf46bada9cc0a3f6026a1e/brochure.jpg",
    caption: "Product Brochure - Front"
  },
  {
    url: "https://rest.edit.site/filestorage-api-service/e7d2f3976d920f1c32a34d497ec96d6e/brochureback.jpg",
    caption: "Product Brochure - Back"
  }
];

const Brochures: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="brochures" className="brochures">
      <Helmet>
        <title>Product Brochures | Roofing Material Specs | Roofovers</title>
        <meta name="description" content="View our product brochures to learn about our energy-efficient membrane roofing systems, insulation benefits, and maintenance-free solutions." />
        <link rel="canonical" href="https://roofovers.com/brochures" />
      </Helmet>
      <div className="container">
        <h2 className="section-title">Product Brochures</h2>
        <p className="section-description">
          Detailed information about our roofing systems, insulation benefits, and high-quality materials.
        </p>
        
        <div className="brochures-grid">
          {brochurePanels.map((panel, index) => (
            <div key={index} className="brochure-card">
              <div className="brochure-image-wrapper">
                <img src={panel.url} alt={panel.caption} />
              </div>
              <div className="brochure-caption">{panel.caption}</div>
            </div>
          ))}
        </div>

        <div className="brochures-info">
          <h3>Why Choose Our Membrane System?</h3>
          <div className="info-grid">
            <div className="info-item">
              <strong>Energy Efficient</strong>
              <p>Our white membrane system reflects up to 85% of solar heat, significantly reducing cooling costs.</p>
            </div>
            <div className="info-item">
              <strong>Maintenance Free</strong>
              <p>Eliminate the need for yearly roof coatings and expensive repairs with a permanent solution.</p>
            </div>
            <div className="info-item">
              <strong>Noise Reduction</strong>
              <p>The added insulation layer significantly reduces the noise from rain and wind.</p>
            </div>
            <div className="info-item">
              <strong>Leak Proof</strong>
              <p>Commercial-grade materials designed to remain leak-free even under standing water.</p>
            </div>
          </div>
        </div>

        <div className="brochures-footer">
          <Link to="/" className="btn btn-secondary">Back to Home</Link>
          <HashLink smooth to="/#contact" className="btn btn-primary">Request a Free Estimate</HashLink>
        </div>
      </div>
    </section>
  );
};

export default Brochures;
