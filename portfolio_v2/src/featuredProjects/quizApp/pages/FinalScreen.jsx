/* Quiz App

   Author: David Bishop
   Creation Date: November, 2022
   Integration Date: January 7, 2023
*/

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useDocumentTitle from "../../../hooks/useDocumentTitle";
import FetchButton from "../components/FetchButton";

import {
  SET_INDEX,
  SET_SCORE,
  SET_QUESTIONS,
  SET_ACCESS,
} from "../redux/quizSlice";
import { selectAccessKey, selectScore } from "../redux/selectors";

const FinalScreen = (props) => {
  useDocumentTitle(`David Bishop | ${props.title}`);
  const score = useSelector(selectScore);
  const accessKey = useSelector(selectAccessKey);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessKey) {
      navigate("/Portfolio/projects/quiz");
      setTimeout(() => {
        alert("You're not allowed on this page yet, sneaky bugger:)");
      }, 1000);
    }
  }, [accessKey, navigate]);

  const replay = () => {
    dispatch(SET_INDEX(0));
    dispatch(SET_SCORE(0));
    navigate("/Portfolio/projects/quiz/gameStart");
  };

  const reset = () => {
    dispatch(SET_QUESTIONS([]));
    dispatch(SET_INDEX(0));
    dispatch(SET_SCORE(0));
    dispatch(SET_ACCESS(false));
    navigate("/Portfolio/projects/quiz");
  };

  return (
    <div>
      <h3>Final Score: {score}</h3>
      <h4>Start Again?</h4>
      <div>
        <button onClick={() => replay()}>Try again</button>
        <FetchButton text="Fetch new Questions" />
      </div>
      <button onClick={() => reset()}>Back to settings</button>
    </div>
  );
};

export default FinalScreen;
