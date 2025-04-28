import React from 'react';
import './header.css';
import { Typewriter } from 'react-simple-typewriter'; // Import the new package
import logo from '../../assets/logo.png' 
function Header() {
  return (
    <div className="container">
      <div className="col-1">
        <div className='main-heading'>
        <h1 className="h2-hello">Hello, I'm</h1>
        <h1 className='h2-typing-effect'>
          {' '}
          <span style={{ color: '#fff', fontWeight: 'bold', fontSize:'72px' }}>
          <Typewriter
             words={['Web Developer', 'UI/UX Designer', 'Thasneem']}
             loop={Infinity}
             cursor
             cursorStyle="▎"  
             typeSpeed={50}
             deleteSpeed={30}
             delaySpeed={1000}
            />
          </span>
        </h1>
        </div>
        <p>
          My name is Thasneem, and I'm an eager learner and explorer. I've just entered the world of programming, and I'm slowly but consistently progressing every day.
        </p>

        <div className="button-group">
          <a href="#contact">
          <button className='gradient-button'>Contact Me</button>
          </a>
          <a href="https://drive.google.com/file/d/1MVZ9dFPf4MrUJxEA9lN3muJsH4JlB3jH/view?usp=sharing" target="_blank">
  <button className='border-button'>Download Resume</button>
</a>

        </div>
      </div>
      
      <div className="col-2">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Header;
