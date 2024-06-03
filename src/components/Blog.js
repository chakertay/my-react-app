// src/components/Blog.js
import React from 'react';
import './Blog.css';
const Blog = ({ image, content }) => {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <div className="blog-image">
          <img src={image} alt="Blog" />
        </div>
        <div className="blog-content">
          <p>{content}</p>
          <button className="schedule-button">Schedule a Lesson Now</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

