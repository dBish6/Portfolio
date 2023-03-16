// *Custom Hooks*
import useDocumentTitle from "../../hooks/useDocumentTitle";

// *Design Imports*
import "./errors.css";

const Error404 = (props) => {
  useDocumentTitle(`David Bishop | ${props.title}`);

  return (
    <p className="errorContainer">
      <span>Error 404:</span> Page not found.
    </p>
  );
};

export default Error404;
