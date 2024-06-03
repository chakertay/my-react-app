// src/components/About.js
import React from 'react';
import './About.css';
import Chaker from "../chaker.jpg"

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <h2>Welcome to Angela's Spanish Lessons</h2>
        <p>Unlock your potential with personalized Spanish lessons tailored to your needs.</p>
        <button className="schedule-button">Schedule a Lesson</button>
      </div>
      <div className="about-right">
        {/* You can add an image or any content for the right block here */}
        <img src={Chaker} alt="Spanish Lesson" />
      </div>
    </section>
  );
};

export default About;
