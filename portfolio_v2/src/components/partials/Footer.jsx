import { useState } from "react";
import { Link } from "react-router-dom";

// *Component Imports*
import ContactModal from "../modals/ContactModal";

// *Design Imports*
import { ImGithub, ImLinkedin, ImSteam2 } from "react-icons/im";
import "./partials.css";

const Footer = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <ContactModal show={show} setShow={setShow} />
      <footer className="homeFooter gridContainer">
        <div>
          <div className="links">
            <Link onClick={() => setShow(true)}>Contact Me</Link>|
            <Link
              onClick={() => {
                window.location.pathname === "/Portfolio/"
                  ? window.location.replace("/Portfolio/#about")
                  : window.location.replace("/Portfolio/home#about");
              }}
            >
              About Me
            </Link>
            |
            <Link
              onClick={() => {
                window.location.pathname === "/Portfolio/"
                  ? window.location.replace("/Portfolio#skills")
                  : window.location.replace("/Portfolio/home#skills");
              }}
            >
              Skills
            </Link>
            |
            <Link
              onClick={() => {
                window.location.pathname === "/Portfolio/"
                  ? window.location.replace("/Portfolio#repositories")
                  : window.location.replace("/Portfolio/home#repositories");
              }}
            >
              Repos
            </Link>
            |
            <Link
              onClick={() =>
                window.location.pathname === "/Portfolio/"
                  ? window.location.replace("/Portfolio#services")
                  : window.location.replace("/Portfolio/home#services")
              }
            >
              Services
            </Link>
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
      </footer>
    </>
  );
};

export default Footer;
