import './about.css'
import myImage from './../../assets/myPhoto.jpeg'
import { motion } from 'framer-motion';
import AboutComponentTech from '../../components/component_for_about_page/AboutComponentTech';
function About(){
    return(
        <>
        <section className="about-section">
            <div className="about-text-container">
                <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }} className="about-small-heading">SYSTEM_INIT / ABOUT</motion.p>
                <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }} className='about-main-heading'>Engineering scalable <span>experiences</span> with precision.</motion.h1>
                <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }} className="about-description"> Based in the digital ether, I am a Full-Stack Engineer specializing in the MERN ecosystem. My approach combines the structural integrity of robust backend architecture with the fluid responsiveness of modern frontend frameworks. I don't just write code; I architect solutions that scale. </motion.p>
                <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }} className="tech-used-container">

                <AboutComponentTech items ={{nameOfRole : "DATABASE" , roleFlavor :"MongoDB"}}/>
                <AboutComponentTech items ={{nameOfRole : "RUNTIME" , roleFlavor :"Node.js/Express"}}/>
                </motion.div>
                

            </div>
            <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }} className="about-image-container">
                <img src={myImage} alt="myImage" />
            </motion.div>
        </section>
        </>
    )
}

export default About;