import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// *Custom Hooks Imports*
import useScrollTo from "../../hooks/useScrollTo";

// *Component Imports*
import ContactModal from "../modals/ContactModal";

// *Design Imports*
import { ImGithub, ImLinkedin, ImSteam2 } from "react-icons/im";
import "./partials.css";

const Footer = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const footerRef = useRef(null);
  const handleScroll = useScrollTo();

  useEffect(() => {
    if (location.pathname === "/error404") {
      footerRef.current.classList.add("ifError");
    } else {
      footerRef.current.classList.contains("ifError") &&
        footerRef.current.classList.remove("ifError");
    }
  }, [location.pathname]);

  return (
    <>
      <ContactModal show={show} setShow={setShow} />
      <footer
        aria-label="Footer Navigation"
        className="homeFooter gridContainer"
        ref={footerRef}
      >
        <div>
          <div className="links">
            <Link onClick={() => setShow(true)}>Contact Me</Link>|
            <Link onClick={() => handleScroll("about")}>About Me</Link>|
            <Link onClick={() => handleScroll("skills")}>Skills</Link>|
            <Link onClick={() => handleScroll("repositories")}>Apps</Link>|
            <Link onClick={() => handleScroll("services")}>Services</Link>
          </div>
          <div className="dividerContainer">
            <hr />
          </div>
          <p>
            Thanks to Viktoriya Belinio, Irene M. Ray and Albina S. from{" "}
            <a
              href="https://icons8.com/illustrations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ouch!
            </a>{" "}
            for their beautiful Illustrations.
          </p>
          <p>© 2023 Designed and built by David Bishop</p>
        </div>
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
      </footer>
    </>
  );
};

export default Footer;
