import React from 'react';
import './Experience.css'; 

const Experience = () => (
  <div id="experience" className="experience-container">
    <h2 className="experience-header">EXPERIENCE</h2>
    
    <div className="timeline-container">

    <div className="timeline-item">
        <div className="time-period">June 2024 - August 2024</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
        </div>
        <div className="job-description">
        <div className="job-title">Undergraduate Research Assistant</div>
        <div className="employer-name">University of Maryland, College Park, MD </div>
        <div className="job-detail">I investigated theoretical problems in <strong>computational geometry</strong> within the Hilbert metric space,
          focusing on minimum enclosing ball problems. I proved that minimum radius balls over metric spaces with the Heine-Borel
          property are LP-type problems, representing a significant theoretical contribution to the field. I developed explicit
          primitives for computing minimum radius balls in the Hilbert metric and successfully proved extension properties for
          weak metric spaces. Additionally, I contributed to the development of dynamic <strong>JavaScript-based software</strong>
          that enables manipulation and visualization of Funk, reverse Funk, and Thompson balls in convex polygonal domains.
        </div>
      </div>
      </div>

      <div className="timeline-item">
        <div className="time-period">January 2024 - Present</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
        </div>
        <div className="job-description">
        <div className="job-title">Computer Science Teaching Assistant</div>
        <div className="employer-name">Mount Holyoke College, South Hadley, MA</div>
        <div className="job-detail">I conduct personalized one-on-one mentoring sessions for students enrolled in a 
        Data Structures course, focusing on enhancing their comprehension of <strong>Java</strong> and <strong>Python</strong> topics. My role involves 
        assisting students in <strong>debugging code</strong>, deepening their understanding of data structure concepts, and promoting 
        <strong> good coding practices</strong>. Additionally, I foster engagement and connectivity among Computer Science students, 
        contributing to a supportive and collaborative learning environment.</div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="time-period">September 2022 - Present</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
        </div>
        <div className="job-description">
        <div className="job-title">Mathematics Teaching Assistant</div>
        <div className="employer-name">Mount Holyoke College, South Hadley, MA</div>
        <div className="job-detail">I provide customized tutoring for small groups, graded assignments with feedback, and 
        collaborate closely with instructors to identify and address student challenges. I facilitate essential <strong>communication </strong> 
        between instructors and students, optimizing the learning environment for <strong>academic success</strong>.</div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="time-period">September 2023 - December 2023</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
        </div>
        <div className="job-description">
        <div className="job-title">Emerging Technology Fellow</div>
        <div className="employer-name">Mount Holyoke College, South Hadley, MA</div>
        <div className="job-detail">I led the development of a <strong>VR</strong> horror game using A-Frame and 
        <strong> Unity</strong>, employing <strong>HTML</strong>, <strong>JavaScript</strong>, and <strong>C#</strong> for creation. My 
        responsibilities included designing an interactive virtual reality environment tailored for student engagement. 
        Additionally, I coordinated a comprehensive teaching curriculum surrounding the project, culminating in hosting a project 
        showcase and workshop to demonstrate the practical application and engage wider participation.</div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="time-period">September 2023 - December 2023</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
        </div>
        <div className="job-description">
        <div className="job-title">Assistant to the IT Specialist</div>
        <div className="employer-name"> Pension Fund of the Russian Federation, Moscow</div>
        <div className="job-detail">I managed databases, ensuring data accuracy and integrity through meticulous 
        inspection for errors. My role encompassed backing up data to both cloud storage and removable media, 
        alongside troubleshooting and resolving hardware issues. Additionally, I supported the Senior Software 
        Engineer with daily tasks, including note-taking during meetings, organizing files, and managing calendars, 
        facilitating smooth operations and efficient project progression.</div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
