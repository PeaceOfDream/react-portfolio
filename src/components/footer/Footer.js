import React from 'react'

import './style.css'
import { Social } from '../social/Social';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
			<Social/>
          <div className="copyright">
            <p>© 2023 react-portfolio-peach-one.vercel.app</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
