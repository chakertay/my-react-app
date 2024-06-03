// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Lesson from './components/Lesson';
import Pricing from './components/Pricing'; 
import FAQ from './components/FAQ'; 
import image from './chaker.jpg'



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Services />
        <Blog 
        image={image}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
        <Testimonials />
        <Pricing/>
        <FAQ/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
