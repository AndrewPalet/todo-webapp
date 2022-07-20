import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProps } from "./components/Todo";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [editTodo, setEditTodo] = useState<TodoProps | null>(null);

  return (
    <div className="container">
      <h1>To Do App</h1>
      <div className="add-task">
        <TodoForm
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div className="todo-list">
        <div className="grid-container">
          <h2>Todo List</h2>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
            setInput={setInput}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
