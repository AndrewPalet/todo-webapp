import React, { Dispatch, SetStateAction } from "react";
import Todo from "./Todo";
import { TodoProps } from "./Todo";

export interface TodoListProps {
  todos: TodoProps[];
  setInput: Dispatch<SetStateAction<string>>;
  setTodos: Dispatch<SetStateAction<TodoProps[]>>;
  setEditTodo: Dispatch<SetStateAction<TodoProps | null>>;  
}

const TodoList = ({ todos, setTodos, setEditTodo, setInput }: TodoListProps) => {
  const handleComplete = (todo: TodoProps) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = (todo: TodoProps) => {
    const findTodo = todos.find((item) => item.id === todo.id) as TodoProps;
    console.log("findTodo:", findTodo);
    setEditTodo(findTodo);
  };

  const handleDelete = (todo: TodoProps) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  return (
    <div className="todo-list">
      {todos.map((todo, idx) => {
        return (
          <div className="todo-item" key={idx}>
            <Todo id={todo.id} title={todo.title} completed={todo.completed} />
            <button onClick={() => handleComplete(todo)}>Complete</button>
            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button onClick={() => handleDelete(todo)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
