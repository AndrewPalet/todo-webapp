import React, { Dispatch, SetStateAction } from "react";
import Todo from "./Todo";
import { TodoProps } from "./Todo";
import { TodoFormProps } from "./TodoForm";

export interface TodoListProps {
  todos: TodoProps[];
  setTodos: Dispatch<SetStateAction<TodoProps[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const handleEdit = (todo:TodoProps) => {
    console.log(todo);
  };

  const handleDelete = (todo:TodoProps) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  return (
    <div className="todo-list">
      {todos.map((todo, idx) => {
        return (
          <div className="todo-item" key={idx}>
            <Todo
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button onClick={() => handleDelete(todo)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
