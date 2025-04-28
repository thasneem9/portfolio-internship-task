import React, { useState, useEffect } from 'react';
import './aboutme.css';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiPostgresql, SiMongodb, SiMysql, SiExpress } from 'react-icons/si';

export const AbouteMe = () => {
    const [navItem, setNavItem] = useState('certifications');
    
    function handleClick(e) {
        e.preventDefault();
        setNavItem(e.target.id);
    }

    useEffect(() => {
        console.log(navItem);
    }, [navItem]);

    return (
        <>
        <div className='about-container' id="about">
            <img src="https://user-images.githubusercontent.com/24864482/111586408-c8dd8a80-878e-11eb-94c8-483e2962a667.gif" alt="About Image"></img>
        
            <div className='about-section'>
                <h2>About Me</h2>
                <p>I'm Thasneem, a programmer with a passion for web development. My journey into web development has been driven by a commitment to deliver the best designs, I strive to bring ideas to life and exceed expectations. When I'm not coding, you can find me painting and reading fiction. Let's collaborate and turn your visions into reality!</p>
                <nav className='aboutme-nav'>
{/*                     <a onClick={handleClick} id="skills" className={navItem === "skills" ? "active" : ""}>Skills</a>
 */}                    
                    <a onClick={handleClick} id="certifications" className={navItem === "certifications" ? "active" : ""}>Certifications</a>
                    <a onClick={handleClick} id="education" className={navItem === "education" ? "active" : ""}>Education</a>
                </nav>
                
                { navItem === 'education' ? (
                    <ul>
                        <li>ICFAI Foundation for Higher Education deemed to be University, Hyderabad</li>
                        <li>International Indian School (IISJ), KSA</li>
                    </ul>
                ) : (
                    <ul>
                        <li>Meta Frontend Developer Professional Certificate, Meta</li>
                        <li>IBM Backend Developer, Coursera</li>
                        <li>Responsive Web Design, FreeCodeCamp</li>
                    </ul>
                )}
            </div>
        </div>
        </>
    );
}
