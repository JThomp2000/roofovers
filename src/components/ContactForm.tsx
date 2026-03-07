import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'Residential'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json() as any;

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(result.error || 'Something went wrong. Please try again or call us.');
      }
    } catch (err) {
      setError('Could not connect to the server. Please check your internet or call us.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-success">
            <h2>Thank You!</h2>
            <p>Your request has been received. A member of our team will contact you shortly.</p>
            <button onClick={() => setSubmitted(false)} className="btn btn-primary">Send Another Message</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Ready to start your roofing project? Fill out the form and we'll get back to you with a free estimate.</p>
            <div className="info-item">
              <strong>Location:</strong>
              <p>Clermont, FL 34711</p>
            </div>
            <div className="info-item">
              <strong>Email:</strong>
              <p><a href="mailto:info@roofovers.com">info@roofovers.com</a></p>
            </div>
            <div className="info-item">
              <strong>Phone:</strong>
              <p><a href="tel:3522425055">(352) 242-5055</a></p>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="John Doe"
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  placeholder="(555) 000-0000"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="serviceType">Service Interest</label>
              <select 
                id="serviceType" 
                name="serviceType" 
                value={formData.serviceType} 
                onChange={handleChange}
              >
                <option value="Estimate">Free Estimate</option>
                <option value="Manufactured">Manufactured Home Roofing</option>
                <option value="Repair">Roof Repair</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows={5} 
                required 
                placeholder="How can we help you?"
              ></textarea>
            </div>

            {error && <div className="form-error">{error}</div>}

            <button 
              type="submit" 
              className="btn btn-primary btn-block" 
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
