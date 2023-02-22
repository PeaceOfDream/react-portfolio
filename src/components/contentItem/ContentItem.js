import React from 'react'

export const ContentItem = ({title, desc}) => {
  return (
    <li className="content-list__item">
      <h2 className="title-2">{title}</h2>
      <p>{desc}</p>
    </li>
  );
}
