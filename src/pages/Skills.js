import React from 'react'
import { ContentItem } from '../components/contentItem/ContentItem';
import { skills } from '../helpers/skillsList';

export const Skills = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Skills</h1>

        <ul className="content-list">
			{skills.map((skill) => (
				<ContentItem key={skill.title} title={skill.title} desc={skill.desc}/>
			))}
        </ul>
      </div>
    </main>
  );
}
