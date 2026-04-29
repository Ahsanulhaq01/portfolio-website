import Navbar from "./components/navbar/Navbar"
import Homepage from "./pages/homepage/Homepage"
import Projects from "./pages/projects/Projects"
import Skills from "./pages/skills/Skills"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
function App() {
  return (
    <>
    <Navbar/>
    <Homepage/>
    <Projects/>
    <Skills/>
    <About/>
    <Contact/>
    </>
  )
}

export default App