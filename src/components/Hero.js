import React, { useState, useEffect } from 'react';
import profileImage from '../image.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hello, I'm Nethmee Mudannayake";
  const [showSubtitle1, setShowSubtitle1] = useState(false);
  const [showSubtitle2, setShowSubtitle2] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        // Show first subtitle after typing is complete
        setTimeout(() => setShowSubtitle1(true), 1000);
        // Show second subtitle after first one
        setTimeout(() => setShowSubtitle2(true), 2000);
        // Show social links after second subtitle
        setTimeout(() => setShowSocial(true), 3000);
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
            <div className={`subtitle-point ${showSubtitle1 ? 'fade-in' : ''}`}>
              <span className="point-indicator"></span>
              <span className="point-text">BSc (Hons) Computer Science Undergraduate at Informatics Institute of Technology affiliated with the University of Westminster</span>
            </div>
            <div className={`subtitle-point ${showSubtitle2 ? 'fade-in' : ''}`}>
              <span className="point-indicator"></span>
              <span className="point-text">Intern Software Engineer at Wiley</span>
            </div>
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
