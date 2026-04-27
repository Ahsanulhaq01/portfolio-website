import './progressbar.css'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react';

function ProgressBar({value}) {
    const widthMap = {
        Fronted : 90,
        Backend : 82,
        DataBase : 79,
        Tools : 65,
    }
    const [count, setCount] = useState(0);

  const intervalRef = useRef(null);

  const startAnimation = () => {

    setCount(0);

    let current = 0;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= widthMap[value]) {
        clearInterval(intervalRef.current);
      }
    }, 14);
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
            <motion.p
        onViewportEnter={startAnimation}   // 🔥 KEY LINE
        viewport={{ once: false }}
      >
        {count}%
      </motion.p>
          </div>

        </div>
        <div className="progress-bar">
          <motion.div
          className="progress-fill"
          style={{
            width: `${widthMap[value]}%`, // final width
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${widthMap[value]}%` }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }} 

        />
            {/* <div className="progress-fill" style={{width : widthMap[value]+"%"}}>
                
            </div> */}
        </div>
    </motion.div>
  )
}

export default ProgressBar