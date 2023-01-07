import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

// *Component Imports*
import ContactModal from "../modals/ContactModal";

// *Design Imports*
import { ImGithub, ImLinkedin, ImSteam2 } from "react-icons/im";
import { MdExpandMore } from "react-icons/md";
import "./partials.css";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [projectsDropdown, toggleProjectsDropdown] = useState(false);
  const projectsDropdownRef = useRef(null);
  const [hamburgerDropdown, toggleHamburgerDropdown] = useState(false);
  const hamburgerDropdownRef = useRef(null);

  return (
    <>
      <header className="navBar gridContainer">
        <div className="leftContainer">
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
              <ul className="options">
                <li>
                  <NavLink to="/Portfolio/projects/todo">Todo List App</NavLink>
                </li>
                <hr />
                <li>
                  <NavLink to="/Portfolio/projects/calculator">
                    Calculator App
                  </NavLink>
                </li>
                {/* <hr />
                <li>
                  <NavLink to="/Portfolio/projects/quiz">Quiz App</NavLink>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
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
            <nav>
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
                  <NavLink to="/Portfolio/projects/todo">Todo List App</NavLink>
                </li>
                <li>
                  <NavLink to="/Portfolio/projects/calculator">
                    Calculator App
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/Portfolio/projects/quiz">Quiz App</NavLink>
                </li> */}
              </ul>
            </nav>
          </div>
        </nav>
      </header>
      <ContactModal show={show} setShow={setShow} />
    </>
  );
};

export default Navigation;
