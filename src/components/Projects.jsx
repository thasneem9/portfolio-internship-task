import React from 'react'
import './projects.css'
import ProjectCard from './ProjectCard'
const Projects = () => {

  const projectData=[
    {id:"1",
      name:"Premium Design Taj Royal Restaurant",
      src:"./assets/project-1.png"
    },
    {id:"2",
      name:"InstaWave Full Stack Application",
      src:"./assets/project-2.png"
    },
    {id:"3",
      name:"View Point Tourist Home Website",
      src:"./assets/project-3.png"
    },
    {id:"4",
      name:"Fun To-Do List Application",
      src:"./assets/project-4.png"
    },
    {id:"5",
      name:"Birds and theor Sounds Fun project",
      src:"./assets/project-5.png"
    },
    {id:"6",
      name:"Nike Shoe product Display card",
      src:"./assets/project-6.png"
    },
    {id:"7",
      name:"Currency Converter Mini project",
      src:"./assets/project-7.png"
    },
    {id:"8",
      name:"HTML CSS mini Projects",
      src:"./assets/project-8.png"
    },
    {id:"9",
      name:"Full stack Blog application PERN Stack",
      src:"./assets/project-9.png"
    },
  ]

  return (
    <>
    
    <h1 className='project-h1' id="projects">My Projects</h1>
    <div className='project-container'>
 
    
 {projectData.map((p)=>(
   <ProjectCard key={p.id} name={p.name} src={p.src}/>
 ))
 
 }
 
    </div>
    </>
  )
}

export default Projects