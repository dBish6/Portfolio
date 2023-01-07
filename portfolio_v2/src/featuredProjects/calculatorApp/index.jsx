/* Calculator App

   Author: David Bishop
   Creation Date: October 29, 2022
   Integration Date: January 5, 2023
*/
import { Link } from "react-router-dom";

import Buttons from "./components/Buttons";
import Footer from "./components/Footer";

import useDocumentTitle from "../../hooks/useDocumentTitle";

import { MdArrowBack } from "react-icons/md";
import "./calculatorApp.css";

function CalculatorIndex(props) {
  useDocumentTitle(`David Bishop | ${props.title}`);

  return (
    <>
      <div className="appBackground" />
      <main className="appContainer">
        <Link to="/Portfolio/home" id="backHome">
          <MdArrowBack />
          <p>Home</p>
        </Link>
        <header>
          <p>Welcome to my Calculator app, thanks for the visit :)</p>
        </header>

        <div className="calContainer">
          <Buttons />
        </div>

        <Footer />
      </main>
    </>
  );
}

export default CalculatorIndex;
