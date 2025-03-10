import React from 'react'
import './projects.css'
import ProjectCard from './ProjectCard'

import project1 from '../../assets/project-1.png';
import project2 from '../../assets/project-2.png';
import project3 from '../../assets/project-3.png';
import project4 from '../../assets/project-4.png';
import project5 from '../../assets/project-5.png';
import project6 from '../../assets/project-6.png';
import project7 from '../../assets/project-7.png';
import project8 from '../../assets/project-8.png';
import project9 from '../../assets/project-9.png';

const Projects = () => {

  const projectData = [
    { id: "1", name: "Premium Design Taj Royal Restaurant", src: project1, url: "https://thasneem9.github.io/taj-royal-restaurant/" },
    { id: "2", name: "InstaWave Full Stack Application", src: project2, url: "https://www.youtube.com/watch?v=HR9lszepjRQ" },
    { id: "3", name: "View Point Tourist Home Website", src: project3, url: "https://thasneem9.github.io/viewPointTouristHome/" },
    { id: "4", name: "Fun To-Do List Application", src: project4, url: "https://thasneem9.github.io/todoapp/" },
    { id: "5", name: "Birds and Their Sounds Fun Project", src: project5, url: "https://thasneem9.github.io/birdSounds/" },
    { id: "6", name: "Nike Shoe Product Display Card", src: project6, url: "https://thasneem9.github.io/3d-card/" },
    { id: "7", name: "Currency Converter Mini Project", src: project7, url: "https://thasneem9.github.io/3d-card/" },
    { id: "8", name: "HTML CSS Mini Projects", src: project8, url: "https://thasneem9.github.io/PORTFOLIO" },
    { id: "9", name: "Full Stack Blog Application (PERN Stack)", src: project9, url: "https://youtu.be/rtoxiNASIXA" }
  ];

  return (
    <>
    
    <h1 className='project-h1' id="projects">My Projects</h1>
    <div className='project-container'>
 
    
 {projectData.map((p)=>(
  <a href={p.url} style={{ textDecoration: "none" }}>
   <ProjectCard key={p.id} name={p.name} src={p.src}/>
   </a>
 ))
 
 }
 
    </div>
    </>
  )
}

export default Projects