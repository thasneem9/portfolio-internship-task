import React from 'react';
import { FaEye, FaGithub, FaYoutube, FaFileAlt,FaCodeBranch } from 'react-icons/fa';


import './projects.css';

const ProjectCard = ({ src, name, preview, code, youtube, readme ,prototype}) => {
  return (
    <div className='project-card'>
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <div className="icons-container">
          {preview && (
            <a href={preview} target="_blank" rel="noopener noreferrer">
              <div className="icon-item">
                <FaEye />
                <span className="icon-text">Preview</span>
              </div>
            </a>
          )}
          {readme && (
            <a href={readme} target="_blank" rel="noopener noreferrer">
              <div className="icon-item">
                <FaFileAlt />
                <span className="icon-text">Readme</span>
              </div>
            </a>
          )}
          {code && (
            <a href={code} target="_blank" rel="noopener noreferrer">
              <div className="icon-item">
                <FaGithub />
                <span className="icon-text">Code</span>
              </div>
            </a>
          )}
          {prototype && (
            <a href={prototype} target="_blank" rel="noopener noreferrer">
              <div className="icon-item">
                <FaCodeBranch />
                <span className="icon-text">Prototype</span>
              </div>
            </a>
          )}
          {youtube && (
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <div className="icon-item">
                <FaYoutube />
                <span className="icon-text">Demo</span>
              </div>
            </a>
          )}
        </div>


    </div>
  );
};

export default ProjectCard;
