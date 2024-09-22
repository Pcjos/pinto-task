import React, { useState, useEffect } from 'react';
import './carousel.scss';
import CardComponent from './Card'; // Adjust the import path as necessary

const TestimonialsCarousel = ({ cardData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [cardData.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container px-10">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cardData.map((card, index) => (
          <div key={index} className="carousel-slide">
            <CardComponent
              image={card.image}
              title={card.title}
              text={card.text}
            />
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {cardData.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
