import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Intro from "../Components/Intro/Intro.jsx";
import Services from "../Components/Services/Services.jsx";
import Projects from "../Components/Projects/Project.jsx";
import Contact from "../Components/Contact/Contact.jsx";

const Home = ({ scrollTo }) => {
  const location = useLocation();
  const skillsetRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  useEffect(() => {
    // Scroll to section based on route
    const scrollToSection = (section) => {
      let targetRef = null;
      switch (section) {
        case "skillset":
          targetRef = skillsetRef;
          break;
        case "projects":
          targetRef = projectsRef;
          break;
        case "contact":
          targetRef = contactRef;
          break;
        default:
          targetRef = homeRef;
      }
      
      if (targetRef?.current) {
        setTimeout(() => {
          targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    };

    const path = location.pathname;
    if (path === "/skillset") {
      scrollToSection("skillset");
    } else if (path === "/projects") {
      scrollToSection("projects");
    } else if (path === "/contact") {
      scrollToSection("contact");
    } else if (path === "/home" || path === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Also handle scrollTo prop if provided
    if (scrollTo) {
      scrollToSection(scrollTo);
    }
  }, [location, scrollTo]);

  return (
    <>
      <div ref={homeRef} id="home">
        <Intro />
      </div>
      <div ref={skillsetRef} id="skillset">
        <Services />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Home;
