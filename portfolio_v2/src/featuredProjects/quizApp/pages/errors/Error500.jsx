import useDocumentTitle from "../../../../hooks/useDocumentTitle";
// import "./errors.css";

const Error500 = (props) => {
  useDocumentTitle(`David Bishop | ${props.title}`);

  return (
    <div className="errorContainer">
      <p>
        <span>Error 500:</span> API request failed.
      </p>
    </div>
  );
};

export default Error500;
