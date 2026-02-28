import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import JobPhotos from './components/JobPhotos';
import Brochures from './components/Brochures';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ContactForm />
    </>
  );
}

function App() {
  return (
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
  );
}

export default App;
