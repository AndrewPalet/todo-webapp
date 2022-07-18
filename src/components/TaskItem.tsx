import React from 'react';

export interface TaskItemProps {
    taskName: string;
    checked: boolean;
}

function handleCheck() {
    let checkedBox = document.getElementById("taskCheck");
}

const TaskItem = ({ taskName, checked }:TaskItemProps ) => (
    <div className='grid-item'>
      <label>
        <input type="checkbox" id="taskCheck" onChange={() => handleCheck()}/>
        {taskName}
      </label>
    </div>
)

export default TaskItem;