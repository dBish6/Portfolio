/* Quiz App

   Author: David Bishop
   Creation Date: November, 2022
   Integration Date: January 7, 2023
*/

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// *Design Import*
import "../index.css";

// *Component Imports*
import FinalOptions from "../components/FinalOptions";

// *Redux Imports*
import { useSelector, useDispatch } from "react-redux";
import { SET_FINAL_SCORE } from "../redux/quizSlice";
import {
  selectAccessKey,
  selectScore,
  selectQuestions,
} from "../redux/selectors";

const FinalScreen = () => {
  const accessKey = useSelector(selectAccessKey);
  const score = useSelector(selectScore);
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // To get final score on render.
    dispatch(SET_FINAL_SCORE({ score: score, questions: questions }));

    if (!accessKey) {
      navigate("/");
      setTimeout(() => {
        alert("You're not allowed on this page yet, sneaky bugger:)");
      }, 1000);
    }
  }, [dispatch, questions, accessKey, navigate]);

  return (
    <div className="finalContainer">
      <FinalOptions />
    </div>
  );
};

export default FinalScreen;
