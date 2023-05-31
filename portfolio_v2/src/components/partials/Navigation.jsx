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

  const [showDatePopup, toggleDatePopup] = useState({
    link1: false,
    link2: false,
    link3: false,
    link4: false,
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
  };

  return (
    <>
      <header aria-label="Navigation Bar" className="navBar gridContainer">
        {/* Scroll Progress */}
        <motion.div style={{ scaleX }} className="progressBar" />

        <div className="leftContainer">
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
            <nav aria-label="Project Navigation">
              <AnimatePresence initial={false}>
                {projectsDropdown && (
                  <motion.ul
                    variants={fadeIn}
                    animate="visible"
                    initial="hidden"
                    exit="hidden"
                    className="options"
                  >
                    <motion.li
                      onHoverStart={() =>
                        toggleDatePopup((prev) => ({ ...prev, link1: true }))
                      }
                      onHoverEnd={() =>
                        toggleDatePopup((prev) => ({ ...prev, link1: false }))
                      }
                    >
                      <NavLink to="/projects/todo">Todo List App</NavLink>
                    </motion.li>

                    {/* Date Popup Text */}
                    <div
                      aria-label="Date"
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
                        className="datePopup"
                      >
                        April, 2022
                      </motion.p>
                    </div>
                    <hr />

                    <motion.li
                      onHoverStart={() =>
                        toggleDatePopup((prev) => ({ ...prev, link2: true }))
                      }
                      onHoverEnd={() =>
                        toggleDatePopup((prev) => ({ ...prev, link2: false }))
                      }
                    >
                      <NavLink to="/projects/calculator">
                        Calculator App
                      </NavLink>
                    </motion.li>

                    {/* Date Popup Text */}
                    <div
                      aria-label="Date"
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
                        className="datePopup"
                      >
                        October, 2022
                      </motion.p>
                    </div>
                    <hr />

                    <motion.li
                      onHoverStart={() =>
                        toggleDatePopup((prev) => ({ ...prev, link3: true }))
                      }
                      onHoverEnd={() =>
                        toggleDatePopup((prev) => ({ ...prev, link3: false }))
                      }
                    >
                      <NavLink to="/projects/quiz">Quiz App</NavLink>
                    </motion.li>

                    {/* Date Popup Text */}
                    <div
                      aria-label="Date"
                      className={
                        !showDatePopup.link3
                          ? "datePopupContainer"
                          : "datePopupContainer bg"
                      }
                      id="link3"
                    >
                      <motion.p
                        variants={popup}
                        animate={showDatePopup.link3 ? "visible" : "hidden"}
                        initial="hidden"
                        className="datePopup"
                      >
                        November, 2022
                      </motion.p>
                    </div>
                    <hr />

                    <motion.li
                      onHoverStart={() =>
                        toggleDatePopup((prev) => ({ ...prev, link4: true }))
                      }
                      onHoverEnd={() =>
                        toggleDatePopup((prev) => ({ ...prev, link4: false }))
                      }
                    >
                      <NavLink to="/projects/blackjack">Davy Blackjack</NavLink>
                    </motion.li>

                    {/* Date Popup Text */}
                    <div
                      aria-label="Date"
                      className="datePopupContainer"
                      id="link4"
                    >
                      <motion.p
                        variants={popup}
                        animate={showDatePopup.link4 ? "visible" : "hidden"}
                        initial="hidden"
                        className="datePopup"
                      >
                        March, 2023
                      </motion.p>
                    </div>
                  </motion.ul>
                )}
              </AnimatePresence>
            </nav>
          </div>
        </div>

        <nav aria-label="External Navigation" className="rightContainer">
          <NavLink className="contact" onClick={() => setShow(true)}>
            Contact Me
          </NavLink>
          <div className="icons">
            <a
              href="https://github.com/dBish6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImGithub aria-label="My Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/david-bishop-34a76b237/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin aria-label="My Linkedin" />
            </a>
            <a
              href="https://steamcommunity.com/profiles/76561198044285142"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImSteam2 aria-label="My Steam" />
            </a>
          </div>

          <div
            aria-label="Menu Container"
            className="hamburgerDropdown"
            onClick={() => toggleHamburgerDropdown(!hamburgerDropdown)}
          >
            <div
              aria-label="Menu Icon"
              className="hamburgerMenu"
              style={{ gap: !hamburgerDropdown && "5px" }}
            >
              <motion.div
                className="bar top"
                animate={{
                  rotate: hamburgerDropdown ? "40deg" : 0,
                  translateY: hamburgerDropdown ? 6 : 0,
                  transition: {
                    type: "spring",
                    duration: 0.5,
                    stiffness: 260,
                    damping: 20,
                  },
                }}
              />
              <motion.div
                className="bar middle"
                animate={{
                  opacity: hamburgerDropdown ? 0 : 1,
                  scale: hamburgerDropdown ? 0.2 : 1,
                  transition: { type: "spring", stiffness: 260, damping: 20 },
                }}
              />
              <motion.div
                className="bar bottom"
                animate={{
                  rotate: hamburgerDropdown ? "-40deg" : 0,
                  translateY: hamburgerDropdown ? -4 : 0,
                  transition: {
                    type: "spring",
                    duration: 0.38,
                    stiffness: 260,
                    damping: 20,
                  },
                }}
              />
            </div>
            <AnimatePresence initial={false}>
              {hamburgerDropdown && (
                <motion.nav
                  aria-label="Site Navigation"
                  variants={fadeIn}
                  animate="visible"
                  initial="hidden"
                  exit="hidden"
                >
                  <div className="dropdownIcons">
                    <a
                      href="https://github.com/dBish6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ImGithub aria-label="My Github" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/david-bishop-34a76b237/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ImLinkedin aria-label="My Linkedin" />
                    </a>
                    <a
                      href="https://steamcommunity.com/profiles/76561198044285142"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ImSteam2 aria-label="My Steam" />
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
                      <NavLink to="/projects/calculator">
                        Calculator App
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/projects/quiz">Quiz App</NavLink>
                    </li>
                    <li>
                      <NavLink to="/projects/blackjack">Davy Blackjack</NavLink>
                    </li>
                  </ul>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>
      <ContactModal show={show} setShow={setShow} />
    </>
  );
};

export default Navigation;
