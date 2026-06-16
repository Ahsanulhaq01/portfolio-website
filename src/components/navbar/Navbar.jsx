import { useState, useEffect } from "react";
import resume from './../../assets/AHSAN-UL-HAQ MERN-Stack-developer.pdf'
import "./navbar.css";

function Navbar({refs}) {
  const [active, setActive] = useState("home");

  const scrollToSection = (ref, name) => {
    setActive(name);

    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect(); // ✅ correct cleanup
  }, []);


  return (
    <div className="main-container">
      <h4 className="navbar-heading">Ahsan | MERN Developer</h4>

      <div className="list-of-pages">
        <button
          onClick={() => scrollToSection(refs.homeRef)}
          className={active === "home" ? "active" : ""}
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection(refs.projectRef)}
          className={active === "projects" ? "active" : ""}
        >
          Projects
        </button>

        <button
          onClick={() => scrollToSection(refs.skillRef)}
          className={active === "skills" ? "active" : ""}
        >
          Skills
        </button>

        <button
          onClick={() => scrollToSection(refs.aboutRef)}
          className={active === "about" ? "active" : ""}
        >
          About
        </button>

        <button
          onClick={() => scrollToSection(refs.contactRef)}
          className={active === "contact" ? "active" : ""}
        >
          Contact
        </button>
      </div>

      <a href={resume} download={"Ahsan-Resume.pdf"}>

      <button className="resume-btn">Resume</button>
      </a>
    </div>
  );
}

export default Navbar;