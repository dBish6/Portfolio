/* portfolio_v2

   Author: David Bishop
   Creation Date: December 24, 2022
*/

import { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

// *Design Imports*
import "./index.css";

// *Component Imports*
import Navigation from "./components/partials/Navigation";
import Footer from "./components/partials/Footer";

import QuizFooter from "./featuredProjects/quizApp/components/partials/Footer";

// *Pages/Views*
import Home from "./pages/Home";
import Error404 from "./pages/errors/Error404";

import ToDoProject from "./featuredProjects/TodoApp";
import CalculatorProject from "./featuredProjects/calculatorApp";
import QuizProjectStart from "./featuredProjects/quizApp/pages/StartScreen";
import QuizProjectQuestion from "./featuredProjects/quizApp/pages/QuestionScreen";
import QuizProjectFinal from "./featuredProjects/quizApp/pages/FinalScreen";
import QuizError500 from "./featuredProjects/quizApp/pages/errors/Error500";

function App() {
  const [DomLoading, setDomLoading] = useState(true);

  useEffect(() => {
    const loaderBG = document.querySelector(".loaderBG");
    const loaderContainer = document.querySelector(".loaderContainer");
    if (loaderBG || loaderContainer) {
      setTimeout(() => {
        if (DomLoading) {
          loaderBG.remove();
          loaderContainer.remove();
          setDomLoading(false);
        }
      }, 1000);
    }
  });

  const PortfolioHome = () => (
    <>
      <Navigation />
      {/* Nested routes render out here. */}
      <main className="gridContainer">
        <Outlet />
      </main>
      <Footer />
    </>
  );

  const QuizProject = () => (
    <>
      <div id="quizBackground" />
      <div className="quizGridContainer">
        <main className="quizMain">
          <Outlet />
        </main>
        <QuizFooter />
      </div>
    </>
  );

  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<PortfolioHome />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home title="Home" />} />
            <Route path="/error404" element={<Error404 title="ERROR" />} />
            <Route path="*" element={<Navigate to="/error404" />} />
          </Route>

          <Route
            path="/projects/todo"
            element={<ToDoProject title="Todo App" />}
          />

          <Route
            path="/projects/calculator"
            element={<CalculatorProject title="Calculator App" />}
          />

          <Route element={<QuizProject />}>
            <Route
              path="/projects/quiz"
              element={<QuizProjectStart title="Quiz App" />}
            />
            <Route
              path="/projects/quiz/gameStart"
              element={<QuizProjectQuestion title="Quiz App" />}
            />
            <Route
              path="/projects/quiz/gameEnd"
              element={<QuizProjectFinal title="Quiz App" />}
            />
            <Route
              path="/projects/quiz/error500"
              element={<QuizError500 title="ERROR" />}
            />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
