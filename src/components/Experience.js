import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">March 2025 - Present</div>
            <div className="timeline-title">Intern Software Engineer - Wiley</div>
            <div className="timeline-description">
              Contributed to frontend and backend development on learning resources and AIM platforms. Built UI enhancements, 
              backend pipelines, and AWS-integrated solutions, improving content delivery, data handling, and user experience. 
              Implemented unit tests, error handling, and data privacy measures while collaborating with cross-functional teams.
            </div>
            <div className="timeline-technologies">
              <strong>Technologies:</strong> Python, TypeScript, React, AWS (S3, EC2, Lambda, DynamoDB), GitHub
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
