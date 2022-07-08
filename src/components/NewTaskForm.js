import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [categorySelect, setCategorySelect] = useState("All")
  const [details, setDetails] = useState("")

  const renderOptions = categories.map(category =>{
    return (
      <option key={category} >{category}</option>
    )
  })

  function handleDetailsChange(e){
    setDetails(e.target.value)
  }

  function handleCategoryChange(e){
    setCategorySelect(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const newTask = {text: details, category: categorySelect}
    onTaskFormSubmit(newTask)
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleDetailsChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCategoryChange} name="category">
          {/* render <option> elements for each category here */}
          {renderOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
