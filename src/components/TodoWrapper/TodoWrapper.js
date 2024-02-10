import style from "./TodoWrapper.module.css";
import TodoForm from "../TodoForm";

const TodoWrapper = () => {
  return (
    <div className={style.todoWrapper}>
      <TodoForm />
    </div>
  );
};

export default TodoWrapper;
