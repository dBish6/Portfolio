/* Quiz App

   Author: David Bishop
   Creation Date: November, 2022
   Integration Date: January 7, 2023
*/

import { Link } from "react-router-dom";

// *Design Import*
import { MdArrowBack } from "react-icons/md";
import "../index.css";

// *Custom Hooks Import*
import useDocumentTitle from "../../../hooks/useDocumentTitle";

// *Component Import*
import Settings from "../components/Settings";

const StartScreen = (props) => {
  useDocumentTitle(`David Bishop | ${props.title}`);

  return (
    <>
      <Link to="/Portfolio/home" id="quizBackHome">
        <MdArrowBack />
        <p>Home</p>
      </Link>
      <Settings />
    </>
  );
};

export default StartScreen;
