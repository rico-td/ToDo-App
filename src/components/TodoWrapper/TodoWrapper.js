import React, { useState } from "react";
import style from "./TodoWrapper.module.css";
import TodoForm from "../TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";

const TodoWrapper = () => {
  return (
    <div className={style.todoWrapper}>
      <TodoForm />
    </div>
  );
};

export default TodoWrapper;

// setTodos([
//   ...todos,
//   { id: uuidv4(), task: todo, completed: false, isEditing: false },
// ]);
// console.log(todos);
