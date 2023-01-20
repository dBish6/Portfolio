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

  const [showDatePopup, toggleDatePopup] = useState({
    link1: false,
    link2: false,
    link3: false,
  });

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

  const popup = {
    visible: {
      y: "-4px",
      opacity: 0.65,
      fontSize: "14px",
      display: "block",
      transition: {
        duration: 0.4,
        type: "tween",
      },
    },
    hidden: {
      y: "9px",
      opacity: 0,
      fontSize: "10px",
      transition: {
        duration: 1,
        type: "tween",
      },
      transitionEnd: { display: "none" },
    },
    // exit: {
    //   y: "12px",
    //   // opacity: 0.3,
    //   fontSize: "0px",
    //   transition: {
    //     duration: 1,
    //     type: "tween",
    //   },
    //   transitionEnd: { display: "none" },
    // },
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
          <NavLink to="/home" className="mainTitle">
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
                  initial="hidden"
                  // exit={projectsDropdown ? "hidden" : "visible"}
                  className="options"
                >
                  <motion.li
                    onHoverStart={() => toggleDatePopup({ link1: true })}
                    onHoverEnd={() => toggleDatePopup({ link1: false })}
                  >
                    <NavLink to="/projects/todo">Todo List App</NavLink>
                  </motion.li>
                  <div
                    className={
                      !showDatePopup.link1
                        ? "datePopupContainer"
                        : "datePopupContainer bg"
                    }
                    id="link1"
                  >
                    <motion.p
                      variants={popup}
                      animate={showDatePopup.link1 ? "visible" : "hidden"}
                      initial="hidden"
                      // exit="exit"
                      className="datePopup"
                    >
                      April, 2022
                    </motion.p>
                  </div>
                  <hr />
                  <motion.li
                    onHoverStart={() => toggleDatePopup({ link2: true })}
                    onHoverEnd={() => toggleDatePopup({ link2: false })}
                  >
                    <NavLink to="/projects/calculator">Calculator App</NavLink>
                  </motion.li>
                  <div
                    className={
                      !showDatePopup.link2
                        ? "datePopupContainer"
                        : "datePopupContainer bg"
                    }
                    id="link2"
                  >
                    <motion.p
                      variants={popup}
                      animate={showDatePopup.link2 ? "visible" : "hidden"}
                      initial="hidden"
                      // exit="exit"
                      className="datePopup"
                    >
                      October 29, 2022
                    </motion.p>
                  </div>
                  <hr />
                  <motion.li
                    onHoverStart={() => toggleDatePopup({ link3: true })}
                    onHoverEnd={() => toggleDatePopup({ link3: false })}
                  >
                    <NavLink to="/projects/quiz">Quiz App</NavLink>
                  </motion.li>
                  <div className={"datePopupContainer"}>
                    <motion.p
                      variants={popup}
                      animate={showDatePopup.link3 ? "visible" : "hidden"}
                      initial="hidden"
                      // exit="exit"
                      className="datePopup"
                    >
                      November, 2022
                    </motion.p>
                  </div>
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
                // exit={hamburgerDropdown ? "hidden" : "visible"}
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
                    <NavLink to="/projects/todo">Todo List App</NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects/calculator">Calculator App</NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects/quiz">Quiz App</NavLink>
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
