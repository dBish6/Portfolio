/* portfolio_v2

   Author: David Bishop
   Creation Date: December 24, 2022
*/

import { useState, useEffect, lazy, Suspense } from "react";
import { lazily } from "react-lazily";
import { HashRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

// *Design Imports*
import "./index.css";
import "react-lazy-load-image-component/src/effects/blur.css";

// *Component Imports*
import Navigation from "./components/partials/Navigation";
import Footer from "./components/partials/Footer";
import Loading from "./components/Loading";

import QuizFooter from "./featuredProjects/quizApp/components/partials/Footer";

// *Pages/Views*
import Home from "./pages/Home";
import Error404 from "./pages/errors/Error404";
const ToDoProject = lazy(() => import("./featuredProjects/TodoApp"));
const CalculatorProject = lazy(() =>
  import("./featuredProjects/calculatorApp")
);
const BlackjackProject = lazy(() => import("./featuredProjects/blackjack"));
const {
  QuizProjectStart,
  QuizProjectQuestion,
  QuizProjectFinal,
  QuizError500,
} = lazily(() => import("./featuredProjects/quizApp"));

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
          setTimeout(() => {
            alert(
              `DISCLAIMER:
Please note that this portfolio may not showcase my current coding and design skills to their fullest potential, as it is outdated. However, it is still being updated to include newer projects, applications, etc.

I am currently at the early phases of the design process for version 3 of my portfolio. So, I RECOMMEND viewing my newer projects and applications that are featured in this portfolio, thanks for taking a look!`
            );
          }, 500);
        }
      }, 1000);
    }
  });

  const PortfolioHome = () => (
    <>
      <Navigation />
      {/* Nested routes render out here. */}
      <main aria-label="Main Content" className="gridContainer">
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
        <Suspense fallback={<Loading />}>
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
            <Route
              path="/projects/blackjack"
              element={<BlackjackProject title="Davy Blackjack" />}
            />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
