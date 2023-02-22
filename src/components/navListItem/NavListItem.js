import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavListItem = () => {
  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  const activeToggle = ({ isActive }) => (isActive ? activeLink : normalLink)
  return (
    <ul className="nav-list">
      <li className="nav-list__item">
        <NavLink to="/projects" className={activeToggle}>
          Projects
        </NavLink>
      </li>
      <li className="nav-list__item">
        <NavLink to="/skills" className={activeToggle}>
          Skills
        </NavLink>
      </li>
      <li className="nav-list__item">
        <NavLink to="/contacts" className={activeToggle}>
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};
