import React, { useState } from "react";
import "../App.css";

const TodoForm = (addTodo) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(value);
  };
  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />

      <button className="todo-btn" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
