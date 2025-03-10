import React from 'react';
import './header.css';
import { Typewriter } from 'react-simple-typewriter'; // Import the new package

function Header() {
  return (
    <div className="container">
      <div className="col-1">
        <h1 className="h2-hello">Hello, I'm</h1>
        <h1 className='h2-typing-effect'>
          I'm a{' '}
          <span style={{ color: '#fff', fontWeight: 'bold', fontSize:'72px' }}>
          <Typewriter
             words={['Web Developer', 'UI/UX Designer', 'Thasneem']}
             loop={Infinity}
             cursor
             cursorStyle="▍"  // Thicker caret
             typeSpeed={50}
             deleteSpeed={30}
             delaySpeed={1000}
            />
          </span>
        </h1>
        <p>
          My name is Thasneem, and I'm an eager learner and explorer. I've just entered the world of programming, and I'm slowly but consistently progressing every day.
        </p>

        <div className="button-group">
          <button className='gradient-button'>Hire Me</button>
          <button className='border-button'>Contact Me</button>
        </div>
      </div>
      <div className="col-2">
        <img src="/assets/logo.png" alt="Logo" />
      </div>
    </div>
  );
}

export default Header;
