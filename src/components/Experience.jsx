import React from 'react';

const ExperienceItem = ({ company, period, position, description }) => (
  <div className="experience-item">
    <div className="experience-header">
      <strong className="company-name">{company}</strong>
      <span className="work-period">{period}</span>
    </div>
    <div className="job-position">{position}</div>
    <p className="job-description">{description}</p>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      company: 'Google',
      period: '2013-2014',
      position: 'Front-end developer / php programmer',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
    },
    {
      company: 'Twitter',
      period: '2012',
      position: 'Web developer',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
    }
  ];

  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experience;