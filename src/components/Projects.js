
import React from 'react';
import './Projects.css';
import proj1 from '../assets/proj1.jpg'; 
import proj2 from '../assets/proj2.jpg'; 

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2>My Projects</h2>
      <div className="project">
        <img src={proj1} alt="Sweet Temptations Cafe" />
        <p>Sweet Temptations Cafe:
            A Website specifically created using HTML&CSS for promoting products through online.</p>
      </div>
      <div className="project">
        <img src={proj2} alt="AwesomeTodos App" />
        <p>AwesomeTodos App:
            A full stack web application using the MERN stack(MongoDB,Express,React,and Node)</p>
      </div>
    </section>
  );
};

export default Projects;
