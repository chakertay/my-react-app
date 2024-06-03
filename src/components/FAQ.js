// src/components/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'What is the cost of a lesson?', answer: 'The cost of a lesson is $10 per hour.' },
    { question: 'How can I schedule a lesson?', answer: 'You can schedule a lesson by clicking the "Schedule a Lesson" button on the website.' },
    { question: 'What materials do I need?', answer: 'You only need a computer with an internet connection and a desire to learn!' },
    { question: 'Are group lessons available?', answer: 'Yes, group lessons are available. Contact us for more details.' },
    { question: 'What is the cancellation policy?', answer: 'You can cancel a lesson up to 24 hours before the scheduled time without any charges.' }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card" onClick={() => handleToggle(index)}>
            <div className="faq-question">
              {faq.question}
              <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>&#9660;</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
