import React from 'react'
import './contactme.css'

import { FaReddit, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
    const date=new Date().getFullYear()

  return (
    <>
<h1 className='lets-connect' id="contact">Let's connect</h1>
<div style={{ display: "flex", gap: "10px", fontSize: "3rem" }} className='social-links'>
  <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer">
    <FaReddit style={{ color: "#FF4500" }} className='icon' />
  </a>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebook style={{ color: "#1877F2" }} className='icon' />
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter style={{ color: "#1DA1F2" }} className='icon' />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram style={{ color: "#E4405F" }} className='icon' />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedin style={{ color: "#0A66C2" }} className='icon' />
  </a>
</div>
<p className='copyright'> Copyright &copy; {date} Design by Thasneem. All Rights Reserved.</p>

    </>
  )
}

export default ContactMe