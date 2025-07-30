import React from 'react';
import { Link } from 'react-router-dom';
import './Detailing.css';

const Detailing = () => {
  return (
    <section className="detailing-page">
      <div className="container">
        <div className="page-header">
          <div className="header-badge">PERFECTIE IN LAK & BESCHERMING</div>
          <h1>Geef uw auto de glans die het verdient</h1>
          
          <div className="intro-text">
            <p>
              Bij Premium Car Works draait alles om perfectie. Van intensieve polijstbeurten en keramische coatings tot diepgaande interieurreiniging – wij bieden de ultieme bescherming en afwerking voor uw voertuig.
            </p>
            <p>
              Kies uit onze zorgvuldig samengestelde pakketten of stel een maatwerkbehandeling samen die volledig aansluit op uw wensen. Wij werken met de nieuwste technieken en hoogwaardige producten om uw auto weer in topstaat te brengen.
            </p>
            <p className="highlight-text">
              Elke auto verdient de beste zorg. Bij Premium Car Works behandelen we elk voertuig met uiterste precisie en oog voor detail, zodat u verzekerd bent van een perfect resultaat.
            </p>
          </div>
          
          <p className="cta-text">Ontdek hieronder de mogelijkheden</p>
        </div>

        <div className="action-buttons">
          <Link to="/detailing/pakketten" className="action-btn">
            <span>Pakketten</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
          <Link to="/detailing/behandeling-op-maat" className="action-btn">
            <span>Behandeling op maat</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
          <Link to="/detailing/overige-werkzaamheden" className="action-btn">
            <span>Overige werkzaamheden</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Detailing; 