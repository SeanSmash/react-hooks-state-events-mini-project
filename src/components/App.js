import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log({ CATEGORIES, TASKS });


function App() {
  const [allTasks, setAllTasks] = useState(TASKS)
  const [tasksToDisplay, setTasksToDisplay] = useState([...allTasks])


  function addNewTask(newTask){
    setAllTasks([...allTasks, newTask])
    setTasksToDisplay([...allTasks, newTask])
  }

  function deleteTask(taskText){
    const remainingTasks = allTasks.filter(task =>{
      return task.text === taskText ? false : true
    })
    setAllTasks(remainingTasks)
    setTasksToDisplay(remainingTasks)
  }

  function filterTasks(category){
    const filteredTasks = allTasks.filter(task => task.category === category ? true : false)
    setTasksToDisplay(filteredTasks)
  }

  function categoryFilter(category){
    return category === "All" ? setTasksToDisplay(allTasks) : filterTasks(category)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilter={categoryFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addNewTask} />
      <TaskList tasks={tasksToDisplay} onTaskDelete={deleteTask} />
    </div>
  );
}

export default App;
