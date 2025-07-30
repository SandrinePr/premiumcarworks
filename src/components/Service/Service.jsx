import React, { useState } from 'react';
import './Service.css';

const Service = () => {
  const [activeCategory, setActiveCategory] = useState('aandrijving');

  const categories = [
    {
      id: 'aandrijving',
      name: 'Aandrijving',
      icon: 'fas fa-cog',
      services: [
        { title: 'Motor onderhoud', price: 'Vanaf €89,-', icon: 'fas fa-engine' },
        { title: 'Transmissie service', price: 'Vanaf €129,-', icon: 'fas fa-cogs' },
        { title: 'Koppeling vervangen', price: 'Vanaf €299,-', icon: 'fas fa-link' },
        { title: 'Drijfriem vervangen', price: 'Vanaf €79,-', icon: 'fas fa-belt' }
      ]
    },
    {
      id: 'onderstel',
      name: 'Onderstel',
      icon: 'fas fa-car-side',
      services: [
        { title: 'Remmen vervangen', price: 'Vanaf €149,-', icon: 'fas fa-stop-circle' },
        { title: 'Schokdempers', price: 'Vanaf €199,-', icon: 'fas fa-compress' },
        { title: 'Wielophanging', price: 'Vanaf €89,-', icon: 'fas fa-circle' },
        { title: 'Uitlijningscontrole', price: 'Vanaf €39,-', icon: 'fas fa-ruler' }
      ]
    },
    {
      id: 'carrosserie',
      name: 'Carrosserie',
      icon: 'fas fa-car',
      services: [
        { title: 'Carrosserie reparatie', price: 'Prijs op aanvraag', icon: 'fas fa-wrench' },
        { title: 'Spuitwerk', price: 'Prijs op aanvraag', icon: 'fas fa-paint-brush' },
        { title: 'Dent repair', price: 'Vanaf €49,-', icon: 'fas fa-hammer' },
        { title: 'Smart repair', price: 'Vanaf €79,-', icon: 'fas fa-magic' }
      ]
    },
    {
      id: 'elektronica',
      name: 'Elektronica',
      icon: 'fas fa-microchip',
      services: [
        { title: 'Diagnose', price: 'Vanaf €49,-', icon: 'fas fa-search' },
        { title: 'Software updates', price: 'Vanaf €29,-', icon: 'fas fa-download' },
        { title: 'Elektrische reparaties', price: 'Vanaf €69,-', icon: 'fas fa-bolt' },
        { title: 'Sensoren vervangen', price: 'Vanaf €39,-', icon: 'fas fa-eye' }
      ]
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleServiceClick = (service) => {
    // Open WhatsApp met service informatie
    const message = `Hallo! Ik ben geïnteresseerd in ${service.title} (${service.price}).`;
    const whatsappUrl = `https://wa.me/31432340800?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="service-page">
      <div className="container">
        <div className="page-header">
          <h1>BETROUWBARE ZORG VOOR OPTIMALE PRESTATIES</h1>
          <h2>Onderhoud & Reparatie voor Uw Voertuig</h2>
          <div className="intro-text">
            <p>
              Bij Premium Car Works krijgt uw auto de aandacht en zorg die het verdient. Onze Service-afdeling biedt een compleet pakket aan onderhouds- en reparatiediensten, vergelijkbaar met een traditionele autogarage.
            </p>
            <p>
              Dankzij onze ervaring werken wij met hoogwaardige onderdelen en geavanceerde technieken om uw voertuig veilig, betrouwbaar en in topconditie te houden.
            </p>
          </div>
        </div>

        <div className="service-categories">
          <h3>Onze service categorieën</h3>
          <div className="category-buttons">
            {categories.map((category) => (
              <button 
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="services-section">
          <div className="services-grid">
            {categories
              .find(cat => cat.id === activeCategory)
              ?.services.map((service, index) => (
                <div 
                  key={index} 
                  className="service-card"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-price">{service.price}</p>
                  <button className="service-btn">
                    <i className="fab fa-whatsapp"></i>
                    Vraag offerte
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div className="contact-section">
          <div className="contact-card">
            <h3>Niet zeker over uw keuze?</h3>
            <p>Neem gerust contact met ons op voor persoonlijk advies over uw voertuig</p>
            <button className="btn-contact" onClick={() => window.open('https://wa.me/31432340800', '_blank')}>
              <i className="fab fa-whatsapp"></i>
              Gratis adviesgesprek
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service; 