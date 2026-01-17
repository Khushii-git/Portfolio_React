import React from "react";
import "./Project.css";

const Project = ({ title, description, technologies, github, demo }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <span className="project-title">{title}</span>
      </div>
      <div className="project-content">
        <span className="project-description">{description}</span>
        <div className="project-tech">
          <span className="tech-label">Technologies:</span>
          <span className="tech-stack">{technologies}</span>
        </div>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="project-link">
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: "Deep Learning-based Automated Cervical Cancer Screening",
description: "Automated AI-based system using DenseNet121 to classify cervix images as Normal or Abnormal for early detection. Features a cloud-deployed web interface for real-time use, supporting healthcare professionals in remote areas.",
technologies: "Python, TensorFlow, OpenCV, Image Processing, Cloud Deployment",
github: "https://github.com/Khushii-git/Cancer_Detection",
demo: null

    },
    {
  title: "Console-Based Food Ordering System",
  description: "Role-based food ordering system for Admin & Students with menu management, order placement, and order history. Uses MVC architecture for clean separation of concerns and Hibernate ORM for database operations.",
  technologies: "Java, Hibernate, MySQL, JDBC, MVC Architecture, Console UI",
  github: "https://github.com/Khushii-git",  
  demo: null
},

    {
  title: "User-Centric Online Banking Portal",
  description: "Secure online banking portal with user authentication, role-based access, account balance checks, money transfers, and transaction history. Ensures session integrity and protection against unauthorized access.",
  technologies: "Java Servlets, JSP, HTML, CSS, JDBC, MySQL",
  github: "https://github.com/Khushii-git/Bank_Management", 
  demo: null
},

   
  ];

  return (
    <div className="projects">
      {/* Left Section */}
      <div className="projects-header">
        <span>My Recent</span>
        <span>Projects</span>
        <span>
          Here are some of my recent projects showcasing my skills in
          <br />
          full-stack development, AI/ML, and web technologies.
        </span>
        <div
          className="blur p-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>

      {/* Right Section - Project Cards */}
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className={`project-wrapper project-${index + 1}`}>
            <Project
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
            />
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default Projects;
