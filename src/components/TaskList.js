import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {

  const displayTasks = tasks.map(task => {
    return (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        onTaskDelete={onTaskDelete}
      />
    )
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTasks}
    </div>
  );
}

export default TaskList;
