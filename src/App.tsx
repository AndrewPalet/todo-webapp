import React, { useEffect, useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProps } from "./components/Todo";

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<TodoProps[]>([]);

  return (
    <div className="container">
      <h1>To Do App</h1>
      <div className="add-task">
        <TodoForm input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
      </div>
      <div className="todo-list">
        <div className="grid-container">
          <h2>Todo List</h2>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
