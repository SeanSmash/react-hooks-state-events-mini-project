import React from "react";
import FilterButton from "./FilterButton.js";

function CategoryFilter({ categories, onFilter }) {

  // const renderButtons = categories.map(category => {
  //   return (
  //     <button 
  //       className="" 
  //       key={category} 
  //       onClick={() => onFilter(category)}
  //     >
  //     {category}
  //     </button>
  //   )
  // })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category =>{
        return (
          <FilterButton catText={category} key={category} filter={onFilter}/>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
