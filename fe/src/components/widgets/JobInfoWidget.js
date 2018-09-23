import React from 'react';

const JobInfoWidget = ({ job }) => {
  return (
    <div>
      <div>Address: {job.address}</div>
      <div>Country: {job.country}</div>
      <div>Education: {job.requirements.education.name}</div>
      <div>
        Experience:
        {job.requirements.experience.map(exp => (
          <ul>
            <li>Name: {exp.name}</li>
            <li>Description: {exp.description}</li>
          </ul>
        ))}
      </div>
      <div>
        Skills:
        {job.requirements.skills.map(skill => (
          <ul>
            <li>Name: {skill.name}</li>
            <li>Description: {skill.description}</li>
          </ul>
        ))}
      </div>
      <div>
        Experience:
        {job.requirements.values.map(value => (
          <ul>
            <li>Name: {value.name}</li>
            <li>Description: {value.description}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default JobInfoWidget;
