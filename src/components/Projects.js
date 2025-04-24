import React, { useState } from 'react';
import './Projects.css';
import projectData from './ProjectData';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };


  

  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-header">PROJECTS</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-item" onClick={() => handleProjectClick(project)}>
            <img src={project.imgSrc} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
      {activeProject && (
        <div className="project-modal">
        <div className="project-content">
          <div className="project-video-container">
            <video src={activeProject.videoSrc} autoPlay loop></video>
          </div>
          <div className="project-details">
            <h3>{activeProject.title}</h3>
            
          <div className="project-description">
          {activeProject.description()}
          </div>
          </div>
          </div>
          <button onClick={() => setActiveProject(null)}>X</button>
        </div>
      )}
    </div>
  );
};

export default Projects;
