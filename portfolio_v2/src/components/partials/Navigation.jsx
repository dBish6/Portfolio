import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

// *Component Imports*
import ContactModal from "../modals/ContactModal";

// *Design Imports*
import { ImGithub, ImLinkedin, ImSteam2 } from "react-icons/im";
import { MdExpandMore } from "react-icons/md";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import "./partials.css";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [projectsDropdown, toggleProjectsDropdown] = useState(false);
  const projectsDropdownRef = useRef(null);
  const [hamburgerDropdown, toggleHamburgerDropdown] = useState(false);
  const hamburgerDropdownRef = useRef(null);

  // *Animations*
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 20,
    restDelta: 0.001,
  });

  const fadeIn = {
    visible: {
      y: "0",
      opacity: 1,
      display: "block",
      transition: {
        duration: 0.4,
        type: "tween",
      },
    },
    hidden: {
      y: "30px",
      opacity: 0,
      transition: {
        duration: 0.35,
        type: "tween",
      },
      transitionEnd: { display: "none" },
    },
  };

  return (
    <>
      <header className="navBar gridContainer">
        <motion.div
          style={{
            scaleX,
          }}
          className="progressBar"
        />
        <nav className="leftContainer">
          <NavLink to="/Portfolio/home" className="mainTitle">
            <h2>Portfolio</h2>
          </NavLink>
          <div
            className={
              projectsDropdown ? "projectsDropdown active" : "projectsDropdown"
            }
            ref={projectsDropdownRef}
          >
            <button
              onClick={() =>
                !projectsDropdownRef.current.classList.contains("active")
                  ? toggleProjectsDropdown(true)
                  : toggleProjectsDropdown(false)
              }
            >
              Projects <MdExpandMore />
            </button>
            <nav>
              <AnimatePresence mode="wait" initial={false}>
                <motion.ul
                  variants={fadeIn}
                  animate={projectsDropdown ? "visible" : "hidden"}
                  initial={projectsDropdown ? "hidden" : "visible"}
                  exit={projectsDropdown ? "hidden" : "visible"}
                  className="options"
                >
                  <li>
                    <NavLink to="/Portfolio/projects/todo">
                      Todo List App
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink to="/Portfolio/projects/calculator">
                      Calculator App
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink to="/Portfolio/projects/quiz">Quiz App</NavLink>
                  </li>
                </motion.ul>
              </AnimatePresence>
            </nav>
          </div>
        </nav>
        <nav className="rightContainer">
          <NavLink className="contact" onClick={() => setShow(true)}>
            Contact Me
          </NavLink>
          <div className="icons">
            <a
              href="https://github.com/dBish6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/david-bishop-34a76b237/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin />
            </a>
            <a
              href="https://steamcommunity.com/profiles/76561198044285142"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImSteam2 />
            </a>
          </div>
          <div
            className={
              hamburgerDropdown
                ? "hamburgerDropdown active"
                : "hamburgerDropdown"
            }
            onClick={() =>
              !hamburgerDropdownRef.current.classList.contains("active")
                ? toggleHamburgerDropdown(true)
                : toggleHamburgerDropdown(false)
            }
            ref={hamburgerDropdownRef}
          >
            <div className="hamburgerMenu">
              <div className="bar top" />
              <div className="bar middle" />
              <div className="bar bottom" />
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.nav
                variants={fadeIn}
                animate={hamburgerDropdown ? "visible" : "hidden"}
                initial={hamburgerDropdown ? "hidden" : "visible"}
                exit={hamburgerDropdown ? "hidden" : "visible"}
              >
                <div className="dropdownIcons">
                  <a
                    href="https://github.com/dBish6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/david-bishop-34a76b237/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImLinkedin />
                  </a>
                  <a
                    href="https://steamcommunity.com/profiles/76561198044285142"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImSteam2 />
                  </a>
                </div>
                <NavLink
                  className="dropdownContact"
                  onClick={() => setShow(true)}
                >
                  Contact Me
                </NavLink>
                <hr />
                <h3 className="hamburgerHeader">Featured Projects</h3>
                <ul>
                  <li>
                    <NavLink to="/Portfolio/projects/todo">
                      Todo List App
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Portfolio/projects/calculator">
                      Calculator App
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Portfolio/projects/quiz">Quiz App</NavLink>
                  </li>
                </ul>
              </motion.nav>
            </AnimatePresence>
          </div>
        </nav>
      </header>
      <ContactModal show={show} setShow={setShow} />
    </>
  );
};

export default Navigation;
