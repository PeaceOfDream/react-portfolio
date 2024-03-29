import React from 'react';
import { BtnGitHub } from '../components/btnGitHub/BtnGitHub';
import { useParams } from 'react-router-dom';
import { projects } from '../helpers/projectsList';

export const ProjectPage = () => {
  const {id} = useParams();
  const project = projects[id];
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <a href={project.projectLink} target="_blank" rel="noreferrer">
            <img src={project.img} alt={project.title} className="project-details__cover" />
          </a>

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
        </div>
      </div>
    </main>
  );
};
