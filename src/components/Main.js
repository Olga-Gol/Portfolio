import React, { useState } from 'react';
import './Main.css';
import skillData from './SkillData';

const Main = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setActiveSkill(skill);
  };

  // Group skills by category
  const groupedSkills = skillData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div id="main" className="main-container">
      <h2 className="main-header">MY SKILLS</h2>
      
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skills.map((skill) => {
              // Determine button size based on importance level
              const sizeClass = skill.importance === 'high' 
                ? 'skill-button-large' 
                : skill.importance === 'medium' 
                  ? 'skill-button-medium' 
                  : 'skill-button-small';
              
              return (
                <button
                  key={skill.id}
                  className={`skill-button ${sizeClass}`}
                  onClick={() => handleSkillClick(skill)}
                >
                  {skill.name}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {activeSkill && (
        <div className="skill-modal">
          <div className="skill-content">
            <div className="skill-image-container">
              {activeSkill.imgSrc && (
                <img src={activeSkill.imgSrc} alt={activeSkill.name} />
              )}
            </div>
            <div className="skill-details">
              <h3>{activeSkill.name}</h3>
              <div className="skill-description">
                {activeSkill.description()}
              </div>
              {activeSkill.relatedProjects && activeSkill.relatedProjects.length > 0 && (
                <div className="related-projects">
                  <h4>Related Projects</h4>
                  <ul>
                    {activeSkill.relatedProjects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <button className="close-button" onClick={() => setActiveSkill(null)}>X</button>
        </div>
      )}
    </div>
  );
};

export default Main;