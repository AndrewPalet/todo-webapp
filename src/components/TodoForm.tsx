import React, { Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TodoProps } from "./Todo";

export interface TodoFormProps {
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    todos: TodoProps[];
    setTodos: Dispatch<SetStateAction<TodoProps[]>>;
}

const TodoForm = ({ input, setInput, todos, setTodos}:TodoFormProps) => {

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false}]);
    setInput("");
  }

  const onInputChange:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInput(event.target.value);
  }

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
      <input type="submit" value="+ Add" className="todo-submit"/>
    </form>
  );
};

export default TodoForm;
