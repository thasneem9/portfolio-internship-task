import React from 'react'
import './contactme.css'

import {  FaTwitter, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import { MdEmail } from "react-icons/md"; 
import { FcGoogle } from "react-icons/fc";
const ContactMe = () => {
    const date=new Date().getFullYear()

  return (
    <>
<h1 className='lets-connect' id="contact">Let's connect !</h1>

<div className="email-box" onClick={() => window.location.href = 'mailto:thasneemchalil@gmail.com'}>
      <p><span className="email-icon"><MdEmail /></span> thasneemchalil@gmail.com</p>
    </div>
<div style={{ display: "flex", gap: "10px", fontSize: "3rem" }} className='social-links'>
<a href="https://www.linkedin.com/in/thasneem-c-a70a75206/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin style={{ color: "#0A66C2" }} className='icon' />
  </a>

  <a href="https://github.com/thasneem9" target="_blank" rel="noopener noreferrer">
<FaGithub style={{ color: "#FFFFFF" }} className="icon" />
</a>
<a href="https://x.com/thasnee_xx1" target="_blank" rel="noopener noreferrer">
    <FaTwitter style={{ color: "#1DA1F2" }} className='icon' />
  </a>
  <a href="https://developers.google.com/profile/u/101682423614841798297" target="_blank" rel="noopener noreferrer">
  <FcGoogle className="icon" />
</a>

 
 
 
  <a href="https://www.instagram.com/thasnee_xx/" target="_blank" rel="noopener noreferrer">
    <FaInstagram style={{ color: "#E4405F" }} className='icon' />
  </a>
</div>


<p className='copyright'> Copyright &copy; {date} Designed by Thasneem. All Rights Reserved.</p>

    </>
  )
}

export default ContactMe