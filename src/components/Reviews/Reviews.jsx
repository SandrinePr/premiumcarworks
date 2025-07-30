import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'RedMythos',
      date: '2023-12-24',
      rating: 5,
      text: 'Ik heb mijn Ferrari bij Premium Car Detailing laten keramisch coaten, super tevreden! Goede kwaliteit en veel vakkennis in huis, gaf direct...',
      avatar: 'R',
      avatarColor: '#ff4444'
    },
    {
      id: 2,
      name: 'Maurice D',
      date: '2023-09-26',
      rating: 5,
      text: 'Denkt mee met de klant en geeft daar waar nodig extra advies. Oog voor detail. Prima service en eind resultaat w...',
      avatar: 'M',
      avatarColor: '#4444ff'
    },
    {
      id: 3,
      name: 'Leroy Rooding',
      date: '2023-09-01',
      rating: 5,
      text: 'Ik heb meerdere malen van de services van Premium Car Detailing gebruik gemaakt. En ben iedere keer opnieuw positief verrast over...',
      avatar: 'L',
      avatarColor: '#44ff44'
    },
    {
      id: 4,
      name: 'Christiaan Bulles',
      date: '2023-09-01',
      rating: 5,
      text: 'Vanaf het moment dat ik mijn voertuig hier binnenbracht, wist ik dat ik kon rekenen op eersteklas service en vakmanschap....',
      avatar: 'C',
      avatarColor: '#44aa44'
    },
    {
      id: 5,
      name: 'Dwayne Westering',
      date: '2023-08-26',
      rating: 5,
      text: 'Prachtig resultaat. Eerlijke prijs voor de beste kwaliteit.',
      avatar: 'D',
      avatarColor: '#ff8844'
    }
  ];

  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews-header">
          <h2 className="reviews-subtitle">-- REVIEWS --</h2>
          <h1 className="reviews-title">UW FEEDBACK IS ONZE STUWKRACHT, LEES EN DEEL UW ERVARINGEN!</h1>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-avatar" style={{ backgroundColor: review.avatarColor }}>
                  {review.avatar}
                </div>
                <div className="review-info">
                  <h3 className="review-name">{review.name}</h3>
                  <span className="review-date">{review.date}</span>
                </div>
                <div className="google-icon">
                  <i className="fab fa-google"></i>
                </div>
              </div>
              
              <div className="review-rating">
                {[...Array(review.rating)].map((_, index) => (
                  <span key={index} className="star">★</span>
                ))}
              </div>
              
              <p className="review-text">{review.text}</p>
              
              <a href="#" className="read-more">Lees verder</a>
            </div>
          ))}
        </div>

        <div className="google-rating">
          <p>Google beoordeling: 5.0 van 5, gebaseerd op 10 recensies</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 