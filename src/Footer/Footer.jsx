import React from 'react'
import './style.css';

function Footer() {
  return (
    <div className="footer">
        <div className="footer-contact">
            <h2>Get In Touch</h2>
            <p>m7moud_emam@hotmail.com</p>
            <p>+201021661275</p>
        </div>
        <h3 className="footer-contact-me">Contact ME</h3>
        <div className="social">
            <ul>
                <li><i class="fab fa-linkedin"></i></li>
                <li><i class="fab fa-facebook"></i></li>
                <li><i class="fab fa-twitter"></i></li> 
            </ul>
            <p>copyright 2022</p>
        </div>
    </div>
  )
}

export default Footer