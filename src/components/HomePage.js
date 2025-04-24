import React from 'react';
import './HomePage.css'; 

const HomePage = () => (
    <div className="home-container">
      <div className="profile-section">
        <img src="/profile-pic.jpg" alt="Profile" className="profile-picture"/>
      </div>
      <div className="introduction-section">
        <h1>Hey, I'm <strong>Olga Golovatskaia</strong></h1>
        <p>I'm a front-end development enthusiast with a strong foundation in computer science and mathematics. I'm 
            passionate about crafting engaging user experiences through clean, efficient code. I'm highly familiar 
            with <strong>Java</strong>, <strong>Python</strong>, and <strong>JavaScript</strong>. My toolkit includes 
            a range of technologies and frameworks, including <strong>React</strong>, <strong>Next.js</strong> and <strong>Node.js</strong>, 
            among others. When I'm not coding, you might find me exploring virtual reality projects or diving into the abstract algebraic structures.</p>
      </div>
    </div>
  );

export default HomePage;
