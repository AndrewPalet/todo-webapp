import React, { Dispatch, SetStateAction, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoProps } from "./Todo";

export interface TodoFormProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  todos: TodoProps[];
  setTodos: Dispatch<SetStateAction<TodoProps[]>>;
  editTodo: TodoProps | null;
  setEditTodo: React.Dispatch<React.SetStateAction<TodoProps | null>>;
}

const TodoForm = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}: TodoFormProps) => {
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const updateTodo = (id: string, title: string, completed: boolean) => {
    console.log("editTodo:", editTodo);
    const newTodos = todos.map((todo) =>
      todo.id === id ? { id, title, completed } : todo
    );
    setTodos(newTodos);
    setInput("");
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      console.log(editTodo);
      //setEditTodo({ id: editTodo.id, title: input, completed: editTodo.completed});
      updateTodo(editTodo.id, input, editTodo.completed);
      setEditTodo(null);
    }
  };

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInput(event.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={input}
        onChange={onInputChange}
        placeholder="Enter a Task"
        className="todo-input"
        required
      />
      <input type="submit" value="+ Add" className="todo-submit" />
    </form>
  );
};

export default TodoForm;
