// src/components/Services.js
import React, { useState } from 'react';
import './Services.css';
import logo from '../logo1.png'

const ServiceCard = ({ logo, title, initialDetails, moreDetails }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`service-card ${expanded ? 'expanded' : ''}`}>
      <div className="card-header">
        <img src={logo} alt={title} className="card-logo" />
        <div className="card-title-details">
          <h3>{title}</h3>
      <div clasName ="text-align">
        <p className="initial-details">{initialDetails}</p>
      </div>
        </div>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Learn More'}
        </button>
      </div>

      {expanded && (
        <div className="card-details">
          <p>{moreDetails}</p>
        </div>
      )}
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>How the Lesson Works</h2>
      <p>This is what makes my class unique</p>
      <div className="services-container">
        <ServiceCard
          logo={logo}
          title="Personalized Curriculum"
          initialDetails="Every lesson is tailored to meet your specific needs and goals, ensuring maximum engagement and progress."
          moreDetails="Our curriculum adapts as you improve, providing constant challenges and rewards."
        />
        <ServiceCard
          logo={logo}
          title="Interactive Activities"
          initialDetails="Engage in a variety of interactive activities designed to make learning Spanish fun and effective."
          moreDetails="From games to role-playing, these activities reinforce language skills in a dynamic way."
        />
        <ServiceCard
          logo={logo}
          title="Flexible Scheduling"
          initialDetails="Lessons are scheduled at your convenience, making it easy to fit Spanish learning into your busy life."
          moreDetails="Choose from multiple time slots and reschedule lessons with ease."
        />
        <ServiceCard
          logo={logo}
          title="Cultural Insights"
          initialDetails="Gain insights into Spanish-speaking cultures to enrich your learning experience and understanding."
          moreDetails="Learn about traditions, history, and everyday life from various Spanish-speaking countries."
        />
      </div>
    </section>
  );
};

export default Services;

