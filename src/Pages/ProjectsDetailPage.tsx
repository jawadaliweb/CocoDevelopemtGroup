// ProjectDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../Components/Data/ProjectsData";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((proj) => proj.slug.toString() === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>ROI: {project.roi}</p>
      <p>Location: {project.location}</p>
      <h3>Details</h3>
      <ul>
        {project.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <p>Prices from: {project.price}</p>
    </div>
  );
};

export default ProjectDetail;
