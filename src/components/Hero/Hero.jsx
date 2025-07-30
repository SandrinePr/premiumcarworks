import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'BRENG DE GLANS TERUG',
      subtitle: 'Detailing die uw voertuig transformeert tot nieuwstaat!'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'PREMIUM KVALITEIT',
      subtitle: 'Professionele auto detailing in Maastricht'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'EXPERTISE & PASSIE',
      subtitle: 'Uw voertuig verdient de beste behandeling'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    // Start automatische zoom na 1 seconde
    const zoomTimer = setTimeout(() => {
      setIsZoomed(true);
    }, 1000);

    return () => clearTimeout(zoomTimer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const scrollToContent = () => {
    const element = document.getElementById('main-content');
    if (element) {
      const currentPosition = window.pageYOffset;
      const targetPosition = element.offsetTop;
      const distance = targetPosition - currentPosition;
      const duration = 1500; // 1.5 seconde voor rustige scroll
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, currentPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  // Easing functie voor soepele animatie
  const easeInOutCubic = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  };

  return (
    <section className="hero">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide && isZoomed ? 'scale(1.15)' : 'scale(1)',
              transition: 'transform 8s ease-out'
            }}
          >
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
        <span>‹</span>
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
        <span>›</span>
      </button>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <button className="scroll-indicator" onClick={scrollToContent}>
        <span>⌄</span>
      </button>
    </section>
  );
};

export default Hero; 