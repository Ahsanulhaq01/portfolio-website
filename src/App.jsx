import Navbar from "./components/navbar/Navbar"
import Homepage from "./pages/homepage/Homepage"
import Projects from "./pages/projects/Projects"
import Skills from "./pages/skills/Skills"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import { useRef } from "react"
import Footer from "./components/footer/Footer"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <>
    <Navbar refs ={{homeRef , projectRef , skillRef ,contactRef , aboutRef}} />
    <Homepage homeRef={homeRef}/>
    <Projects projectRef = {projectRef} />
    <Skills skillRef = {skillRef} />
    <About aboutRef={aboutRef} />
    <Contact contactRef = {contactRef}/>
    <Footer/>

<ToastContainer />
    </>
  )
}

export default App