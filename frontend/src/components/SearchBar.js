import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchBar = (props) => {
    const [query, setQuery] = useState("")

    return (
        <div>
          <input placeholder="Search" onChange={event => setQuery(event.target.value)}/>
    {
          props.plants.filter(plant => {
            if (query === '') {
              return plant;
            } else if (plant.common_name.toLowerCase().includes(query.toLowerCase())) {
              return plant;
            }
          }).map((plant, i) => (
            <div className="box" key={i}>
                <p>{plant.common_name}</p>
            </div>
          ))
    }
    </div>
    
        )
}

export default SearchBar;