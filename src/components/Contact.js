import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-text">
            I'm always interested in connecting with fellow developers, potential mentors, and exploring new opportunities in software development.
          </p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/nethmee-mudannayake-0a66b7300/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a href="mailto:nethmeemudannayake@gmail.com" className="contact-link">
              <i className="fas fa-envelope"></i>
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
