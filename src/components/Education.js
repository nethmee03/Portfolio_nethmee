import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2024 - Present</div>
            <div className="timeline-title">BSc (Hons) Computer Science</div>
            <div className="timeline-company">Informatics Institute of Technology (IIT) - Affiliated with University of Westminster</div>
            <div className="timeline-description">
              Currently pursuing a Bachelor of Science (Honors) in Computer Science at the Informatics Institute of Technology, 
              affiliated with the University of Westminster. This comprehensive program provides in-depth knowledge of 
              computer science fundamentals, software development, and modern technologies.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2008 - 2022</div>
            <div className="timeline-title">Primary and Secondary School Education</div>
            <div className="timeline-company">Bandarawela Central College</div>
            <div className="timeline-description">
              Completed primary and secondary education at Bandarawela Central College.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
