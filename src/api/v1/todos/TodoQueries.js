import api from "../../config/api";

async function fetchAllTodos() {
  const result = await api.get("/todos/all");

  const todos = result.data;

  return todos;
}

async function fetchTodoById(todoId) {
  const result = await api.get("/todos/byid", { params: { todoId } });

  const todo = result.data.todo;

  console.log("Mein Todo /byid", todo);

  return todo;
}

async function fetchTodoByUserId(todoId) {
  const result = await api.get("/todos/byuserid", { params: { todoId } });

  const todos = result.data;

  console.log("Mein Todo /byuserid", todos);

  return todos;
}

export default { fetchAllTodos, fetchTodoById, fetchTodoByUserId };
