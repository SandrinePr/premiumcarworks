import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Statistics.css';

const Statistics = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const packages = [
    {
      id: 1,
      title: 'PAKKET 1',
      subtitle: 'KLEIN',
      price: 249,
      services: [
        { name: 'Exterieur Reiniging', level: 100 },
        { name: 'Interieur Reiniging', level: 100 },
        { name: 'Lakcorrectie', level: 20 },
        { name: 'Verzegeling', level: 20 }
      ]
    },
    {
      id: 2,
      title: 'PAKKET 2',
      subtitle: 'KLEIN',
      price: 369,
      services: [
        { name: 'Exterieur Reiniging', level: 100 },
        { name: 'Interieur Reiniging', level: 100 },
        { name: 'Lakcorrectie', level: 40 },
        { name: 'Verzegeling', level: 40 }
      ]
    },
    {
      id: 3,
      title: 'PAKKET 3',
      subtitle: 'KLEIN',
      price: 729,
      services: [
        { name: 'Exterieur Reiniging', level: 100 },
        { name: 'Interieur Reiniging', level: 100 },
        { name: 'Lakcorrectie', level: 80 },
        { name: 'Verzegeling', level: 80 }
      ]
    },
    {
      id: 4,
      title: 'PREMIUM-PAKKET',
      subtitle: 'KLEIN',
      price: 1309,
      services: [
        { name: 'Exterieur Reiniging', level: 100 },
        { name: 'Interieur Reiniging', level: 100 },
        { name: 'Lakcorrectie', level: 100 },
        { name: 'Verzegeling', level: 100 }
      ],
      isPremium: true
    }
  ];

  const handleAppointment = (packageId) => {
    const selectedPackage = packages.find(p => p.id === packageId);
    const message = `Hallo! Ik ben geïnteresseerd in ${selectedPackage.title} ${selectedPackage.subtitle} voor €${selectedPackage.price}.`;
    const whatsappUrl = `https://wa.me/31432340800?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInfo = (packageId) => {
    // Navigate to detailing page
    window.location.href = '/detailing/pakketten';
  };

  return (
    <section className="statistics">
      <div className="container">
        <div className="packages-section" ref={ref}>
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`package-card ${pkg.isPremium ? 'premium' : ''}`}>
                <div className="package-header">
                  <h3>{pkg.title}</h3>
                  <span className="package-subtitle">{pkg.subtitle}</span>
                </div>
                
                <div className="package-price">
                  {inView && (
                    <CountUp
                      start={0}
                      end={pkg.price}
                      duration={2.5}
                      prefix="Vanaf €"
                      key={inView ? 'counting' : 'not-counting'}
                    />
                  )}
                </div>
                
                <div className="services-list">
                  {pkg.services.map((service, index) => (
                    <div key={index} className="service-item">
                      <span className="service-name">{service.name}</span>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${service.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="package-buttons">
                  <button 
                    className="btn-info"
                    onClick={() => handleInfo(pkg.id)}
                  >
                    Informatie
                  </button>
                  <button 
                    className="btn-appointment"
                    onClick={() => handleAppointment(pkg.id)}
                  >
                    Maak een afspraak
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics; 