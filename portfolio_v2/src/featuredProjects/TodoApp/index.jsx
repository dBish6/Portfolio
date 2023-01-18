/* Todo App (From portfolio_v1)

   Author: David Bishop
   Initial Creation Date: April, 2022
   Integration Date: January 4, 2023
*/

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

import useDocumentTitle from "../../hooks/useDocumentTitle";

import { MdArrowBack } from "react-icons/md";
import "./todoApp.css";

function TodoIndex(props) {
  useDocumentTitle(`David Bishop | ${props.title}`);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (state) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, state]);

  // Save to Local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  // Checks if Local has Something or Not
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <>
      <div id="todoBackground" />
      <Link to="/home" id="todoBackHome">
        <MdArrowBack />
        <p>Home</p>
      </Link>

      <div className="list-container">
        <header>
          <h1>My Todo List</h1>
        </header>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setState={setState}
        />
        <ToDoList
          setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
        />
      </div>
    </>
  );
}

export default TodoIndex;
