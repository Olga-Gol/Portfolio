import React from 'react';
import './HomePage.css'; 

const HomePage = () => (
    <div className="home-container">
      <div className="profile-section">
        <img src="/profile-pic.jpg" alt="Profile" className="profile-picture"/>
      </div>
      <div className="introduction-section">
      <h1>Hey, I'm <strong>Olga (Olya) Golovatskaia</strong></h1>
      <p>I'm a Computer Science and Mathematics student at Mount Holyoke College with a strong foundation in
        <strong>algorithms</strong>, <strong>machine learning</strong>, <strong>optimization</strong>, and <strong>computational geometry</strong>.
        I enjoy coding, solving complex problems, and working on collaborative projects that bridge theory and real-world applications.
      </p>
      <p>I work with languages like <strong>Java</strong>, <strong>JavaScript</strong>, and <strong>Python</strong>, and
        build with tools and frameworks such as <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>,
        <strong>PyTorch</strong>, and <strong>TensorFlow</strong>.  I'm driven by challenges that call for precise, thoughtful, and scalable solutions.
      </p>
      </div>
      </div>
  );

export default HomePage;
