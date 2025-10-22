import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Frameworks & Libraries</h4>
            <div className="skill-tags">
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">React JS</span>
              <span className="skill-tag">Node JS</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Web Development</h4>
            <div className="skill-tags">
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Database Management</h4>
            <div className="skill-tags">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">DynamoDB</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Cloud & DevOps</h4>
            <div className="skill-tags">
              <span className="skill-tag">AWS (EC2, S3, Lambda)</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Collaboration Tools</h4>
            <div className="skill-tags">
              <span className="skill-tag">Microsoft Teams</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Version Control</h4>
            <div className="skill-tags">
              <span className="skill-tag">GitHub</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Machine Learning</h4>
            <div className="skill-tags">
              <span className="skill-tag">Basics of ML algorithms</span>
              <span className="skill-tag">Model training</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Soft Skills</h4>
            <div className="skill-tags">
              <span className="skill-tag">Leadership</span>
              <span className="skill-tag">Teamwork</span>
              <span className="skill-tag">Good Communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
