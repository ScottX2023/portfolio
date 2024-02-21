import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../projectsData.json';
import Banner from './Banner';
import ProjectInfo from './ProjectInfo'

function ProjectDetails() {
  const { id } = useParams();
  const project = data.find((item) => item.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <h2 className="centered">{project.title}</h2>
      <Banner imageUrl={`/${project.bannerImage}`} title={project.title} />
      <ProjectInfo projectId={id} />
    </div>
  );
}

export default ProjectDetails;
