import React from 'react';

import { NavLink } from 'react-router-dom';
import { BtnDarkMode } from '../btnDarlMode/BtnDarkMode';
import { NavListItem } from '../navListItem/NavListItem';
import './style.css';

export const Navbar = () => {


  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <NavListItem />
        </div>
      </div>
    </nav>
  );
};
