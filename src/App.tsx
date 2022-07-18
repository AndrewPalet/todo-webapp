import React, { useEffect, useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";
import TodoForm from "./components/TodoForm";
import { TodoProps } from "./components/Todo";

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<TodoProps[]>([]);

  return (
    <div className="main">
      <h1>To Do App</h1>
      <div className="add-task">
        <TodoForm input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
      </div>
      <div className="task-list">
        <div className="grid-container">
          <h3>Todo List</h3>
          <TaskItem taskName="Task Name" checked={false} />
        </div>
      </div>
    </div>
  );
}

export default App;
