import React from 'react';
import './projects.css';
import ProjectCard from './ProjectCard';

import project1 from '../../assets/project-1.png';
import project2 from '../../assets/project-2.png';
import project3 from '../../assets/project-3.png';
import project4 from '../../assets/project-4.png';
import project5 from '../../assets/project-5.png';
import project6 from '../../assets/project-6.png';
import project7 from '../../assets/project-7.png';
import project8 from '../../assets/project-8.png';
import project9 from '../../assets/project-9.png';
import project10 from '../../assets/project-10.jpg';
import project11 from '../../assets/project11.jpg';
import project12 from '../../assets/project12.jpg';

const Projects = () => {

  const projectData = [
    { id: "1", name: "Premium Design Taj Royal Restaurant", src: project1, preview: true, youtube: "https://www.youtube.com/watch?v=HR9lszepjRQ", code: "https://github.com/thasneem9/taj-royal-restaurant", readme: false },
    { id: "2", name: "InstaWave Full Stack Application", src: project2, preview: true, youtube: "https://www.youtube.com/watch?v=HR9lszepjRQ", code: "https://github.com/thasneem9/instawave", readme: false },
    { id: "3", name: "View Point Tourist Home Website", src: project3, preview: true, youtube: "", code: "https://github.com/thasneem9/view-point-tourist-home", readme: true },
    { id: "12", name: "Portfolio Project Interactive UI", src: project12, preview: true, youtube: "", code: "https://github.com/thasneem9/portfolio-nextjs", readme: true },
    { id: "4", name: "Fun To-Do List Application", src: project4, preview: true, youtube: "", code: "https://github.com/thasneem9/todoapp", readme: true },
    { id: "5", name: "Birds and Their Sounds Fun Project", src: project5, preview: false, youtube: "", code: "https://github.com/thasneem9/birdSounds", readme: true },
    { id: "6", name: "Nike Shoe Product Display Card", src: project6, preview: true, youtube: "", code: "https://github.com/thasneem9/3d-card", readme: true },
    { id: "10", name: "Hair Saloon Website Modern UI", src: project10, preview: true, youtube: "", code: "https://github.com/thasneem9/HairDay-FinalProject", readme: false },
    { id: "7", name: "Currency Converter Mini Project", src: project7, preview: false, youtube: "", code: "https://github.com/thasneem9/ex231currency", readme: true },
    { id: "8", name: "HTML CSS Mini Projects", src: project8, preview: true, youtube: "", code: "https://github.com/thasneem9/PORTFOLIO", readme: false },
    { id: "9", name: "Full Stack Blog Application (PERN Stack)", src: project9, preview: false, youtube: "https://youtu.be/rtoxiNASIXA", code: "https://github.com/thasneem9/PERN-Blog-App", readme: false }
  ];

  return (
    <>
      <h1 className='project-h1' id="projects">My Projects</h1>
      <div className='project-container'>
        {projectData.map((p) => (
          <a href={p.url} style={{ textDecoration: "none" }} key={p.id}>
            <ProjectCard 
              name={p.name} 
              src={p.src} 
              preview={p.preview} 
              youtube={p.youtube} 
              code={p.code} 
              readme={p.readme} 
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default Projects;
