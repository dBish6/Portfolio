/* Portfolio_v2

   Author: David Bishop
   Creation Date: December 24, 2022
*/

import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

// *Design Imports*
import "./index.css";

// *Component Imports*
import Navigation from "./components/partials/Navigation";
import Footer from "./components/partials/Footer";

// *Pages/Views*
import Home from "./pages/Home";

import ToDoProject from "./featuredProjects/TodoApp";
import CalculatorProject from "./featuredProjects/calculatorApp";
import QuizProjectStart from "./featuredProjects/quizApp/pages/StartScreen";
import QuizProjectQuestion from "./featuredProjects/quizApp/pages/QuestionScreen";
import QuizProjectFinal from "./featuredProjects/quizApp/pages/FinalScreen";
import QuizError500 from "./featuredProjects/quizApp/pages/errors/Error500";

import Error404 from "./pages/errors/Error404";

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

  const ShowPartials = () => (
    <>
      <Navigation />
      {/* Nested routes render out here. */}
      <main className="gridContainer">
        <Outlet />
      </main>
      <Footer />
    </>
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ShowPartials />}>
            <Route path="/Portfolio/" element={<Home title="Home" />} />
            <Route path="/Portfolio/home" element={<Home title="Home" />} />

            <Route
              path="/Portfolio/error404"
              element={<Error404 title="ERROR" />}
            />
            <Route path="*" element={<Error404 title="ERROR" />} />
            {/* <Route path="*" render={() => <Navigate to="/error404" />} /> */}
          </Route>
          <Route
            path="/Portfolio/projects/todo"
            element={<ToDoProject title="Todo App" />}
          />
          <Route
            path="/Portfolio/projects/calculator"
            element={<CalculatorProject title="Calculator App" />}
          />
          <Route
            path="/Portfolio/projects/quiz"
            element={<QuizProjectStart title="Quiz App" />}
          />
          <Route
            path="/Portfolio/projects/quiz/gameStart"
            element={<QuizProjectQuestion title="Quiz App" />}
          />
          <Route
            path="/Portfolio/projects/quiz/gameEnd"
            element={<QuizProjectFinal title="Quiz App" />}
          />
          <Route
            path="/Portfolio/projects/quiz/error500"
            element={<QuizError500 title="ERROR" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
