/* Quiz App

   Author: David Bishop
   Creation Date: November, 2022
   Integration Date: January 7, 2023
*/

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectAccessKey } from "../redux/selectors";

import useDocumentTitle from "../../../hooks/useDocumentTitle";
import Question from "../components/Question";

const QuestionScreen = (props) => {
  useDocumentTitle(`David Bishop | ${props.title}`);
  const accessKey = useSelector(selectAccessKey);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessKey) {
      navigate("/Portfolio/projects/quiz");
      setTimeout(() => {
        alert("You're not allowed on this page yet, sneaky bugger:)");
      }, 1000);
    }
  }, [accessKey, navigate]);

  return (
    <div className="questionContainer">
      <Question />
    </div>
  );
};

export default QuestionScreen;
