import React, { useState } from 'react';
import './Main.css';
import skillData from './SkillData';

const Main = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setActiveSkill(skill);
  };

  const handleModalClick = (e) => {
    // Close modal when clicking on the background (not the content)
    if (e.target.className === 'skill-modal') {
      setActiveSkill(null);
    }
  };

  return (
    <div id="main" className="main-container">
      <div className="skills-cloud">
        {skillData.map((skill) => {
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

      {activeSkill && (
        <div className="skill-modal" onClick={handleModalClick}>
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