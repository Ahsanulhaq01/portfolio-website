import { motion } from "framer-motion";
import recipeimg from './../../assets/recipebook.jpg'
import ecommerceImg from './../../assets/ecommerce-project.jpg'
import chatbotImg from './../../assets/chatbot.png'
import expenseTrackerImg from './../../assets/expense-tracker.png'
import CardComponent from "../../components/projectCardComponent/CardComponent";
import "./project.css";
function Projects() {
  return (
    <>
      <section className="projects-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }} className="project-page-heading">
          <h1>Selected Projects</h1>
          <p className="short-intro-of-app">
            A curated selection of full-stack applications built with the MERN
            stack. Focusing on scalable architecture, clean code, and intuitive
            user experiences.{" "}
          </p>
        </motion.div>

        <div className="projects-cards">
          <CardComponent
            title="Recipe Book"
            description="A full-stack recipe app with both frontend and backend implementation.
Allows users to browse and manage recipes with a smooth UI."
            image= {recipeimg}
            tech={["MongoDB", "Node.js", "React", "Express"]}
            demoLink="https://www.recipebook.dev"
            githubLink="https://github.com/Ahsanulhaq01/full-stack-web-apps"
          />

          <CardComponent
            title="E-Commerce Web App"
            description=" A React and Redux-based e-commerce frontend with cart functionality.
Built while learning from SuperSimpleDev, focusing on state management."
            image= {ecommerceImg}
            tech={["React", "Redux"]}
            demoLink="https://ecommerce-website-two-vert.vercel.app/"
            githubLink="https://github.com/Ahsanulhaq01/Ecommerce-project"
          />
          <CardComponent
            title="Chatbot Web App"
            description="A responsive chatbot built with React that handles a set of predefined queries.
Designed to simulate basic conversations with a simple and interactive UI."
            image={chatbotImg}
            tech={["React"]}
            demoLink="https://chatbot-in-react-red.vercel.app/"
            githubLink="https://github.com/Ahsanulhaq01/Intermediate-React-Project/tree/main/Chatbot_in_react"
          />

          <CardComponent
            title="Expense Tracker Web App"
            description="A basic expense tracker to manage daily spending easily.
Helps users add and track expenses with a clean interface."
            image= {expenseTrackerImg}
            tech={["React"]}
            demoLink="https://full-stack-web-apps.vercel.app/"
            githubLink="https://github.com/Ahsanulhaq01/full-stack-web-apps"
          />
          {/* <CardComponent />
          <CardComponent /> */}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          viewport={{ amount: 0.2 }}
          className="project-page-footer"
        >
          <div className="footer-text-part">
            <h2 className="header-of-FTP">Want to see more code?</h2>
            <p className="description-text-of-FTP">
              Check out my open-source contributions and personal experiments on
              GitHub.
            </p>
          </div>

          <div className="button-container-of-PPF">
            <button className="follow-on-github-btn">FOLLOW ON GITHUB</button>
            <button className="download-pdf-btn">DOWNLOAD PDF</button>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Projects;
