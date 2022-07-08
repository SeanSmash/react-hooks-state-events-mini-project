import React, { useState } from "react";

function FilterButton({ catText, filter }){
    const [selected, setSelected] = useState(false)

    function filterAndSelect(){
        filter(catText)
        setSelected((selected) => !selected)
    }


    return(
        <button className={selected ? "selected" : ""} onClick={filterAndSelect}>{catText}</button>
    )
}

export default FilterButton