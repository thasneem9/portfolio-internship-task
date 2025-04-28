import React from 'react';
import { FaEye, FaGithub, FaYoutube, FaFileAlt } from 'react-icons/fa';
import './projects.css';

const ProjectCard = ({ src, name, preview, code, youtube, readme }) => {
  return (
    <div className='project-card'>
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <div className="icons-container">
        {preview && (
          <div className="icon-item">
            <FaEye />
            <span className="icon-text">Preview</span>
          </div>
        )}
        {readme && (
          <div className="icon-item">
            <FaFileAlt />
            <span className="icon-text">Readme</span>
          </div>
        )}
        {code && (
          <div className="icon-item">
            <FaGithub />
            <span className="icon-text">Code</span>
          </div>
        )}
        {youtube && (
          <div className="icon-item">
            <FaYoutube />
            <span className="icon-text">Video</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
