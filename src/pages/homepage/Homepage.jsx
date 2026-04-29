// import React from 'react'
import CodeSnipet from '../../components/codesnippet/CodeSnipet'
import Languages from '../../components/languagesused/Languages'
import { motion } from 'framer-motion'
import './homepage.css'

function Homepage({homeRef}) {
  return (
    <>
    <section className="hero section" ref={homeRef} id='home'>
        <div className="hero-container">
            <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
      viewport={{ amount: 0.2 }} className="text-hero-container">
                <p className="title-of-text-hero-container">FULL-STACK ENGINEERING</p>
                <div className="heading-of-THC">
                    <h1>Full-Stack Developer Specializing in the</h1>
                    <h1>MERN Stack</h1>
                </div>
                <p className="services-des-container">
                    I build high-performance, scalable web applications using MongoDB, Express, React, and Node.js. Turning complex requirements into elegant, user-centric digital experiences.
                </p>
                <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
      viewport={{ amount: 0.2 }} className="button-container">
                    <a href='#projects'>View Project</a>
                    <a href='#contact'>Get in Touch</a>
                </motion.div>
                <div className="expertise-container">
                    <pre>EXPERTISE</pre>

                    {/* component of languages is used */}
                    <Languages items={["React", "Node.js", "MongoDB", "Express"]}/> 

                </div>
            </motion.div>


            <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
      viewport={{ amount: 0.2 }} className="code-hero-container">
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
            </motion.div>
            
        </div>
    </section>
    
    </>
  )
}

export default Homepage