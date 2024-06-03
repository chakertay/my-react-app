// src/components/Header.js
import React from 'react';
import './Header.css';
import brand from '../brandlogo.jpeg'
const Header = () => {
  return (
    <header>
      <div class="logo">
        <img src={brand} alt="Angela Spanish Teacher Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="schedule-button">Schedule a Lesson</button>
      </nav>
    </header>
  );
};

export default Header;
