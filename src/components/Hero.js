import React, { useState, useEffect } from 'react';
import profileImage from '../image.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hello, I'm Nethmee Mudannayake";
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        // Show subtitle after typing is complete
        setTimeout(() => setShowSubtitle(true), 500);
        // Show description after subtitle
        setTimeout(() => setShowDescription(true), 1000);
        // Show social links after description
        setTimeout(() => setShowSocial(true), 1500);
      }
    }, 100); // Adjust speed here (lower = faster)

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-main-content">
          <div className="hero-text">
            <h1 className="typewriter">
              {displayText}
            </h1>
            <p className={`subtitle ${showSubtitle ? 'fade-in' : ''}`}>BSc (Hons) Computer Science Undergraduate at Informatics Institute of Technology affiliated with the University of Westminster</p>
            <p className={`subtitle ${showSubtitle ? 'fade-in' : ''}`}>Intern Software Engineer at Wiley</p>
          </div>
          <div className="hero-image-container">
            <img
              src={profileImage}
              alt="Nethmee Mudannayake"
              className="hero-image"
            />
          </div>
        </div>
        <div className={`social-links ${showSocial ? 'fade-in' : ''}`}>
          <a href="https://linkedin.com/in/nethmee-mudannayake" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/_.nethmeee._?igsh=eWI1MXhqN24xNnh1&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/share/168xQfT95q/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com/nethmee03" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
