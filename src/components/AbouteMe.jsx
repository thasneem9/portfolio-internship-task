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
                <p>I'm Thasneem, currently pursuing a Bachelor's degree in Computer Applications. I enjoy working on new technologies that can help solve day-to-day problems. If you're looking to connect, my inbox is always open.</p>
                <nav className='aboutme-nav'>

                     
                    <a onClick={handleClick} id="certifications" className={navItem === "certifications" ? "active" : ""}>Certifications</a>
                    <a onClick={handleClick} id="experience" className={navItem === "experience" ? "active" : ""}>Experience</a>
                    <a onClick={handleClick} id="education" className={navItem === "education" ? "active" : ""}>Education</a>
                </nav>
                
                {navItem === 'education' ? (
    <ul>
        <li>ICFAI deemed to be University, Hyderabad (9.27 GPA)</li>
        <li>International Indian School, KSA (91%)</li>
    </ul>
) : navItem === 'experience' ? (
    <ul>
        <li>Frontend Developer Intern, CraftYourCareers,  Hyderbad (March - April 2025)</li>
        <li>Freelance Web Developer, View Point Tourist Home, Kerala(July - August 2024)</li>
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
