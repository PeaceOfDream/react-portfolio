import React from 'react'

export const SocialItem = ({link, img}) => {
  return (
    <li className="social__item">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt={img} />
      </a>
    </li>
  );
}
