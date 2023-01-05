import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Main from "./Components/ToDoProject/Main";

function App() {
  //   const message = () => {
  //     window.onload = alert(
  //       "Hello User, just press the links on the Nav bar to get started:)"
  //     );
  //   };
  //   message();

  return (
    <div>
      <Router>
        <header className="App-header">
          <Navigation />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todoproject/main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
