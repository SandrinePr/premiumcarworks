import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Welcome from './components/Welcome/Welcome';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Statistics from './components/Statistics/Statistics';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import CookieConsent from './components/CookieConsent/CookieConsent';
import Privacy from './components/Privacy/Privacy';
import Voorwaarden from './components/Voorwaarden/Voorwaarden';
import Detailing from './components/Detailing/Detailing';
import DetailingPakketten from './components/Detailing/DetailingPakketten';
import DetailingBehandeling from './components/Detailing/DetailingBehandeling';
import DetailingOverige from './components/Detailing/DetailingOverige';
import Service from './components/Service/Service';
import Customs from './components/Customs/Customs';
import Gallery from './components/Gallery/Gallery';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhyChooseUs />
      <Statistics />
      <Reviews />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/voorwaarden" element={<Voorwaarden />} />
          <Route path="/detailing" element={<Detailing />} />
          <Route path="/detailing/pakketten" element={<DetailingPakketten />} />
          <Route path="/detailing/behandeling-op-maat" element={<DetailingBehandeling />} />
          <Route path="/detailing/overige-werkzaamheden" element={<DetailingOverige />} />
          <Route path="/service" element={<Service />} />
          <Route path="/customs" element={<Customs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App; 