import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: 'fas fa-star',
      title: 'TEVREDENHEID',
      description: 'Uw wensen staan voorop. Wij leveren hoogwaardige service met oog voor detail en persoonlijke aandacht.'
    },
    {
      id: 2,
      icon: 'fas fa-trophy',
      title: 'KWALITEIT',
      description: 'Dankzij vakmanschap en precisie brengen wij uw auto in topconditie, met enkel de beste producten en technieken.'
    },
    {
      id: 3,
      icon: 'fas fa-handshake',
      title: 'BETROUWBAARHEID',
      description: 'Eerlijkheid, transparantie en een consequente werkwijze zorgen ervoor dat u altijd weet waar u aan toe bent.'
    },
    {
      id: 4,
      icon: 'fas fa-gem',
      title: 'EXCLUSIVITEIT',
      description: 'Geen standaardoplossingen, maar maatwerk dat past bij uw auto en uw stijl.'
    },
    {
      id: 5,
      icon: 'fas fa-unlock',
      title: 'TOEGANKELIJKHEID',
      description: 'Premium service voor iedereen. Modern, laagdrempelig en eerlijk geprijsd.'
    },
    {
      id: 6,
      icon: 'fas fa-user-tie',
      title: 'PROFESSIONALITEIT',
      description: 'Wij werken met de hoogste standaarden en zorgen voor een perfecte afwerking, ongeacht de uitdaging.'
    },
    {
      id: 7,
      icon: 'fas fa-users',
      title: 'BETROKKENHEID',
      description: 'Wij nemen de tijd voor uw voertuig en bieden een persoonlijke benadering waarbij vertrouwen centraal staat.'
    },
    {
      id: 8,
      icon: 'fas fa-bolt',
      title: 'INNOVATIVITEIT',
      description: 'Wij blijven vooroplopen in de branche en werken met de nieuwste technieken en slimme oplossingen.'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">WAAROM KIEZEN VOOR PREMIUM</h2>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 