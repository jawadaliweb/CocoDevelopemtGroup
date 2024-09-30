// ProjectsPage.tsx
import React from 'react';
import projectsData from "../Components/Data/ProjectsData";
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <h1>Our Projects</h1>
      <div className="projects-list">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>ROI: {project.roi}</p>
            <p>{project.location}</p>
            <p>Prices from: {project.price}</p>
            <Link to={`/projects/${project.id}`}>See Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
