import React from 'react';
import './DetailingOverige.css';

const DetailingOverige = () => {
  const services = [
    {
      id: 1,
      title: 'Uitdeuken zonder spuiten',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-tools'
    },
    {
      id: 2,
      title: 'Droog ijsstralen',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-snowflake'
    },
    {
      id: 3,
      title: 'Koplampen polijsten',
      price: 'Vanaf €40,-',
      icon: 'fas fa-lightbulb'
    },
    {
      id: 4,
      title: 'Kunststof reparatie',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-wrench'
    },
    {
      id: 5,
      title: 'Bekleding reparatie',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-couch'
    },
    {
      id: 6,
      title: 'Leer reparatie',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-leather'
    },
    {
      id: 7,
      title: 'Smart repair',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-magic'
    },
    {
      id: 8,
      title: 'Velgen polijsten',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-circle'
    },
    {
      id: 9,
      title: 'Ramen polijsten',
      price: 'Prijs op aanvraag',
      icon: 'fas fa-window-maximize'
    }
  ];

  return (
    <section className="detailing-overige-page">
      <div className="container">
        <div className="page-header">
          <h1>OVERIGE WERKZAAMHEDEN</h1>
          <h2>Maak hier uw keuze</h2>
          <p>
            Naast onze standaard detailing diensten bieden wij ook een breed scala aan specialistische werkzaamheden. Van kleine reparaties tot complete restauraties - wij hebben de expertise en materialen om uw voertuig in perfecte staat te brengen.
          </p>
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

export default DetailingOverige; 