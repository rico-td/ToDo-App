import style from "./TodoForm.module.css";

const TodoForm = () => {
  return (
    <form className={style.todoForm}>
      <input
        id="input"
        type="text"
        className={style.todoInput}
        placeholder="What is the task today?"
      />
      <button className={style.submitButton} type="submit">
        Add Task!
      </button>
    </form>
  );
};

export default TodoForm;
