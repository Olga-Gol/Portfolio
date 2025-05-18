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
                <div v className="skill-modal" onClick={handleModalClick}>
                    <div className="skill-content">

                        <div className="skill-details">
                            <h3>{activeSkill.name}</h3>

                            <div className={`skill-body ${!activeSkill.imgSrc && !activeSkill.videos ? 'no-media' : ''}`}>
                                {(activeSkill.imgSrc || activeSkill.videos) && (
                                    <div className="skill-image-container">
                                        {activeSkill.imgSrc ? (
                                            <img src={activeSkill.imgSrc} alt={activeSkill.name} />
                                        ) : (
                                            <div className="video-rotation-container">
                                                {activeSkill.videos.map((videoSrc, index) => (
                                                    <video
                                                        key={index}
                                                        src={videoSrc}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        className="rotating-video"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className="skill-description">
                                    {activeSkill.description()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="close-button" onClick={() => setActiveSkill(null)}>X</button>
                </div>
            )};
        </div>
    )
};

export default Main;