// *Design Imports*
import "./partials.css";

const Footer = () => {
  return (
    <footer className="quizFooter">
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/dBish6/React_Quiz_App"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </p>
      <p>
        Developer: <span>David Bishop</span>
      </p>
    </footer>
  );
};

export default Footer;
