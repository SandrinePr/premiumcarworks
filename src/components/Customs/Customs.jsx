import React from 'react';
import './Customs.css';

const Customs = () => {
  const services = [
    {
      id: 1,
      title: 'Chiptuning',
      price: 'Vanaf €275,-',
      icon: 'fas fa-tachometer-alt'
    },
    {
      id: 2,
      title: 'Remklauwen spuiten',
      price: 'Vanaf €275,-',
      icon: 'fas fa-palette'
    },
    {
      id: 3,
      title: 'Ambient verlichting',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-lightbulb'
    },
    {
      id: 4,
      title: 'Sterrenhemel',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-star'
    },
    {
      id: 5,
      title: 'Uitlaat',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-fire'
    },
    {
      id: 6,
      title: 'Onderstel',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-cogs'
    },
    {
      id: 7,
      title: 'Aanbouw delen',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-puzzle-piece'
    },
    {
      id: 8,
      title: 'Ramen blinderen',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-eye-slash'
    },
    {
      id: 9,
      title: 'CarPlay',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-mobile-alt'
    },
    {
      id: 10,
      title: 'Ontchromen',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-minus-circle'
    },
    {
      id: 11,
      title: 'Bolt on producten',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-wrench'
    },
    {
      id: 12,
      title: 'Velgen',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-circle'
    }
  ];

  return (
    <section className="customs-page">
      <div className="container">
        <div className="page-header">
          <h1>UNIEKE AANPASSINGEN, PERSOONLIJKE UITSTRALING</h1>
          <h2>Geef uw auto een identiteit die bij u past!</h2>
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
        </div>

        <div className="cta-section">
          <p>Bekijk hieronder de mogelijkheden</p>
        </div>

        <div className="services-section">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-price">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customs; 