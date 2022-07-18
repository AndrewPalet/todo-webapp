import React from "react";

export interface TodoProps {
  id: string;
  title: string;
  completed: boolean;
}

const Todo = ({ id, title, completed }: TodoProps) => {
  

  return (
    <>
      <label>
        {title}
        <input
          type="checkbox"
          id="todoCheck"
          onChange={(event) => event.preventDefault()}
        />
      </label>
    </>
  );
};

export default Todo;
