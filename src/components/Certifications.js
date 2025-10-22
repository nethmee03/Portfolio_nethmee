import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Front-End Web Development",
      issuer: "University of Moratuwa, Sri Lanka",
      icon: "fas fa-code",
      skills: ["Angular"]
    },
    {
      title: "Python for Beginners",
      issuer: "University of Moratuwa, Sri Lanka", 
      icon: "fab fa-python",
      skills: ["Python (Programming Language)"]
    },
    {
      title: "Creating Spring Boot Microservices",
      issuer: "LinkedIn",
      icon: "fab fa-java",
      skills: ["SpringBoot"]
    },
    {
      title: "Java Object-Oriented Programming",
      issuer: "LinkedIn", 
      icon: "fab fa-java",
      skills: ["JAVA (OOP)"]
    },
    {
      title: "React Essential Training",
      issuer: "LinkedIn",
      icon: "fab fa-react",
      skills: ["React.js"]
    },
    {
      title: "Introduction to Microsoft Azure",
      issuer: "Microsoft Learn Student Ambassadors - Sri Lanka",
      icon: "fab fa-microsoft",
      skills: ["Microsoft Azure"]
    },
    {
      title: "Learning Cloud Computing: Serverless Computing",
      issuer: "LinkedIn",
      icon: "fas fa-cloud",
      skills: ["Serverless Computing"]
    },
    {
      title: "AWS for Developers: DynamoDB",
      issuer: "LinkedIn",
      icon: "fab fa-aws",
      skills: ["AWS", "DynamoDB", "NoSQL Design", "Data Modeling", "Query & Indexing", "JSON Handling"]
    },
    {
      title: "AWS Essential Training for Developers",
      issuer: "LinkedIn",
      icon: "fab fa-aws",
      skills: ["AWS Cloud Services", "EC2", "S3", "NoSQL & Database Management", "Lambda & Serverless Computing"]
    },
    {
      title: "Certificate in ESOL",
      issuer: "University of Cambridge, England",
      icon: "fas fa-language"
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className={`cert-icon ${cert.icon}`}></div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              {cert.skills && (
                <div className="cert-skills">
                  <h4>Skills:</h4>
                  <div className="skills-list">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
