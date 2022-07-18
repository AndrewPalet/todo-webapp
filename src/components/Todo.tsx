import React from 'react';

export interface TodoProps {
    id: string;
    title: string;
    completed: boolean;
}

const Todo = ({ id, title, completed }:TodoProps) => (
    <h1>Todo Form</h1>
)

export default Todo;