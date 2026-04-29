import UsedTechnologies from '../../components/technologies/UsedTechnologies'
import { motion } from 'framer-motion'
import './skills.css'

function Skills({skillRef}) {
  return (
    <>
        <section className="skills-section section" ref={skillRef} id='skills'>
            <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          viewport={{ amount: 0.2 }} className="skills-section-header-container">
                <h1 className='skills-heading'>Technical Stack</h1>
                <p className="intro-of-skill-page"> A comprehensive overview of the technologies, frameworks, and tools I use to build scalable, high-performance web applications. </p>
            </motion.div>
            <div className="skill-component-container">
               <UsedTechnologies items = {{icon : "Fronted" , techName : "Fronted"}}/>
               <UsedTechnologies items = {{icon : "Backend" , techName : "Backend"}}/>
               <UsedTechnologies items = {{icon : "DataBase" , techName : "DataBase"}}/>
               <UsedTechnologies items = {{icon : "Tools" , techName : "Tools"}}/>
            </div>
        </section>
    </>
  )
}

export default Skills