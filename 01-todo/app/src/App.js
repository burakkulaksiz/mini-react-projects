import { useState } from "react";

const initialState = [
  { id: 1, title: "react", completed: true },
  { id: 2, title: "redux", completed: false },
  { id: 3, title: "hooks", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialState);
  const [newTitle, setNewTitle] = useState("");

  const addNewTodo = (title) => {
    setTodos([...todos, { id: Date.now(), title: title, completed: false }]);
    setNewTitle("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markAsCompleted = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div>
      <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="add todo" />
      <button onClick={() => addNewTodo(newTitle)}>Add</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.title} Completed: {todo.completed ? "true" : "false"}
          <button onClick={() => deleteTodo(todo.id)}>delete</button>
          <button onClick={() => markAsCompleted(todo.id)}>mark</button>
        </div>
      ))}
      <button onClick={() => deleteCompletedTodos()}>clear completed</button>
    </div>
  );
};

export default App;
