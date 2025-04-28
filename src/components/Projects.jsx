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
import project13 from '../../assets/project13.png';
import project14 from '../../assets/project14.png';

const Projects = () => {

  const projectData = [
    { id: "1", name: "Premium Design Taj Royal Restaurant", src: project1, preview: "https://thasneem9.github.io/taj-royal-restaurant/", youtube: "", code: "https://github.com/thasneem9/taj-royal-restaurant", readme: "https://github.com/thasneem9/taj-royal-restaurant/blob/main/README.md" },
    { id: "2", name: "InstaWave Full Stack Application", src: project2, preview: "https://frontend-production-9386.up.railway.app/", youtube: "https://www.youtube.com/watch?v=HR9lszepjRQ", code: "https://github.com/thasneem9/InstaWave---Copy", readme:"https://github.com/thasneem9/InstaWave---Copy/blob/main/README.md" },
    { id: "13", name: "Modern GYM website ReactJs", src: project13, preview: "https://thasneem9.github.io/elovon/", youtube: "", code: "https://github.com/thasneem9/elovon", readme: "https://github.com/thasneem9/elovon/blob/master/README.md" },
    { id: "3", name: "View Point Tourist Home Website", src: project3, preview: "https://thasneem9.github.io/viewPointTouristHome/", youtube: "", code: "https://github.com/thasneem9/view-point-tourist-home", readme: false },
    { id: "4", name: "Fun To-Do List Application", src: project4, preview: "https://thasneem9.github.io/todoapp/", youtube: "", code: "https://github.com/thasneem9/todoapp", readme: false },
    { id: "12", name: "Portfolio Project Interactive UI", src: project12, preview: "https://thasneem9.github.io/portfolio-nextjs/", youtube: "", code: "https://github.com/thasneem9/portfolio-nextjs", readme: false },
    { id: "5", name: "Birds and Their Sounds Fun Project", src: project5, preview: "https://thasneem9.github.io/birdSounds/", youtube: "", code: "https://github.com/thasneem9/birdSounds", readme: false },
    { id: "10", name: "Hair Saloon Website Modern UI", src: project10, preview: "https://thasneem9.github.io/HairDay-FinalProject/", youtube: "", code: "https://github.com/thasneem9/HairDay-FinalProject", readme: false },
    { id: "7", name: "Currency Converter Mini Project", src: project7, preview: false, youtube: "", code: "https://github.com/thasneem9/ex231currency", readme: "https://github.com/thasneem9/ex231currency/blob/main/README.md" },
    { id: "8", name: "HTML CSS Mini Projects", src: project8, preview: "https://thasneem9.github.io/PORTFOLIO", youtube: "", code: "https://github.com/thasneem9/PORTFOLIO", readme: false },
    { id: "9", name: "Full Stack Blog Application (PERN Stack)", src: project9, preview: "", youtube: "https://youtu.be/rtoxiNASIXA", code: "https://github.com/thasneem9/PERN-Blog-App", readme: false },
    { id: "14", name: "Leave Mangement System (ongoing)", src: project14, preview: "", youtube: "", code: "" ,readme: "" ,prototype:"https://www.figma.com/design/lmk7EgWxD2xgekn0Q5C54l/Leave-Management-System?node-id=0-1&p=f&t=9aAZMw072ZuJ7XfK-0"}
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
              prototype={p.prototype}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default Projects;
