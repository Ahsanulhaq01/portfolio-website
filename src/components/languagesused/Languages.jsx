import { motion } from "framer-motion";
import "./languages.css";
function Languages({ items }) {
  const skillStyles = {
    React: {
      color: "#4CA4BC",
      backgroundColor: "#1B272B",
      borderColor: "#4CA4BC",
    },
    "Node.js": {
      color: "#63B55B",
      backgroundColor: "#1D281C",
      borderColor: "#76dd6dbf",
    },
    MongoDB: {
      color: "#63B55B",
      backgroundColor: "#1D281C",
      borderColor: "#76dd6dbf",
    },
    Express: {
      color: "#63B55B",
      backgroundColor: "#1D281C",
      borderColor: "#76dd6dbf",
    },
    JWT: {
      color: "#89464A",
      backgroundColor: "#2D242B",
      borderColor: "#32262C",
    },
    Redux: {
      color: "#4B80C0",
      backgroundColor: "#1E2938",
      borderColor: "#4CA4BC",
    },
    HTML5 : {
      color: "#E88739",
      backgroundColor: "#2D2421",
      borderColor: "#a56344",
    },
    CSS3 : {
      color: "#437dc9",
      backgroundColor: "#1A2538",
      borderColor: "#3362b1",
    },
    REST_APIs :{
      color: "#B49418",
      backgroundColor: "#2C2A20",
      borderColor: "#a38d3e",
    },
    Git : {
      color: "#B95919",
      backgroundColor: "#392318",
      borderColor: "#a0522a",
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ amount: 0.2 }}
      className="languages"
    >
      {items.map((lang, idx) => {
        const style = skillStyles[lang] || {};
        return (
          <p key={idx} style={style}>
            {lang}
          </p>
        );
      })}
    </motion.div>
  );
}

export default Languages;
