import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import "./errors.css";

const Error500 = (props) => {
  useDocumentTitle(`David Bishop | ${props.title}`);
  const navigate = useNavigate();

  return (
    <div className="quizErrorContainer">
      <p>
        <span>Error 500:</span> API request failed.
      </p>
      <button onClick={() => navigate(-1)}>Retry</button>
    </div>
  );
};

export default Error500;
