import style from "./TodoWrapper.module.css";
import TodoForm from "../TodoForm";
import { v4 as uuidv4 } from "uuid";

const TodoWrapper = () => {
  return (
    <div className={style.todoWrapper}>
      <TodoForm />
    </div>
  );
};

export default TodoWrapper;
