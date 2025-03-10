import React from 'react'
import './projects.css'
const ProjectCard = ({src,name}) => {
  return (
    <div className='project-card'>
    <img src={src}/>
    <h3>{name}</h3>
    
    </div>
  )
}

export default ProjectCard