import { Link } from "react-router-dom";

// *Design Imports*
import { ImGithub, ImLinkedin, ImSteam2 } from "react-icons/im";
import "./partials.css";

const Footer = () => {
  return (
    <footer className="gridContainer">
      <div>
        <div className="links">
          <Link>Contact Me</Link>|
          <Link onClick={() => window.location.replace("/home/#about")}>
            About Me
          </Link>
          |
          <Link onClick={() => window.location.replace("/home/#skills")}>
            Skills
          </Link>
          |
          <Link onClick={() => window.location.replace("/home/#repositories")}>
            Repos
          </Link>
          |
          <Link onClick={() => window.location.replace("/home/#services")}>
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
  );
};

export default Footer;
