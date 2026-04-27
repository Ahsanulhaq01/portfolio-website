import './progressbar.css'
import { motion } from 'framer-motion'

function ProgressBar({value}) {
    const widthMap = {
        Fronted : 90,
        Backend : 82,
        DataBase : 79,
        Tools : 65,
    }
  return (
    <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          viewport={{ amount: 0.2 }} className="progress-bar-main-container">
        <div className="progress-bar-container">
          <div className="profficency-and-percentage">
            <p>Proficiency</p>
            <p>{widthMap[value]}%</p>
          </div>

        </div>
        <div className="progress-bar">
            <div className="progress-fill" style={{width : widthMap[value]+"%"}}>
                
            </div>
        </div>
    </motion.div>
  )
}

export default ProgressBar