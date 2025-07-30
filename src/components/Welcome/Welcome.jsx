import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <section className="welcome" id="main-content">
      <div className="container">
        <div className="welcome-content">
          <h2 className="welcome-subtitle">UW AUTO, ONZE PASSIE</h2>
          <h1 className="welcome-title">Welkom bij Premium Car Works in Maastricht.</h1>
          
          <div className="welcome-text">
            <p>
              Dé specialist in <strong>high-end detailing</strong>, professioneel onderhoud en voertuigpersonalisatie. Bij ons krijgt uw auto de zorg, aandacht en uitstraling die het verdient.
            </p>
            <p>
              Wij zijn geen traditionele garage, maar een moderne en veelzijdige werkplaats waar kwaliteit, innovatie en passie samenkomen. Uw wensen staan centraal, en wij zorgen ervoor dat uw voertuig altijd in topconditie verkeert.
            </p>
          </div>
          
          <p className="welcome-cta">Ontdek hieronder wat wij voor uw auto kunnen betekenen!</p>
          
          <div className="welcome-buttons">
            <button className="welcome-btn">
              <span>Detailing</span>
              <div className="btn-icon">
                <span>✓</span>
              </div>
            </button>
            <button className="welcome-btn">
              <span>Service</span>
              <div className="btn-icon">
                <span>✓</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome; 