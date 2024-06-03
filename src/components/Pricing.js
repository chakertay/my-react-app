// src/components/Pricing.js
import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
    <div className="web-section">
      <h2>PRICING</h2>
      <h1>Join now!</h1>
      <p>Choose your favorite plan or lessons</p>
      <ul>
        <li>An immersive and proven method</li>
        <li>Choose the best time for you!</li>
      </ul>
    </div>
      <div className="pricing-container">
        <div className="pricing-card">
          <div className="pricing-header">
            <h3>Basic</h3>
            <p>$10/month</p>
          </div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button className="start-button">Start Now</button>
        </div>
        <div className="pricing-card">
          <div className="pricing-header">
            <h3>Premium</h3>
            <p>$20/month</p>
          </div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button className="start-button">Start Now</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
