import React from 'react'
import './contactme.css'

import { FaReddit, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaStackOverflow, FaGithub} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const ContactMe = () => {
    const date=new Date().getFullYear()

  return (
    <>
<h1 className='lets-connect' id="contact">Let's connect !</h1>
<div style={{ display: "flex", gap: "10px", fontSize: "3rem" }} className='social-links'>
<a href="https://stackoverflow.com/users/13869408/thasni-566" target="_blank" rel="noopener noreferrer">
  <FaStackOverflow style={{ color: "#F48024" }} className="icon" />
</a>
<a href="https://leetcode.com/u/code_master566/" target="_blank" rel="noopener noreferrer">
  <SiLeetcode style={{ color: "#FFA116" }} className="icon" />
</a>
<a href="https://github.com/thasneem9" target="_blank" rel="noopener noreferrer">
<FaGithub style={{ color: "#FFFFFF" }} className="icon" />
</a>
  <a href="https://www.reddit.com/user/bluewave_65/" target="_blank" rel="noopener noreferrer">
    <FaReddit style={{ color: "#FF4500" }} className='icon' />
  </a>
  <a href="https://www.facebook.com/thaz.reem.7/" target="_blank" rel="noopener noreferrer">
    <FaFacebook style={{ color: "#1877F2" }} className='icon' />
  </a>
  <a href="https://x.com/thasnee_xx1" target="_blank" rel="noopener noreferrer">
    <FaTwitter style={{ color: "#1DA1F2" }} className='icon' />
  </a>
  <a href="https://www.instagram.com/thasnee_xx/" target="_blank" rel="noopener noreferrer">
    <FaInstagram style={{ color: "#E4405F" }} className='icon' />
  </a>
  <a href="https://www.linkedin.com/in/thasneem-c-a70a75206/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin style={{ color: "#0A66C2" }} className='icon' />
  </a>
</div>
<p className='copyright'> Copyright &copy; {date} Designed by Thasneem. All Rights Reserved.</p>

    </>
  )
}

export default ContactMe