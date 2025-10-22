import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Fresh Track - Demand Management Platform",
      status: "Completed",
      description: "Fresh Track is a Demand Management and Analysis Platform for Fresh Products. The platform leverages Machine Learning insights/predictions to enable efficient demand-driven distribution, inventory management, and monitoring. This repository is intended for the collaborative development of the 'Fresh Track' mobile application.",
      technologies: ["Machine Learning", "React JS", "Node JS"]
    },
    {
      title: "Estate Agent Web Application",
      status: "Completed", 
      description: "Developing a responsive single-page web application (SPA) for property search and management with interactive filters, detailed property displays, and a favorites list. Focused on user experience, accessibility, and security.",
      technologies: ["HTML5", "CSS3", "React JS"]
    },
    {
      title: "Real Time Event Ticketing System",
      status: "Completed",
      description: "Designed and implemented a comprehensive real-time event ticketing system that enhances customer experience and streamlines ticketing operations. The system includes advanced ticket management features, real-time data updates, and secure user interactions, ensuring efficiency and reliability.",
      technologies: ["JAVA", "Spring Boot", "React JS", "MySQL"]
    },
    {
      title: "Student Results Management System",
      status: "Completed",
      description: "Developed a comprehensive system to streamline student results management. The system facilitates student registration, retrieval of student details, and management of module marks and grades, ensuring efficiency and accuracy in academic operations.",
      technologies: ["JAVA"]
    },
    {
      title: "Finance Tracker Application",
      status: "Completed",
      description: "Designed and developed a user-friendly finance tracker application to help users manage their finances effectively. The application enables users to record, categorize, and track expenses and incomes, providing a clear overview of their financial status.",
      technologies: ["Python", "Tkinter"]
    },
    {
      title: "Life on the Land Website",
      status: "Completed",
      description: "Designed and developed an interactive and visually appealing website centered on the theme 'Life on the Land.' The website includes engaging features such as a splash screen, user profiles, an image gallery, and a fully functional shop, enhancing user experience and accessibility.",
      technologies: ["HTML5", "CSS", "JavaScript"]
    },
    {
      title: "Machine Learning Research",
      status: "Completed",
      description: "Conducted an in-depth research project exploring various machine learning techniques, their classifications, practical applications, advantages, and limitations. The research provided valuable insights into supervised, unsupervised, and reinforcement learning, highlighting their impact across industries.",
      technologies: ["Machine Learning", "Research"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-2">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className={`project-status ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
              <div className="project-body">
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
