import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Services.css';

const services = [
  {
    title: "Product Brochures",
    description: "Explore our high-quality roofing materials and product specifications.",
    id: "brochures"
  },
  {
    title: "Customer Testimonials",
    description: "See why over 13,000 customers have trusted us with their roofing needs.",
    id: "testimonials"
  },
  {
    title: "Job Photos",
    description: "View our portfolio of membrane jobs and completed roofing projects.",
    id: "jobs"
  },
  {
    title: "Frequently Asked Questions",
    description: "Important frequently asked questions for manufactured and mobile home owners.",
    id: "faq"
  },
  {
    title: "Payment Methods Accepted",
    description: "We accept multiple payment methods for your convenience, including major credit cards.",
    id: "payments"
  }
];

const PaymentLogos: React.FC = () => (
  <div className="payment-logos">
    <img src="/visa.png" alt="Visa" className="payment-logo visa" />
    <img src="/mc.png" alt="Mastercard" className="payment-logo mastercard" />
    <img src="/discover.png" alt="Discover" className="payment-logo discover" />
    <img src="/amex.png" alt="American Express" className="payment-logo amex" />
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services & Information</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} id={service.id === 'jobs' ? 'service-jobs' : `service-${service.id}`} className="service-card">
              <div className="service-icon">
                {/* Simplified icon placeholders */}
                <div className="icon-circle"></div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.id === 'payments' ? (
                <PaymentLogos />
              ) : service.id === 'jobs' ? (
                <Link to="/job-photos" className="service-link">View Projects &rarr;</Link>
              ) : service.id === 'testimonials' ? (
                <Link to="/testimonials" className="service-link">View Testimonials &rarr;</Link>
              ) : service.id === 'faq' ? (
                <Link to="/faq" className="service-link">Read FAQ &rarr;</Link>
              ) : service.id === 'brochures' ? (
                <Link to="/brochures" className="service-link">View Brochures &rarr;</Link>
              ) : (
                <HashLink smooth to={`/#${service.id}`} className="service-link">Learn More &rarr;</HashLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
