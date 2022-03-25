import React from 'react'
import Box from './Box';
import './style.css';

function Portfolio() {
  return (
    <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio-content">
            <ul>
                <li><Box name={"Web Design"}/></li>
                <li><Box name={"Mobile Design"}/></li>
                <li><Box name={"Logo Design"}/></li>
                <li><Box name={"Web Application Development"}/></li>
                <li><Box name={"Mobile Application Development"}/></li>
                <li><Box name={"PA Development"}/></li>
            </ul>
        </div>
    </div>
  )
}

export default Portfolio