import React from "react";

const Projects = () => {
  const projects = [
    { title: "Yoga Pose Tracking System", description: "AI and ML-based Yoga Tracking System built with Python." },
    { title: "Web Template", description: "A clean and responsive HTML and CSS web template." },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
