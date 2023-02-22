import React from 'react'
import './style.css'

import { socials } from '../../helpers/socialList';
import { SocialItem } from '../socialItem/SocialItem';


export const Social = () => {
  return (
    <ul className="social">
		{socials.map((social) => (
		<SocialItem key={social.img} img={social.img} link={social.link}/>
		))}
    </ul>
  );
}
