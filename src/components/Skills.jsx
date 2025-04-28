import React from 'react';
import './skills.css';
import { FaNodeJs, FaServer, FaReact, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiC, SiRender } from 'react-icons/si';

const skills = [
  {
    row: 1,
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="node-icon" /> },
      { name: 'Express', icon: <FaServer className="express-icon" /> },
      { name: 'MongoDB', icon: <SiMongodb className="mongo-icon" /> },
      { name: 'ReactJS', icon: <FaReact className="react-icon" /> },
    ]
  },
  {
    row: 2,
    items: [
      { name: 'Python', icon: <FaPython className="python-icon" /> },
      { name: 'Java', icon: <FaJava className="java-icon" /> },
      { name: 'C', icon: <SiC className="c-icon" /> },
      { name: 'MySQL', icon: <SiMysql className="mysql-icon" /> },
      { name: 'Render', icon: <SiRender className="render-icon" /> },
    ]
  },
  {
    row: 3,
    items: [
      { name: 'HTML5', icon: <FaHtml5 className="html-icon" /> },
      { name: 'CSS', icon: <FaCss3Alt className="css-icon" /> },
      { name: 'JavaScript', icon: <FaJsSquare className="js-icon" /> },
    ]
  }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      {skills.map((group, groupIndex) => (
        <div className="skills-row" key={groupIndex}>
          {group.items.map((skill, index) => (
            <div className="skill-item" key={index}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
