import React, { useActionState } from 'react'
import './aboutme.css'
import { useState,useEffect } from 'react'
export const AbouteMe = () => {
    const [navItem,setNavItem]=useState('skills');
    function handleClick(e){
        e.preventDefault();
        setNavItem(e.target.id);
    
       
    }

    useEffect(()=>{
      
        console.log(navItem);
        
    },[navItem])
    //if navItem is x dipslay y list

  return (
    <>
    <div className='about-container'>
        <img
        src="https://user-images.githubusercontent.com/24864482/111586408-c8dd8a80-878e-11eb-94c8-483e2962a667.gif"></img>
    
        <div className='about-section'>
            <h2>About Me</h2>
            <p>I'm Thasneem, a programmer with a passion for web development. My journey into web development has been driven by a commitment to deliver the best designs, I strive to bring ideas to life and exceed expectations. When I'm not coding, you can find me painting and reading fiction. Let's collaborate and turn your visions into reality!</p>
            <nav className='aboutme-nav' >
              
                    <a onClick={handleClick} id="skills"   className={navItem === "skills" ? "active" : ""}>Skills</a>
                    <a onClick={handleClick} id="education" className={navItem === "education" ? "active" : ""}>Education</a>
                    <a onClick={handleClick} id="certifications" className={navItem === "certifications" ? "active" :""}>Certifications</a>
             </nav>
             {/* if navItem is x dipslay y list */}
            
             
             {navItem==='skills'?(
                <ul>
                    <li>ReactJs</li>
                    <li>NodeJs + ExpressJs</li>
                    <li> PostgreSQL</li>
                </ul>
             ):navItem==='education'?(
                <ul>
                <li>ICFAI Foundation for Higher Education deemed to be University, Hyderbad</li>
                <li>International Indian School, KSA </li>
              
            </ul>
             ):(
                <ul>
                    <li>Full Stack Web Devlopment Bootcamp, Udemy</li>
                    <li>Responsive Web Design, FreeCodeCamp
                    </li>
              
            </ul>
             )}

        
            
        </div>
    </div>
    
   
    </>
  )
}
