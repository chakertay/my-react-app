// src/components/Testimonials.js
import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { text: 'Testimonial 1', author: '- Author 1' },
    { text: 'Testimonial 2', author: '- Author 2' },
    { text: 'Testimonial 3', author: '- Author 3' },
    { text: 'Testimonial 4', author: '- Author 4' }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        <button className="nav-button" onClick={handlePrev}>&#10094;</button>
        <div className="testimonial-card">
          <p className="testimonial-text">{testimonials[currentIndex].text}</p>
          <p className="testimonial-author">{testimonials[currentIndex].author}</p>
        </div>
        <button className="nav-button" onClick={handleNext}>&#10095;</button>
      </div>
    </section>
  );
};

export default Testimonials;

