import React from 'react';
import './DetailingBehandeling.css';

const DetailingBehandeling = () => {
  const categories = [
    {
      id: 1,
      title: 'Exterieur Reiniging',
      icon: 'fas fa-car',
      description: 'Complete exterieur reiniging met professionele producten'
    },
    {
      id: 2,
      title: 'Interieur Reiniging',
      icon: 'fas fa-couch',
      description: 'Diepgaande interieur reiniging en behandeling'
    },
    {
      id: 3,
      title: 'Lakcorrectie',
      icon: 'fas fa-paint-brush',
      description: 'Professionele lakcorrectie en polijstbeurten'
    },
    {
      id: 4,
      title: 'Verzegeling',
      icon: 'fas fa-shield-alt',
      description: 'Keramische coating en beschermende behandelingen'
    }
  ];

  return (
    <section className="detailing-behandeling-page">
      <div className="container">
        <div className="page-header">
          <h1>EEN BEHANDELING OP MAAT</h1>
          <h2>Maak hier uw keuze</h2>
          <p>
            Bij Premium Car Works kiest u zelf de perfecte behandeling voor uw voertuig. Stel uw pakket samen op basis van uw specifieke wensen en profiteer van een verzorging die naadloos aansluit op uw behoeften.
          </p>
          <p>
            Kies uit onze vier categorieën en ontdek de mogelijkheden voor een complete autoverzorging. Klik op de icoontjes hieronder voor meer informatie!
          </p>
        </div>

        <div className="categories-section">
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={category.id} className={`category-card ${index === 0 ? 'active' : ''}`}>
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailingBehandeling; 