import { motion } from "framer-motion";
import "./cardComponent.css";
import Languages from "./../languagesused/Languages";

function CardComponent({
  title,
  description,
  image,
  tech,
  demoLink,
  githubLink,
}) {
  return (
    <>
      <div className="card-container">
        <img src={image} alt="project-image" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }}
          className="project-detals-container"
        >
          <h2 className="project-heading-in-card">{title}</h2>
          <p className="description-of-project">{description}</p>
          <Languages items={tech} />
          <div className="live-and-github-container">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="view-demo"
            >
              View Demo
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              Github
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default CardComponent;
