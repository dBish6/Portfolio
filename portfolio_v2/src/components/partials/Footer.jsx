import { useState } from "react";
import { Link } from "react-router-dom";

// *Custom Hooks Imports*
import useScrollTo from "../../hooks/useScrollTo";

// *Component Imports*
import ContactModal from "../modals/ContactModal";

// *Design Imports*
import { ImGithub, ImLinkedin, ImSteam2 } from "react-icons/im";
import "./partials.css";

const Footer = () => {
  const [show, setShow] = useState(false);
  const handleScroll = useScrollTo();

  return (
    <>
      <ContactModal show={show} setShow={setShow} />
      <footer className="homeFooter gridContainer">
        <div>
          <div className="links">
            <Link onClick={() => setShow(true)}>
              Contact <span>Me</span>
            </Link>
            |
            <Link onClick={() => handleScroll("about")}>
              About <span>Me</span>
            </Link>
            |<Link onClick={() => handleScroll("skills")}>Skills</Link>|
            <Link onClick={() => handleScroll("repositories")}>Repos</Link>|
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
          <p>© 2023 Designed and built by David Bishop </p>
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
