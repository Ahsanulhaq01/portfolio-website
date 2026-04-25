// import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <>
    <div className="main-container">
        <h4 className="navbar-heading">Ahsan | MERN Developer</h4>
        <div className="list-of-pages">
            <p className="home-page">Home</p>
            <p className="project-page">Projects</p>
            <p className="skills-page">Skills</p>
            <p className="about-page">About</p>
            <p className="contact-page">Contact</p>
        </div>
        <button className="resume-btn">Resume</button>
    </div>
    </>
  )
}

export default Navbar