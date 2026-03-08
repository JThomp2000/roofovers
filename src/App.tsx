import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import JobPhotos from './components/JobPhotos';
import Brochures from './components/Brochures';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>Roofovers | Quality Roofing Services in Clermont, FL</title>
        <meta name="description" content="CSRS Roofovers - Professional roofing services in Clermont, FL for over 35 years. Specializing in insulated single-ply membrane roof systems for manufactured and mobile homes." />
        <link rel="canonical" href="https://roofovers.com/" />
      </Helmet>
      <Hero />
      <Services />
      <ContactForm />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/job-photos" element={<JobPhotos />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/brochures" element={<Brochures />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
