import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Telefonisch bereikbaar',
      icon: 'fas fa-phone',
      content: '0031-432340800',
      link: 'tel:0031-432340800'
    },
    {
      title: 'Email',
      icon: 'fas fa-envelope',
      content: 'info@premiumcarworks.eu',
      link: 'mailto:info@premiumcarworks.eu'
    },
    {
      title: 'Locatie',
      icon: 'fas fa-map-marker-alt',
      content: 'Akersteenweg 10, 6227AA, Maastricht',
      link: 'https://maps.google.com/?q=Akersteenweg+10,+6227AA,+Maastricht'
    },
    {
      title: 'Openingstijden',
      icon: 'fas fa-clock',
      content: (
        <div>
          <div>Maandag-Vrijdag: 08:30-17:30</div>
          <div>Zaterdag: 9:00-13:00</div>
        </div>
      ),
      link: null
    },
    {
      title: 'KvK-nummer',
      icon: 'fas fa-building',
      content: '12345678',
      link: null
    },
    {
      title: 'BTW-nummer',
      icon: 'fas fa-euro-sign',
      content: 'NL123456789B01',
      link: null
    }
  ];

  const handleLinkClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <div className="footer-icon">
                <i className={section.icon}></i>
              </div>
              <div className="footer-info">
                <h3 className="footer-title">{section.title}</h3>
                <div 
                  className={`footer-content-text ${section.link ? 'clickable' : ''}`}
                  onClick={() => handleLinkClick(section.link)}
                >
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="footer-links">
          <Link to="/privacy" className="footer-link">Privacyverklaring</Link>
          <Link to="/voorwaarden" className="footer-link">Algemene voorwaarden</Link>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            Copyright © {currentYear} Premium Car Works
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 