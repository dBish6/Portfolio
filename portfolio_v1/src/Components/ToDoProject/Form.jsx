import React from "react";

export default function Form({
  setInputText,
  todos,
  setTodos,
  inputText,
  setState,
}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitToDoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, // If you already had todos on the list, pass it.
      { id: Math.random() * 1000, text: inputText, completed: false },
    ]);
    setInputText("");
  };

  const stateHandler = (e) => {
    setState(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={stateHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
