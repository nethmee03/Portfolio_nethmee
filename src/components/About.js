import React from 'react';
import profileImage from '../image.jpg';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
                   <div className="about-intro">
                     <h3>Computer Science Undergraduate &<br />Software Engineer Intern</h3>
                   </div>
                   <div className="about-description">
                     <p>
                       I'm a Computer Science undergraduate at the Informatics Institute of Technology, 
                       affiliated with the University of Westminster, currently working as an Intern Software Engineer at Wiley.
                     </p>
                     <p>
                       I enjoy applying my academic knowledge in real-world projects and am passionate about 
                       using technology to solve problems and create innovative solutions. Through my studies and internship, 
                       I'm developing strong technical skills and professional experience while contributing to meaningful projects.
                     </p>
                   </div>
            <div className="about-highlights">
              <div className="highlight-item">
                <i className="fas fa-graduation-cap"></i>
                <span>Computer Science Undergraduate</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-code"></i>
                <span>Software Engineer Intern</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
