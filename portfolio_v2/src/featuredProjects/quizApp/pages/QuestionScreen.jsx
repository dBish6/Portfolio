/* Quiz App

   Author: David Bishop
   Creation Date: November, 2022
   Integration Date: January 7, 2023
*/

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// *Design Import*
import "../index.css";

// *Custom Hooks Import*
import useDocumentTitle from "../../../hooks/useDocumentTitle";

// *Component Import*
import Question from "../components/Question";

// *Redux Imports*
import { useSelector } from "react-redux";
import { selectAccessKey } from "../redux/selectors";

const QuestionScreen = (props) => {
  useDocumentTitle(`David Bishop | ${props.title}`);
  const accessKey = useSelector(selectAccessKey);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessKey) {
      navigate("/projects/quiz");
      setTimeout(() => {
        alert("You're not allowed on this page yet, sneaky bugger:)");
      }, 1000);
    }
  }, [accessKey, navigate]);

  return (
    <>
      <Question />
    </>
  );
};

export default QuestionScreen;
