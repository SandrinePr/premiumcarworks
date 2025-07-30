import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <div className="cookie-text">
          <h3>🍪 Cookie Instellingen</h3>
          <p>
            Wij gebruiken cookies om uw ervaring op onze website te verbeteren. 
            Door onze website te gebruiken, gaat u akkoord met ons gebruik van cookies 
            zoals beschreven in ons <a href="#privacy">Privacybeleid</a>.
          </p>
        </div>
        <div className="cookie-buttons">
          <button className="cookie-btn accept" onClick={acceptCookies}>
            Accepteren
          </button>
          <button className="cookie-btn decline" onClick={declineCookies}>
            Weigeren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 