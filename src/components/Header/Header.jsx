import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-links">
              <a href="#faq">FAQ</a>
              <a href="#about">Over ons</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo">
              <img 
                src="/logo.svg" 
                alt="Premium Car Works Logo" 
                className="logo-image"
              />
            </Link>

            <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <Link to="/" className="nav-link">Home</Link>
              <div className="nav-dropdown">
                <Link to="/detailing" className="nav-link">
                  Detailing <span className="dropdown-arrow">▼</span>
                </Link>
                <div className="dropdown-menu">
                  <Link to="/detailing/pakketten">Pakketten</Link>
                  <Link to="/detailing/behandeling-op-maat">Behandeling op maat</Link>
                  <Link to="/detailing/overige-werkzaamheden">Overige werkzaamheden</Link>
                </div>
              </div>
              <a href="#service" className="nav-link">Service</a>
              <a href="#customs" className="nav-link">Customs</a>
              <Link to="/gallery" className="nav-link">Gallerij</Link>
            </div>

            <button 
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 