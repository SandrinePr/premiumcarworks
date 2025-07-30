import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './DetailingPakketten.css';

const DetailingPakketten = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('klein');
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const vehicleTypes = [
    {
      id: 'klein',
      name: 'Klein',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Compacte voertuigen'
    },
    {
      id: 'klein-middel',
      name: 'Klein/Middel',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Sedans en hatchbacks'
    },
    {
      id: 'middel-groot',
      name: 'Middel/Groot',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'SUV\'s en stationwagens'
    },
    {
      id: 'groot',
      name: 'Groot',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Luxe voertuigen en vans'
    }
  ];

  const packages = [
    {
      id: 1,
      title: 'PAKKET 1',
      subtitle: 'Basis Detailing',
      price: 249,
      duration: '4-6 uur',
      services: [
        { name: 'Exterieur Reiniging', level: 20, included: true },
        { name: 'Interieur Reiniging', level: 20, included: true },
        { name: 'Lakcorrectie', level: 5, included: true },
        { name: 'Verzegeling', level: 5, included: true }
      ],
      features: ['Basis reiniging', 'Stofzuigen interieur', 'Lichte polijstbeurt', 'Basis bescherming']
    },
    {
      id: 2,
      title: 'PAKKET 2',
      subtitle: 'Uitgebreide Detailing',
      price: 369,
      duration: '6-8 uur',
      services: [
        { name: 'Exterieur Reiniging', level: 40, included: true },
        { name: 'Interieur Reiniging', level: 40, included: true },
        { name: 'Lakcorrectie', level: 20, included: true },
        { name: 'Verzegeling', level: 20, included: true }
      ],
      features: ['Uitgebreide reiniging', 'Diepgaande interieur', 'Gemiddelde polijstbeurt', 'Verzegeling']
    },
    {
      id: 3,
      title: 'PAKKET 3',
      subtitle: 'Premium Detailing',
      price: 729,
      duration: '8-12 uur',
      services: [
        { name: 'Exterieur Reiniging', level: 80, included: true },
        { name: 'Interieur Reiniging', level: 80, included: true },
        { name: 'Lakcorrectie', level: 60, included: true },
        { name: 'Verzegeling', level: 60, included: true }
      ],
      features: ['Complete reiniging', 'Interieur behandeling', 'Uitgebreide polijstbeurt', 'Premium bescherming']
    },
    {
      id: 4,
      title: 'PREMIUM-PAKKET',
      subtitle: 'Ultimate Detailing',
      price: 1309,
      duration: '12-16 uur',
      services: [
        { name: 'Exterieur Reiniging', level: 100, included: true },
        { name: 'Interieur Reiniging', level: 100, included: true },
        { name: 'Lakcorrectie', level: 100, included: true },
        { name: 'Verzegeling', level: 100, included: true }
      ],
      features: ['Ultimate reiniging', 'Complete interieur', 'Perfecte polijstbeurt', 'Keramische coating'],
      isPremium: true
    }
  ];

  const handleVehicleSelect = (vehicleId) => {
    setSelectedVehicle(vehicleId);
  };

  const handleAppointment = (packageId) => {
    // Open WhatsApp with pre-filled message
    const message = `Hallo! Ik ben geïnteresseerd in ${packages.find(p => p.id === packageId)?.title} voor een ${vehicleTypes.find(v => v.id === selectedVehicle)?.name} voertuig.`;
    const whatsappUrl = `https://wa.me/31432340800?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInfo = (packageId) => {
    // Scroll to detailed information or open modal
    console.log(`Info requested for package ${packageId}`);
  };

  return (
    <section className="detailing-pakketten-page">
      <div className="container">
        <div className="page-header">
          <div className="header-badge">DETAILING PAKKETTEN</div>
          <h1>Kies uw perfecte detailing pakket</h1>
          <p className="header-description">
            Ontvang direct een prijsindicatie op basis van uw voertuigtype. Onze pakketten zijn zorgvuldig samengesteld 
            om maximale resultaten te leveren, afgestemd op uw wensen en voertuig.
          </p>
        </div>

        <div className="vehicle-selection">
          <h2>Selecteer uw voertuigtype</h2>
          <div className="vehicle-grid">
            {vehicleTypes.map((vehicle) => (
              <div 
                key={vehicle.id} 
                className={`vehicle-card ${selectedVehicle === vehicle.id ? 'selected' : ''}`}
                onClick={() => handleVehicleSelect(vehicle.id)}
              >
                <div className="vehicle-image">
                  <img src={vehicle.image} alt={vehicle.name} />
                  <div className="vehicle-overlay">
                    <i className="fas fa-check"></i>
                  </div>
                </div>
                <div className="vehicle-info">
                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="packages-section" ref={ref}>
          <h2>Beschikbare pakketten voor {vehicleTypes.find(v => v.id === selectedVehicle)?.name} voertuigen</h2>
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`package-card ${pkg.isPremium ? 'premium' : ''}`}>
                <div className="package-header">
                  <div className="package-title">
                    <h3>{pkg.title}</h3>
                    <span className="package-subtitle">{pkg.subtitle}</span>
                  </div>
                  {pkg.isPremium && (
                    <div className="premium-badge">
                      <i className="fas fa-crown"></i>
                      PREMIUM
                    </div>
                  )}
                </div>
                
                <div className="package-price">
                  <span className="price-amount">
                    {inView ? (
                      <CountUp end={pkg.price} duration={1} prefix="Vanaf €" />
                    ) : (
                      'Vanaf €0'
                    )}
                  </span>
                  <span className="price-duration">{pkg.duration}</span>
                </div>
                
                <div className="services-list">
                  {pkg.services.map((service, index) => (
                    <div key={index} className="service-item">
                      <div className="service-info">
                        <span className="service-name">{service.name}</span>
                        <span className="service-level">{service.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${service.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="package-features">
                  <h4>Inbegrepen:</h4>
                  <ul>
                    {pkg.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="package-buttons">
                  <button 
                    className="btn-info"
                    onClick={() => handleInfo(pkg.id)}
                  >
                    <i className="fas fa-info-circle"></i>
                    Meer info
                  </button>
                  <button 
                    className="btn-appointment"
                    onClick={() => handleAppointment(pkg.id)}
                  >
                    <i className="fab fa-whatsapp"></i>
                    Afspraak maken
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-section">
          <div className="contact-card">
            <h3>Niet zeker over uw keuze?</h3>
            <p>Neem gerust contact met ons op voor persoonlijk advies</p>port default DetailingPakketten;
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

export default DetailingPakketten;