import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet-async';
import './Testimonials.css';

const testimonials = [
  {
    text: "Roof rumble and a small leak were the main reasons for purchasing the CSRS Roof System, but we have benefited in many ways since the installation. Not only has the roof system stopped the noise, but the leak has stopped and we have no more yearly maintenance. Above all, the electric bill has been reduced $50 or more per month, so the system is actually \"paying for itself.\" I would recommend CSRS to anyone who owns a manufactured home.",
    author: "R. Berry"
  },
  {
    text: "Dear CSRS, when I began to consider your company, I'm sure I gave you a hard time. There are so many companies that are not legitimate. There are others that have poor products. There are others whose service leaves a great deal to be desired. I felt it was best to investigate as much as possible. Having made the decision to go with your company has thus far proved to be an excellent choice. I can attest to your company and its crew being the finest I have dealt with in some time. You called and arrived when you said you would...you were all very polite, very considerate of my home, the grounds and the noise level. You worked constantly and cleaned thoroughly. Everyone seemed to really care about what they were doing for me, the customer. I am indeed very pleased. By the actions of your company's personnel, I am sure I will have no trouble with the roof and feel that if I did, there would be no problem in having it resolved. Thank you and your staff...well done!",
    author: "M. Bailey"
  },
  {
    text: "I needed another roof on home so when I saw CSRS on TV, I thought we would try it. Knowing we will not have to do any roofing again and best of all our home is much cooler than usual. We love our CSRS Roof and will recommend you to all our friends. Thank you for a job well done!",
    author: "B. Lewis"
  },
  {
    text: "My reason for purchasing a CSRS Roofover System was to get savings on my electric bill and to insure I would not ever have to worry about my roof again. I have recommended your roof system to several people.",
    author: "M. Betts"
  },
  {
    text: "Yes, I sure love my new CSRS roof. It's a lot quieter when it's raining and the air condition does run less now. I have told some friends about CSRS and I'm so glad that my roof does not leak now, that was the main reason for purchasing it.",
    author: "B. Radcliff"
  }
];

const Testimonials: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <Helmet>
        <title>Customer Testimonials | Roofovers</title>
        <meta name="description" content="Read reviews from over 13,000 satisfied customers. See why homeowners trust Roofovers for their roofing needs." />
        <link rel="canonical" href="https://roofovers.com/testimonials" />
      </Helmet>
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => {
            const isLong = testimonial.text.length > 500;
            return (
              <div key={index} className={`testimonial-card ${isLong ? 'testimonial-card-long' : ''}`}>
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">- {testimonial.author}</div>
              </div>
            );
          })}
        </div>

        <div className="testimonials-footer">
          <Link to="/" className="btn btn-secondary">Back to Home</Link>
          <HashLink smooth to="/#contact" className="btn btn-primary">Request a Free Estimate</HashLink>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
