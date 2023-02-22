import React from 'react';
import './style.css'
import cv from '../../pdf/BartashevichDzmitry.pdf'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Dima</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href={cv} target="_blank" rel="noreferrer" className="btn">
          Download СV
        </a>
      </div>
    </header>
  );
};
