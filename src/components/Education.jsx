import React from 'react';
import { useSelector } from 'react-redux';

const educationData = [
  {
    year: 2001,
    title: 'Title 0',
    description: 'Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id laboris dolore et et mollit...',
  },
  {
    year: 2000,
    title: 'Title 1',
    description: 'Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor...',
  },
  {
    year: 2012,
    title: 'Title 2',
    description: 'Labore esse tempor nisi non mollit enim ullamco veniam elit duis nostrud. Enim pariatur ullamco...',
  },
];



const Education = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((item, index) => (
          <div key={index} className={isDarkMode ? 'education-item  block-dark-mode' : 'education-item block-light-mode'}>
            <div className="year">{item.year}</div>
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;