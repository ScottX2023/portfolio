import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../projectsData.json';
import Banner from './Banner';
import Test2 from './Test2';

function ProjectDetails() {
  const { id } = useParams();
  const project = data.find((item) => item.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <Banner imageUrl={`/${project.bannerImage}`} title={project.title} />
      <Test2 projectId={id} />
    </div>
  );
}

export default ProjectDetails;
