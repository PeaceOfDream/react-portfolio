import React from 'react'
import { Link } from 'react-router-dom';


import './style.css'

export const Project = ({title, img, index}) => {
  return (
    <li className="project">
      <Link to={`/projects/${index}`}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </Link>
    </li>
  );
}
