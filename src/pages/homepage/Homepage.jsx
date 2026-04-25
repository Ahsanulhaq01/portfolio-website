// import React from 'react'
import CodeSnipet from '../../components/codesnippet/CodeSnipet'
import './homepage.css'

function Homepage() {
  return (
    <>
    <section className="hero">
        <div className="hero-container">
            <div className="text-hero-container">
                <p className="title-of-text-hero-container">FULL-STACK ENGINEERING</p>
                <div className="heading-of-THC">
                    <h1>Full-Stack Developer Specializing in the</h1>
                    <h1>MERN Stack</h1>
                </div>
                <p className="services-des-container">
                    I build high-performance, scalable web applications using MongoDB, Express, React, and Node.js. Turning complex requirements into elegant, user-centric digital experiences.
                </p>
                <div className="button-container">
                    <button>View Project</button>
                    <button>Get in Touch</button>
                </div>
                <div className="expertise-container">
                    <pre>EXPERTISE</pre>
                    <div className="languages">
                        <p>React</p>
                        <p>Node.js</p>
                        <p>MongoDB</p>
                        <p>Express</p>
                    </div>

                </div>
            </div>
            <div className="code-hero-container">
                <div className="window-btn-and-filename-container">
                    <div className="window-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span className="file-name">App.jsx</span>
                </div>
                {/* for code i have use another component and this code is written with the help of prismjs library */}
                <CodeSnipet/>
            </div>
            
        </div>
    </section>
    
    </>
  )
}

export default Homepage