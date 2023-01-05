/* Portfolio_v2

   Author: David Bishop
   Creation Date: December 24, 2022
*/

import React from "react";
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
import Loading from "./pages/Loading";

import ToDoProject from "./featuredProjects/ToDoProject";

import Error404 from "./pages/errors/Error404";

function App() {
  const ShowPartials = () => (
    <>
      <Navigation />
      {/* Nested routes render out here. */}
      {/* <div className="center"> */}
      <main className="gridContainer">
        <Outlet />
      </main>
      {/* </div> */}
      <Footer />
    </>
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/loading" element={<Loading title="Loading" />} />
          <Route element={<ShowPartials />}>
            <Route path="/" element={<Home title="Home" />} />
            <Route path="/home" element={<Home title="Home" />} />

            <Route path="/error404" element={<Error404 title="ERROR" />} />
            <Route path="*" element={<Error404 title="ERROR" />} />
            {/* <Route path="*" render={() => <Navigate to="/error404" />} /> */}
          </Route>
          <Route
            path="/projects/todo"
            element={<ToDoProject title="Todo App" />}
          />
          {/* <Route path="/projects/calculator" element={<ToDoProject />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
