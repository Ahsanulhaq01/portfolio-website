import Languages from "../languagesused/Languages";
import ProgressBar from "../progressbar/ProgressBar";
import { FaLaptopCode, FaServer, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdStorage } from "react-icons/md";
import "./usetech.css";

function UsedTechnologies({items}) {
  const iconMap = {
    Fronted: <FaLaptopCode color="#BFEFFF" />,
    Backend: <FaServer color="#6BC664" />,
    DataBase: <MdStorage color="#78BD76" />,
    Tools: <FaTools color="#889197" />,
  };
  const languagesMap = {
    Fronted: ["React", "HTML5", "CSS3"],
    Backend: ["Node.js", "Express", "REST_APIs"],
    DataBase: ["MongoDB"],
    Tools: ["Git"],
  }
  return (
    <>
      <div className="usedtech-main-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          viewport={{ amount: 0.2 }} className="heading-container">
          {iconMap[items.icon]}
          <h2 className="tech-heading-text">{items.techName}</h2>
        </motion.div>
        <Languages items={languagesMap[items.techName]} />
        <ProgressBar value = {items.techName}/>
      </div>
    </>
  );
}

export default UsedTechnologies;
