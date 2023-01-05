import React from "react";

import { FaCheck, FaTrashAlt } from "react-icons/fa";

export const Todo = ({ text, todo, todos, setTodos }) => {
  // Delete Todo From List
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <FaCheck/>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Todo;
