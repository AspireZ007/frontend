import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div className="profile-skills">
      <h5 className="mb-20 h5 text-blue">Key Skills</h5>
      {skills.map((skill, index) => (
        <React.Fragment key={index}>
          <h6 className="mb-5 font-14">{skill.name}</h6>
          <div className="progress mb-20" style={{ height: 6 }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${skill.progress}%` }}
              aria-valuenow={skill.progress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Skills;
