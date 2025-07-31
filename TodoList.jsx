import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addnewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };

  let updateTodoVal = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoVal}
      />
      <br />
      <button onClick={addnewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>Task to Do</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={
                todo.isDone ? { textDecorationLine: "line-through" } : {}
              }
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => markAsDone(todo.id)}>MarkAsDone</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={markAllDone}>Mark All Done</button>
    </div>
  );
}
