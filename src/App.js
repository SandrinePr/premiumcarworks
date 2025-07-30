import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaInstagram, FaCalendarAlt, FaUsers, FaUserTie, FaStar } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
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
  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true, // animatie maar 1x
  });

  return (
    <>
      <Hero />
      <Welcome />
      <WhyChooseUs />

      {/* Social + statistieken blok NA de pakketten */}
      <div
        style={{
          margin: '3rem 0',
          padding: '2rem 1rem',
          maxWidth: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/31612345678"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#00bcd4', // turquoise
              textDecoration: 'none',
              fontSize: '1.15rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: 120,
              transition: 'transform 0.2s',
            }}
          >
            <FaWhatsapp style={{ fontSize: '2.1rem', marginBottom: 6, color: '#00bcd4' }} />
            <strong>WhatsApp</strong>
            <span style={{ fontWeight: 'normal', fontSize: '1rem' }}>Stuur ons een bericht</span>
          </a>
          <a
            href="https://facebook.com/jouwpagina"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#00bcd4', // turquoise
              textDecoration: 'none',
              fontSize: '1.15rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: 120,
              transition: 'transform 0.2s',
            }}
          >
            <FaFacebook style={{ fontSize: '2.1rem', marginBottom: 6, color: '#00bcd4' }} />
            <strong>Facebook</strong>
            <span style={{ fontWeight: 'normal', fontSize: '1rem' }}>Bekijk onze pagina</span>
          </a>
          <a
            href="https://instagram.com/jouwprojecten"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#00bcd4', // turquoise
              textDecoration: 'none',
              fontSize: '1.15rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: 120,
              transition: 'transform 0.2s',
            }}
          >
            <FaInstagram style={{ fontSize: '2.1rem', marginBottom: 6, color: '#00bcd4' }} />
            <strong>Instagram</strong>
            <span style={{ fontWeight: 'normal', fontSize: '1rem' }}>Bekijk onze projecten</span>
          </a>
        </div>
        <div
          ref={statsRef}
          style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}
        >
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center', minWidth: 120 }}>
            <FaCalendarAlt style={{ fontSize: '2.2rem', color: '#00bcd4', marginBottom: 6 }} /><br />
            {statsInView ? <CountUp end={6} duration={1} /> : 0}+<br />
            <span style={{ fontWeight: 'normal', fontSize: '1rem', color: '#555' }}>JAREN ERVARING</span>
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center', minWidth: 120 }}>
            <FaUsers style={{ fontSize: '2.2rem', color: '#00bcd4', marginBottom: 6 }} /><br />
            {statsInView ? <CountUp end={175} duration={1} /> : 0}+<br />
            <span style={{ fontWeight: 'normal', fontSize: '1rem', color: '#555' }}>TROUWE KLANTEN</span>
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center', minWidth: 120 }}>
            <FaUserTie style={{ fontSize: '2.2rem', color: '#00bcd4', marginBottom: 6 }} /><br />
            {statsInView ? <CountUp end={2} duration={1} /> : 0}+<br />
            <span style={{ fontWeight: 'normal', fontSize: '1rem', color: '#555' }}>TEAM LEDEN</span>
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center', minWidth: 120 }}>
            <FaStar style={{ fontSize: '2.2rem', color: '#00bcd4', marginBottom: 6 }} /><br />
            <span style={{ fontSize: '1.5rem' }}>
              {statsInView ? <CountUp end={5} duration={1} /> : 0}/5
            </span><br />
            <span style={{ fontWeight: 'normal', fontSize: '1rem', color: '#555' }}>KLANTENBEOORDELING</span>
          </div>
        </div>
      </div>


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