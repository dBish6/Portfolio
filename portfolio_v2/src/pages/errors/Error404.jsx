// *Custom Hooks*
import useDocumentTitle from "../../hooks/useDocumentTitle";

// *Design Imports*
import "./errors.css";

const Error404 = (props) => {
  useDocumentTitle(`David Bishop | ${props.title}`);

  return (
    <div className="errorContainer">
      <p>
        <span>Error 404:</span> Page not found.
      </p>
    </div>
  );
};

export default Error404;
